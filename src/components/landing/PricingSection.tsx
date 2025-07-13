import { Button } from "@/components/ui/button";
import { Check, Calculator, Crown } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const pricingPlans = [
  {
    name: "Free",
    price: "$0", 
    period: "per month",
    features: [
      "1 location",
      "QR stamp card system", 
      "Basic dashboard",
      "Limited customization"
    ],
    limitations: [
      "No AI insights",
      "No SMS marketing",
      "No staff management",
      "Basic features only"
    ],
    buttonText: "Start Free",
    description: "Perfect for testing with real customers"
  },
  {
    name: "Pro",
    price: "$30", 
    period: "per month",
    popular: true,
    features: [
      "Everything in Free, plus:",
      "🤖 AI customer retention insights",
      "📱 SMS & email marketing campaigns", 
      "👥 Staff roles & access control (up to 10)",
      "Add your logo and colors",
      "Customer contact info",
      "Create custom rewards",
      "Automated campaigns"
    ],
    addon: "+$10/month per extra location",
    buttonText: "Start 30-Day Free Trial",
    description: "Most popular for growing businesses"
  },
  {
    name: "Growth",
    price: "$60",
    period: "per month", 
    features: [
      "Everything in Pro, plus:",
      "🧠 Advanced AI with predictive analytics",
      "👥 Unlimited staff members",
      "📊 Advanced ROI & profit analytics",
      "Multi-user access with role permissions",
      "Cross-location data insights",
      "Location performance comparison",
      "Priority support"
    ],
    addon: "3 locations included, +$8/month per extra",
    buttonText: "Start 30-Day Free Trial", 
    description: "Advanced features for established businesses"
  }
];

const PricingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handlePlanClick = () => {
    window.open('https://app.perkpad.io', '_blank');
  };

  return (
    <section id="pricing" className="section-spacing container-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees, no long-term contracts.
            </p>
          </AnimatedSection>
        </div>

        {/* Mobile-First Pricing Cards */}
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Mobile: Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl shadow-lg border relative overflow-hidden ${plan.popular ? 'border-brand-primary ring-2 ring-brand-primary/20' : 'border-slate-200'}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 text-center text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-slate-800 mb-1">{plan.price}</div>
                    <div className="text-slate-600 mb-2">{plan.period}</div>
                    {plan.addon && (
                      <div className="text-sm text-slate-500">{plan.addon}</div>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations && (
                      <div className="pt-4 border-t border-slate-200">
                        <div className="text-sm text-slate-500 mb-2">Not included:</div>
                        {plan.limitations.map((limitation, index) => (
                          <div key={index} className="flex items-start gap-3 text-slate-400">
                            <span className="w-5 h-5 flex-shrink-0 text-center mt-0.5">—</span>
                            <span className="text-sm">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <Button
                    onClick={handlePlanClick}
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full mb-3 ${plan.popular ? 'bg-brand-primary hover:bg-brand-primary-dark' : ''}`}
                  >
                    {plan.buttonText}
                  </Button>
                  <p className="text-xs text-slate-500 text-center">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table Layout */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-lg border border-slate-200 overflow-visible relative">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200 relative">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800">Features</h3>
              </div>
              {pricingPlans.map((plan) => (
                <div key={plan.name} className={`p-6 text-center relative ${plan.popular ? 'bg-brand-primary text-white shadow-xl ring-2 ring-brand-primary/20 pt-10' : 'bg-white'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>
                    {plan.price}
                  </div>
                  <div className={`text-sm mb-2 ${plan.popular ? 'text-white/95' : 'text-slate-600'}`}>
                    {plan.period}
                  </div>
                  {plan.addon && (
                    <div className={`text-xs leading-tight mt-2 ${plan.popular ? 'text-white/95 font-medium' : 'text-slate-500'}`}>
                      {plan.addon}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-slate-200">
              <div className="grid grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">Core Features</div>
                <div className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></div>
                <div className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></div>
                <div className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></div>
              </div>

              <div className="grid grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">AI Customer Insights</div>
                <div className="p-4 text-center"><span className="text-slate-400">—</span></div>
                <div className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></div>
                <div className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></div>
              </div>

              <div className="grid grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">SMS Marketing</div>
                <div className="p-4 text-center"><span className="text-slate-400">—</span></div>
                <div className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></div>
                <div className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></div>
              </div>

              <div className="grid grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">Staff Management</div>
                <div className="p-4 text-center"><span className="text-slate-400">—</span></div>
                <div className="p-4 text-center"><span className="text-slate-600 text-sm">Up to 10</span></div>
                <div className="p-4 text-center"><span className="text-slate-600 text-sm">Unlimited</span></div>
              </div>

              <div className="grid grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">Advanced Analytics</div>
                <div className="p-4 text-center"><span className="text-slate-400">—</span></div>
                <div className="p-4 text-center"><span className="text-slate-400">—</span></div>
                <div className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-4 bg-slate-50 border-t border-slate-200">
              <div className="p-6">
                <div className="text-sm text-slate-600">Choose the plan that fits your business</div>
              </div>
              {pricingPlans.map((plan) => (
                <div key={plan.name} className="p-6">
                  <Button
                    onClick={handlePlanClick}
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full mb-3 ${plan.popular ? 'bg-brand-primary hover:bg-brand-primary-dark' : ''}`}
                  >
                    {plan.buttonText}
                  </Button>
                  <p className="text-xs text-slate-500 text-center">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <AnimatedSection className="text-center mt-12" threshold={0.1}>
          <p className="text-slate-600">
            All plans include 30-day free trial • No credit card required • Cancel anytime
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;