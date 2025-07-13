import { ArrowRight, CheckCircle, XCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const problems = [
  {
    before: "Customers visit once and disappear forever",
    beforeDetail: "70% never return after their first visit. No follow-up system, no reminders, no reason to come back.",
    after: "Automated loyalty program brings customers back",
    afterDetail: "Smart reminders, personalized rewards, and compelling reasons to return increase repeat visits by 40%.",
    impact: "40% increase in repeat visits"
  },
  {
    before: "Can't compete with big chain loyalty programs", 
    beforeDetail: "Customers choose Starbucks over your coffee shop because they get points and rewards. Your paper punch cards can't compete.",
    after: "Professional-grade loyalty system levels the playing field",
    afterDetail: "The same powerful features that big chains use, designed specifically for local businesses.",
    impact: "Compete with any chain"
  },
  {
    before: "Zero insight into what actually works",
    beforeDetail: "You spend on ads and promotions but have no clue what brings customers back or drives revenue. Flying blind.",
    after: "Clear data shows exactly what drives results",
    afterDetail: "Track which campaigns work, identify your best customers, and see clear ROI on every marketing dollar.",
    impact: "Clear ROI on every marketing dollar"
  }
];

const ProblemsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleGetStarted = () => {
    window.open('https://app.perkpad.io', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-red-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              From Problem to Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how local businesses transform their customer relationships
            </p>
          </AnimatedSection>
        </div>

        {/* Before/After Comparisons */}
        <div className="space-y-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Before */}
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-800 mb-3">
                        Before: {problem.before}
                      </h3>
                      <p className="text-red-700 leading-relaxed">
                        {problem.beforeDetail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <ArrowRight className="w-12 h-12 text-slate-400" />
                </div>
                <div className="md:hidden flex justify-center">
                  <ArrowDown className="w-8 h-8 text-slate-400" />
                </div>

                {/* After */}
                <div className="bg-green-50 border-l-4 border-green-400 rounded-r-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-3">
                        After: {problem.after}
                      </h3>
                      <p className="text-green-700 leading-relaxed mb-4">
                        {problem.afterDetail}
                      </p>
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                        🎯 {problem.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16" threshold={0.1}>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-600 mb-6">
              Join local businesses already seeing these results with PerkPad
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary-dark text-white text-lg px-8 py-6 rounded-xl"
            >
              Start 30-Day Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-slate-500 mt-4">
              No credit card required • Setup in 5 minutes
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemsSection;