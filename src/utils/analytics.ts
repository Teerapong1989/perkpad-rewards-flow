
// Advanced analytics and conversion tracking
export const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties);
  }
  
  // Facebook Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, properties);
  }
  
  // Custom analytics
  console.log('Event tracked:', eventName, properties);
};

export const trackConversion = (conversionType: 'signup' | 'demo_request' | 'page_view', value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 0,
    timestamp: new Date().toISOString(),
    page: window.location.pathname
  });
};

export const trackUserBehavior = (action: string, element: string) => {
  trackEvent('user_interaction', {
    action,
    element,
    page: window.location.pathname,
    timestamp: new Date().toISOString()
  });
};

// A/B Testing support
export const getVariant = (testName: string): string => {
  const stored = localStorage.getItem(`ab_test_${testName}`);
  if (stored) return stored;
  
  const variant = Math.random() > 0.5 ? 'A' : 'B';
  localStorage.setItem(`ab_test_${testName}`, variant);
  return variant;
};
