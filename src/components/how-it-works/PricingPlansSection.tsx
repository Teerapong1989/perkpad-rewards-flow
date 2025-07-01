
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPlansSection = () => {
  const planFeatures = [
    {
      plan: "Free",
      price: "$0/mo",
      features: ["1 loyalty card program", "Up to 5 staff members", "Basic loyalty card program", "Default branding (Perkpad only)", "Basic dashboard (visits & redemptions)"],
      highlight: false
    },
    {
      plan: "Starter",
      price: "$19/mo",
      features: ["Up to 3 loyalty card programs", "Up to 2 staff members", "Business logo on wallet & cards", "Customer database with export", "Email support"],
      highlight: false
    },
    {
      plan: "Pro",
      price: "$49/mo",
      features: ["Unlimited loyalty programs", "Up to 10 staff members", "Full custom branding", "SMS & email campaigns", "Advanced analytics"],
      highlight: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Unlimited loyalty programs", "Unlimited staff members", "Full custom branding", "SMS & email campaigns", "Advanced analytics", "+ 6 more features"],
      highlight: false
    }
  ];

  const handlePlanClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">Choose Your Plan</h2>
          <p className="text-base sm:text-lg text-slate-600">Start free, upgrade as you grow</p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {planFeatures.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden ${plan.highlight ? 'ring-2 ring-teal-500' : ''}`}>
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-1.5 sm:py-2 text-xs sm:text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardContent className={`p-4 sm:p-6 ${plan.highlight ? 'pt-8 sm:pt-12' : ''}`}>
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{plan.plan}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800">{plan.price}</div>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full min-h-[44px] text-sm sm:text-base ${plan.highlight ? 'bg-teal-600 hover:bg-teal-700' : ''}`}
                  variant={plan.highlight ? "default" : "outline"}
                  onClick={handlePlanClick}
                >
                  {plan.plan === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
