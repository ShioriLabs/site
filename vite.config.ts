import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// Static multi-page site (index + 404). Vite fingerprints CSS/fonts for immutable
// caching and rewrites the HTML asset references to the hashed filenames. Files in
// public/ (favicon, _headers, _redirects) are copied verbatim, unhashed.
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '404': resolve(__dirname, '404.html')
      }
    }
  },
  server: {
    port: 3000
  }
})
