import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: repo name = Full_Stack_Bootcamp
export default defineConfig({
  plugins: [react()],
  base: '/Full_Stack_Bootcamp/',
})