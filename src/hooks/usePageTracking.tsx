
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackConversion, trackEvent } from '@/utils/analytics';
import { updateMetaTags } from '@/utils/seo';
import { generateBreadcrumbSchema, preloadCriticalResources, optimizePageLoading } from '@/utils/enhancedSeo';

const pageConfigs = {
  '/': {
    title: 'Perkpad - Digital Loyalty Program for Small Businesses | QR Code Punch Cards',
    description: 'Launch your digital loyalty program in 5 minutes. Replace lost punch cards with QR codes. Transform your customer retention today. No apps required - customers scan with phone camera.',
    keywords: 'digital loyalty program, QR code punch cards, small business rewards, customer retention, mobile loyalty, punch card app alternative, digital rewards system',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.com/' }
    ]
  },
  '/how-it-works': {
    title: 'How Perkpad Works - Digital Loyalty Program Setup in 5 Minutes',
    description: 'See how easy it is to transform your paper punch cards into a modern digital loyalty program that customers actually complete. Step-by-step guide to boost retention.',
    keywords: 'how perkpad works, digital loyalty setup, QR code loyalty program, customer retention strategy, small business marketing',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.com/' },
      { name: 'How It Works', url: 'https://perkpad.com/how-it-works' }
    ]
  },
  '/privacy-policy': {
    title: 'Privacy Policy - Perkpad Digital Loyalty Platform',
    description: 'Learn how Perkpad protects your business and customer data. Transparent privacy practices for our digital loyalty program platform.',
    keywords: 'perkpad privacy policy, data protection, customer privacy, GDPR compliance',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.com/' },
      { name: 'Privacy Policy', url: 'https://perkpad.com/privacy-policy' }
    ]
  },
  '/terms-of-service': {
    title: 'Terms of Service - Perkpad Digital Loyalty Platform',
    description: 'Read Perkpad\'s terms of service for our digital loyalty program platform. Clear terms for businesses using our QR code loyalty system.',
    keywords: 'perkpad terms of service, user agreement, loyalty program terms',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.com/' },
      { name: 'Terms of Service', url: 'https://perkpad.com/terms-of-service' }
    ]
  }
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    trackConversion('page_view');
    trackEvent('page_view', {
      page: location.pathname,
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    });

    // Update SEO meta tags
    const config = pageConfigs[location.pathname as keyof typeof pageConfigs];
    if (config) {
      updateMetaTags({
        title: config.title,
        description: config.description,
        keywords: config.keywords,
        canonical: `https://perkpad.com${location.pathname}`
      });

      // Generate breadcrumb schema
      if (config.breadcrumbs) {
        generateBreadcrumbSchema(config.breadcrumbs);
      }
    }

    // Performance optimizations
    preloadCriticalResources();
    
    // Optimize page loading after initial render
    setTimeout(() => {
      optimizePageLoading();
    }, 100);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);
};
