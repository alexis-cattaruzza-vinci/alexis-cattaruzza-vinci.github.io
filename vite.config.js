import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/exercices1/',
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
    },
  },
});
