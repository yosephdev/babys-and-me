import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { sendVerificationEmail } from '../../utils/sendVerificationEmail';

// Initialize Neon client
const sql = neon(process.env.DATABASE_URL!);
// Add fallback for JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET || '';

// Helper to parse JSON body safely
async function parseJsonBody(req: VercelRequest): Promise<any> {
    if (typeof req.body === 'string') {
        try {
            return JSON.parse(req.body);
        } catch {
            return null;
        }
    }
    return req.body;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Add Content-Type header
    res.setHeader('Content-Type', 'application/json');

    // CORS Headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const body = await parseJsonBody(req);
        const { email, password } = body || {};

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Check for existing user
        const existingUser = await sql`
            SELECT id FROM users WHERE email = ${email}
        `;

        if (existingUser.length > 0) {
            return res.status(409).json({ error: 'A user with this email already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const verificationToken = uuidv4();

        // Insert new user
        const newUser = await sql`
            INSERT INTO users (email, password_hash, verification_token)
            VALUES (${email}, ${passwordHash}, ${verificationToken})
            RETURNING id, email, created_at, updated_at, email_verified, verification_token
        `;

        if (!newUser || newUser.length === 0) {
            console.error('No user returned from insert query');
            return res.status(500).json({ error: 'Failed to create user record' });
        }

        const user = newUser[0];
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Wrap email sending in try/catch
        try {
            await sendVerificationEmail(email, verificationToken);
        } catch (emailError) {
            console.error('Failed to send verification email:', emailError);
            // Continue with registration even if email fails
        }

        return res.status(201).json({
            user: {
                id: user.id,
                email: user.email,
                created_at: user.created_at,
                updated_at: user.updated_at,
                email_verified: user.email_verified
            },
            token
        });

    } catch (error) {
        console.error('Registration error details:', error);
        return res.status(500).json({
            error: 'Could not create user',
            details: error instanceof Error ? error.message : 'Unknown database error'
        });
    }
}
