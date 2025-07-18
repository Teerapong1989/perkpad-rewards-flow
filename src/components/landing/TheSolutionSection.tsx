// ABOUTME: Simple product showcase section
// ABOUTME: Shows how the solution works with minimal text

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, BarChart3, Users } from "lucide-react";
import { trackUserBehavior } from "@/utils/analytics";

const TheSolutionSection = () => {
  const handleGetStartedClick = () => {
    trackUserBehavior('click', 'solution_cta');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Simple headline - Mobile optimized */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            The simple solution
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto px-4 leading-relaxed font-medium">
            Digital loyalty that actually works. Setup in minutes, not months.
          </p>
        </div>

        {/* Real App Screenshots - Mobile optimized */}
        <div className="mb-16 sm:mb-20 px-4">
          {/* AI Recommendations */}
          <div className="relative bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 overflow-hidden mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AI-Powered Recommendations</h3>
              <p className="text-gray-600">Get smart insights to grow your business</p>
            </div>
            <img 
              src="/lovable-uploads/1531c4b9-c34a-4e3c-9d95-c2dba8ae1127.png" 
              alt="AI Recommendations showing customer retention insights"
              className="w-full max-w-md mx-auto h-auto rounded-xl sm:rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Rewards Configuration */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 overflow-hidden">
              <div className="text-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Easy Reward Setup</h3>
                <p className="text-gray-600">Configure rewards in minutes</p>
              </div>
              <img 
                src="/lovable-uploads/aa566038-4acd-4970-99fb-c4abe94a6d71.png" 
                alt="Rewards configuration interface"
                className="w-full h-auto rounded-xl shadow-xl"
                loading="lazy"
              />
            </div>

            <div className="relative bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 overflow-hidden">
              <div className="text-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Gamification Options</h3>
                <p className="text-gray-600">Choose how customers reveal rewards</p>
              </div>
              <img 
                src="/lovable-uploads/4c8bcfa9-a6f0-4568-a952-c7e64c4f111b.png" 
                alt="Reward game settings with scratch cards, spin wheel, and gift boxes"
                className="w-full h-auto rounded-xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Simple benefits - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20">
          <div className="text-center px-4">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Smartphone className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">QR code scanning</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">Customers scan, you track. No apps to download.</p>
          </div>

          <div className="text-center px-4">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <BarChart3 className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Track everything</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">See who visits, when, and how often.</p>
          </div>

          <div className="text-center px-4 sm:col-span-2 md:col-span-1">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Users className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Bring them back</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">Automated messages keep customers coming.</p>
          </div>
        </div>

        {/* Mobile-friendly CTA */}
        <div className="text-center px-4">
          <Button 
            size="xl" 
            className="btn-premium text-lg sm:text-xl px-8 sm:px-10 py-5 sm:py-6 rounded-xl w-full sm:w-auto min-h-[52px] sm:min-h-[60px] font-semibold"
            onClick={handleGetStartedClick}
          >
            Try It Free for 30 Days
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <p className="text-gray-600 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
            5-minute setup • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheSolutionSection;