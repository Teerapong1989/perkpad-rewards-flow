
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
      description: "Perfect for small businesses getting started",
      features: ["1 location", "QR stamp card system", "Basic dashboard", "No customization", "Limited features"],
      highlight: false
    },
    {
      plan: "Pro",
      price: "$30/mo", 
      locations: "1 location included",
      addon: "+$10/month per extra location",
      description: "Most popular for growing businesses + AI & SMS",
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
      highlight: true
    },
    {
      plan: "Growth",
      price: "$60/mo",
      locations: "3 locations included",
      addon: "+$8/month per extra location",
      description: "Advanced features for established businesses",
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
      highlight: false
    }
  ];

  const handlePlanClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 lg:py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Choose Your Plan</h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Start free, upgrade as you grow</p>
        </div>
        
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {planFeatures.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.highlight ? 'border-brand-accent bg-gradient-to-br from-white to-brand-accent-light ring-2 ring-brand-accent/20' : 'border-gray-200'} rounded-2xl shadow-elegant hover:shadow-brand transition-all duration-500 h-full flex flex-col`}>
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-brand text-white text-center py-2 text-sm font-semibold rounded-t-2xl">
                  Most Popular
                </div>
              )}
              
              <CardContent className={`p-6 ${plan.highlight ? 'pt-12' : ''} flex-grow flex flex-col`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                  <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                  
                  {/* Location information */}
                  <div className="bg-brand-primary border border-brand-primary-dark/20 rounded-lg p-3 mt-4">
                    <div className="text-center space-y-1">
                      <div className="font-semibold text-brand-primary-dark text-sm">{plan.locations}</div>
                      <div className="text-xs text-gray-600">{plan.addon}</div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-success mr-3 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full min-h-[44px] text-base mt-auto ${plan.highlight ? 'bg-gradient-brand text-white shadow-brand' : ''}`}
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
