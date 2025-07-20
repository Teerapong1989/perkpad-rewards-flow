// ABOUTME: Desktop navigation component for larger screens
// ABOUTME: Shows main navigation links and CTA button in a horizontal layout

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackUserBehavior } from "@/utils/analytics";

const DesktopNavigation = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    trackUserBehavior('click', 'nav_cta_primary');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  const handlePricingClick = () => {
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      // If we're on the homepage, just scroll to pricing section
      const element = document.getElementById('pricing');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      // If no pricing section on homepage, navigate to pricing page
      navigate('/pricing');
    } else {
      // If we're on another page, navigate to pricing page
      navigate('/pricing');
    }
  };

  return (
    <nav className="hidden lg:flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">P</span>
        </div>
        <span className="text-xl font-bold text-gray-900">Perkpad</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <Link 
          to="/features"
          className="text-gray-700 hover:text-brand-primary font-medium transition-colors duration-200"
        >
          Features
        </Link>
        <button
          onClick={handlePricingClick}
          className="text-gray-700 hover:text-brand-primary font-medium transition-colors duration-200"
        >
          Pricing
        </button>
        <Link 
          to="/contact"
          className="text-gray-700 hover:text-brand-primary font-medium transition-colors duration-200"
        >
          Contact
        </Link>
      </div>

      {/* CTA Button */}
      <Button 
        onClick={handleStartClick}
        className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
      >
        Start Free Trial
      </Button>
    </nav>
  );
};

export default DesktopNavigation;