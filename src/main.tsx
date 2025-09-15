
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './utils/errorBoundary'

// Lazy load performance utilities to reduce initial bundle size
const initializePerformanceOptimizations = async () => {
  const { measurePerformance, preloadCriticalResources, inlineCriticalCSS } = await import('./utils/performance');
  inlineCriticalCSS();
  preloadCriticalResources();
  measurePerformance();
};

// Initialize performance optimizations after initial render
requestIdleCallback ? requestIdleCallback(initializePerformanceOptimizations) : setTimeout(initializePerformanceOptimizations, 0);

// Service Worker registration for caching
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
