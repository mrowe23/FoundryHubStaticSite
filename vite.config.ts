import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hot: true,
  },
  build: {
    outDir: 'dist',
  },
});