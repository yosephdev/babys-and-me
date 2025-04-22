import { toast } from "sonner";

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

interface ProductFeedInfoResponse {
  advertiser_id: string;
  feed_lastupdated: string;
  feed_url: string;
  product_count: number;
}

// Unfortunately, we can't directly use the Adtraction API from the frontend due to CORS issues
// and the need to keep the API token secure. In a real implementation, this would be handled by
// a backend service. For demo purposes, we'll simulate the API response with our existing data.
// In a production environment, you would:
// 1. Create a backend API (e.g., using Supabase Edge Functions)
// 2. Make requests to Adtraction API from the backend
// 3. Return the data to the frontend

const API_TOKEN = "demo_token"; // In a real app, this would be stored securely in the backend
const BASE_URL = "https://api.adtraction.net/v3";

// Simulate fetching data from Adtraction API
export const fetchProducts = async (
  category?: string,
  page = 0,
  pageSize = 10
): Promise<ProductFeedResponse> => {
  try {
    // This would be a real API call in a production environment
    // const response = await fetch(`${BASE_URL}/product_feed?advertiser_id=123&page=${page}&pageSize=${pageSize}`, {
    //   headers: {
    //     "X-Token": API_TOKEN,
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   }
    // });
    
    // if (!response.ok) {
    //   // Handle rate limiting
    //   if (response.status === 429) {
    //     const resetTime = response.headers.get("X-RateLimit-Reset");
    //     throw new Error(`Rate limit exceeded. Try again after ${resetTime}`);
    //   }
    //   throw new Error(`API responded with status: ${response.status}`);
    // }
    
    // const data = await response.json();
    
    // For demo purposes, use the static data from products.ts
    // In a real implementation, this would be replaced with actual API calls
    const { products } = await import("@/data/products");
    
    // Filter products based on category if provided
    const filteredProducts = category 
      ? products.filter(p => p.category === category)
      : products;
    
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
    
    // Simulate API response
    return {
      page,
      pageSize,
      count: filteredProducts.length,
      products: mappedProducts
    };
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

export const fetchProductFeedInfo = async (advertiserId: string): Promise<ProductFeedInfoResponse> => {
  try {
    // This would be a real API call in a production environment
    // const response = await fetch(`${BASE_URL}/product_feed_info?advertiser_id=${advertiserId}`, {
    //   headers: {
    //     "X-Token": API_TOKEN,
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   }
    // });
    
    // if (!response.ok) {
    //   throw new Error(`API responded with status: ${response.status}`);
    // }
    
    // const data = await response.json();
    // return data;
    
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
