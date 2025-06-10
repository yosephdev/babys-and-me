import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

// Initialize Neon client
const sql = neon(process.env.DATABASE_URL!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get products from request body
    const { products } = req.body;

    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ error: 'Invalid products data' });
    }

    // Check if products table exists, create if not
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        price INTEGER,
        image_url TEXT,
        category TEXT,
        brand TEXT,
        advertiser_name TEXT,
        in_stock BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Check if products already exist
    const existingProducts = await sql`SELECT COUNT(*) FROM products`;
    
    if (existingProducts[0].count > 0) {
      return res.status(200).json({ 
        message: 'Products already exist in the database',
        count: existingProducts[0].count
      });
    }

    // Insert products
    let count = 0;
    for (const product of products) {
      // Extract price as a number
      let price = 0;
      if (typeof product.priceRange === 'string') {
        const priceMatch = product.priceRange.match(/\\d+/);
        if (priceMatch) {
          price = parseInt(priceMatch[0]);
        }
      }

      await sql`
        INSERT INTO products (
          name, description, price, image_url, category, brand, advertiser_name, in_stock
        ) VALUES (
          ${product.name},
          ${product.description},
          ${price},
          ${product.image},
          ${product.category},
          ${product.retailer || ''},
          ${product.retailer || ''},
          ${true}
        )
      `;
      count++;
    }

    return res.status(200).json({ 
      message: 'Successfully seeded database',
      count
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return res.status(500).json({ 
      error: 'Failed to seed database',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}