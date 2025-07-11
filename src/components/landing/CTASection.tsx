import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Zap, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";

const CTASection = () => {
  const handleSignUpClick = () => {
    trackUserBehavior('click', 'cta_section_primary');
    trackConversion('signup');
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = () => {
    trackUserBehavior('click', 'cta_section_secondary');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block mb-6 animate-pulse">
          <Clock className="w-4 h-4 inline mr-2" />
          Limited Time: Setup fee waived (normally $99)
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to keep customers coming back to your business?
        </h2>
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          Join nail salons, auto shops, cafés, and more. Your 2-minute setup starts now.
        </p>
        
        {/* Risk reversal prominently displayed */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 text-white">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-teal-200" />
              <span className="font-semibold">30-day guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-teal-200" />
              <span className="font-semibold">2-minute setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-teal-200" />
              <span className="font-semibold">Simple onboarding</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-teal-700 hover:bg-slate-50 text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={handleSignUpClick}
          >
            Start Free (2-minute setup)
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-teal-700 text-lg px-8 py-6 rounded-xl transition-all duration-300"
            onClick={handleDemoClick}
            asChild
          >
            <Link to="/how-it-works">
              <Play className="mr-2 w-5 h-5" />
              See How It Works
            </Link>
          </Button>
        </div>
        
        <p className="text-teal-200 text-sm mt-6">
          30-day money-back guarantee • No contracts • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
