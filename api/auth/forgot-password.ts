import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { v4 as uuidv4 } from 'uuid';

// Initialize Neon client
const sql = neon(process.env.DATABASE_URL!);

module.exports = async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const resetToken = uuidv4();
        const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hour from now

        const result = await sql`
      UPDATE users
      SET reset_token = ${resetToken},
          reset_token_expires = ${resetTokenExpires}
      WHERE email = ${email}
      RETURNING *
    `;

        if (result.length === 0) {
            // Don't reveal if user exists for security reasons
            return res.status(200).json({ message: 'If an account with that email exists, a password reset link has been sent' });
        }

        // Send reset email (implement this function)
        // await sendPasswordResetEmail(email, resetToken);

        return res.status(200).json({ message: 'Password reset link has been sent to your email' });
    } catch (error) {
        console.error('Password reset request error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}