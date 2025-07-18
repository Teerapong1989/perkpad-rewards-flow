import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { memo, useCallback } from "react";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";

const HeroSection = () => {
  const handleStartClick = useCallback(() => {
    trackUserBehavior('click', 'hero_cta_primary');
    trackConversion('signup');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-brand-primary/5"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Clean, powerful headline - Stripe style */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
          Your customers{" "}
          <span className="text-gradient">keep coming back</span>
        </h1>
        
        {/* Single benefit statement - Linear style */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Transform punch cards into a digital loyalty program that actually gets completed.
        </p>
        
        {/* Single CTA - Notion style */}
        <div className="space-y-6">
          <Button 
            size="xl" 
            className="btn-premium text-lg px-12 py-6 rounded-xl"
            onClick={handleStartClick}
          >
            Get 40% More Repeat Customers
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
          
          <p className="text-gray-500 text-sm">
            5-minute setup • Free 30 days • No credit card required
          </p>
        </div>
        
        {/* Clean visual proof - Figma style */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-3xl border border-gray-100">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">40%</div>
                <div className="text-gray-600 text-sm">More repeat visits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">3x</div>
                <div className="text-gray-600 text-sm">Completion rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">5min</div>
                <div className="text-gray-600 text-sm">Setup time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
