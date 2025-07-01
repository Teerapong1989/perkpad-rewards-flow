
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const PricingPlansSection = () => {
  const planFeatures = [
    {
      plan: "Starter",
      price: "$29/mo",
      features: ["3 loyalty card programs", "Custom business logo", "Customer data export", "Up to 500 customers", "Email support"],
      highlight: false
    },
    {
      plan: "Pro",
      price: "$59/mo",
      features: ["Unlimited loyalty cards", "Custom branding & colors", "Staff roles & permissions", "Unlimited customers", "Priority support", "Advanced analytics"],
      highlight: true
    },
    {
      plan: "Business",
      price: "$149/mo",
      features: ["Everything in Pro", "White-label options", "API access", "Custom integrations", "Dedicated account manager", "Phone support"],
      highlight: false
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Multi-location management", "Advanced reporting suite", "Priority implementation", "Custom feature development", "SLA guarantee", "Training & onboarding"],
      highlight: false
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Your Plan</h2>
          <p className="text-lg text-slate-600">Start free, upgrade as you grow</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planFeatures.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden ${plan.highlight ? 'ring-2 ring-teal-500' : ''}`}>
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardContent className={`p-6 ${plan.highlight ? 'pt-12' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold text-slate-800">{plan.price}</div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
