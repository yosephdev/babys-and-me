export const ADTRACTION_CONFIG = {
  API_URL: 'https://api.adtraction.com/v3',
  API_VERSION: '1.0',
  DEFAULT_PAGE_SIZE: 50,
  MAX_PAGE_SIZE: 100,
  CACHE_DURATION: 3600, // 1 hour in seconds
};

export const ADTRACTION_ENDPOINTS = {
  PRODUCTS: '/products',
  FEEDS: '/feeds',
  ADVERTISERS: '/advertisers',
  CATEGORIES: '/categories',
  COMMISSIONS: '/commissions',
};

export const ADTRACTION_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}; 