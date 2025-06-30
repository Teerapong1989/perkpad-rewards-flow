
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Gift, BarChart3 } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const features = [
  {
    icon: QrCode,
    title: "QR Code Check-In",
    description: "Customers simply scan your unique QR code to earn stamps. No app downloads, no hassle - just point, scan, and collect rewards.",
    gradient: "from-teal-500 to-teal-600",
    hoverColor: "group-hover:text-teal-600"
  },
  {
    icon: Gift,
    title: "Custom Rewards",
    description: "Set your own reward rules. Buy 10 get 1 free, spend $100 get $10 off - you decide what works best for your business.",
    gradient: "from-orange-400 to-orange-500",
    hoverColor: "group-hover:text-orange-500"
  },
  {
    icon: BarChart3,
    title: "Customer Insights",
    description: "Track visits, monitor redemptions, and understand customer behavior with simple analytics that actually help your business grow.",
    gradient: "from-purple-500 to-purple-600",
    hoverColor: "group-hover:text-purple-500"
  }
];

const FeaturesSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(3, { threshold: 0.2 });

  return (
    <section id="features" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Everything you need to build customer loyalty
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple tools that help small businesses create meaningful connections with their customers.
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedCard
                key={feature.title}
                isInView={cardsInView}
                delay={(index + 1) * 100}
                hoverEffect
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className={`text-2xl text-slate-800 ${feature.hoverColor} transition-colors duration-300`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
