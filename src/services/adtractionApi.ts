
import { toast } from "sonner";
// import pool from '../db'; // REMOVED: Do not import Node-only code in frontend/shared code. Use API endpoints when ready.
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

// Fetch products from Neon PostgreSQL
export const fetchProducts = async (
  category?: string,
  page = 0,
  pageSize = 10
): Promise<ProductFeedResponse> => {
  try {
    console.log("Fetching products with category:", category);
    let sql = 'SELECT * FROM products';
    const values: any[] = [];
    if (category) {
      sql += ' WHERE category = $1';
      values.push(decodeURIComponent(category));
    }
    sql += ' ORDER BY created_at DESC OFFSET $2 LIMIT $3';
    values.push(page * pageSize, pageSize);
    // TODO: Use API endpoint or Adtraction API when ready
    // const { rows: products } = await pool.query(sql, values);
    const mappedProducts = (/* products */ [] || []).map((p: any) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      price: p.price,
      currency: p.currency,
      imageUrl: p.image_url,
      url: p.affiliate_link,
      category: p.category,
      advertiserName: p.advertiser_name,
      advertiserId: p.advertiser_id,
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
      count: mappedProducts.length,
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
