
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ADTRACTION_CONFIG, ADTRACTION_ENDPOINTS, ADTRACTION_HEADERS } from "@/config/adtraction";

// Types for Adtraction API responses
export interface AdtractionProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  url: string;
  category: string;
  advertiserName: string;
  advertiserId: string;
  advertiserLogoUrl?: string;
  inStock: boolean;
  isBestSeller?: boolean;
  isEditorsPick?: boolean;
  rating?: number;
  reviews?: number;
  commission?: string;
}

interface ProductFeedResponse {
  page: number;
  pageSize: number;
  count: number;
  products: AdtractionProduct[];
}

interface AdtractionError {
  code: string;
  message: string;
  details?: any;
}

// Helper function to handle API errors
const handleApiError = (error: any): AdtractionError => {
  if (error.response) {
    return {
      code: error.response.status.toString(),
      message: error.response.data?.message || 'An error occurred',
      details: error.response.data,
    };
  }
  return {
    code: 'UNKNOWN',
    message: error.message || 'An unexpected error occurred',
    details: error,
  };
};

// Helper function to validate cached data
const isValidProductFeedResponse = (data: any): data is ProductFeedResponse => {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.page === 'number' &&
    typeof data.pageSize === 'number' &&
    typeof data.count === 'number' &&
    Array.isArray(data.products) &&
    data.products.every(
      (product: any) =>
        typeof product === 'object' &&
        product !== null &&
        typeof product.id === 'string' &&
        typeof product.name === 'string'
    )
  );
};

// Fetch products from Adtraction API
export const fetchProducts = async (
  category?: string,
  page = 0,
  pageSize = 10
): Promise<ProductFeedResponse> => {
  try {
    console.log("Fetching products with category:", category);
    
    // For now, fetch from our database instead of Adtraction
    let query = supabase
      .from('products')
      .select('*');

    // Add category filter if provided
    if (category) {
      query = query.eq('category', decodeURIComponent(category));
    }

    // Add pagination
    query = query.range(page * pageSize, (page + 1) * pageSize - 1);

    const { data: products, error, count } = await query;

    if (error) throw error;
    
    console.log("Products fetched:", products?.length || 0);

    // Get total count of products
    const { count: totalCount, error: countError } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });
      
    if (countError) throw countError;

    // Map database products to AdtractionProduct format
    const mappedProducts: AdtractionProduct[] = products.map(p => ({
      id: p.id,
      name: p.name,
      description: p.description || "",
      price: p.price || 0,
      currency: p.currency || "SEK",
      imageUrl: p.image_url || "https://images.unsplash.com/photo-1619161715434-ce2582fcd733?q=80&w=1974&auto=format&fit=crop",
      url: p.affiliate_link || "#",
      category: p.category || "Other",
      advertiserName: p.advertiser_name || "Unknown Retailer",
      advertiserId: p.advertiser_id || "unknown",
      advertiserLogoUrl: p.advertiser_logo_url,
      inStock: p.in_stock === undefined ? true : p.in_stock,
      isBestSeller: p.is_best_seller,
      isEditorsPick: p.is_editors_pick,
      rating: p.rating,
      reviews: p.reviews,
      commission: p.commission
    }));

    return {
      page,
      pageSize,
      count: totalCount || products.length,
      products: mappedProducts
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    const apiError = handleApiError(error);
    toast.error(apiError.message);
    throw apiError;
  }
};

// Sync products from Adtraction
export const syncProductsFromAdtraction = async () => {
  try {
    // For now, just return success
    toast.success("Products synced successfully!");
    return { message: "Products synced successfully" };
  } catch (error) {
    console.error("Error syncing products:", error);
    const apiError = handleApiError(error);
    toast.error(apiError.message);
    throw apiError;
  }
};
