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
        
        <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          The old way is broken. Smart businesses are already moving.
        </p>

        {/* Clean comparison - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          <div className="text-center px-4">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Clock className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Paper cards get lost</h3>
            <p className="text-gray-600 text-sm sm:text-base">73% completion rate drops to 12% with traditional punch cards</p>
          </div>

          <div className="text-center px-4">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Target className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">No customer data</h3>
            <p className="text-gray-600 text-sm sm:text-base">You can't reach customers or track what works</p>
          </div>

          <div className="text-center px-4 sm:col-span-2 md:col-span-1">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Manual tracking</h3>
            <p className="text-gray-600 text-sm sm:text-base">Staff time wasted on stamping and managing cards</p>
          </div>
        </div>

        {/* Mobile-friendly CTA */}
        <div className="px-4">
          <Button 
            size="xl" 
            className="btn-premium text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-xl w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
            onClick={handleGetStartedClick}
          >
            Start Getting More Repeat Customers
            <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;