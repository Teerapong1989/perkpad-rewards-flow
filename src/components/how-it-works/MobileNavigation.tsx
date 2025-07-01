
import { ArrowLeft, Gift, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignUpClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2 min-h-[44px]">
          <ArrowLeft className="w-5 h-5 text-teal-600" />
          <span className="text-teal-600 hover:text-teal-700 font-medium">Back to Home</span>
        </Link>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-slate-800">Perkpad</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* Desktop CTA Button */}
        <div className="hidden sm:block">
          <Button 
            className="bg-teal-600 hover:bg-teal-700 min-h-[44px] px-6"
            onClick={handleSignUpClick}
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-white">
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
          
          <div className="p-4 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-3 p-4 rounded-lg hover:bg-slate-50 transition-colors min-h-[44px]"
              onClick={() => setIsMenuOpen(false)}
            >
              <ArrowLeft className="w-5 h-5 text-teal-600" />
              <span className="text-slate-800 font-medium">Back to Home</span>
            </Link>
            
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
      )}
    </>
  );
};

export default MobileNavigation;
