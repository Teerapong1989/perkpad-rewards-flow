
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackConversion, trackEvent } from '@/utils/analytics';
import { updateMetaTags } from '@/utils/seo';

const pageConfigs = {
  '/': {
    title: 'Perkpad - Digital Loyalty Program for Small Businesses | QR Code Punch Cards',
    description: 'Launch your digital loyalty program in 5 minutes. Replace lost punch cards with QR codes. Join 487 businesses that made the switch this month.',
    keywords: 'digital loyalty program, QR code punch cards, small business rewards, customer retention'
  },
  '/how-it-works': {
    title: 'How Perkpad Works - Digital Loyalty Program Setup in 5 Minutes',
    description: 'See how easy it is to transform your paper punch cards into a modern digital loyalty program that customers actually complete.',
    keywords: 'how perkpad works, digital loyalty setup, QR code loyalty program'
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
        ...config,
        canonical: `https://perkpad.com${location.pathname}`
      });
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);
};
