// src/pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ADTRACTION_CONFIG, ADTRACTION_ENDPOINTS } from '@/config/adtraction';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, page = 1, pageSize = 10 } = req.query;
  
  try {
    // Prepare query parameters
    const params: Record<string, any> = {
      page: parseInt(page as string),
      pageSize: parseInt(pageSize as string),
    };
    
    if (category && category !== "All") {
      params.category = category;
    }
    
    // Make API request to Adtraction
    const response = await axios.get(
      `${ADTRACTION_CONFIG.API_URL}/${ADTRACTION_CONFIG.API_VERSION}${ADTRACTION_ENDPOINTS.PRODUCTS}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'apikey': process.env.ADTRACTION_API_KEY || '',
        },
        params,
      }
    );
    
    // Return the data
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error fetching products from Adtraction API:', error);
    res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data || 'Unknown error'
    });
  }
}