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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-mesh">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Clean, powerful headline - Mobile optimized */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-[1.05] px-2">
          Your customers{" "}
          <span className="text-gradient font-extrabold highlight-brand">keep coming back</span>
        </h1>
        
        {/* Single benefit statement - Mobile optimized */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4 font-medium">
          Transform punch cards into a digital loyalty program that actually gets completed.
        </p>
        
        {/* Single CTA - Mobile optimized */}
        <div className="space-y-4 sm:space-y-6 px-4">
          <Button 
            size="xl" 
            className="btn-premium text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-xl w-full sm:w-auto min-h-[52px] sm:min-h-[60px] font-semibold micro-bounce focus-visible-brand"
            onClick={handleStartClick}
          >
            Get 40% More Repeat Customers
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          
          <p className="text-gray-600 text-sm sm:text-base px-2 leading-relaxed">
            5-minute setup • Free 30 days • No credit card required
          </p>
        </div>
        
        
        {/* Professional Dashboard Showcase */}
        <div className="mt-12 sm:mt-16 md:mt-20 px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-2xl blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/10 rounded-2xl blur-xl"></div>
            
            {/* Main Dashboard Container */}
            <div className="relative bg-white rounded-3xl p-2 shadow-2xl border border-gray-100/50">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-6">
                <img 
                  src="/lovable-uploads/0bb167d1-f530-4147-b85a-413e15ea25f5.png" 
                  alt="Perkpad Dashboard showing customer analytics and loyalty program management"
                  className="w-full h-auto rounded-xl shadow-lg ring-1 ring-gray-100"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Floating Feature Badges */}
            <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 hidden lg:block">
              <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100">
                <span className="text-sm font-medium text-gray-700">Real-time Analytics</span>
              </div>
            </div>
            <div className="absolute -bottom-6 right-1/4 transform translate-x-1/2 hidden lg:block">
              <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100">
                <span className="text-sm font-medium text-gray-700">AI Insights</span>
              </div>
            </div>
          </div>
          
          {/* Stats below image */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mx-auto max-w-3xl border border-gray-100">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-1 sm:mb-2">40%</div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">More repeat visits</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-1 sm:mb-2">3x</div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">Completion rate</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-1 sm:mb-2">5min</div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">Setup time</div>
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
