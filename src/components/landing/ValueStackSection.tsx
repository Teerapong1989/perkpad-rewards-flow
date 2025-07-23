// ABOUTME: This component creates a Hormozi-style value stack section
// ABOUTME: showing bundled value and pricing psychology for the landing page

import { Check, Gift, Clock, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackUserBehavior } from "@/utils/analytics";

const ValueStackSection = () => {
  const handleCtaClick = () => {
    trackUserBehavior('click', 'value_stack_cta');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  const valueItems = [
    {
      icon: TrendingUp,
      title: "Digital Loyalty System",
      description: "Complete QR-based customer retention platform",
      value: "$2,997"
    },
    {
      icon: Users,
      title: "Customer Analytics Dashboard", 
      description: "Track behavior, preferences, and spending patterns",
      value: "$597"
    },
    {
      icon: Gift,
      title: "Automated Reward Campaigns",
      description: "Smart birthday rewards and win-back sequences",
      value: "$397"
    },
    {
      icon: Clock,
      title: "5-Minute Setup Service",
      description: "We'll set everything up for you if needed",
      value: "$299"
    },
    {
      icon: Shield,
      title: "Priority Support + Training",
      description: "Direct access to our team + video tutorials",
      value: "$197"
    }
  ];

  const totalValue = valueItems.reduce((sum, item) => sum + parseInt(item.value.replace('$', '').replace(',', '')), 0);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You Get When You Start Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your customer retention and increase profits by 40% or more
          </p>
        </div>

        {/* Value Stack */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-center py-4">
            <p className="font-bold text-lg">🎯 COMPLETE CUSTOMER RETENTION SYSTEM</p>
          </div>
          
          <div className="p-6 space-y-6">
            {valueItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 line-through text-sm">Normally</p>
                  <p className="font-bold text-lg text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
            
            {/* Total value */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-gray-900">Total Value:</span>
                <span className="text-red-600 line-through">${totalValue.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing and CTA */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border-2 border-green-200">
          <div className="mb-6">
            <p className="text-gray-600 text-lg mb-2">Your Investment Today:</p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-4xl font-black text-green-600">FREE</span>
              <span className="text-gray-400 text-2xl line-through">${totalValue.toLocaleString()}</span>
            </div>
            <p className="text-green-700 font-bold text-lg mt-2">
              Save 100% - Limited Time Offer
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Forever free plan available</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Upgrade only when you're making more money</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Cancel anytime, keep your data</span>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-xl px-12 py-6 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={handleCtaClick}
          >
            Claim Your Free System Now
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            ⚡ This offer expires when we reach 500 businesses
          </p>
        </div>

        {/* Risk reversal */}
        <div className="text-center mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-lg text-blue-900 mb-2">🛡️ ZERO RISK GUARANTEE</h3>
          <p className="text-blue-800">
            If you don't see a 40% increase in customer retention within 60 days, 
            we'll refund every penny AND pay you $100 for your time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;