
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Gift, BarChart3, Shield, Clock, Smartphone } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { memo } from "react";

const features = [
  {
    icon: QrCode,
    title: "Your customers already know how to use it",
    description: "They scan your QR code with their phone camera. That's it. No app downloads, no account creation, no confusing onboarding. Whether they're getting their car fixed or nails done, it just works.",
    gradient: "from-brand-primary-dark to-brand-accent",
    hoverColor: "group-hover:text-brand-primary-dark",
    benefit: "Zero learning curve",
    bgAccent: "bg-brand-primary"
  },
  {
    icon: Gift,
    title: "Rewards that actually make sense for your business",
    description: "Hair salon? 10th cut free. Auto shop? $50 off after 5 oil changes. Coffee shop? Buy 9, get 1. Create rewards that fit how your business actually works, not some generic template.",
    gradient: "from-brand-accent to-brand-accent",
    hoverColor: "group-hover:text-brand-accent",
    benefit: "Fits your business model",
    bgAccent: "bg-brand-accent-light"
  },
  {
    icon: BarChart3,
    title: "Finally know who your regulars actually are",
    description: "Stop wondering if Maria comes in twice a week or twice a month. See which customers are worth keeping, when they usually visit, and what keeps them coming back. Data that actually helps.",
    gradient: "from-brand-success to-brand-primary-dark",
    hoverColor: "group-hover:text-brand-success",
    benefit: "Real customer insights",
    bgAccent: "bg-brand-success-light"
  }
];

const FeatureCard = memo(({ feature, index, isInView }: { feature: typeof features[0], index: number, isInView: boolean }) => {
  const Icon = feature.icon;
  
  return (
    <AnimatedCard
      isInView={isInView}
      delay={(index + 1) * 100}
      hoverEffect
    >
      <Card className="border-0 shadow-elegant hover:shadow-brand transition-all duration-500 rounded-2xl group cursor-pointer h-full bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className={`text-2xl font-semibold text-gray-900 ${feature.hoverColor} transition-colors duration-300`}>
            {feature.title}
          </CardTitle>
          <div className={`${feature.bgAccent} border border-gray-200 rounded-lg p-2 mt-2`}>
            <span className="text-sm font-bold text-gray-700">
              ⚡ {feature.benefit}
            </span>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {feature.description}
          </CardDescription>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
});

FeatureCard.displayName = 'FeatureCard';

const TrustElement = memo(({ icon: Icon, text, bgColor, textColor }: { 
  icon: any, 
  text: string, 
  bgColor: string, 
  textColor: string 
}) => (
  <div className={`flex items-center justify-center space-x-3 p-4 ${bgColor} rounded-xl`}>
    <Icon className={`w-6 h-6 ${textColor}`} />
    <span className={`${textColor} font-medium`}>{text}</span>
  </div>
));

TrustElement.displayName = 'TrustElement';

const FeaturesSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(3, { threshold: 0.2 });

  return (
    <section id="features" className="py-16 lg:py-20 px-6 bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Cleaner header layout */}
        <div className="text-center mb-16 lg:mb-20">
          <AnimatedSection threshold={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance max-w-4xl mx-auto">
              We built this for the businesses everyone else ignores
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-balance max-w-3xl mx-auto">
              Sure, trendy coffee shops get all the startup attention. But what about Maria's nail salon? Tony's auto shop? The laundromat on 5th Street? They need loyal customers too.
            </p>
          </AnimatedSection>
          
          {/* Side statistics - now below header */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 max-w-4xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="bg-brand-success-light border border-brand-success/20 rounded-2xl p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-success mb-2">87%</div>
                <div className="text-xs lg:text-sm text-gray-600">Customer retention increase</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="bg-brand-accent-light border border-brand-accent/20 rounded-2xl p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-accent mb-2">2 min</div>
                <div className="text-xs lg:text-sm text-gray-600">Average setup time</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <div className="bg-brand-primary border border-brand-primary-dark/20 rounded-2xl p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-primary-dark mb-2">5k+</div>
                <div className="text-xs lg:text-sm text-gray-600">Businesses served</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={800}>
              <div className="bg-gray-100 border border-gray-200 rounded-2xl p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2">24/7</div>
                <div className="text-xs lg:text-sm text-gray-600">Always available</div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Staggered feature cards layout */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* First card - normal position */}
          <div className="lg:mt-0">
            <FeatureCard feature={features[0]} index={0} isInView={cardsInView} />
          </div>
          
          {/* Second card - raised */}
          <div className="lg:-mt-12">
            <FeatureCard feature={features[1]} index={1} isInView={cardsInView} />
          </div>
          
          {/* Third card - normal position */}
          <div className="lg:mt-0">
            <FeatureCard feature={features[2]} index={2} isInView={cardsInView} />
          </div>
        </div>

        {/* Redesigned trust elements with mobile-first layout */}
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-4 lg:gap-6 max-w-5xl">
            {/* Mobile: all elements stack vertically */}
            {/* Desktop: left column has 2 stacked, right has large callout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* First two elements - stack on mobile, column on desktop */}
              <div className="space-y-4 lg:space-y-6 md:col-span-1">
                <TrustElement
                  icon={Shield}
                  text="SSL Secured & Privacy Protected"
                  bgColor="bg-brand-success-light"
                  textColor="text-brand-success"
                />
                <TrustElement
                  icon={Clock}
                  text="2-Minute Setup Promise"
                  bgColor="bg-brand-primary"
                  textColor="text-brand-primary-dark"
                />
              </div>
              
              {/* Large feature callout */}
              <div className="md:col-span-1 lg:col-span-2">
                <div className="bg-gradient-brand rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white h-full flex items-center">
                  <div>
                    <Smartphone className="w-8 h-8 lg:w-12 lg:h-12 mb-3 lg:mb-4 opacity-80" />
                    <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-3">Works on Any Smartphone</h3>
                    <p className="text-sm lg:text-lg opacity-90 leading-relaxed">
                      No apps to download. Your customers scan your QR code with their phone camera. 
                      It's that simple.
                    </p>
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

export default memo(FeaturesSection);
