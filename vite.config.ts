import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/1710/',   // שם הריפוזיטורי שלך בגיטהאב
  plugins: [react()],
})
