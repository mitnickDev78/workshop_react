import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Autorise l’accès depuis Docker
    port: 5173, // Port par défaut
    strictPort: true, // Empêche Vite de changer de port en cas de conflit
    watch: {
      usePolling: true // Active la détection des fichiers modifiés dans Docker
    }
  },
  plugins: [react(), tailwindcss()]
});
