
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "per month",
    features: [
      "1 loyalty card program",
      "Basic QR codes",
      "Up to 100 customers"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Starter",
    price: "$19",
    period: "per month",
    features: [
      "3 loyalty card programs",
      "Custom business logo",
      "Export customer data",
      "Up to 500 customers"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    features: [
      "Unlimited loyalty cards",
      "Custom branding",
      "Staff roles & permissions",
      "Unlimited customers"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Advanced analytics",
      "Priority support",
      "API access",
      "White-label options"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

const PricingSection = () => {
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(4, { threshold: 0.2 });

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Simple pricing that grows with you
          </h2>
          <p className="text-xl text-slate-600">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard
              key={plan.name}
              isInView={cardsInView}
              delay={(index + 1) * 100}
              hoverEffect
            >
              <Card className={`border-2 ${plan.popular ? 'border-teal-300 bg-gradient-to-br from-white to-teal-50' : 'border-slate-200'} rounded-2xl relative transform transition-all duration-500`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 hover:bg-teal-700">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">{plan.price}</div>
                    <div className="text-slate-600">{plan.period}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-teal-600" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-teal-600 hover:bg-teal-700' : ''}`} 
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
