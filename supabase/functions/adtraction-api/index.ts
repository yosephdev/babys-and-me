
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// Define constants
const SUPABASE_URL = "https://xdttfosbledjbiqrutsd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdHRmb3NibGVkamJpcXJ1dHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjkwNTQsImV4cCI6MjA1Mjk0NTA1NH0.fSSi3WQkL2GtzteSKiBjKlkKGpO7IKHavZ6YVnb7TP4";

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Change in production
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

  // Get API token from headers
  const API_TOKEN = Deno.env.get('ADTRACTION_API_TOKEN') || 'demo_token';

  try {
    const url = new URL(req.url);
    const path = url.pathname.split('/').pop();

    // Different handlers based on path
    if (path === 'fetch-products') {
      // Get query parameters
      const advertiser_id = url.searchParams.get('advertiser_id') || '';
      const page = url.searchParams.get('page') || '0';
      const pageSize = url.searchParams.get('pageSize') || '10';
      const category = url.searchParams.get('category') || '';

      try {
        // In a real implementation, make an API call to Adtraction
        // For demo, fetch products from our DB or use mock data
        let { data: products, error } = await supabase
          .from('products')
          .select('*');

        if (error) throw error;

        // Filter by category if specified
        if (category && products) {
          products = products.filter(p => p.category === category);
        }

        // Simulate pagination
        const start = parseInt(page) * parseInt(pageSize);
        const end = start + parseInt(pageSize);
        const paginatedProducts = products ? products.slice(start, end) : [];

        return new Response(
          JSON.stringify({
            products: paginatedProducts,
            count: products ? products.length : 0,
            page: parseInt(page),
            pageSize: parseInt(pageSize)
          }),
          {
            status: 200,
            headers: { 
              ...corsHeaders,
              'Content-Type': 'application/json' 
            }
          }
        );
      } catch (error) {
        console.error('Error fetching products:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to fetch products' }),
          {
            status: 500,
            headers: { 
              ...corsHeaders,
              'Content-Type': 'application/json' 
            }
          }
        );
      }
    } else if (path === 'sync-products') {
      // This would be an admin-only endpoint to sync products from Adtraction
      // For now, return mock results
      return new Response(
        JSON.stringify({ message: 'Product sync initiated' }),
        {
          status: 200,
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json' 
          }
        }
      );
    } else {
      // Default response for unknown paths
      return new Response(
        JSON.stringify({ error: 'Not found' }),
        {
          status: 404,
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json' 
          }
        }
      );
    }
  } catch (error) {
    console.error('Server error:', error);
    return new Response(
      JSON.stringify({ error: 'Server error' }),
      {
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        }
      }
    );
  }
});
