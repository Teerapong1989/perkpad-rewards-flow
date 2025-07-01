
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Target, Lightbulb } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const founderStory = {
  quote: "As a small coffee shop owner, I watched customers dig through wallets looking for punch cards they'd forgotten at home. Meanwhile, my drawer was full of half-completed cards from customers who never returned. I knew there had to be a better way - something as simple as scanning a QR code with their phone camera.",
  author: "The Perkpad Team",
  role: "Building for Small Business Owners",
  gradient: "from-teal-400 to-teal-500",
  cardGradient: "from-teal-50 to-white"
};

const earlyAccessBenefits = [
  {
    icon: Users,
    title: "Join 487 Founding Members",
    description: "Be among the businesses already making the switch this month. Your feedback directly influences our product development and priority support.",
    gradient: "from-purple-400 to-purple-500",
    cardGradient: "from-purple-50 to-white"
  },
  {
    icon: Target,
    title: "Built for Real Problems",
    description: "We're solving the actual pain points small businesses face with loyalty programs - lost cards, complex setups, and expensive monthly fees.",
    gradient: "from-orange-400 to-orange-500",
    cardGradient: "from-orange-50 to-white"
  }
];

const TestimonialsSection = () => {
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(3, { threshold: 0.2 });

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Why We're Building Perkpad
          </h2>
          <p className="text-xl text-slate-600">
            A simple solution born from real small business frustrations
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {/* Founder Story */}
          <AnimatedCard
            isInView={cardsInView}
            delay={100}
            hoverEffect
          >
            <Card className={`border-0 shadow-lg rounded-2xl bg-gradient-to-br ${founderStory.cardGradient} transition-all duration-700 h-full`}>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex mb-4">
                  <Lightbulb className="w-8 h-8 text-teal-500" />
                </div>
                
                <blockquote className="text-slate-700 text-lg mb-6 flex-grow italic">
                  "{founderStory.quote}"
                </blockquote>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className={`w-12 h-12 bg-gradient-to-br ${founderStory.gradient} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{founderStory.author}</div>
                    <div className="text-slate-600 text-sm">{founderStory.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>

          {/* Early Access Benefits */}
          {earlyAccessBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedCard
                key={benefit.title}
                isInView={cardsInView}
                delay={(index + 2) * 100}
                hoverEffect
              >
                <Card className={`border-0 shadow-lg rounded-2xl bg-gradient-to-br ${benefit.cardGradient} transition-all duration-700 h-full`}>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex mb-4">
                      <Icon className="w-8 h-8 text-slate-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
                    
                    <p className="text-slate-700 text-lg flex-grow leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Call to Action for Early Access */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to stop losing customers to forgotten punch cards?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Join 487 businesses that made the switch this month. Your 5-minute setup starts now.
            </p>
            <div className="flex items-center justify-center space-x-2 text-teal-600 font-semibold">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <span>30-day money-back guarantee • 5-minute setup promise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
