import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calculator, Crown } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const pricingPlans = [
  {
    name: "Free",
    price: "$0", 
    period: "per month",
    locations: "1 location (limited features)",
    addon: "Upgrade to unlock full features",
    savings: "Perfect for small businesses getting started",
    features: [
      "1 location",
      "QR stamp card system",
      "Basic dashboard",
      "No customization",
      "Limited features"
    ],
    buttonText: "Start Free",
    buttonVariant: "outline" as const,
    popular: false,
    roi: "Test it with real customers"
  },
  {
    name: "Pro",
    price: "$30", 
    period: "per month",
    locations: "1 location included",
    addon: "+$10/month per extra location",
    savings: "Most popular for growing businesses + AI & SMS",
    features: [
      "Everything in Free, plus:",
      "🤖 AI customer retention insights",
      "📱 SMS & email marketing campaigns",
      "👥 Staff roles & access control (up to 10)",
      "Add your logo and colors",
      "Customer contact info",
      "Create custom rewards",
      "Automated campaigns & customer engagement tools"
    ],
    buttonText: "Start 30-Day Trial",
    buttonVariant: "default" as const,
    popular: true,
    roi: "Usually pays for itself quickly"
  },
  {
    name: "Growth",
    price: "$60",
    period: "per month",
    locations: "3 locations included",
    addon: "+$8/month per extra location",
    savings: "Advanced features for established businesses",
    features: [
      "Everything in Pro, plus:",
      "🧠 Advanced AI with predictive analytics",
      "👥 Unlimited staff members",
      "📊 Advanced ROI & profit analytics",
      "Multi-user access with role-based permissions",
      "See data across all locations",
      "Compare location performance",
      "Priority support"
    ],
    buttonText: "Start 30-Day Trial",
    buttonVariant: "default" as const,
    popular: false,
    roi: "Great for multi-location owners"
  }
];

const PricingSection = () => {
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(3, { threshold: 0.2 });

  const handlePlanClick = (planName: string) => {
    // All plans lead to Tally form for now
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Honest pricing, no surprises
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Most businesses see their investment back in the first month. If you don't, we'll make it right.
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard
              key={plan.name}
              isInView={cardsInView}
              delay={(index + 1) * 100}
              hoverEffect
            >
              <Card className={`border-2 ${plan.popular ? 'border-brand-accent bg-gradient-to-br from-white to-brand-accent-light ring-2 ring-brand-accent/20' : 'border-gray-200'} rounded-2xl relative transform transition-all duration-500 h-full flex flex-col shadow-lg`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-brand text-white">
                    <Crown className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl font-semibold text-gray-900">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-gray-600">{plan.period}</div>
                    <div className="text-sm font-medium text-brand-primary-dark">{plan.savings}</div>
                  </div>
                  
                  {/* Location information */}
                  <div className="bg-brand-primary border border-brand-primary-dark/20 rounded-lg p-3 mt-4">
                    <div className="text-center space-y-1">
                      <div className="font-semibold text-brand-primary-dark">{plan.locations}</div>
                      <div className="text-xs text-gray-600">{plan.addon}</div>
                    </div>
                  </div>
                  
                  {/* ROI indicator */}
                  <div className="bg-brand-success-light border border-brand-success/20 rounded-lg p-3 mt-3">
                    <div className="flex items-center space-x-2">
                      <Calculator className="w-4 h-4 text-brand-success" />
                      <span className="text-brand-success font-bold text-sm">{plan.roi}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-brand-success flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-auto ${plan.popular ? 'bg-gradient-brand text-white shadow-brand' : ''}`} 
                    variant={plan.buttonVariant}
                    onClick={() => handlePlanClick(plan.name)}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  {/* Honest guarantee */}
                  <p className="text-xs text-center text-gray-500 mt-2">
                    No long-term contracts
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
        
        {/* Simpler trust signals */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600 text-lg">
            <strong>Free to try</strong> • <strong>No setup fees</strong> • <strong>Cancel anytime</strong>
          </p>
          <p className="text-sm text-gray-500">
            Used by local businesses across the country
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
