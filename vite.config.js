import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/1e-plantShopping/', // Ensure this matches your GitHub repository name
  plugins: [react()],
});
