
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { measurePerformance, preloadCriticalResources, inlineCriticalCSS } from './utils/performance'
import ErrorBoundary from './utils/errorBoundary'

// Initialize performance optimizations
inlineCriticalCSS();
preloadCriticalResources();
measurePerformance();

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
