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
    afterDetail: "Smart reminders, personalized rewards, and compelling reasons to return increase repeat visits by 40%.",
    impact: "40% increase in repeat visits",
    impactNumber: "+40%"
  },
  {
    id: 2,
    icon: Target,
    category: "Competitive Advantage",
    before: "Can't compete with big chain loyalty programs", 
    beforeDetail: "Customers choose Starbucks over your coffee shop because they get points and rewards. Your paper punch cards can't compete.",
    after: "Professional-grade loyalty system levels the playing field",
    afterDetail: "The same powerful features that big chains use, designed specifically for local businesses.",
    impact: "Compete with any chain",
    impactNumber: "100%"
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
          <AnimatedSection className="text-center mb-20" threshold={0.1}>
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Transformation Stories
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              From Problem to{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              See how local businesses transform their customer relationships with measurable results
            </p>
          </AnimatedSection>
        </div>

        {/* Interactive Problem/Solution Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={problem.id}
                className={`group transition-all duration-700 delay-${index * 150} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                onMouseEnter={() => setHoveredCard(problem.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-[500px] perspective-1000">
                  {/* Card Container with 3D flip */}
                  <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    hoveredCard === problem.id ? 'rotate-y-180' : ''
                  }`}>
                    
                    {/* Front Side - Problem */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                            <XCircle className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                              {problem.category}
                            </div>
                            <div className="text-sm font-medium text-red-800">
                              Current Problem
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-red-900 mb-4 leading-tight">
                          {problem.before}
                        </h3>
                        
                        <p className="text-red-700 leading-relaxed flex-grow">
                          {problem.beforeDetail}
                        </p>
                        
                        <div className="mt-6 pt-4 border-t border-red-200">
                          <div className="text-xs text-red-600 font-medium mb-1">
                            Hover to see solution
                          </div>
                          <div className="w-full bg-red-200 rounded-full h-1">
                            <div className="bg-red-500 h-1 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Side - Solution */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-lg">
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                              {problem.category}
                            </div>
                            <div className="text-sm font-medium text-green-800">
                              PerkPad Solution
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-green-900 mb-4 leading-tight">
                          {problem.after}
                        </h3>
                        
                        <p className="text-green-700 leading-relaxed flex-grow">
                          {problem.afterDetail}
                        </p>
                        
                        <div className="mt-6 pt-4 border-t border-green-200">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl text-center">
                            <div className="text-2xl font-bold">
                              {problem.impactNumber}
                            </div>
                            <div className="text-xs font-medium opacity-90">
                              {problem.impact}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                Real Results from Real Businesses
              </h3>
              <p className="text-slate-600 text-lg">
                These aren't just promises - they're proven outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-blue-800 font-semibold">More Repeat Visits</div>
                <div className="text-blue-600 text-sm mt-1">Average increase across all business types</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">3x</div>
                <div className="text-purple-800 font-semibold">Customer Lifetime Value</div>
                <div className="text-purple-600 text-sm mt-1">Through strategic reward programs</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-green-800 font-semibold">Setup Success Rate</div>
                <div className="text-green-600 text-sm mt-1">Businesses see results within 30 days</div>
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
                Join 500+ local businesses already seeing these results. Start your transformation today.
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
                    ✓ No credit card required
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