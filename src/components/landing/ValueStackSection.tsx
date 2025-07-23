// ABOUTME: This component creates a professional value proposition section
// ABOUTME: showing the complete feature set and pricing for the landing page

import { Check, BarChart3, Users, Gift, Smartphone, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackUserBehavior } from "@/utils/analytics";

const ValueStackSection = () => {
  const handleCtaClick = () => {
    trackUserBehavior('click', 'value_stack_cta');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      icon: Smartphone,
      title: "QR Code Loyalty Cards",
      description: "Modern digital punch cards customers scan with any phone"
    },
    {
      icon: BarChart3,
      title: "Customer Analytics",
      description: "Track customer behavior and loyalty program performance"
    },
    {
      icon: Gift,
      title: "Automated Rewards",
      description: "Birthday rewards and completion celebrations sent automatically"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "View customer progress and engagement in real-time"
    },
    {
      icon: HeadphonesIcon,
      title: "Setup Support",
      description: "Get help setting up your loyalty program in minutes"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Retain More Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete digital loyalty system that works better than paper cards
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-center py-6">
            <h3 className="text-2xl font-bold">Simple, Transparent Pricing</h3>
            <p className="text-brand-primary-light mt-2">Start free, upgrade when you're ready</p>
          </div>
          
          <div className="p-8 text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-4xl font-black text-brand-primary">FREE</span>
                <span className="text-gray-400 text-lg">to start</span>
              </div>
              <p className="text-gray-600 mt-2">
                No credit card required • Free plan available forever
              </p>
            </div>

            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Up to 100 customers on free plan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Basic analytics and reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Email support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Upgrade anytime for more features</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary text-white text-xl px-12 py-6 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleCtaClick}
            >
              Get Started Free
            </Button>
            
            <p className="text-sm text-gray-500 mt-4">
              Takes less than 5 minutes to set up
            </p>
          </div>
        </div>

        {/* Professional guarantee */}
        <div className="text-center mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-lg text-blue-900 mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-blue-800">
            Try our paid plans risk-free. If you're not satisfied, we'll refund your money within 30 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;