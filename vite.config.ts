import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // project lives at https://w1w1cked88.github.io/cgp-app-landing/ in production
  base: command === 'build' ? '/cgp-app-landing/' : '/',
  plugins: [react(), tailwindcss()],
}))
