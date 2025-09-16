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
        // Enable smaller initial chunks
        experimentalMinChunkSize: 1000,
        // Optimize chunk loading
        chunkFileNames: 'assets/[name]-[hash].js',
        // More aggressive chunk splitting for better TTI
        manualChunks: (id) => {
          // Critical path - must load immediately
          if (id.includes('src/main.tsx') || id.includes('src/App.tsx') || id.includes('src/pages/Index.tsx')) {
            return 'critical';
          }
          
          // React core - high priority
          if (id.includes('react') && !id.includes('react-router') && !id.includes('react-query')) {
            return 'react-core';
          }
          
          // Router - separate chunk as it's navigation critical
          if (id.includes('react-router')) {
            return 'router';
          }
          
          // Query client - defer as it's not needed for initial render
          if (id.includes('@tanstack/react-query')) {
            return 'query-client';
          }
          
          // UI library chunks - split by usage frequency
          if (id.includes('@radix-ui/react-toast')) {
            return 'toast-ui';
          }
          if (id.includes('@radix-ui/react-tooltip')) {
            return 'tooltip-ui';
          }
          if (id.includes('@radix-ui/react-dialog') || id.includes('@radix-ui/react-sheet')) {
            return 'modal-ui';
          }
          if (id.includes('@radix-ui')) {
            return 'radix-ui';
          }
          
          // Icon library - defer as it's not critical for TTI
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils';
          }
          
          // Landing page components - can be loaded after initial render
          if (id.includes('components/landing/') && !id.includes('Navigation')) {
            return 'landing-components';
          }
          
          // Support components - defer significantly
          if (id.includes('components/support/')) {
            return 'support-widgets';
          }
          
          // Analytics and tracking - defer as non-critical
          if (id.includes('analytics') || id.includes('tracking')) {
            return 'analytics';
          }
          
          // Charts and heavy libraries
          if (id.includes('recharts')) {
            return 'charts';
          }
          
          // Everything else from node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          
          return 'app';
        }
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate preload hints automatically
    modulePreload: {
      polyfill: true
    },
    // Use esbuild for faster build times
    target: 'es2020',
    minify: 'esbuild'
  }
}));
