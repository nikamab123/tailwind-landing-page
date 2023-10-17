import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tailwind-landing-page",

  plugins: [react()],
  build: {
    outDir: 'build', // or any other directory name you prefer
  },
  publicDir: 'public', // or any other directory name you prefer
})
