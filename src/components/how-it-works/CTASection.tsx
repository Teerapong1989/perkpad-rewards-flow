
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleSignUpClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-teal-600 to-teal-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Loyalty Program?
        </h2>
        <p className="text-xl text-teal-100 mb-8">
          Join hundreds of businesses already using Perkpad to increase customer loyalty and drive repeat visits.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-teal-700 hover:bg-slate-50 text-lg px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          onClick={handleSignUpClick}
        >
          Start Your 5-Minute Setup (Free)
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        
        <p className="text-teal-200 text-sm mt-4">
          No setup fees • 30-day money-back guarantee • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
