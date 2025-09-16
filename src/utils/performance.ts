
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

// Optimize images with intersection observer - prevent forced reflows
export const optimizeImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      // Batch DOM updates in a single RAF call to prevent forced reflows
      const imagesToUpdate: Array<{ img: HTMLImageElement; src: string }> = [];
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            imagesToUpdate.push({ img, src });
          }
          imageObserver.unobserve(entry.target);
        }
      });
      
      // Batch all DOM updates in a single RAF to prevent layout thrashing
      if (imagesToUpdate.length > 0) {
        requestAnimationFrame(() => {
          imagesToUpdate.forEach(({ img, src }) => {
            img.src = src;
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.3s ease-in-out';
          });
        });
      }
    }, {
      rootMargin: '50px'
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

// Critical CSS inline function - Enhanced for render-blocking prevention
export const inlineCriticalCSS = () => {
  // Check if full CSS is loaded, if not, ensure critical styles are preserved
  const checkCSSLoaded = () => {
    const stylesheets = document.styleSheets;
    let fullCSSLoaded = false;
    
    for (let i = 0; i < stylesheets.length; i++) {
      const sheet = stylesheets[i];
      if (sheet.href && sheet.href.includes('index.css')) {
        fullCSSLoaded = true;
        break;
      }
    }
    
    // If full CSS isn't loaded yet, ensure critical styles remain
    if (!fullCSSLoaded) {
      setTimeout(checkCSSLoaded, 100);
    }
  };
  
  // Start checking if full CSS is loaded
  checkCSSLoaded();
  
  // Add any additional critical styles that might be needed
  const additionalCriticalCSS = `
    /* Additional critical styles for layout stability */
    .layout-stable { contain: layout style; font-size-adjust: from-font; }
    .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 300ms; }
    .duration-500 { transition-duration: 500ms; }
    .ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
    .opacity-0 { opacity: 0; }
    .opacity-100 { opacity: 1; }
    .scale-100 { transform: scale(1); }
    .scale-105 { transform: scale(1.05); }
    .rounded-2xl { border-radius: 1rem; }
    .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
  `;
  
  const style = document.createElement('style');
  style.textContent = additionalCriticalCSS;
  style.setAttribute('data-critical-css', 'additional');
  document.head.appendChild(style);
};
