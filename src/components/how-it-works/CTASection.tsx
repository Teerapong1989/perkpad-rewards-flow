
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleSignUpClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-brand-primary-dark to-brand-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Ready to stop losing customers to forgotten punch cards?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-2">
          Transform your customer retention today. Your 5-minute setup starts now.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-brand-primary-dark hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[44px] sm:min-h-[56px] font-semibold"
          onClick={handleSignUpClick}
        >
          Start Your 5-Minute Setup (Free)
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        
        <p className="text-white/80 text-xs sm:text-sm mt-3 sm:mt-4 px-2">
          30-day money-back guarantee • 5-minute setup promise • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
