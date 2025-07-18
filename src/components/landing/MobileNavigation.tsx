
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
        
        {/* Desktop Navigation - Simplified */}
        <div className="hidden lg:flex items-center space-x-8">
          <Button 
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 font-medium"
            onClick={() => window.open('https://app.perkpad.io', '_blank')}
          >
            Login
          </Button>
          <Button 
            className="btn-premium font-semibold px-8"
            onClick={() => window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer')}
          >
            Get Early Access
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
          
          <div className="p-4 space-y-4">
            <Button 
              variant="ghost"
              className="w-full text-gray-600 hover:text-gray-900 font-medium justify-start"
              onClick={() => {
                window.open('https://app.perkpad.io', '_blank');
                setIsMenuOpen(false);
              }}
            >
              Login
            </Button>
            <Button 
              className="w-full btn-premium font-semibold"
              onClick={() => {
                window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
                setIsMenuOpen(false);
              }}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
