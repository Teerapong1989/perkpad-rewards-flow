
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Gift, BarChart3, Shield, Clock, Smartphone } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { memo } from "react";

const features = [
  {
    icon: QrCode,
    title: "Works for any business - from nail salons to auto shops",
    description: "Your customers simply scan your QR code with their phone camera - no app downloads, no physical cards to lose. Whether they're getting their nails done, car serviced, or buying coffee - their loyalty progress is always accessible.",
    gradient: "from-brand-primary-dark to-brand-accent",
    hoverColor: "group-hover:text-brand-primary-dark",
    benefit: "Universal compatibility, zero friction",
    bgAccent: "bg-brand-primary"
  },
  {
    icon: Gift,
    title: "Flexible rewards that fit your business model",
    description: "Nail salon offering the 10th manicure free? Auto shop with service discounts? Café with buy-9-get-1-free? Create rewards that actually make sense for your business and keep customers coming back.",
    gradient: "from-brand-accent to-brand-accent",
    hoverColor: "group-hover:text-brand-accent",
    benefit: "Customizable for any industry",
    bgAccent: "bg-brand-accent-light"
  },
  {
    icon: BarChart3,
    title: "Know your customers better than ever",
    description: "Stop guessing who your regulars are. Whether you're tracking haircut frequency, oil change intervals, or coffee habits - get clear insights on visit patterns and spending to build stronger relationships.",
    gradient: "from-brand-success to-brand-primary-dark",
    hoverColor: "group-hover:text-brand-success",
    benefit: "Customer insights for every business type",
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
    <section id="features" className="py-20 px-6 bg-white relative" ref={sectionRef}>
      {/* Floating geometric elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-brand-accent/5 rounded-full blur-lg"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Asymmetrical header layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          <div className="lg:col-span-3">
            <AnimatedSection threshold={0.1}>
              <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance">
                Built for real businesses, not just trendy cafés
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed text-balance">
                Whether you run a nail salon, auto repair shop, laundromat, barbershop, or café — 
                our digital loyalty system works for businesses that serve real communities.
              </p>
            </AnimatedSection>
          </div>
          
          {/* Side statistics */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection delay={200}>
              <div className="bg-brand-success-light border border-brand-success/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-brand-success mb-2">87%</div>
                <div className="text-sm text-gray-600">Customer retention increase</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="bg-brand-accent-light border border-brand-accent/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-brand-accent mb-2">2 min</div>
                <div className="text-sm text-gray-600">Average setup time</div>
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

        {/* Redesigned trust elements with asymmetrical layout */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {/* Left column - 2 elements stacked */}
            <div className="space-y-6 md:col-span-1">
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
            
            {/* Right side - large feature callout */}
            <div className="md:col-span-1 lg:col-span-2">
              <div className="bg-gradient-brand rounded-3xl p-8 text-white h-full flex items-center">
                <div>
                  <Smartphone className="w-12 h-12 mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-3">Works on Any Smartphone</h3>
                  <p className="text-lg opacity-90">
                    No apps to download. Your customers scan your QR code with their phone camera. 
                    It's that simple.
                  </p>
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
