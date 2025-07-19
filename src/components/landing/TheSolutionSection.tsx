// ABOUTME: Simple product showcase section
// ABOUTME: Shows how the solution works with minimal text

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, BarChart3, Users } from "lucide-react";
import { trackUserBehavior } from "@/utils/analytics";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TheSolutionSection = () => {
  const headerReveal = useScrollReveal({ delay: 100 });
  const aiReveal = useScrollReveal({ delay: 200 });
  const featuresReveal = useScrollReveal({ delay: 300 });
  const ctaReveal = useScrollReveal({ delay: 400 });

  const handleGetStartedClick = () => {
    trackUserBehavior('click', 'solution_cta');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Simple headline - Mobile optimized */}
        <div 
          ref={headerReveal.elementRef}
          className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${headerReveal.className}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            The simple solution
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto px-4 leading-relaxed font-medium">
            Digital loyalty that actually works. Setup in minutes, not months.
          </p>
        </div>

        {/* AI-Powered Solution Showcase */}
        <div 
          ref={aiReveal.elementRef}
          className={`mb-16 sm:mb-20 px-4 transition-all duration-700 ${aiReveal.className}`}
        >
          {/* AI Recommendations - Hero Feature */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 rounded-full px-4 py-2 mb-4">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-brand-primary">AI-Powered</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Smart Business Insights</h3>
                <p className="text-gray-600 text-lg">Our AI analyzes customer patterns and suggests the perfect strategies to increase retention</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-4">
                <img 
                  src="/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png" 
                  alt="AI Recommendations showing customer retention insights"
                  className="w-full h-auto rounded-xl shadow-lg ring-1 ring-gray-200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Rewards Configuration Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-brand-secondary rounded-md"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Reward Setup</h3>
                    <p className="text-gray-600">Configure any type of reward in minutes - percentage discounts, free items, or custom offers</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-3">
                  <img 
                    src="/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png" 
                    alt="Rewards configuration interface"
                    className="w-full h-auto rounded-xl shadow-sm ring-1 ring-gray-200"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-brand-accent to-brand-primary rounded-md"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gamification Options</h3>
                    <p className="text-gray-600">Make rewards exciting with scratch cards, spin wheels, or surprise gift boxes</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-3">
                  <img 
                    src="/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png" 
                    alt="Reward game settings with scratch cards, spin wheel, and gift boxes"
                    className="w-full h-auto rounded-xl shadow-sm ring-1 ring-gray-200"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple benefits - Mobile optimized */}
        <div 
          ref={featuresReveal.elementRef}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 transition-all duration-700 ${featuresReveal.className}`}
        >
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
        <div 
          ref={ctaReveal.elementRef}
          className={`text-center px-4 transition-all duration-700 ${ctaReveal.className}`}
        >
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