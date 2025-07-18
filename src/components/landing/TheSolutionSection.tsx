// ABOUTME: The solution section showing how Perkpad solves the inevitable digital transformation
// ABOUTME: Positions as the obvious choice for forward-thinking business owners

import { Shield, Zap, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const solutions = [
  {
    icon: Zap,
    title: "Instant Digital Transformation",
    description: "Go from punch cards to professional digital loyalty in 5 minutes. No technical skills, no complicated setup, no expensive consultants."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Without the Complexity",
    description: "The same advanced features that big chains use, designed specifically for local businesses. Advanced fraud protection, customer analytics, automated marketing."
  },
  {
    icon: Brain,
    title: "Smart Customer Intelligence",
    description: "Understand your customers like never before. See visit patterns, predict churn, identify your best customers, and create targeted campaigns that actually work."
  }
];

const TheSolutionSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-spacing container-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Solution header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-20" threshold={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              The <span className="text-gradient">Obvious Solution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perkpad gives you everything big chains have, designed for businesses like yours.
            </p>
          </AnimatedSection>
        </div>

        {/* Features that matter */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={solution.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-brand hover:shadow-brand-glow transition-shadow duration-300">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Product showcase */}
        <AnimatedSection className="mb-20" threshold={0.1}>
          <div className="relative bg-gradient-subtle rounded-3xl p-12 overflow-hidden">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                See It In Action
              </h3>
              <p className="text-lg text-gray-600">
                The professional loyalty platform that works for any business
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/5318a79b-c5e1-4799-9bdc-2a3420cbb4d7.png" 
                alt="Perkpad Dashboard - Professional loyalty management interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              
              {/* Live indicators */}
              <div className="absolute top-4 right-4 bg-brand-success text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                Ready to Use
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection className="text-center" threshold={0.1}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Lead Your Industry's Digital Future?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join the smart business owners who are building lasting customer relationships today.
            </p>
            <Button 
              onClick={() => window.open('https://app.perkpad.io', '_blank')}
              size="xl"
              className="btn-premium font-bold text-xl px-12 py-6"
            >
              Start Your Transformation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <p className="mt-4 text-gray-500 font-medium">
              Free 30-day access • Professional setup included • Cancel anytime
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TheSolutionSection;