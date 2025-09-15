import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Optimize chunk splitting to reduce critical request chains
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-toast', '@radix-ui/react-tooltip', '@radix-ui/react-dialog'],
          query: ['@tanstack/react-query'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate preload hints automatically
    modulePreload: {
      polyfill: true
    }
  }
}));
