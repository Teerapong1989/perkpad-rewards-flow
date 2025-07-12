import { Check, Shield, Brain, Users, BarChart3, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const steps = [
  {
    icon: Smartphone,
    title: "Customer Scans QR Code",
    description: "No app download needed - customers simply scan your QR code with their phone camera",
    details: "Works with any smartphone camera. The QR code opens directly in their web browser with a secure, location-verified session."
  },
  {
    icon: Shield,
    title: "Location Verification",
    description: "Our geofencing technology confirms they're actually at your business",
    details: "GPS verification with configurable radius (50-500 meters). Prevents fraud while ensuring legitimate customers can check in easily."
  },
  {
    icon: Users,
    title: "Instant Stamp Collection",
    description: "Stamps are automatically added to their digital loyalty card",
    details: "Staff can also add stamps manually using secure PINs. Real-time sync across all devices ensures no stamps are ever lost."
  },
  {
    icon: Brain,
    title: "AI Analyzes Patterns",
    description: "Our AI studies customer behavior to provide business insights",
    details: "Tracks visit frequency, peak times, and customer retention. Identifies at-risk customers and suggests targeted campaigns to bring them back."
  },
  {
    icon: BarChart3,
    title: "Actionable Recommendations",
    description: "Get specific suggestions to improve customer loyalty and revenue",
    details: "AI recommends optimal reward timing, identifies your best customers, and suggests pricing strategies based on visit patterns."
  },
  {
    icon: Check,
    title: "Automated Rewards",
    description: "Customers earn and redeem rewards seamlessly",
    details: "Configurable stamp requirements (default 10 visits = reward). Gift box system with weighted rewards for surprise and delight."
  }
];

const securityFeatures = [
  {
    title: "Bank-Level Encryption",
    description: "All data encrypted in transit and at rest using AES-256 encryption"
  },
  {
    title: "Fraud Detection",
    description: "Real-time monitoring detects suspicious patterns and prevents abuse"
  },
  {
    title: "Location Verification",
    description: "GPS-based verification ensures customers are physically present"
  },
  {
    title: "Staff Access Controls",
    description: "Individual PINs for each location with role-based permissions"
  },
  {
    title: "Automated Backups",
    description: "Daily encrypted backups ensure your data is never lost"
  },
  {
    title: "SOC2 Compliance",
    description: "Same security standards as Fortune 500 companies"
  }
];

const HowItWorksSection = () => {
  const { containerRef: stepsRef, isInView: stepsInView } = useMultipleInView(6, { threshold: 0.1 });
  const { containerRef: securityRef, isInView: securityInView } = useMultipleInView(6, { threshold: 0.1 });

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* How It Works */}
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            How It Actually Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From customer scan to AI insights - here's the complete process that makes your loyalty program effortless
          </p>
        </AnimatedSection>

        <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedCard
                key={step.title}
                isInView={stepsInView}
                delay={index * 150}
                hoverEffect
              >
                <Card className="border-0 shadow-lg rounded-2xl bg-white transition-all duration-700 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-4 flex-grow">{step.description}</p>
                    <div className="text-sm text-slate-500 leading-relaxed">
                      {step.details}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Security Section */}
        <AnimatedSection className="text-center mb-12" threshold={0.1}>
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            Enterprise-Grade Security You Can Trust
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Your customer data is protected with the same security standards used by banks and Fortune 500 companies
          </p>
        </AnimatedSection>

        <div ref={securityRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <AnimatedCard
              key={feature.title}
              isInView={securityInView}
              delay={index * 100}
            >
              <Card className="border border-slate-200 rounded-xl bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">{feature.title}</h4>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>

        {/* AI Explanation */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              How Our AI Actually Helps Your Business
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">What It Analyzes:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Customer visit frequency and timing</li>
                  <li>• Spending patterns and preferences</li>
                  <li>• Reward redemption behavior</li>
                  <li>• Seasonal trends and peak hours</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">What You Get:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Identify customers at risk of leaving</li>
                  <li>• Optimal times for promotions</li>
                  <li>• Personalized reward suggestions</li>
                  <li>• Revenue optimization strategies</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-purple-200">
              <p className="text-sm text-slate-600">
                <strong>Privacy First:</strong> All AI analysis happens on aggregated, anonymized data. Individual customer information remains private and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;