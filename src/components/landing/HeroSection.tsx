import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { memo, useCallback } from "react";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";

const HeroSection = () => {
  const handleStartClick = useCallback(() => {
    trackUserBehavior('click', 'hero_cta_primary');
    trackConversion('signup');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  }, []);

  const handleDemoClick = useCallback(() => {
    trackUserBehavior('click', 'hero_demo');
    // Add demo functionality later
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-25 via-white to-brand-primary-light/30 min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-4 py-2 text-sm font-medium shadow-lg">
            ✨ Trusted by 500+ local businesses
          </Badge>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-[0.9]">
            Stop losing customers to{" "}
            <span className="text-gradient">lost punch cards</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Digital loyalty that actually works. No apps, no hassle, no lost cards.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="xl" 
              className="btn-premium font-bold"
              onClick={handleStartClick}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-gray-600 hover:text-gray-800 font-semibold"
              onClick={handleDemoClick}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-8 text-sm text-gray-500">
            <p className="mb-2">Free 30-day trial • No credit card required • 5-minute setup</p>
            <div className="flex justify-center items-center space-x-8">
              <span>Coffee Shops</span>
              <span>•</span>
              <span>Salons</span>
              <span>•</span>
              <span>Restaurants</span>
              <span>•</span>
              <span>Retail Stores</span>
            </div>
          </div>
        </div>
        
        {/* Product preview */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative">
            {/* Main dashboard image */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 hover-lift">
              <img 
                src="/lovable-uploads/5318a79b-c5e1-4799-9bdc-2a3420cbb4d7.png" 
                alt="Perkpad Dashboard - Modern loyalty program management interface"
                className="w-full h-auto rounded-xl"
                loading="eager"
              />
              
              {/* Live indicator */}
              <div className="absolute top-4 right-4 bg-brand-success text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                Live Dashboard
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -left-8 top-20 bg-white rounded-xl shadow-lg p-4 hidden lg:block animate-fade-in-up">
              <div className="text-2xl font-bold text-brand-primary">40%</div>
              <div className="text-sm text-gray-600">Customer Retention</div>
            </div>
            
            <div className="absolute -right-8 bottom-20 bg-white rounded-xl shadow-lg p-4 hidden lg:block animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <div className="text-2xl font-bold text-brand-success">500+</div>
              <div className="text-sm text-gray-600">Happy Businesses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
