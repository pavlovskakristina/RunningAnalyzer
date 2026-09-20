import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows to open the server on the local network (same WiFi network)
    port: 3000,
    strictPort: true, // allows only port 3000
  },
})
