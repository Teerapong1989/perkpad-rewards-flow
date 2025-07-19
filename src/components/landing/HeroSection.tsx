import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { memo, useCallback } from "react";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TextRotation from "@/components/ui/TextRotation";
import OptimizedImage from "@/components/ui/OptimizedImage";

const HeroSection = () => {
  const handleStartClick = useCallback(() => {
    trackUserBehavior('click', 'hero_cta_primary');
    trackConversion('signup');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  }, []);

  const rotatingTexts = [
    "keep coming back",
    "stay loyal",
    "choose you first",
    "return again"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
      <div className="relative z-10 text-center max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
        {/* Clean, powerful headline - optimized for all screen sizes */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10 tracking-tight leading-tight">
          Your customers
          <TextRotation 
            texts={rotatingTexts}
            className="mt-2 sm:mt-1"
            interval={5000}
          />
        </h1>
        
        {/* Clear value proposition - better readability */}
        <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
          Digital punch card app that replaces lost paper cards with QR codes. Perfect for cafes, restaurants & coffee shops.
        </p>
        
        {/* Primary CTA - enhanced for mobile */}
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <Button 
            size="xl" 
            className="btn-premium text-base xs:text-lg sm:text-xl lg:text-2xl px-6 xs:px-8 sm:px-12 lg:px-16 py-4 xs:py-5 sm:py-6 lg:py-7 rounded-xl w-full sm:w-auto min-h-[50px] xs:min-h-[56px] sm:min-h-[64px] lg:min-h-[72px] font-bold shadow-brand"
            onClick={handleStartClick}
          >
            <span className="hidden xs:inline">Get 40% More Repeat Customers</span>
            <span className="xs:hidden">40% More Repeat Customers</span>
            <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </Button>
          
          <p className="text-gray-500 text-xs xs:text-sm sm:text-base lg:text-lg font-medium">
            5-minute setup • Free 30 days • No credit card required
          </p>
        </div>
        
        {/* Mobile App Showcase - Enhanced */}
        <div className="relative max-w-md mx-auto px-2 sm:px-4">
          {/* Background gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-full blur-3xl scale-150 opacity-30 animate-pulse"></div>
          
          {/* Mobile device frame */}
          <div className="relative z-10 transform hover:scale-[1.05] hover:rotate-1 transition-all duration-700 hover:drop-shadow-2xl">
            {/* Phone shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 rounded-[2.5rem] blur-lg scale-105 transform translate-y-4"></div>
            
            {/* Main phone container */}
            <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] p-2 shadow-2xl">
              {/* Screen bezel */}
              <div className="bg-black rounded-[2rem] p-1">
                <OptimizedImage 
                  src="/lovable-uploads/9034c20a-c429-4a36-9315-c8c1620ea7b1.png" 
                  alt="Perkpad mobile app showing business dashboard with customer metrics and analytics"
                  className="w-full h-auto rounded-[1.8rem] shadow-inner"
                  priority={true}
                  width={320}
                  height={640}
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
            </div>
            
            {/* Floating elements for extra coolness */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce delay-2000"></div>
          </div>
        </div>
        
        {/* Results showcase - enhanced responsive design */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-subtle rounded-lg sm:rounded-2xl lg:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-10 mx-auto max-w-3xl shadow-md border border-gray-100">
            <div className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="space-y-1 sm:space-y-2">
                <AnimatedCounter 
                  end={40}
                  suffix="%"
                  duration={2000}
                  className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-primary mb-1 sm:mb-2"
                />
                <div className="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg font-medium leading-tight">
                  More repeat<br className="sm:hidden" /> visits
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <AnimatedCounter 
                  end={3}
                  suffix="x"
                  duration={2200}
                  className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-primary mb-1 sm:mb-2"
                />
                <div className="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg font-medium leading-tight">
                  Completion<br className="sm:hidden" /> rate
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <AnimatedCounter 
                  end={5}
                  suffix="min"
                  duration={1800}
                  className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-primary mb-1 sm:mb-2"
                />
                <div className="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg font-medium leading-tight">
                  Setup<br className="sm:hidden" /> time
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
