// API endpoint: /api/categories
// Handles GET requests to fetch all categories from Neon (PostgreSQL)

import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from '../../../db';

module.exports = async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    try {
        const { rows } = await pool.query('SELECT * FROM categories ORDER BY name ASC');
        res.status(200).json(rows);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Failed to fetch categories' });
    }
}
