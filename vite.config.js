// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(() => ({
  base: '/', // ✅ Vercel: base à '/'
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/_variables.scss" as *;
          @use "@/styles/_mixins.scss" as *;
        `,
      },
    },
  },
}))
