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
        // More aggressive chunk splitting to reduce critical request chains
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('react') && !id.includes('react-router')) {
            return 'react-vendor';
          }
          if (id.includes('react-router')) {
            return 'router';
          }
          
          // Icon library - split into separate chunk
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          
          // Radix UI components - split by usage
          if (id.includes('@radix-ui/react-toast') || id.includes('@radix-ui/react-tooltip')) {
            return 'radix-core';
          }
          if (id.includes('@radix-ui/react-dialog') || id.includes('@radix-ui/react-sheet')) {
            return 'radix-overlay';
          }
          if (id.includes('@radix-ui/react-dropdown') || id.includes('@radix-ui/react-select')) {
            return 'radix-form';
          }
          if (id.includes('@radix-ui')) {
            return 'radix-misc';
          }
          
          // Analytics and utilities
          if (id.includes('@tanstack/react-query')) {
            return 'query';
          }
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils';
          }
          
          // Landing page components - separate chunk
          if (id.includes('components/landing/') && !id.includes('HeroSection') && !id.includes('Navigation')) {
            return 'landing-sections';
          }
          
          // Chart libraries if used
          if (id.includes('recharts')) {
            return 'charts';
          }
          
          // Large vendor libraries
          if (id.includes('node_modules') && id.includes('react') === false) {
            return 'vendor-misc';
          }
        }
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate preload hints automatically
    modulePreload: {
      polyfill: true
    },
    // Use esbuild for faster minification (default, no extra dependency needed)
    target: 'es2020',
    minify: 'esbuild',
  }
}));
