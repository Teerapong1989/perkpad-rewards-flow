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
    savings: "Get started for free",
    features: [
      "1 loyalty card program",
      "Up to 5 staff members",
      "Basic loyalty card program", 
      "Default branding (Perkpad only)",
      "Basic dashboard (visits & redemptions)"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false,
    roi: "Perfect for testing"
  },
  {
    name: "Starter", 
    price: "$19",
    period: "per month",
    savings: "Less than $1/day",
    features: [
      "Up to 3 loyalty card programs",
      "Up to 2 staff members", 
      "Business logo on wallet & cards",
      "Customer database with export",
      "Email support"
    ],
    buttonText: "Start Free 30-Day Trial",
    buttonVariant: "default" as const,
    popular: false,
    roi: "Typical ROI: $547/month"
  },
  {
    name: "Pro",
    price: "$49", 
    period: "per month",
    savings: "Save $228 vs monthly",
    features: [
      "Unlimited loyalty programs",
      "Up to 10 staff members",
      "Full custom branding",
      "SMS & email campaigns", 
      "Advanced analytics"
    ],
    buttonText: "Start Free 30-Day Trial",
    buttonVariant: "default" as const,
    popular: true,
    roi: "Typical ROI: $1,647/month"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    savings: "Volume discounts available",
    features: [
      "Unlimited loyalty programs",
      "Unlimited staff members", 
      "Full custom branding",
      "SMS & email campaigns",
      "Advanced analytics",
      "+ 6 more features"
    ],  
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
    roi: "ROI calculated for your business"
  }
];

const PricingSection = () => {
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(4, { threshold: 0.2 });

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

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  
                  {/* ROI indicator */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
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
            Join 487 businesses that switched to Perkpad this month
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
