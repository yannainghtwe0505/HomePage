import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allow external access (LAN / tunnel)
    // `true` disables the host check so ngrok (and similar) hostnames work
    allowedHosts: true,
  },
})
