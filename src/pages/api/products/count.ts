// API endpoint: /api/products/count
// Returns the count of products in the database

import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from '../../../../db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const { rows } = await pool.query('SELECT COUNT(*) FROM products');
    const count = parseInt(rows[0]?.count, 10) || 0;
    res.status(200).json({ count });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch product count' });
  }
}
