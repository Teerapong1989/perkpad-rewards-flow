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
      ? 'bg-gradient-to-br from-brand-success-light to-brand-success' 
      : 'bg-gray-100 border-2 border-dashed border-gray-300'
  } rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200`}>
    {isCompleted ? (
      <Check className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" aria-label={`Stamp ${index} collected`} />
    ) : (
      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-gray-400 rounded-full" aria-label={`Stamp ${index} needed`}></div>
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
    <section className="hero-section relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-hero min-h-[90vh] sm:min-h-[80vh] lg:min-h-screen" role="main">
      {/* Background decoration - sophisticated layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 to-brand-accent-light/20 blur-3xl will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 sm:w-48 h-32 sm:h-48 lg:w-72 lg:h-72 bg-brand-primary-dark/10 rounded-full blur-3xl animate-pulse will-change-transform" aria-hidden="true"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 lg:w-96 lg:h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto relative flex items-center min-h-[80vh] sm:min-h-[70vh] lg:min-h-[85vh]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <header className="space-y-6 sm:space-y-8 fade-in">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                <Badge className="bg-gradient-brand text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-brand">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" aria-hidden="true" />
                  New: No setup fees for the first 100 businesses
                </Badge>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] text-center lg:text-left tracking-tight text-balance">
                Stop losing customers to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-dark via-brand-accent to-brand-accent">
                  forgotten punch cards
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium text-center lg:text-left max-w-2xl text-balance">
                Your customers scan a QR code. Their progress saves automatically. No apps, no lost cards, no frustration. Works for nail salons, auto shops, cafés — any local business.
              </p>
              
              {/* Problem statement with industry context */}
              <aside className="bg-brand-accent-light border-l-4 border-brand-accent p-3 sm:p-4 rounded-r-xl mx-2 sm:mx-0 shadow-md">
                <p className="text-gray-800 font-semibold text-sm sm:text-base">
                  Real talk: <span className="text-brand-accent font-bold">Most punch cards get lost or forgotten</span>. We built this because we were tired of carrying 12 different loyalty cards in our wallets.
                </p>
              </aside>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0">
                <Button 
                size="lg" 
                className="bg-gradient-brand hover:shadow-brand text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[48px] sm:min-h-[56px] will-change-transform text-white font-semibold"
                onClick={handleSignUpClick}
                aria-label="Start free today"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-brand-primary-dark text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] sm:min-h-[56px] will-change-transform font-semibold"
                onClick={handleDemoClick}
                asChild
              >
                <Link to="/how-it-works" aria-label="Learn how our loyalty program works">
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  See How It Works
                </Link>
              </Button>
            </div>
            
            {/* More honest guarantees */}
            <div className="space-y-3 sm:space-y-4 px-2 sm:px-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-brand-primary-dark font-semibold text-sm sm:text-base">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-accent rounded-full animate-pulse" aria-hidden="true"></div>
                <span>Takes 2 minutes to set up</span>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-success-light rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-brand-success" />
                  </div>
                  <span className="font-medium text-gray-700">Free to try</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-success-light rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-brand-success" />
                  </div>
                  <span className="font-medium text-gray-700">Cancel anytime</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-success-light rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-brand-success" />
                  </div>
                  <span className="font-medium text-gray-700">No long-term contracts</span>
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
            
            {/* Real Product Dashboard Screenshot */}
            <figure className="relative bg-white rounded-3xl shadow-elegant p-3 sm:p-4 lg:p-6 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300 will-change-transform">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/5318a79b-c5e1-4799-9bdc-2a3420cbb4d7.png" 
                  alt="Perkpad Business Dashboard - Loyalty Program Overview showing customer analytics, rewards tracking, and security features"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute top-2 right-2 w-2 h-2 sm:w-3 sm:h-3 bg-brand-success rounded-full animate-ping" aria-hidden="true"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Real product callout */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-brand-success text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                ✨ Live Dashboard
              </div>
              
              <figcaption className="sr-only">
                Real Perkpad dashboard interface showing loyalty program management, customer analytics, security status, and business tools for local businesses
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
