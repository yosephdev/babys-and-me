import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

// Initialize Neon client
const sql = neon(process.env.DATABASE_URL!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check if products table exists
    try {
      const tableExists = await sql`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_name = 'products'
        )
      `;
      
      if (!tableExists[0].exists) {
        return res.status(200).json({ categories: [] });
      }
    } catch (error) {
      console.error('Error checking table existence:', error);
      return res.status(200).json({ categories: [] });
    }

    // Get distinct categories
    const result = await sql`
      SELECT DISTINCT category 
      FROM products 
      WHERE category IS NOT NULL
    `;
    
    const categories = result.map(row => row.category).filter(Boolean);
    
    return res.status(200).json({ categories });
  } catch (error) {
    console.error('Error getting categories:', error);
    return res.status(500).json({ 
      error: 'Failed to get categories',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}