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
