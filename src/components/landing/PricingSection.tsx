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
    savings: "Perfect for getting started",
    features: [
      "1 location",
      "QR stamp card system",
      "Basic dashboard",
      "No customization"
    ],
    buttonText: "Start Free",
    buttonVariant: "outline" as const,
    popular: false,
    roi: "Perfect for testing"
  },
  {
    name: "Pro",
    price: "$30", 
    period: "per month",
    locations: "1 location included",
    addon: "+$10/month per extra location",
    savings: "Perfect for single locations",
    features: [
      "1 location included",
      "Everything in Free, plus:",
      "Custom branding (logo + color)",
      "Advanced customer database",
      "Email/SMS marketing (basic)",
      "Reward customization",
      "Staff PIN system for redemptions",
      "Business insights & analytics"
    ],
    buttonText: "Start Free 30-Day Trial",
    buttonVariant: "default" as const,
    popular: true,
    roi: "Typical ROI: $870/month"
  },
  {
    name: "Growth",
    price: "$60",
    period: "per month",
    locations: "3 locations included",
    addon: "+$8/month per extra location",
    savings: "Best for growing businesses",
    features: [
      "3 locations included",
      "Everything in Pro, plus:",
      "Multi-location dashboard",
      "Location-based reporting", 
      "Advanced analytics",
      "Printed sign-ready QR downloads",
      "Priority support"
    ],
    buttonText: "Start Free 30-Day Trial",
    buttonVariant: "default" as const,
    popular: false,
    roi: "Typical ROI: $1,770/month"
  }
];

const PricingSection = () => {
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(3, { threshold: 0.2 });

  const handlePlanClick = (planName: string) => {
    // All plans lead to Tally form for now
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Pricing that pays for itself in week 1
          </h2>
          <p className="text-xl text-slate-600">
            If you don't see more repeat customers in 60 days, we'll refund everything + pay you $100
          </p>
          
          {/* Urgency element */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6 max-w-md mx-auto">
            <p className="text-red-800 font-semibold">
              ⏰ Only 47 new businesses accepted this week
            </p>
          </div>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard
              key={plan.name}
              isInView={cardsInView}
              delay={(index + 1) * 100}
              hoverEffect
            >
              <Card className={`border-2 ${plan.popular ? 'border-teal-300 bg-gradient-to-br from-white to-teal-50 ring-2 ring-teal-200' : 'border-slate-200'} rounded-2xl relative transform transition-all duration-500 h-full flex flex-col`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 hover:bg-teal-700">
                    <Crown className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">{plan.price}</div>
                    <div className="text-slate-600">{plan.period}</div>
                    <div className="text-sm font-medium text-teal-600">{plan.savings}</div>
                  </div>
                  
                  {/* Location information */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                    <div className="text-center space-y-1">
                      <div className="font-semibold text-blue-800">{plan.locations}</div>
                      <div className="text-xs text-blue-600">{plan.addon}</div>
                    </div>
                  </div>
                  
                  {/* ROI indicator */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                    <div className="flex items-center space-x-2">
                      <Calculator className="w-4 h-4 text-green-600" />
                      <span className="text-green-800 font-bold text-sm">{plan.roi}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-auto ${plan.popular ? 'bg-teal-600 hover:bg-teal-700 text-white' : ''}`} 
                    variant={plan.buttonVariant}
                    onClick={() => handlePlanClick(plan.name)}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  {/* Risk reversal */}
                  {plan.name !== "Enterprise" && (
                    <p className="text-xs text-center text-slate-500 mt-2">
                      30-day money-back guarantee
                    </p>
                  )}
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
        
        {/* Trust signals */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-slate-600">
            <strong>Easy onboarding</strong> • <strong>No setup fees</strong> • <strong>Cancel anytime</strong>
          </p>
          <p className="text-sm text-slate-500">
            Join forward-thinking businesses using digital loyalty
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
