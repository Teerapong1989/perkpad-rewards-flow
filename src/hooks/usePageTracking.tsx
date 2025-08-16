
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackConversion, trackEvent } from '@/utils/analytics';
import { updateMetaTags } from '@/utils/seo';
import { generateBreadcrumbSchema, preloadCriticalResources, optimizePageLoading } from '@/utils/enhancedSeo';

const pageConfigs = {
  '/': {
    title: 'Digital Punch Card App - Boost Customer Loyalty with Perkpad',
    description: 'Transform your business with Perkpad\'s digital punch card system. Increase customer retention by 67% with automated SMS campaigns and QR code loyalty programs.',
    keywords: 'digital punch card app, customer loyalty program, QR code loyalty, SMS marketing automation, business retention software',
    breadcrumbs: [{ name: 'Home', url: 'https://perkpad.io/' }]
  },
  '/features': {
    title: 'Features - Digital Loyalty Program Tools | Perkpad',
    description: 'Explore Perkpad\'s powerful features including QR code loyalty cards, automated SMS campaigns, analytics dashboard, and customer retention tools.',
    keywords: 'digital loyalty features, QR code punch cards, SMS automation, customer analytics, loyalty program tools',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.io/' },
      { name: 'Features', url: 'https://perkpad.io/features' }
    ]
  },
  '/pricing': {
    title: 'Pricing Plans - Affordable Digital Loyalty Solutions | Perkpad',
    description: 'Simple, transparent pricing for digital punch card and loyalty programs. Choose the perfect plan to boost your customer retention and grow your business.',
    keywords: 'digital loyalty pricing, punch card app cost, loyalty program plans, business retention pricing',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.io/' },
      { name: 'Pricing', url: 'https://perkpad.io/pricing' }
    ]
  },
  '/how-it-works': {
    title: 'How Perkpad Works - Digital Loyalty Program Setup Guide',
    description: 'Learn how to set up your digital punch card system in minutes. Step-by-step guide to creating automated loyalty programs that drive repeat customers.',
    keywords: 'digital loyalty setup, punch card system tutorial, automated customer retention, loyalty program guide',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.io/' },
      { name: 'How It Works', url: 'https://perkpad.io/how-it-works' }
    ]
  },
  '/about': {
    title: 'About Perkpad - Digital Loyalty Program Experts',
    description: 'Learn about Perkpad\'s mission to help businesses increase customer loyalty through innovative digital punch card and SMS marketing solutions.',
    keywords: 'about perkpad, digital loyalty experts, customer retention specialists, punch card innovation',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.io/' },
      { name: 'About', url: 'https://perkpad.io/about' }
    ]
  },
  '/contact': {
    title: 'Contact Us - Get Started with Digital Loyalty | Perkpad',
    description: 'Ready to boost customer retention? Contact Perkpad today to learn how our digital punch card system can transform your business loyalty programs.',
    keywords: 'contact perkpad, digital loyalty support, punch card consultation, loyalty program help',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.io/' },
      { name: 'Contact', url: 'https://perkpad.io/contact' }
    ]
  },
  '/privacy-policy': {
    title: 'Privacy Policy - Perkpad Digital Loyalty Platform',
    description: 'Learn how Perkpad protects your business and customer data. Comprehensive privacy policy for our digital punch card and loyalty program platform.',
    keywords: 'perkpad privacy policy, data protection, customer information security',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.io/' },
      { name: 'Privacy Policy', url: 'https://perkpad.io/privacy-policy' }
    ]
  },
  '/terms-of-service': {
    title: 'Terms of Service - Perkpad Digital Loyalty Platform',
    description: 'Terms and conditions for using Perkpad\'s digital punch card and loyalty program services. Clear guidelines for businesses and customers.',
    keywords: 'perkpad terms of service, loyalty program terms, digital punch card agreement',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.io/' },
      { name: 'Terms of Service', url: 'https://perkpad.io/terms-of-service' }
    ]
  },
  '/sms-help': {
    title: 'SMS Help - Digital Loyalty Communication Guide | Perkpad',
    description: 'Get help with SMS features in Perkpad\'s digital loyalty platform. Learn about automated messaging, customer communication, and SMS best practices.',
    keywords: 'SMS help, digital loyalty messaging, automated SMS support, customer communication guide',
    breadcrumbs: [
      { name: 'Home', url: 'https://perkpad.io/' },
      { name: 'SMS Help', url: 'https://perkpad.io/sms-help' }
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
        canonical: `https://perkpad.io${location.pathname}`
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
