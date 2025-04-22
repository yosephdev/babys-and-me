
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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

// Fetch products from Supabase database or Edge Function
export const fetchProducts = async (
  category?: string,
  page = 0,
  pageSize = 10
): Promise<ProductFeedResponse> => {
  try {
    // Try to fetch products from Supabase database first
    let query = supabase.from('products').select('*');
    
    // Filter by category if provided
    if (category) {
      query = query.eq('category', category);
    }
    
    // Add pagination
    const from = page * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);
    
    const { data: dbProducts, error, count } = await query.select('*', { count: 'exact' });
    
    if (error) {
      console.error("Database error:", error);
      throw error;
    }
    
    if (dbProducts && dbProducts.length > 0) {
      // Map database products to AdtractionProduct format
      const products: AdtractionProduct[] = dbProducts.map(p => ({
        id: p.id,
        name: p.name,
        description: p.description || "",
        price: p.price || 0,
        currency: p.currency || "SEK",
        imageUrl: p.image_url || "https://placehold.co/400x400/soft-blue/white?text=Product",
        url: p.affiliate_link || "#",
        category: p.category || "",
        advertiserName: p.advertiser_name || "",
        advertiserId: p.advertiser_id || "",
        advertiserLogoUrl: p.advertiser_logo_url,
        inStock: p.in_stock !== false,
        isBestSeller: p.is_best_seller,
        isEditorsPick: p.is_editors_pick,
        rating: p.rating,
        reviews: p.reviews,
        commission: p.commission
      }));
      
      return {
        page,
        pageSize,
        count: count || products.length,
        products
      };
    } else {
      // If no products in database, fall back to static data
      console.log("No products found in database, falling back to static data");
      
      // For demo purposes, use the static data from products.ts
      const { products: staticProducts } = await import("@/data/products");
      
      // Filter products based on category if provided
      const filteredProducts = category 
        ? staticProducts.filter(p => p.category === category)
        : staticProducts;
      
      // Simulate pagination
      const start = page * pageSize;
      const end = start + pageSize;
      const paginatedProducts = filteredProducts.slice(start, end);
      
      // Map our static data to the AdtractionProduct format
      const mappedProducts: AdtractionProduct[] = paginatedProducts.map(p => ({
        id: p.id.toString(),
        name: p.name,
        description: p.description,
        price: parseInt(p.priceRange.split(' ')[2] || "0"),
        currency: "SEK",
        imageUrl: p.image,
        url: p.link,
        category: p.category,
        advertiserName: p.retailer,
        advertiserId: p.retailer.toLowerCase().replace(/ /g, '_'),
        advertiserLogoUrl: p.retailerLogo,
        inStock: true,
        isBestSeller: p.isBestSeller,
        isEditorsPick: p.isEditorsPick,
        rating: p.rating,
        reviews: p.reviews,
        commission: p.commission
      }));
      
      return {
        page,
        pageSize,
        count: filteredProducts.length,
        products: mappedProducts
      };
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error("Failed to load products. Please try again later.");
    return {
      page: 0,
      pageSize: 0,
      count: 0,
      products: []
    };
  }
};

// This function would be used by admins to fetch the latest product feed info
export const fetchProductFeedInfo = async (advertiserId: string) => {
  try {
    // In a real implementation, this would call our Supabase Edge Function
    // For demo purposes, return mock data
    return {
      advertiser_id: advertiserId,
      feed_lastupdated: new Date().toISOString(),
      feed_url: "https://example.com/feed",
      product_count: 100
    };
  } catch (error) {
    console.error("Error fetching product feed info:", error);
    toast.error("Failed to load product information. Please try again later.");
    throw error;
  }
};

// This function would be used by admins to sync products from Adtraction
export const syncProductsFromAdtraction = async () => {
  try {
    // In a real implementation, this would call our Supabase Edge Function
    // For demo purposes, return mock data
    toast.success("Products synced successfully!");
    return { message: "Products synced successfully" };
  } catch (error) {
    console.error("Error syncing products:", error);
    toast.error("Failed to sync products. Please try again later.");
    throw error;
  }
};
