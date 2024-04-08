import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: [
      { 
        find: '@', 
        replacement: path.resolve(__dirname, 'src') 
      },
      { 
        find: '@/public', 
        replacement: path.resolve(__dirname, 'public') 
      },
    ]
  }
})