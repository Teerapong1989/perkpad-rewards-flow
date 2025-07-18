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
          <Badge className="bg-gradient-to-r from-brand-success to-emerald-500 text-white px-4 py-2 text-sm font-medium shadow-lg">
            ⚡ 10,000+ happy customers served this month
          </Badge>
          
          {/* Main headline - emotional hook */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-[0.9]">
            Your customers{" "}
            <span className="text-gradient">keep coming back</span>
          </h1>
          
          {/* Subheadline - benefit focused */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            The loyalty system that actually works. Watch repeat visits soar 40% in your first month.
          </p>
          
          {/* Social proof numbers */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
            <div>
              <div className="text-3xl font-bold text-brand-primary">10,000+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-brand-success">40%</div>
              <div className="text-sm text-gray-600 font-medium">Avg. Retention Increase</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-brand-accent">5 min</div>
              <div className="text-sm text-gray-600 font-medium">Setup Time</div>
            </div>
          </div>
          
          {/* Single, powerful CTA */}
          <div className="pt-4">
            <Button 
              size="xl" 
              className="btn-premium font-bold text-xl px-12 py-6"
              onClick={handleStartClick}
            >
              Get 40% More Repeat Customers
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="mt-4 text-gray-500 font-medium">
              Free 30-day trial • No setup fees • See results in week 1
            </p>
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
            
            {/* Floating success metrics */}
            <div className="absolute -left-8 top-20 bg-white rounded-xl shadow-lg p-4 hidden lg:block animate-fade-in-up border border-brand-success/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-success rounded-full animate-pulse"></div>
                <div>
                  <div className="text-lg font-bold text-brand-success">Sarah's Salon</div>
                  <div className="text-sm text-gray-600">+47% repeat visits this month</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 bottom-20 bg-white rounded-xl shadow-lg p-4 hidden lg:block animate-fade-in-up border border-brand-primary/20" style={{animationDelay: '200ms'}}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                <div>
                  <div className="text-lg font-bold text-brand-primary">Joe's Coffee</div>
                  <div className="text-sm text-gray-600">1,247 loyal customers</div>
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
