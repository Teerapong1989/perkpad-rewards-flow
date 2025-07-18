import { ArrowRight, CheckCircle, XCircle, TrendingUp, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useState } from "react";

const problems = [
  {
    id: 1,
    icon: TrendingUp,
    category: "Customer Retention",
    before: "Customers visit once and disappear forever",
    beforeDetail: "70% never return after their first visit. No follow-up system, no reminders, no reason to come back.",
    after: "Automated loyalty program brings customers back",
    afterDetail: "Smart reminders, personalized rewards, and compelling reasons to return help increase repeat visits.",
    impact: "More repeat customers",
    impactNumber: "Repeat Visits"
  },
  {
    id: 2,
    icon: Target,
    category: "Competitive Advantage",
    before: "Can't compete with big chain loyalty programs", 
    beforeDetail: "Customers choose Starbucks over your coffee shop because they get points and rewards. Your paper punch cards can't compete.",
    after: "Professional-grade loyalty system levels the playing field",
    afterDetail: "The same powerful features that big chains use, designed specifically for local businesses.",
    impact: "Level playing field",
    impactNumber: "Compete"
  },
  {
    id: 3,
    icon: BarChart3,
    category: "Business Intelligence",
    before: "Zero insight into what actually works",
    beforeDetail: "You spend on ads and promotions but have no clue what brings customers back or drives revenue. Flying blind.",
    after: "Clear data shows exactly what drives results",
    afterDetail: "Track which campaigns work, identify your best customers, and see clear ROI on every marketing dollar.",
    impact: "Clear ROI on every marketing dollar",
    impactNumber: "Clear ROI"
  }
];

const ProblemsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleGetStarted = () => {
    window.open('https://app.perkpad.io', '_blank');
  };

  return (
    <section className="section-spacing container-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Three Problems We <span className="text-gradient">Solve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The hidden issues killing your customer retention
            </p>
          </AnimatedSection>
        </div>

        {/* Enhanced Problem Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={problem.id}
                className={`animate-fade-in-up card-premium h-full group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-brand group-hover:shadow-brand-glow transition-shadow duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-sm font-bold text-brand-primary uppercase tracking-wider">
                      {problem.category}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {problem.before}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {problem.beforeDetail}
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-brand-success rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-bold text-brand-success">Our Solution</span>
                    </div>
                    <p className="text-gray-700 font-medium">
                      {problem.afterDetail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results Summary */}
        <AnimatedSection className="mb-16" threshold={0.1}>
          <div className="card-premium p-12">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Why Loyalty Programs <span className="text-gradient">Work</span>
              </h3>
              <p className="text-xl text-gray-600">
                The science behind customer retention
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-brand-primary-light rounded-2xl hover-lift">
                <div className="text-4xl font-bold text-brand-primary mb-3">40%</div>
                <div className="font-bold text-gray-800 text-lg mb-2">More Repeat Visits</div>
                <div className="text-gray-600">Loyalty programs create customer habits</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-brand-accent-light rounded-2xl hover-lift">
                <div className="text-4xl font-bold text-brand-accent mb-3">3x</div>
                <div className="font-bold text-gray-800 text-lg mb-2">Higher Engagement</div>
                <div className="text-gray-600">Rewards create emotional connections</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-brand-success-light rounded-2xl hover-lift">
                <div className="text-4xl font-bold text-brand-success mb-3">85%</div>
                <div className="font-bold text-gray-800 text-lg mb-2">Better Insights</div>
                <div className="text-gray-600">Data-driven business decisions</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced CTA */}
        <AnimatedSection className="text-center" threshold={0.1}>
          <div className="bg-gradient-brand rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Ready to Stop Losing Customers?
              </h3>
              <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join 500+ businesses using Perkpad to increase customer retention by 40%
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  onClick={handleGetStarted}
                  size="xl"
                  className="bg-white text-brand-primary hover:bg-gray-50 font-bold shadow-xl hover:shadow-2xl micro-bounce"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="text-center">
                  <div className="text-white/90 font-semibold">
                    ✓ 30-day free trial
                  </div>
                  <div className="text-white/90 font-semibold">
                    ✓ 5-minute setup
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemsSection;