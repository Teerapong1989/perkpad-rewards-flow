
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Target, Lightbulb } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const founderStory = {
  quote: "After seeing successful franchises with sophisticated loyalty systems, we asked: why can't every local business have professional-grade features? We built a platform with AI insights, multi-location management, advanced security, and powerful analytics - all at small business prices.",
  author: "The Perkpad Team",
  role: "Professional Features for Everyone",
  gradient: "from-teal-400 to-teal-500",
  cardGradient: "from-teal-50 to-white"
};

const earlyAccessBenefits = [
  {
    icon: Users,
    title: "Production-Ready Platform",
    description: "Built with the same infrastructure standards as Fortune 500 companies. Real-time sync, automated backups, 99.9% uptime SLA, and professional-grade security features that protect your customer data.",
    gradient: "from-purple-400 to-purple-500",
    cardGradient: "from-purple-50 to-white"
  },
  {
    icon: Target,
    title: "Complete Business Intelligence",
    description: "AI-powered customer retention insights, predictive analytics, ROI tracking, and automated campaign management. Get the same insights as big chains, tailored for your local business.",
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
            Professional Technology for Local Business
          </h2>
          <p className="text-xl text-slate-600">
            Built by experienced engineers who understand both technology and small business needs
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
              Start with professional-grade tools today
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Multi-location management, AI insights, advanced security, SMS campaigns, and comprehensive analytics. Everything you need to compete with the big chains.
            </p>
            <div className="flex items-center justify-center space-x-2 text-teal-600 font-semibold">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <span>Free trial • Cancel anytime • No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
