import { Pool } from 'pg';

// Database Configuration for Babys & Me E-commerce Platform
// PostgreSQL connection pool with SSL support for production
// Enhanced database connectivity and performance optimization

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

export default pool;
