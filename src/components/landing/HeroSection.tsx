import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, Gift, Star, ArrowRight, Users, Zap, Sparkles, Check, Clock, TrendingUp, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useCallback } from "react";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";

const FloatingElement = memo(({ className, children, delay = 0 }: { 
  className: string, 
  children: React.ReactNode, 
  delay?: number 
}) => (
  <div 
    className={`${className} animate-bounce`} 
    style={{ animationDelay: `${delay}ms` }}
    aria-hidden="true"
  >
    {children}
  </div>
));

FloatingElement.displayName = 'FloatingElement';

const ProgressStamp = memo(({ index, isCompleted }: { index: number, isCompleted: boolean }) => (
  <div className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${
    isCompleted 
      ? 'bg-gradient-to-br from-teal-100 to-teal-200' 
      : 'bg-slate-100 border-2 border-dashed border-slate-300'
  } rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200`}>
    {isCompleted ? (
      <Check className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-teal-600" aria-label={`Stamp ${index} collected`} />
    ) : (
      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-slate-400 rounded-full" aria-label={`Stamp ${index} needed`}></div>
    )}
  </div>
));

ProgressStamp.displayName = 'ProgressStamp';

const HeroSection = () => {
  const handleSignUpClick = useCallback(() => {
    trackUserBehavior('click', 'hero_cta_primary');
    trackConversion('signup');
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  }, []);

  const handleDemoClick = useCallback(() => {
    trackUserBehavior('click', 'hero_cta_secondary');
  }, []);

  return (
    <section className="hero-section relative overflow-hidden py-8 sm:py-12 lg:py-20 px-4 sm:px-6" role="main">
      {/* Background decoration - optimized with will-change */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-orange-50/30 blur-3xl will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse will-change-transform" aria-hidden="true"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <header className="space-y-6 sm:space-y-8 fade-in">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                <Badge className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" aria-hidden="true" />
                  🚀 Limited Time: Setup fee waived (normally $99)
                </Badge>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] text-center lg:text-left tracking-tight">
                Every local business deserves{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-orange-400">
                  loyal customers
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium text-center lg:text-left max-w-2xl">
                Whether you run a nail salon, auto shop, café, or laundromat — get digital loyalty cards that actually work. Customers scan, you grow.
              </p>
              
              {/* Problem statement with industry context */}
              <aside className="bg-red-50 border-l-4 border-red-400 p-3 sm:p-4 rounded-r-xl mx-2 sm:mx-0">
                <p className="text-red-800 font-semibold text-sm sm:text-base">
                  Studies show <span className="text-red-600 font-bold">70% of customers never complete</span> traditional punch card programs. Every business type faces this problem.
                </p>
              </aside>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0">
                <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[48px] sm:min-h-[56px] will-change-transform"
                onClick={handleSignUpClick}
                aria-label="Start free today"
              >
                Start Free (2-minute setup)
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-teal-200 text-teal-700 hover:bg-teal-50 text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] sm:min-h-[56px] will-change-transform"
                onClick={handleDemoClick}
                asChild
              >
                <Link to="/how-it-works" aria-label="Learn how our loyalty program works">
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  See How It Works
                </Link>
              </Button>
            </div>
            
            {/* Consistent guarantees and benefits */}
            <div className="space-y-3 sm:space-y-4 px-2 sm:px-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-teal-600 font-semibold text-sm sm:text-base">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full animate-pulse" aria-hidden="true"></div>
                <span>Your 2-minute setup starts now</span>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                  </div>
                  <span className="font-medium text-slate-700">30-day money-back guarantee</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                  </div>
                  <span className="font-medium text-slate-700">2-minute setup promise</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                  </div>
                  <span className="font-medium text-slate-700">Simple onboarding</span>
                </li>
              </ul>
            </div>
          </header>
          
          <div className="relative fade-in mt-8 lg:mt-0" style={{ animationDelay: '300ms' }}>
            {/* Floating elements with performance optimization */}
            <FloatingElement 
              className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
              delay={500}
            >
              <Gift className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
            </FloatingElement>
            
            <FloatingElement
              className="absolute -top-4 sm:-top-8 -right-2 sm:-right-8 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-lg flex items-center justify-center"
              delay={700}
            >
              <Star className="w-5 h-5 sm:w-8 sm:h-8 text-white fill-current" />
            </FloatingElement>
            
            <FloatingElement
              className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl shadow-lg flex items-center justify-center"
              delay={1000}
            >
              <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </FloatingElement>
            
            {/* Enhanced phone mockup with performance optimization */}
            <figure className="relative bg-white rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300 will-change-transform">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center mb-4 sm:mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" aria-hidden="true"></div>
                <QrCode className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 mx-auto mb-2 sm:mb-4 animate-pulse" aria-label="QR Code for digital loyalty program" />
                <p className="font-bold text-sm sm:text-base lg:text-lg">No more lost punch cards!</p>
                <div className="absolute top-2 right-2 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-ping" aria-hidden="true"></div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-sm sm:text-base lg:text-lg">Progress</span>
                  <span className="text-teal-600 font-bold text-sm sm:text-base lg:text-lg bg-teal-50 px-2 sm:px-3 py-1 rounded-full">7/10 stamps</span>
                </div>
                <div className="grid grid-cols-5 gap-2 sm:gap-3" role="progressbar" aria-label="Loyalty progress: 7 out of 10 stamps collected">
                  {Array.from({ length: 10 }, (_, i) => (
                    <ProgressStamp key={i + 1} index={i + 1} isCompleted={i < 7} />
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-3 sm:p-4 lg:p-6 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent animate-pulse" aria-hidden="true"></div>
                  <p className="text-orange-700 font-bold text-xs sm:text-sm lg:text-lg relative">🎁 3 more visits to unlock your reward!</p>
                  <div className="w-full bg-orange-200 rounded-full h-1.5 sm:h-2 mt-2 sm:mt-3 relative" role="progressbar" aria-label="Progress to next reward">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-1.5 sm:h-2 rounded-full transition-all duration-300" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
              <figcaption className="sr-only">Example of digital loyalty card showing customer progress with 7 out of 10 stamps collected</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
