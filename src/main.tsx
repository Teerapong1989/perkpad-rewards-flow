
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { measurePerformance, preloadCriticalResources, inlineCriticalCSS } from './utils/performance'

// Initialize performance optimizations
inlineCriticalCSS();
preloadCriticalResources();
measurePerformance();

createRoot(document.getElementById("root")!).render(<App />);
