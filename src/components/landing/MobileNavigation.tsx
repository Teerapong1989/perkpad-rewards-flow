
import { Button } from "@/components/ui/button";
import { Gift, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePricingClick = () => {
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      // If we're on the homepage, just scroll to pricing section
      const element = document.getElementById('pricing');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to homepage with pricing hash
      navigate('/#pricing');
      // Add a small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById('pricing');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Perkpad</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link 
            to="/how-it-works"
            className="text-gray-600 hover:text-brand-primary-dark transition-colors cursor-pointer min-h-[44px] flex items-center font-medium"
          >
            How It Works
          </Link>
          <button 
            onClick={handlePricingClick}
            className="text-gray-600 hover:text-brand-primary-dark transition-colors cursor-pointer min-h-[44px] font-medium"
          >
            Pricing
          </button>
          <Link 
            to="/about"
            className="text-gray-600 hover:text-brand-primary-dark transition-colors cursor-pointer min-h-[44px] flex items-center font-medium"
          >
            About
          </Link>
          <Link 
            to="/contact"
            className="text-gray-600 hover:text-brand-primary-dark transition-colors cursor-pointer min-h-[44px] flex items-center font-medium"
          >
            Contact
          </Link>
          <Button 
            className="btn-premium min-h-[44px] px-6 font-semibold"
            onClick={() => window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer')}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-gray-900 tracking-tight">Perkpad</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="p-4 space-y-2">
            <Link 
              to="/how-it-works"
              className="block p-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-800 font-medium min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <button 
              onClick={handlePricingClick}
              className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-800 font-medium min-h-[44px] flex items-center"
            >
              Pricing
            </button>
            <Link 
              to="/about"
              className="block p-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-800 font-medium min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="block p-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-800 font-medium min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-3">
              <Button 
                className="w-full btn-premium min-h-[44px] text-base font-semibold"
                onClick={() => {
                  window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
                  setIsMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
