import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deve ser igual ao nome do repositório: https://<user>.github.io/Portfolio/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
