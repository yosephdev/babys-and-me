// api/products.js - Serverless function to proxy Adtraction API requests
import axios from 'axios';

export default async function handler(req, res) {
  const { category, page = 1, pageSize = 10 } = req.query;
  
  try {
    // Prepare query parameters
    const params = {
      page: parseInt(page),
      pageSize: parseInt(pageSize),
    };
    
    if (category && category !== "All") {
      params.category = category;
    }
    
    // Make API request to Adtraction
    const response = await axios.get('https://api.adtraction.com/v1/products', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'apikey': process.env.ADTRACTION_API_KEY || '',
      },
      params,
    });
    
    // Return the data
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching products from Adtraction API:', error);
    res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data || 'Unknown error'
    });
  }
}