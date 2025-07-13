import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Check, TrendingDown, Users, Clock, Target, Shield, ArrowRight } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const problems = [
  {
    icon: TrendingDown,
    problem: "Customers visit once and never return",
    description: "70% of customers never come back after their first visit. You have no way to follow up or remind them about your business.",
    solution: "PerkPad sends automated reminders and creates compelling reasons to return with personalized rewards",
    stats: "Increase repeat visits by 40%"
  },
  {
    icon: Users,
    problem: "Big chains have better loyalty programs",
    description: "Customers choose Starbucks over your coffee shop because they get points, rewards, and recognition. You can't compete.",
    solution: "Get the same enterprise-grade loyalty features as Fortune 500 companies, tailored for your local business",
    stats: "Level the playing field"
  },
  {
    icon: Target,
    problem: "No idea which marketing actually works",
    description: "You spend money on Facebook ads, flyers, and promotions but have no clue what brings customers back or drives revenue.",
    solution: "Track exactly which campaigns drive visits, retention, and revenue with detailed analytics and AI insights",
    stats: "See clear ROI on every dollar spent"
  },
  {
    icon: Clock,
    problem: "Manual processes waste precious time",
    description: "Tracking customer visits, managing punch cards, and running promotions eats up hours you should spend growing your business.",
    solution: "Everything runs automatically - from stamp collection to reward delivery to customer communications",
    stats: "Save 10+ hours per week"
  },
  {
    icon: Shield,
    problem: "Paper cards get lost and forgotten",
    description: "Customers lose punch cards, forget to bring them, or you forget to stamp them. Loyalty efforts become frustrating for everyone.",
    solution: "Digital loyalty cards that customers always have on their phone, with automatic stamp collection via QR code",
    stats: "Zero lost rewards"
  },
  {
    icon: Users,
    problem: "Can't identify at-risk customers",
    description: "Your best customers quietly stop coming and you only notice months later when it's too late to win them back.",
    solution: "AI alerts you when loyal customers haven't visited recently and suggests personalized win-back campaigns",
    stats: "Recover 25% of at-risk customers"
  }
];

const ProblemsSection = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
  const { containerRef: problemsRef, isInView: problemsInView } = useMultipleInView(6, { threshold: 0.1 });

  const handleGetStarted = () => {
    window.open('https://app.perkpad.io', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <X className="w-4 h-4" />
              Common Business Problems
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Local Businesses <span className="text-red-500">Lose Customers</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These problems cost you thousands in lost revenue every month. But they don't have to.
            </p>
          </AnimatedSection>
        </div>

        {/* Problems Grid */}
        <div ref={problemsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedCard
                key={item.problem}
                isInView={problemsInView}
                delay={index * 100}
                hoverEffect
              >
                <Card className="border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-all duration-700 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Problem Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
                          {item.problem}
                        </h3>
                      </div>
                    </div>

                    {/* Problem Description */}
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                      {item.description}
                    </p>

                    {/* Solution */}
                    <div className="border-t border-slate-100 pt-4">
                      <div className="flex items-start gap-2 mb-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                      <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">
                        {item.stats}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Call to Action */}
        <AnimatedSection className="text-center" threshold={0.1}>
          <div className="bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Losing Customers Today
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of local businesses using PerkPad to increase customer retention and revenue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="bg-white text-brand-primary hover:bg-gray-50 text-lg px-8 py-6 rounded-xl font-semibold"
              >
                Start 30-Day Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="text-white/80 text-sm">
                No credit card required • Setup in 5 minutes
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemsSection;