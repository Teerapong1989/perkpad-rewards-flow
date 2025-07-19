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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-brand-primary-light/30 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,168,168,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto py-12 sm:py-16 lg:py-20 flex flex-col items-center space-y-10 sm:space-y-14 lg:space-y-20">
        {/* Header Section */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Simple, powerful headline */}
          <div className="space-y-6">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 tracking-tight leading-[0.9] font-display">
              Digital Punch Cards
              <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                That Actually Work
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium">
              Replace lost paper cards with QR codes. Get 40% more repeat customers.
            </p>
          </div>
          
          {/* Simple CTA */}
          <div className="space-y-4">
            <Button 
              size="xl" 
              className="group bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary text-white text-xl sm:text-2xl px-10 sm:px-16 py-6 sm:py-8 rounded-2xl font-bold shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
              onClick={handleStartClick}
            >
              Start Free Trial
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <p className="text-gray-500 text-sm">
              Setup in 5 minutes • No credit card required
            </p>
          </div>
        </div>
        
        {/* Premium Mobile App Showcase */}
        <div className="relative max-w-lg mx-auto px-2 sm:px-4">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/15 via-brand-secondary/15 to-brand-accent/15 rounded-full blur-3xl scale-150 opacity-40 animate-pulse"></div>
          <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full blur-xl opacity-60"></div>
          
          {/* Premium device frame */}
          <div className="relative z-10 transform hover:scale-[1.03] hover:rotate-1 transition-all duration-700 hover:drop-shadow-2xl group">
            {/* Enhanced phone shadow with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/8 to-black/16 rounded-[2.8rem] blur-xl scale-110 transform translate-y-6"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 rounded-[2.8rem] blur-lg scale-105 transform translate-y-3"></div>
            
            {/* Premium phone container with better materials */}
            <div className="relative bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-[2.8rem] p-[3px] shadow-2xl">
              <div className="bg-gradient-to-b from-gray-800 to-black rounded-[2.6rem] p-[2px]">
                {/* Screen with premium bezel */}
                <div className="bg-black rounded-[2.4rem] p-[1px] overflow-hidden">
                  <OptimizedImage 
                    src="/lovable-uploads/e649c0e6-4d66-4e06-9651-2331653d69bb.png" 
                    alt="Perkpad mobile app showing business dashboard with customer metrics in a real café environment"
                    className="w-full h-auto rounded-[2.2rem] shadow-inner"
                    priority={true}
                    width={400}
                    height={800}
                    sizes="(max-width: 640px) 90vw, 400px"
                  />
                </div>
              </div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-brand-primary/30 to-brand-secondary/30 rounded-full animate-bounce delay-1000 backdrop-blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-brand-accent/30 to-brand-warning/30 rounded-full animate-bounce delay-2000 backdrop-blur-sm"></div>
            <div className="absolute top-1/4 -right-8 w-4 h-4 bg-gradient-to-br from-brand-success/40 to-brand-primary/40 rounded-full animate-pulse delay-3000"></div>
          </div>
        </div>
        
        {/* Premium Results showcase */}
        <div className="w-full max-w-5xl">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-6 xs:p-8 sm:p-10 lg:p-12 shadow-xl border border-white/20">
              {/* Results header */}
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Real Results from Real Businesses
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Based on industry research and early testing data
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 xs:gap-6 sm:gap-8 lg:gap-12 text-center">
                <div className="space-y-2 sm:space-y-3">
                  <AnimatedCounter 
                    end={40}
                    suffix="%"
                    duration={2000}
                    className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text"
                  />
                  <div className="text-gray-700 text-sm xs:text-base sm:text-lg lg:text-xl font-semibold leading-tight">
                    More repeat<br className="sm:hidden" /> customers
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    Average increase
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <AnimatedCounter 
                    end={3}
                    suffix="x"
                    duration={2200}
                    className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text"
                  />
                  <div className="text-gray-700 text-sm xs:text-base sm:text-lg lg:text-xl font-semibold leading-tight">
                    Higher completion<br className="sm:hidden" /> rate
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    vs paper cards
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <AnimatedCounter 
                    end={5}
                    suffix="min"
                    duration={1800}
                    className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-gradient-to-r from-brand-accent to-brand-success bg-clip-text"
                  />
                  <div className="text-gray-700 text-sm xs:text-base sm:text-lg lg:text-xl font-semibold leading-tight">
                    Quick<br className="sm:hidden" /> setup
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    Start today
                  </div>
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
