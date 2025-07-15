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
    <section className="section-spacing container-padding bg-gradient-to-br from-slate-50 via-white to-brand-primary-light/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Three Problems We Solve
            </h2>
          </AnimatedSection>
        </div>

        {/* Simple Problem Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={problem.id}
                className={`transition-all duration-700 delay-${index * 150} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                      {problem.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {problem.before}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {problem.beforeDetail}
                  </p>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <div className="text-sm font-semibold text-green-600 mb-2">
                      ✓ How we solve it:
                    </div>
                    <p className="text-slate-700 text-sm">
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
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Why Loyalty Programs Work
              </h3>
              <p className="text-slate-600 text-lg">
                The fundamentals that drive customer retention
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">Repeat Visits</div>
                <div className="text-blue-800 font-semibold">Build Customer Habits</div>
                <div className="text-blue-600 text-sm mt-1">Incentivize customers to return regularly</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">Engagement</div>
                <div className="text-purple-800 font-semibold">Stronger Relationships</div>
                <div className="text-purple-600 text-sm mt-1">Create emotional connections with rewards</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="text-2xl font-bold text-green-600 mb-2">Data Insights</div>
                <div className="text-green-800 font-semibold">Know Your Customers</div>
                <div className="text-green-600 text-sm mt-1">Track patterns and preferences</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced CTA */}
        <AnimatedSection className="text-center" threshold={0.1}>
          <div className="bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 border border-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join local businesses using modern loyalty technology. Start your transformation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-white text-brand-primary hover:bg-gray-50 text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start 30-Day Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="text-center">
                  <div className="text-white/90 text-sm">
                    ✓ 30-day free trial available
                  </div>
                  <div className="text-white/90 text-sm">
                    ✓ Setup in 5 minutes
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