import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { memo, useCallback } from "react";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";

const HeroSection = () => {
  const handleStartClick = useCallback(() => {
    trackUserBehavior('click', 'hero_cta_primary');
    trackConversion('signup');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-25 via-white to-brand-primary-light/20 min-h-screen flex items-center overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-primary/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-accent/3 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Future positioning */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 backdrop-blur-sm border border-brand-primary/20 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-brand-primary animate-pulse" />
            <span className="text-brand-primary font-semibold">The Future of Customer Loyalty is Here</span>
          </div>
          
          {/* Inevitable headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tight leading-[0.85]">
            Every business will be{" "}
            <span className="text-gradient block">digital by 2025</span>
          </h1>
          
          {/* Market reality */}
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            While others cling to punch cards, smart business owners are building digital customer relationships that last.
          </p>
          
          {/* Market pressure indicators */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Big chains dominating with digital loyalty</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Customer expectations rising daily</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Paper systems becoming obsolete</span>
            </div>
          </div>
          
          {/* Exclusive access CTA */}
          <div className="space-y-6">
            <Button 
              size="xl" 
              className="btn-premium font-bold text-2xl px-16 py-8 rounded-2xl"
              onClick={handleStartClick}
            >
              Get Early Access
              <ArrowRight className="ml-4 w-7 h-7" />
            </Button>
            
            <p className="text-gray-500 font-medium">
              Join the digital transformation • Free 30-day access • No setup fees
            </p>
          </div>
        </div>
        
        {/* Live market reality dashboard */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Market Reality</h3>
                <p className="text-gray-600">Industry data showing the inevitable shift</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
                  <div className="text-4xl font-bold text-red-600 mb-2">78%</div>
                  <div className="text-gray-800 font-semibold mb-1">Customer Preference</div>
                  <div className="text-sm text-gray-600">Prefer digital over physical loyalty cards</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-brand-primary-light rounded-2xl">
                  <div className="text-4xl font-bold text-brand-primary mb-2">3x</div>
                  <div className="text-gray-800 font-semibold mb-1">Engagement Rate</div>
                  <div className="text-sm text-gray-600">Digital loyalty vs traditional punch cards</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">2025</div>
                  <div className="text-gray-800 font-semibold mb-1">Industry Prediction</div>
                  <div className="text-sm text-gray-600">When all successful businesses will be digital</div>
                </div>
              </div>
            </div>
            
            {/* Floating "live" indicators */}
            <div className="absolute -top-4 -right-4 bg-brand-success text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Live Data
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
