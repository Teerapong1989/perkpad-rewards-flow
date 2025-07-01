
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Gift, BarChart3, Shield, Clock, Smartphone } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { memo } from "react";

const features = [
  {
    icon: QrCode,
    title: "Never lose another customer to forgotten punch cards",
    description: "Your customers simply scan your QR code with their phone camera - no app downloads, no physical cards to lose. Their loyalty progress is always in their pocket, ready when they are.",
    gradient: "from-teal-500 to-teal-600",
    hoverColor: "group-hover:text-teal-600",
    benefit: "Always accessible, never forgotten"
  },
  {
    icon: Gift,
    title: "Design rewards that actually motivate customers",
    description: "Create compelling incentives that make customers choose you over competitors. Set flexible rules that work for your business: buy 10 get 1 free, spend $100 get $15 off, or surprise mystery rewards.",
    gradient: "from-orange-400 to-orange-500",
    hoverColor: "group-hover:text-orange-500",
    benefit: "Flexible reward structures"
  },
  {
    icon: BarChart3,
    title: "Finally see who your most loyal customers really are",
    description: "Stop guessing and start knowing. Get clear insights on visit patterns, spending habits, and reward preferences. Identify your VIP customers and treat them accordingly.",
    gradient: "from-purple-500 to-purple-600",
    hoverColor: "group-hover:text-purple-500",
    benefit: "Data-driven customer insights"
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
      <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group cursor-pointer h-full">
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className={`text-2xl text-slate-800 ${feature.hoverColor} transition-colors duration-300`}>
            {feature.title}
          </CardTitle>
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-lg p-2 mt-2">
            <span className="text-sm font-bold text-teal-700">
              ⚡ {feature.benefit}
            </span>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
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
    <section id="features" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Stop losing customers to forgotten punch cards
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            While your competitors are still using paper cards (and losing customers who forget them), 
            you'll have a system that works for modern customers.
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isInView={cardsInView}
            />
          ))}
        </div>

        {/* Add authentic trust elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <TrustElement
            icon={Shield}
            text="SSL Secured & Privacy Protected"
            bgColor="bg-green-50"
            textColor="text-green-800"
          />
          <TrustElement
            icon={Clock}
            text="5-Minute Setup Promise"
            bgColor="bg-blue-50"
            textColor="text-blue-800"
          />
          <TrustElement
            icon={Smartphone}
            text="Works on Any Smartphone"
            bgColor="bg-purple-50"
            textColor="text-purple-800"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
