import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Nome do repo no GitHub: https://<user>.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
