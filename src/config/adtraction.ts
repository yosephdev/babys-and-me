export const ADTRACTION_CONFIG = {
  API_URL: 'https://api.adtraction.com',
  API_VERSION: 'v1',
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
  'apikey': '68D033B724D8E3A1AC14B2AA5A984203A99339BB',
}; 