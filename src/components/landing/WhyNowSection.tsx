// ABOUTME: Market reality section showing why digital transformation is inevitable
// ABOUTME: Creates urgency through market trends and competitive pressure

import { TrendingUp, Users, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const realities = [
  {
    icon: TrendingUp,
    title: "The Market Has Shifted",
    description: "Customers now expect digital experiences everywhere. Starbucks, McDonald's, and major chains have trained consumers to expect rewards at every visit.",
    impact: "78% prefer digital loyalty over punch cards",
    trend: "Growing 23% yearly"
  },
  {
    icon: Users,
    title: "Competition is Intensifying", 
    description: "Big chains use sophisticated loyalty data to steal your customers. They know purchase patterns, send targeted offers, and create emotional connections.",
    impact: "Local businesses losing 15% market share",
    trend: "Accelerating post-pandemic"
  },
  {
    icon: Clock,
    title: "The Window is Closing",
    description: "Early adopters are already seeing 40%+ retention increases. The longer you wait, the harder it becomes to catch up with digitally-native competitors.",
    impact: "Early adopters gaining 2x advantage",
    trend: "Gap widening monthly"
  }
];

const WhyNowSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-spacing container-padding bg-gradient-to-br from-gray-50 to-red-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Urgent header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-20" threshold={0.1}>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Market Alert
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Why Smart Business Owners Are Acting <span className="text-gradient">Right Now</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The digital loyalty revolution isn't coming—it's here. And every day you wait puts you further behind.
            </p>
          </AnimatedSection>
        </div>

        {/* Market realities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {realities.map((reality, index) => {
            const Icon = reality.icon;
            return (
              <div 
                key={reality.title}
                className="card-premium p-8 text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reality.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {reality.description}
                </p>
                
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4">
                  <div className="text-xl font-bold text-red-600 mb-1">{reality.impact}</div>
                  <div className="text-sm text-red-700 font-medium">{reality.trend}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Urgency CTA */}
        <AnimatedSection className="text-center" threshold={0.1}>
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 tracking-tight">
                The Cost of Waiting is Growing Every Day
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                While you're thinking about it, your competitors are building digital customer relationships that will last for years.
              </p>
              <Button 
                onClick={() => window.open('https://app.perkpad.io', '_blank')}
                size="xl"
                className="bg-white text-red-600 hover:bg-gray-50 font-bold shadow-xl hover:shadow-2xl micro-bounce"
              >
                Don't Get Left Behind
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <p className="mt-4 text-white/80 text-sm">
                Start your digital transformation today • Free 30-day access
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyNowSection;