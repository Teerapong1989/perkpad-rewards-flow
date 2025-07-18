
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPlansSection = () => {
  const planFeatures = [
    {
      plan: "Free",
      price: "$0/mo",
      locations: "Risk-free customer retention foundation",
      addon: "Prove customer loyalty works before you pay",
      description: "Fraud-protected loyalty that actually works",
      features: [
        "Complete loyalty card system (digital stamps)",
        "Basic customer management & profiles",
        "QR code customer check-ins", 
        "Staff management with secure PIN access",
        "Essential analytics dashboard",
        "Advanced fraud protection",
        "5-minute setup"
      ],
      highlight: false
    },
    {
      plan: "Pro",
      price: "$30/mo", 
      locations: "Automated customer engagement that drives revenue",
      addon: "+$10/month per extra location",
      description: "Gamified retention that keeps customers coming back",
      features: [
        "Everything in Free, plus:",
        "100 SMS credits + birthday automation",
        "Advanced analytics & customer insights",
        "Reward customization & gamification",
        "Push notifications for re-engagement",
        "XP system with levels and achievements",
        "Transparent cost control with usage alerts",
        "40% increase in customer retention"
      ],
      highlight: true
    },
    {
      plan: "Growth",
      price: "$60/mo",
      locations: "Complete customer retention & growth engine",
      addon: "+$8/month per extra location", 
      description: "AI-driven customer intelligence for maximum LTV",
      features: [
        "Everything in Pro, plus:",
        "500 SMS credits + advanced campaigns",
        "AI-powered customer recommendations",
        "Advanced segmentation & targeting",
        "Comprehensive reporting & ROI tracking",
        "Multi-location support",
        "Enterprise-grade security & compliance",
        "Priority support"
      ],
      highlight: false
    }
  ];

  const handlePlanClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight px-2">Choose Your Plan</h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium px-4">Start free, upgrade as you grow</p>
        </div>
        
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {planFeatures.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.highlight ? 'border-brand-accent bg-gradient-to-br from-white to-brand-accent-light ring-2 ring-brand-accent/20' : 'border-gray-200'} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-brand text-white text-center py-3 text-base font-semibold rounded-t-2xl">
                  Most Popular
                </div>
              )}
              
              <CardContent className={`p-6 sm:p-8 ${plan.highlight ? 'pt-14' : ''} flex-grow flex flex-col`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{plan.plan}</h3>
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">{plan.price}</div>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">{plan.description}</p>
                  
                  {/* Location information */}
                  <div className="bg-brand-primary border border-brand-primary-dark/20 rounded-xl p-4 sm:p-5">
                    <div className="text-center space-y-2">
                      <div className="font-semibold text-brand-primary-dark text-base sm:text-lg leading-tight">{plan.locations}</div>
                      <div className="text-sm sm:text-base text-gray-700">{plan.addon}</div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4 sm:space-y-5 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-base sm:text-lg text-gray-700">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-success mr-3 sm:mr-4 flex-shrink-0 mt-1" />
                      <span className="leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full min-h-[52px] sm:min-h-[60px] text-lg sm:text-xl font-semibold py-4 sm:py-5 rounded-xl mt-auto ${plan.highlight ? 'bg-gradient-brand text-white shadow-xl' : ''}`}
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
