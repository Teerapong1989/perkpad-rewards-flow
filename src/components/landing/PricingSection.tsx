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
    <section className="section-spacing container-padding bg-gradient-to-br from-slate-50 to-white">
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

        {/* Pricing Table */}
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 lg:grid-cols-4 bg-slate-50 border-b border-slate-200">
              <div className="p-4 lg:p-6 hidden lg:block">
                <h3 className="text-lg font-semibold text-slate-800">Features</h3>
              </div>
              {pricingPlans.map((plan) => (
                <div key={plan.name} className={`p-6 text-center relative ${plan.popular ? 'bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white shadow-lg ring-2 ring-brand-accent/50' : 'bg-white'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
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
                    <div className={`text-xs leading-tight ${plan.popular ? 'text-white font-medium bg-white/20 px-2 py-1 rounded mt-1' : 'text-slate-500 mt-2'}`}>
                      {plan.addon}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-slate-200">
              {/* Main Features */}
              <div className="grid md:grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">
                  Core Features
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </div>
              </div>

              <div className="grid md:grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">
                  AI Customer Insights
                </div>
                <div className="p-4 text-center">
                  <span className="text-slate-400">—</span>
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </div>
              </div>

              <div className="grid md:grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">
                  SMS Marketing
                </div>
                <div className="p-4 text-center">
                  <span className="text-slate-400">—</span>
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </div>
              </div>

              <div className="grid md:grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">
                  Staff Management
                </div>
                <div className="p-4 text-center">
                  <span className="text-slate-400">—</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-slate-600 text-sm">Up to 10</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-slate-600 text-sm">Unlimited</span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 py-4">
                <div className="p-4 font-medium text-slate-700">
                  Advanced Analytics
                </div>
                <div className="p-4 text-center">
                  <span className="text-slate-400">—</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-slate-400">—</span>
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-4 bg-slate-50 border-t border-slate-200">
              <div className="p-6">
                <div className="text-sm text-slate-600">
                  Choose the plan that fits your business
                </div>
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
                  <p className="text-xs text-slate-500 text-center">
                    {plan.description}
                  </p>
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