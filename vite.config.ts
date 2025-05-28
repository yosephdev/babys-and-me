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
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
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