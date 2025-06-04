import { toast } from "sonner";
import { ADTRACTION_CONFIG, ADTRACTION_ENDPOINTS, ADTRACTION_HEADERS } from "@/config/adtraction";
import axios from "axios";
// Import mock products
import { products as mockProducts } from "@/data/products";

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

interface AdtractionApiProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  trackingUrl: string;
  category: string;
  programName: string;
  programId: string;
  inStock: boolean;
  rating?: number;
  numberOfRatings?: number;
  [key: string]: any;
}

interface AdtractionApiResponse {
  products: AdtractionApiProduct[];
  totalCount: number;
  page: number;
  pageSize: number;
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

// Map Adtraction API product to our AdtractionProduct interface
const mapAdtractionProduct = (product: AdtractionApiProduct): AdtractionProduct => {
  return {
    id: product.id,
    name: product.title,
    description: product.description || '',
    price: product.price,
    currency: product.currency,
    imageUrl: product.imageUrl,
    url: product.trackingUrl,
    category: product.category,
    advertiserName: product.programName,
    advertiserId: product.programId.toString(),
    advertiserLogoUrl: product.programLogoUrl || undefined,
    inStock: product.inStock,
    isBestSeller: product.isBestseller || false,
    isEditorsPick: product.isEditorsPick || false,
    rating: product.rating,
    reviews: product.numberOfRatings,
    commission: product.commission || '5%'
  };
};

// Helper function to map API response to our format
const mapApiResponse = (apiResponse: any): ProductFeedResponse => {
  // Map API response to our format
  const mappedProducts = apiResponse.products.map(mapAdtractionProduct);
  
  return {
    page: apiResponse.page - 1, // Convert from 1-based to 0-based indexing
    pageSize: apiResponse.pageSize,
    count: apiResponse.totalCount,
    products: mappedProducts,
  };
};

// Fetch products from Adtraction API with fallback to mock data
export const fetchProducts = async (
  category?: string,
  page = 0,
  pageSize = 10
): Promise<ProductFeedResponse> => {
  try {
    console.log("Fetching products from Adtraction API with category:", category);
    
    // Check for cached data first
    const cacheKey = `adtraction_products_${category || 'all'}_${page}_${pageSize}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData);
        const { timestamp, data } = parsedData;
        
        // Check if cache is still valid (less than CACHE_DURATION seconds old)
        if (
          timestamp &&
          Date.now() - timestamp < ADTRACTION_CONFIG.CACHE_DURATION * 1000 &&
          isValidProductFeedResponse(data)
        ) {
          console.log("Using cached product data");
          return data;
        }
      } catch (e) {
        console.error("Error parsing cached data:", e);
        // Continue to fetch fresh data
      }
    }
    
    try {
      // Prepare query parameters
      const params: Record<string, any> = {
        page: page + 1, // Adtraction API uses 1-based indexing
        pageSize: pageSize,
      };
      
      if (category && category !== "All") {
        params.category = category;
      }
      
      // Use the proxy for API calls
      console.log("Calling Adtraction API through proxy");
      const response = await axios.get('/api/adtraction/products', {
        params,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      // Map API response to our format
      const result = mapApiResponse(response.data);
      
      // Cache the result
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          timestamp: Date.now(),
          data: result,
        })
      );
      
      return result;
    } catch (apiError) {
      console.log("Falling back to mock data due to API error");
      
      // Filter mock products based on category
      let filtered = mockProducts;
      if (category && category !== "All") {
        filtered = filtered.filter(p => p.category === category);
      }
      
      // Convert mock products to AdtractionProduct format
      const mockAdtractionProducts: AdtractionProduct[] = filtered.map(p => ({
        id: p.id.toString(),
        name: p.name,
        description: p.description,
        price: parseInt(p.priceRange.replace(/[^0-9]/g, '')),
        currency: 'SEK',
        imageUrl: p.image,
        url: p.link,
        category: p.category,
        advertiserName: p.retailer,
        advertiserId: p.retailer.toLowerCase().replace(/\s/g, '-'),
        advertiserLogoUrl: p.retailerLogo,
        inStock: true,
        isBestSeller: p.isBestSeller,
        isEditorsPick: p.isEditorsPick,
        rating: p.rating,
        reviews: p.reviews,
        commission: p.commission
      }));
      
      // Paginate the results
      const start = page * pageSize;
      const end = start + pageSize;
      
      const result: ProductFeedResponse = {
        page,
        pageSize,
        count: filtered.length,
        products: mockAdtractionProducts.slice(start, end)
      };
      
      return result;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    const apiError = handleApiError(error);
    toast.error(apiError.message);
    throw apiError;
  }
};

// Fetch advertisers from Adtraction API
export const fetchAdvertisers = async () => {
  try {
    const response = await axios.get('/api/adtraction/advertisers', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error("Error fetching advertisers:", error);
    const apiError = handleApiError(error);
    toast.error(apiError.message);
    throw apiError;
  }
};

// Fetch product categories from Adtraction API
export const fetchCategories = async () => {
  try {
    const response = await axios.get('/api/adtraction/categories', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    const apiError = handleApiError(error);
    toast.error(apiError.message);
    throw apiError;
  }
};

// Sync products from Adtraction
export const syncProductsFromAdtraction = async () => {
  try {
    // Fetch products from Adtraction API
    const response = await fetchProducts(undefined, 0, ADTRACTION_CONFIG.DEFAULT_PAGE_SIZE);
    
    // In a real implementation, you might want to store these in a database
    // For now, we'll just return the fetched products
    toast.success(`Successfully synced ${response.products.length} products from Adtraction!`);
    return { 
      message: "Products synced successfully",
      count: response.products.length
    };
  } catch (error) {
    console.error("Error syncing products:", error);
    const apiError = handleApiError(error);
    toast.error(apiError.message);
    throw apiError;
  }
};