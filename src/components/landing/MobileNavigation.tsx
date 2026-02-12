
import { Button } from "@/components/ui/button";
import { Gift, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Perkpad</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/features"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            
          >
            Features
          </Link>
          <Link 
            to="/pricing"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            
          >
            Pricing
          </Link>
          <Link 
            to="/how-it-works"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            
          >
            How It Works
          </Link>
          <Link 
            to="/about"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            
          >
            About
          </Link>
          <Link 
            to="/contact"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            
          >
            Contact
          </Link>
          <Button 
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 font-medium"
            onClick={() => window.open('https://app.perkpad.io', '_blank')}
          >
            Login
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
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-gray-900 tracking-tight">Perkpad</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="p-4 space-y-4">
            <Link 
              to="/features"
              className="block w-full text-left p-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Features
            </Link>
            <Link 
              to="/pricing"
              className="block w-full text-left p-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Pricing
            </Link>
            <Link 
              to="/how-it-works"
              className="block w-full text-left p-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              How It Works
            </Link>
            <Link 
              to="/about"
              className="block w-full text-left p-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="block w-full text-left p-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Contact
            </Link>
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
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
