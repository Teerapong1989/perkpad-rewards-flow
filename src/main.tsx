
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './index.css'
import './utils/preloadOptimizer' // Initialize preload optimizations immediately
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

// Defer all non-critical initialization to improve TTI and reduce request chains
const deferredInitialization = async () => {
  return new Promise(resolve => {
    const initTasks = async () => {
      try {
        // Use idle time to avoid blocking critical request chains
        if ('requestIdleCallback' in window) {
          requestIdleCallback(async () => {
            // Import and initialize performance utilities
            const { measurePerformance, preloadCriticalResources, inlineCriticalCSS } = await import('./utils/performance');
            
            // Run in sequence to avoid overwhelming the network
            inlineCriticalCSS();
            setTimeout(() => preloadCriticalResources(), 100);
            setTimeout(() => measurePerformance(), 200);
          }, { timeout: 5000 });
        } else {
          setTimeout(async () => {
            const { measurePerformance, preloadCriticalResources, inlineCriticalCSS } = await import('./utils/performance');
            inlineCriticalCSS();
            preloadCriticalResources();
            measurePerformance();
          }, 2000);
        }
        
        // Defer service worker registration to avoid network contention
        if ('serviceWorker' in navigator && import.meta.env.PROD) {
          setTimeout(() => {
            navigator.serviceWorker.register('/sw.js')
              .then((registration) => {
                console.log('SW registered: ', registration);
              })
              .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
              });
          }, 5000); // Significantly delayed to avoid request chain interference
        }
        
        resolve(true);
      } catch (error) {
        console.warn('Deferred initialization failed:', error);
        resolve(false);
      }
    };
    
    // Wait for critical resources to start loading
    setTimeout(initTasks, 50);
  });
};

// Render immediately for fastest critical path
createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <Suspense fallback={<AppLoader />}>
      <App />
    </Suspense>
  </ErrorBoundary>
);

// Initialize non-critical features after critical path
deferredInitialization();
