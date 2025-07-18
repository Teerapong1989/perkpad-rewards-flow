// ABOUTME: Simple section explaining why businesses are switching
// ABOUTME: Clean comparison between old and new way

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, Zap } from "lucide-react";
import { trackUserBehavior } from "@/utils/analytics";

const WhyNowSection = () => {
  const handleGetStartedClick = () => {
    trackUserBehavior('click', 'why_now_cta');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Simple headline - Mobile optimized */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
          Why businesses are switching
        </h2>
        
        <p className="text-xl sm:text-2xl text-gray-700 mb-12 sm:mb-16 max-w-3xl mx-auto px-4 leading-relaxed font-medium">
          The old way is broken. Smart businesses are already moving.
        </p>

        {/* Clean comparison - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
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
        <div className="px-4">
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