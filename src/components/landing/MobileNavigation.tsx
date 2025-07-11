
import { Button } from "@/components/ui/button";
import { Gift, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignUpClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
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
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold text-slate-900 tracking-tight">Perkpad</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link 
            to="/how-it-works"
            className="text-slate-600 hover:text-teal-600 transition-colors cursor-pointer min-h-[44px] flex items-center"
          >
            How It Works
          </Link>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-slate-600 hover:text-teal-600 transition-colors cursor-pointer min-h-[44px]"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-slate-600 hover:text-teal-600 transition-colors cursor-pointer min-h-[44px]"
          >
            Features
          </button>
          <Button 
            variant="outline" 
            className="border-teal-200 text-teal-700 hover:bg-teal-50 cursor-pointer min-h-[44px]"
            onClick={() => window.open('https://perkpad-petal-power.lovable.app/', '_blank', 'noopener,noreferrer')}
          >
            Login
          </Button>
          <Button 
            className="bg-teal-600 hover:bg-teal-700 min-h-[44px] px-6"
            onClick={handleSignUpClick}
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
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">Perkpad</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-4 space-y-2">
            <Link 
              to="/how-it-works"
              className="block p-4 rounded-lg hover:bg-slate-50 transition-colors text-slate-800 font-medium min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="w-full text-left p-4 rounded-lg hover:bg-slate-50 transition-colors text-slate-800 font-medium min-h-[44px] flex items-center"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="w-full text-left p-4 rounded-lg hover:bg-slate-50 transition-colors text-slate-800 font-medium min-h-[44px] flex items-center"
            >
              Features
            </button>
            <div className="pt-4 space-y-3">
              <Button 
                variant="outline" 
                className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 min-h-[44px] text-base"
                onClick={() => {
                  window.open('https://perkpad-petal-power.lovable.app/', '_blank', 'noopener,noreferrer');
                  setIsMenuOpen(false);
                }}
              >
                Login
              </Button>
              <Button 
                className="w-full bg-teal-600 hover:bg-teal-700 min-h-[44px] text-base"
                onClick={() => {
                  handleSignUpClick();
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
