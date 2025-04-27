// API endpoint: /api/products
// This file should be placed in src/pages/api/products.ts
// Handles GET requests to fetch all products from Neon (PostgreSQL)

import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from '../../../db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const { rows } = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch products' });
  }
}
