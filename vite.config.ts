import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
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
            proxyReq.setHeader('apikey', '68D033B724D8E3A1AC14B2AA5A984203A99339BB');
          });
        },
      },
    },
  },
  // Prevent Node.js modules from being bundled
  optimizeDeps: {
    exclude: ['jsonwebtoken', 'bcryptjs', '@neondatabase/serverless'],
  },
  // Explicitly mark Node.js modules as external
  build: {
    rollupOptions: {
      external: ['jsonwebtoken', 'bcryptjs', '@neondatabase/serverless'],
    },
  },
});