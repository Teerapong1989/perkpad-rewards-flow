
// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Enhanced analytics with security considerations
export const trackEvent = (eventName: string, properties: Record<string, unknown> = {}) => {
  try {
    // Sanitize properties to prevent XSS
    const sanitizedProperties = Object.entries(properties).reduce((acc, [key, value]) => {
      if (typeof value === 'string') {
        acc[key] = value.replace(/[<>]/g, '');
      } else {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, unknown>);

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, sanitizedProperties);
    }
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, sanitizedProperties);
    }
    
    // Custom analytics (secure logging)
    if (import.meta.env.DEV) {
      console.log('Event tracked:', eventName, sanitizedProperties);
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
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

// A/B Testing support with secure storage
export const getVariant = (testName: string): string => {
  if (typeof window === 'undefined' || !window.localStorage) return 'A';
  
  try {
    const stored = window.localStorage.getItem(`ab_test_${testName}`);
    if (stored && ['A', 'B'].includes(stored)) return stored;
    
    const variant = Math.random() > 0.5 ? 'A' : 'B';
    window.localStorage.setItem(`ab_test_${testName}`, variant);
    return variant;
  } catch (error) {
    console.error('A/B testing error:', error);
    return 'A';
  }
};

// Security-focused error tracking
export const trackSecurityEvent = (eventType: string, details: Record<string, unknown> = {}) => {
  trackEvent('security_event', {
    event_type: eventType,
    ...details,
    timestamp: new Date().toISOString(),
    user_agent: typeof window !== 'undefined' ? navigator.userAgent : '',
    page: typeof window !== 'undefined' ? window.location.pathname : ''
  });
};
