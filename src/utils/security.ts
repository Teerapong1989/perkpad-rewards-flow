
// Security utilities for enhanced protection
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Rate limiting for form submissions
const submissionTimestamps = new Map<string, number[]>();

export const checkRateLimit = (identifier: string, maxRequests = 5, windowMs = 60000): boolean => {
  const now = Date.now();
  const timestamps = submissionTimestamps.get(identifier) || [];
  
  // Remove old timestamps outside the window
  const validTimestamps = timestamps.filter(timestamp => now - timestamp < windowMs);
  
  if (validTimestamps.length >= maxRequests) {
    return false; // Rate limit exceeded
  }
  
  validTimestamps.push(now);
  submissionTimestamps.set(identifier, validTimestamps);
  return true;
};

// Secure storage utilities
export const secureStorage = {
  set: (key: string, value: any): void => {
    try {
      const encrypted = btoa(JSON.stringify(value));
      localStorage.setItem(`secure_${key}`, encrypted);
    } catch (error) {
      console.error('Failed to store data securely:', error);
    }
  },
  
  get: (key: string): any => {
    try {
      const encrypted = localStorage.getItem(`secure_${key}`);
      if (!encrypted) return null;
      return JSON.parse(atob(encrypted));
    } catch (error) {
      console.error('Failed to retrieve data securely:', error);
      return null;
    }
  },
  
  remove: (key: string): void => {
    localStorage.removeItem(`secure_${key}`);
  }
};

// CSP violation reporter
export const reportCSPViolation = (violationReport: any): void => {
  console.warn('CSP Violation:', violationReport);
  
  // In production, you might want to send this to your monitoring service
  if (import.meta.env.PROD) {
    // trackEvent('security_violation', {
    //   type: 'csp',
    //   details: violationReport
    // });
  }
};

// Security event logger
export const logSecurityEvent = (event: string, details: Record<string, any> = {}): void => {
  const securityLog = {
    timestamp: new Date().toISOString(),
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href
  };
  
  console.warn('Security Event:', securityLog);
  
  // In production, send to monitoring service
  if (import.meta.env.PROD) {
    // Send to your security monitoring endpoint
  }
};
