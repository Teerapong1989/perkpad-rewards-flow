
// Performance monitoring utilities
export const measurePerformance = () => {
// Measure Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
          
          // Send LCP to analytics
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(entry.startTime),
              event_category: 'Performance'
            });
          }
        }
      }
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);
};

// Optimize images with intersection observer
export const optimizeImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame to prevent forced reflow
          requestAnimationFrame(() => {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            // Use CSS transition instead of direct class manipulation
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.3s ease-in-out';
          });
          imageObserver.unobserve(entry.target);
        }
      });
    }, {
      // Add rootMargin to trigger loading before element is visible
      rootMargin: '50px'
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

// Critical CSS inline function
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    .hero-section { 
      min-height: 80vh; 
      display: flex; 
      align-items: center; 
    }
    .fade-in { 
      animation: fadeIn 0.6s ease-out; 
    }
    @keyframes fadeIn { 
      from { opacity: 0; transform: translateY(20px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};
