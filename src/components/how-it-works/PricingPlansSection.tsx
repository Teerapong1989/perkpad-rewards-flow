
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPlansSection = () => {
  const planFeatures = [
    {
      plan: "Free",
      price: "$0/mo",
      locations: "1 location (limited features)",
      addon: "Upgrade to unlock full features",
      features: ["1 location", "QR stamp card system", "Basic dashboard", "No customization"],
      highlight: false
    },
    {
      plan: "Pro",
      price: "$30/mo", 
      locations: "1 location included",
      addon: "+$10/month per extra location",
      features: ["1 location included", "Everything in Free, plus:", "Custom branding (logo + color)", "Customer database access", "Email/SMS marketing (basic)", "Reward customization", "Staff PIN system for redemptions", "Business insights"],
      highlight: true
    },
    {
      plan: "Growth",
      price: "$60/mo",
      locations: "3 locations included",
      addon: "+$8/month per extra location",
      features: ["3 locations included", "Everything in Pro, plus:", "Multi-location dashboard", "Location-based reporting", "Advanced analytics", "Printed sign-ready QR downloads", "Priority support"],
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
        
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  
                  {/* Location information */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 mt-3 sm:mt-4">
                    <div className="text-center space-y-1">
                      <div className="font-semibold text-blue-800 text-xs sm:text-sm">{plan.locations}</div>
                      <div className="text-xs text-blue-600">{plan.addon}</div>
                    </div>
                  </div>
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
                  Start Free Trial
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
