// filepath: c:\Users\mrowe\projects\FoundryHub\vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FoundryHubStaticSite/', // Set the base path
});