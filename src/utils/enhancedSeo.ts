// Enhanced SEO utilities for better Google rankings
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  });
  document.head.appendChild(script);
};

export const generateLocalBusinessSchema = (business: {
  name: string;
  description: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone?: string;
  email?: string;
}) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "description": business.description,
    "url": window.location.origin,
    ...(business.address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": business.address.street,
        "addressLocality": business.address.city,
        "addressRegion": business.address.state,
        "postalCode": business.address.zip
      }
    }),
    ...(business.phone && { "telephone": business.phone }),
    ...(business.email && { "email": business.email })
  });
  document.head.appendChild(script);
};

export const generateServiceSchema = (services: Array<{
  name: string;
  description: string;
  price?: string;
}>) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Loyalty Program",
    "provider": {
      "@type": "Organization",
      "name": "Perkpad"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Perkpad Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        },
        ...(service.price && { "price": service.price, "priceCurrency": "USD" })
      }))
    }
  });
  document.head.appendChild(script);
};

// Performance optimization utilities
export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png',
    '/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Core Web Vitals optimization
export const optimizePageLoading = () => {
  // Lazy load non-critical images
  const lazyImages = document.querySelectorAll('img[data-lazy]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.lazy) {
            img.src = img.dataset.lazy;
            img.removeAttribute('data-lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }
};

// Track Core Web Vitals
export const trackWebVitals = () => {
  if (typeof window !== 'undefined' && 'web-vitals' in window) {
    // This would integrate with web-vitals library if installed
    console.log('Web Vitals tracking ready');
  }
};

// Generate sitemap data for dynamic pages
export const generateSitemapData = () => {
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/features', priority: 0.9, changefreq: 'monthly' },
    { url: '/pricing', priority: 0.9, changefreq: 'monthly' },
    { url: '/how-it-works', priority: 0.8, changefreq: 'monthly' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/contact', priority: 0.6, changefreq: 'monthly' },
    { url: '/sms-help', priority: 0.5, changefreq: 'monthly' },
    { url: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms-of-service', priority: 0.3, changefreq: 'yearly' }
  ];

  return pages.map(page => ({
    ...page,
    lastmod: new Date().toISOString().split('T')[0]
  }));
};