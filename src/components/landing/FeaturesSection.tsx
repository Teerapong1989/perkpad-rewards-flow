
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Gift, BarChart3, TrendingUp, Users, Zap } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const features = [
  {
    icon: QrCode,
    title: "Your customers will never lose another punch card",
    description: "No more \"I forgot my card at home\" excuses. Customers simply scan your QR code with their phone camera - no app downloads, no hassle. Average businesses see 34% more completed loyalty journeys.",
    gradient: "from-teal-500 to-teal-600",
    hoverColor: "group-hover:text-teal-600",
    metric: "34% more completed rewards"
  },
  {
    icon: Gift,
    title: "Design rewards that actually bring customers back",
    description: "Not just any reward - create compelling incentives that make customers choose you over competitors. Set rules that work for your business: buy 10 get 1 free, spend $100 get $15 off, or create surprise mystery rewards.",
    gradient: "from-orange-400 to-orange-500",
    hoverColor: "group-hover:text-orange-500",
    metric: "Average 23% increase in visit frequency"
  },
  {
    icon: BarChart3,
    title: "Know exactly which customers are worth VIP treatment",
    description: "Stop guessing who your loyal customers are. Get instant insights on visit patterns, spending habits, and reward preferences. Identify your top 20% of customers and treat them like the VIPs they are.",
    gradient: "from-purple-500 to-purple-600",
    hoverColor: "group-hover:text-purple-500",
    metric: "Identify your top 20% customers instantly"
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
            Stop losing money to forgotten punch cards
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            While your competitors are still using paper cards (and losing 23% of potential rewards), 
            you'll have a system that actually works for modern customers.
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
                        ⚡ {feature.metric}
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
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
