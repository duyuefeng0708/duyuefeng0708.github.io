import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configure base path for GitHub Pages
  // If deploying to username.github.io, use base: '/'
  // If deploying to username.github.io/repository-name, use base: '/repository-name/'
  base: process.env.NODE_ENV === 'production' ? './' : '/',
})
