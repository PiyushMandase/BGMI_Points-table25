import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BGMI_Points-table25/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
