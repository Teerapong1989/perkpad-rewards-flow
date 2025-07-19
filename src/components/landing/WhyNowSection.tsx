// ABOUTME: Simple section explaining why businesses are switching
// ABOUTME: Clean comparison between old and new way

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, Zap, BarChart3 } from "lucide-react";
import { trackUserBehavior } from "@/utils/analytics";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyNowSection = () => {
  const headerReveal = useScrollReveal({ delay: 100 });
  const analyticsReveal = useScrollReveal({ delay: 200 });
  const cardsReveal = useScrollReveal({ delay: 300 });
  const ctaReveal = useScrollReveal({ delay: 400 });

  const handleGetStartedClick = () => {
    trackUserBehavior('click', 'why_now_cta');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Simple headline - Mobile optimized */}
        <div 
          ref={headerReveal.elementRef}
          className={`transition-all duration-700 ${headerReveal.className}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Why businesses are switching
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 sm:mb-16 max-w-3xl mx-auto px-4 leading-relaxed font-medium">
            The old way is broken. Smart businesses are already moving.
          </p>
        </div>

        {/* Analytics Showcase */}
        <div 
          ref={analyticsReveal.elementRef}
          className={`mb-12 sm:mb-16 px-4 transition-all duration-700 ${analyticsReveal.className}`}
        >
          <div className="relative max-w-lg mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-accent/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Customer Traffic Intelligence</h3>
                  <p className="text-gray-600 text-sm">Discover peak hours and customer patterns</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-3">
                <img 
                  src="/lovable-uploads/4181cc53-7b1f-46b7-85e6-5696153a6958.png" 
                  alt="Traffic patterns and heatmap showing customer visit analytics"
                  className="w-full h-auto rounded-xl shadow-sm ring-1 ring-gray-200 object-contain"
                  loading="lazy"
                  style={{ aspectRatio: 'auto', maxHeight: '200px' }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">Live Analytics</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-medium">Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean comparison - Mobile optimized */}
        <div 
          ref={cardsReveal.elementRef}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 transition-all duration-700 ${cardsReveal.className}`}
        >
          <div className="text-center px-4">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Clock className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Paper cards get lost</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">73% completion rate drops to 12% with traditional punch cards</p>
          </div>

          <div className="text-center px-4">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Target className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">No customer data</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">You can't reach customers or track what works</p>
          </div>

          <div className="text-center px-4 sm:col-span-2 md:col-span-1">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Manual tracking</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">Staff time wasted on stamping and managing cards</p>
          </div>
        </div>

        {/* Mobile-friendly CTA */}
        <div 
          ref={ctaReveal.elementRef}
          className={`px-4 transition-all duration-700 ${ctaReveal.className}`}
        >
          <Button 
            size="xl" 
            className="btn-premium text-lg sm:text-xl px-8 sm:px-10 py-5 sm:py-6 rounded-xl w-full sm:w-auto min-h-[52px] sm:min-h-[60px] font-semibold"
            onClick={handleGetStartedClick}
          >
            Start Getting More Repeat Customers
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;