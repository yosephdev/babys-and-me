import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// Vite Configuration for Babys & Me E-commerce Platform
// Enhanced build system with React SWC, API proxying, and production optimizations

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            "/api/adtraction": {
                target: "https://api.adtraction.net/v2",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/adtraction/, ""),
                configure: (proxy) => {
                    proxy.on('proxyReq', (proxyReq) => {
                        proxyReq.setHeader('apikey', process.env.VITE_ADTRACTION_API_KEY || '');
                    });
                },
            },
            "/api/auth/register": {
                target: "https://babys-and-me.vercel.app",
                changeOrigin: true,
                secure: false,
            },
        },
    },
    optimizeDeps: {
        exclude: ['jsonwebtoken', 'bcryptjs', '@neondatabase/serverless'],
    },
    build: {
        rollupOptions: {
            external: ['jsonwebtoken', 'bcryptjs', '@neondatabase/serverless'],
        },
    },
});
