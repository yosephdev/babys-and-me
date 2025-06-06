import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/adtraction': {
        target: 'https://api.adtraction.com/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/adtraction/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', function(proxyReq, req, res) {
            // Use process.env for server-side code
            proxyReq.setHeader('apikey', process.env.VITE_ADTRACTION_API_KEY || '');
          });
        },
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
