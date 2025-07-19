import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { memo, useCallback } from "react";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const HeroSection = () => {
  const handleStartClick = useCallback(() => {
    trackUserBehavior('click', 'hero_cta_primary');
    trackConversion('signup');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-white">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Clean, powerful headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight">
          Your customers
          <span className="block text-gradient font-extrabold">keep coming back</span>
        </h1>
        
        {/* Clear value proposition */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
          Transform punch cards into a digital loyalty program that actually gets completed.
        </p>
        
        {/* Primary CTA */}
        <div className="space-y-4 sm:space-y-6 mb-16 sm:mb-20">
          <Button 
            size="xl" 
            className="btn-premium text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-xl w-full sm:w-auto min-h-[52px] sm:min-h-[60px] font-semibold"
            onClick={handleStartClick}
          >
            Get 40% More Repeat Customers
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          
          <p className="text-gray-500 text-sm sm:text-base">
            5-minute setup • Free 30 days • No credit card required
          </p>
        </div>
        
        {/* Clean Dashboard Showcase */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <img 
              src="/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png" 
              alt="Perkpad Dashboard showing customer analytics and loyalty program management"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          
          {/* Results showcase */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mx-auto max-w-2xl">
              <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <AnimatedCounter 
                    end={40}
                    suffix="%"
                    duration={2000}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-2"
                  />
                  <div className="text-gray-600 text-sm sm:text-base font-medium">More repeat visits</div>
                </div>
                <div>
                  <AnimatedCounter 
                    end={3}
                    suffix="x"
                    duration={2200}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-2"
                  />
                  <div className="text-gray-600 text-sm sm:text-base font-medium">Completion rate</div>
                </div>
                <div>
                  <AnimatedCounter 
                    end={5}
                    suffix="min"
                    duration={1800}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-2"
                  />
                  <div className="text-gray-600 text-sm sm:text-base font-medium">Setup time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
