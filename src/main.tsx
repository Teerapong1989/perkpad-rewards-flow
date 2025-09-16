
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './index.css'
import ErrorBoundary from './utils/errorBoundary'

// Lazy load the main App component to enable better code splitting
const App = lazy(() => import('./App'));

// Minimal critical loading screen
const AppLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm">Loading...</p>
    </div>
  </div>
);

// Lazy load performance utilities to reduce initial bundle size
const initializePerformanceOptimizations = async () => {
  try {
    const { measurePerformance, preloadCriticalResources, inlineCriticalCSS } = await import('./utils/performance');
    inlineCriticalCSS();
    preloadCriticalResources();
    measurePerformance();
  } catch (error) {
    console.warn('Performance optimizations failed to load:', error);
  }
};

// Initialize performance optimizations after initial render
const initPerf = () => {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(initializePerformanceOptimizations);
  } else {
    setTimeout(initializePerformanceOptimizations, 100);
  }
};

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
    <Suspense fallback={<AppLoader />}>
      <App />
    </Suspense>
  </ErrorBoundary>
);

// Initialize after render
initPerf();
