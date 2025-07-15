import { Check, Shield, Brain, Users, BarChart3, Smartphone, ArrowDown, ArrowRight } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    icon: Smartphone,
    title: "Customer Scans QR Code",
    description: "No app download - just scan with phone camera",
    details: "Works with any smartphone. Opens in web browser."
  },
  {
    icon: Shield,
    title: "Location Verification",
    description: "GPS confirms they're at your business",
    details: "Prevents fraud while making check-in easy."
  },
  {
    icon: Users,
    title: "Instant Stamp Collection",
    description: "Stamps automatically added to digital card",
    details: "Staff can add stamps manually. Real-time sync."
  },
  {
    icon: Brain,
    title: "AI Analyzes Patterns",
    description: "Smart insights about customer behavior",
    details: "Tracks visits, peak times, and retention patterns."
  },
  {
    icon: Check,
    title: "Automated Rewards",
    description: "Customers earn and redeem rewards seamlessly",
    details: "Configurable rewards with surprise bonuses."
  }
];

const securityFeatures = [
  "Bank-level encryption",
  "GPS fraud prevention", 
  "Secure staff PINs",
  "Real-time backup"
];

const HowItWorksSection = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.1 });
  const { ref: securityRef, isInView: securityInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              5 Steps
            </h2>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className={`relative transition-all duration-1000 ${timelineInView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary via-brand-accent to-brand-primary transform md:-translate-x-1/2"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={step.title} className={`relative flex items-center mb-16 last:mb-0 transition-all duration-700 delay-${index * 100} ${timelineInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {/* Icon Circle */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10 w-16 h-16 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>
                
                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-brand-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Section */}
        <div ref={securityRef} className={`mt-20 transition-all duration-1000 ${securityInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Security Built In
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Professional-grade security protects your data.
                </p>
                <div className="space-y-3">
                  {securityFeatures.map((feature, index) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center shadow-2xl">
                  <Shield className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;