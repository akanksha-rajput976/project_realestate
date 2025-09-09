import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch:{
      usePolling: true,
    },
    proxy:{
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/predict_home_price':{
        target: 'http://127.0.0.1:5000',
        secure: false,
      }
    }
  },
  plugins: [react()],
})
