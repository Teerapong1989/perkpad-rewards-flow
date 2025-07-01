
// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

// Advanced analytics and conversion tracking
export const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, properties);
  }
  
  // Custom analytics
  console.log('Event tracked:', eventName, properties);
};

export const trackConversion = (conversionType: 'signup' | 'demo_request' | 'page_view', value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 0,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : ''
  });
};

export const trackUserBehavior = (action: string, element: string) => {
  trackEvent('user_interaction', {
    action,
    element,
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    timestamp: new Date().toISOString()
  });
};

// A/B Testing support
export const getVariant = (testName: string): string => {
  if (typeof window === 'undefined' || !window.localStorage) return 'A';
  
  const stored = window.localStorage.getItem(`ab_test_${testName}`);
  if (stored) return stored;
  
  const variant = Math.random() > 0.5 ? 'A' : 'B';
  window.localStorage.setItem(`ab_test_${testName}`, variant);
  return variant;
};
