import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://copytrade.exchange',
        // target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace('', '')
      },
    }
  }
})
