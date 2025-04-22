import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

// Define constants
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') || '';
const ADTRACTION_API_URL = 'https://api.adtraction.net/v3';
const ADTRACTION_API_TOKEN = Deno.env.get('ADTRACTION_API_TOKEN');

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Restrict in production
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Define product interface
interface AdtractionProduct {
  id: string;
  productId: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  currency: string;
  brand: string;
  imageUrl: string;
  productUrl: string;
  categories: string[];
  advertiserId: string;
  advertiserName: string;
}

interface AdtractionResponse {
  products: AdtractionProduct[];
  count: number;
  page: number;
  pageSize: number;
}

// Handle API requests
Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Validate API token
  if (!ADTRACTION_API_TOKEN) {
    return new Response(
      JSON.stringify({ error: 'API token not configured' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const url = new URL(req.url);
    const path = url.pathname.split('/').pop();

    // Different handlers based on path
    if (path === 'fetch-products') {
      // Get query parameters
      const page = url.searchParams.get('page') || '0';
      const pageSize = url.searchParams.get('pageSize') || '10';
      const category = url.searchParams.get('category') || '';

      try {
        // First check cache
        const { data: cachedData, error: cacheError } = await supabase
          .from('product_cache')
          .select('*')
          .eq('category', category || 'all')
          .eq('page', parseInt(page))
          .maybeSingle(); // Use maybeSingle to avoid errors if no record exists

        if (cachedData && !cacheError) {
          const cacheAge = Date.now() - new Date(cachedData.updated_at).getTime();
          if (cacheAge < 3600000) { // 1 hour cache
            return new Response(cachedData.data, {
              status: 200,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }
        }

        // If no cache or expired, fetch from Adtraction API
        const response = await fetch(
          `${ADTRACTION_API_URL}/product_feed?advertiser_id=${url.searchParams.get('advertiser_id')}&page=${page}&pageSize=${pageSize}${category ? `&category=${category}` : ''}`,
          {
            headers: {
              'X-Token': ADTRACTION_API_TOKEN, // Correct header for Adtraction API
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Adtraction API error: ${response.status}`);
        }

        const data: AdtractionResponse = await response.json();

        // Cache the response
        await supabase
          .from('product_cache')
          .upsert({
            category: category || 'all',
            page: parseInt(page),
            data: JSON.stringify(data),
            updated_at: new Date().toISOString(),
          });

        return new Response(JSON.stringify(data), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('Error fetching products:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to fetch products' }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }
    } else if (path === 'sync-products') {
      try {
        // Fetch all products from Adtraction
        const response = await fetch(
          `${ADTRACTION_API_URL}/product_feed?page=0&pageSize=1000`,
          {
            headers: {
              'X-Token': ADTRACTION_API_TOKEN,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Adtraction API error: ${response.status}`);
        }

        const data: AdtractionResponse = await response.json();

        // Clear existing products
        await supabase.from('products').delete();

        // Insert new products
        const { error: insertError } = await supabase
          .from('products')
          .insert(
            data.products.map((product: AdtractionProduct) => ({
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price,
              currency: product.currency,
              category: product.categories[0] || '',
              advertiser_name: product.advertiserName,
              advertiser_id: product.advertiserId,
              image_url: product.imageUrl,
              affiliate_link: product.productUrl,
              commission: '5%', // Default commission
              in_stock: true,
              is_best_seller: false,
              is_editors_pick: false,
              rating: 0,
              reviews: 0,
            }))
          );

        if (insertError) throw insertError;

        return new Response(
          JSON.stringify({ message: 'Products synced successfully' }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      } catch (error) {
        console.error('Error syncing products:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to sync products' }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }
    } else {
      return new Response(
        JSON.stringify({ error: 'Not found' }),
        {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('Server error:', error);
    return new Response(
      JSON.stringify({ error: 'Server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});