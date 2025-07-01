
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const Navigation = () => {
  const handleSignUpClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
          <Gift className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-slate-800">Perkpad</span>
      </div>
      <div className="flex items-center space-x-6">
        <button 
          onClick={() => scrollToSection('pricing')} 
          className="text-slate-600 hover:text-teal-600 transition-colors cursor-pointer"
        >
          Pricing
        </button>
        <button 
          onClick={() => scrollToSection('features')} 
          className="text-slate-600 hover:text-teal-600 transition-colors cursor-pointer"
        >
          Features
        </button>
        <Button 
          variant="outline" 
          className="border-teal-200 text-teal-700 hover:bg-teal-50"
          onClick={handleSignUpClick}
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
