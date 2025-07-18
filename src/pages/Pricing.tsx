// ABOUTME: Dedicated pricing page showing all available plans and features
// ABOUTME: Mobile-optimized pricing cards with clear value propositions

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

const Pricing = () => {
  const planFeatures = [
    {
      plan: "Free",
      price: "$0",
      period: "/mo",
      description: "Perfect for getting started",
      subtitle: "Risk-free customer retention foundation",
      addon: "Prove customer loyalty works before you pay",
      features: [
        "Complete loyalty card system (digital stamps)",
        "Basic customer management & profiles",
        "QR code customer check-ins", 
        "Staff management with secure PIN access",
        "Essential analytics dashboard",
        "Advanced fraud protection",
        "5-minute setup"
      ],
      highlight: false,
      buttonText: "Start Free Forever"
    },
    {
      plan: "Pro",
      price: "$30",
      period: "/mo", 
      description: "Most popular for growing businesses",
      subtitle: "Automated customer engagement that drives revenue",
      addon: "+$10/month per extra location",
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
      highlight: true,
      buttonText: "Start Free Trial"
    },
    {
      plan: "Growth",
      price: "$60",
      period: "/mo",
      description: "For businesses ready to scale",
      subtitle: "Complete customer retention & growth engine",
      addon: "+$8/month per extra location", 
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
      highlight: false,
      buttonText: "Start Free Trial"
    }
  ];

  const handlePlanClick = () => {
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-[1.1] px-2">
            Simple{" "}
            <span className="text-gradient">pricing</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 font-medium">
            Start free, upgrade when you're ready. No setup fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {planFeatures.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.highlight ? 'border-brand-primary bg-white ring-4 ring-brand-primary/10 scale-105' : 'border-gray-200 bg-white'} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-primary text-white px-6 py-2 rounded-full text-base font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardContent className={`p-6 sm:p-8 ${plan.highlight ? 'pt-12' : ''} flex-grow flex flex-col`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-5xl sm:text-6xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-xl sm:text-2xl text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed font-medium">{plan.description}</p>
                    
                    {/* Value proposition */}
                    <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl p-4 sm:p-5">
                      <div className="text-center space-y-2">
                        <div className="font-semibold text-brand-primary text-base sm:text-lg leading-tight">{plan.subtitle}</div>
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
                    className={`w-full min-h-[52px] sm:min-h-[60px] text-lg sm:text-xl font-semibold py-4 sm:py-5 rounded-xl mt-auto ${plan.highlight ? 'btn-premium' : ''}`}
                    variant={plan.highlight ? "default" : "outline"}
                    onClick={handlePlanClick}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-2">
              Pricing Questions
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium px-4">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Is there really a free plan?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Yes! Our Free plan includes everything you need to start building customer loyalty. No credit card required, no time limits.</p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Can I cancel anytime?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Absolutely. Cancel your subscription at any time with no penalties. Your data is always exportable.</p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">How does billing work?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Monthly billing starts after your free trial. We'll always notify you before charging your card.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">What about multiple locations?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Each additional location has a small monthly fee. Manage all locations from one dashboard.</p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Do you offer discounts?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Yes! We offer discounts for annual plans and special pricing for non-profits. Contact us for details.</p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Need help choosing?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Start with our Free plan and upgrade when you're ready. Our team is here to help you choose the right plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;