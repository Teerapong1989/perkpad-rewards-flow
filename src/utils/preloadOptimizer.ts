// ABOUTME: Utility to optimize resource preloading and break critical request chains
// ABOUTME: Ensures parallel loading of critical resources to minimize network waterfalls

export const optimizePreloading = () => {
  // Only run in production where chunks are built
  if (import.meta.env.DEV) return;

  // Find and preload critical chunks in parallel
  const preloadCriticalChunks = () => {
    const existingPreloads = new Set(
      Array.from(document.querySelectorAll('link[rel="modulepreload"]')).map(
        link => (link as HTMLLinkElement).href
      )
    );

    // Critical chunk patterns that should be preloaded
    const criticalPatterns = [
      'main-',
      'app-', 
      'react-core-',
      'index-page-'
    ];

    // Find all script tags and preload matching ones
    const scripts = document.querySelectorAll('script[src*="/assets/"]');
    
    scripts.forEach(script => {
      const src = (script as HTMLScriptElement).src;
      
      // Check if this is a critical chunk
      const isCritical = criticalPatterns.some(pattern => src.includes(pattern));
      
      if (isCritical && !existingPreloads.has(src)) {
        const link = document.createElement('link');
        link.rel = 'modulepreload';
        link.href = src;
        link.setAttribute('data-dynamic-preload', 'true');
        document.head.appendChild(link);
      }
    });
  };

  // Break CSS dependency chains
  const optimizeCSSLoading = () => {
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    
    cssLinks.forEach(link => {
      const cssLink = link as HTMLLinkElement;
      
      // Ensure CSS loads with high priority
      if (!cssLink.hasAttribute('fetchpriority')) {
        cssLink.setAttribute('fetchpriority', 'high');
      }
    });
  };

  // Run optimizations after DOM is ready but before full load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      requestAnimationFrame(() => {
        preloadCriticalChunks();
        optimizeCSSLoading();
      });
    });
  } else {
    requestAnimationFrame(() => {
      preloadCriticalChunks();
      optimizeCSSLoading();
    });
  }
};

// Auto-initialize
optimizePreloading();