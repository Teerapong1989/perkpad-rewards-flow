import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Zap, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";

const CTASection = () => {

  const handleDemoClick = () => {
    trackUserBehavior('click', 'cta_section_secondary');
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-brand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-full inline-block mb-6">
          <Clock className="w-4 h-4 inline mr-2" />
          New: No setup fees for the first 100 businesses
        </div>
        
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight text-balance">
          Ready to stop losing customers to forgotten punch cards?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Join nail salons, auto shops, cafés, and more. Your 2-minute setup starts now.
        </p>
        
        {/* Simple guarantees */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-white">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
              <span className="font-semibold text-sm sm:text-base">Free to try</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
              <span className="font-semibold text-sm sm:text-base">2-minute setup</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
              <span className="font-semibold text-sm sm:text-base">Cancel anytime</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-brand-primary-dark hover:bg-gray-50 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
            onClick={() => window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer')}
          >
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-primary-dark text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl transition-all duration-300 font-semibold"
            onClick={handleDemoClick}
            asChild
          >
            <Link to="/how-it-works">
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              See How It Works
            </Link>
          </Button>
        </div>
        
        <p className="text-white/80 text-xs sm:text-sm mt-6">
          No long-term contracts • No setup fees • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
