import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const PricingSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.2 });

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Simple pricing that grows with you
          </h2>
          <p className="text-xl text-slate-600">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>
        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Free Plan */}
          <Card className="border-2 border-slate-200 rounded-2xl transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: cardsInView ? '100ms' : '0ms' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold">$0</div>
                <div className="text-slate-600">per month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">1 loyalty card program</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Basic QR codes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Up to 100 customers</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardContent>
          </Card>

          {/* Starter Plan */}
          <Card className="border-2 border-teal-300 rounded-2xl relative bg-gradient-to-br from-white to-teal-50 transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: cardsInView ? '200ms' : '0ms' }}>
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 hover:bg-teal-700">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold">$19</div>
                <div className="text-slate-600">per month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">3 loyalty card programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Custom business logo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Export customer data</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Up to 500 customers</span>
                </li>
              </ul>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Start Free Trial</Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-slate-200 rounded-2xl transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: cardsInView ? '300ms' : '0ms' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold">$49</div>
                <div className="text-slate-600">per month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Unlimited loyalty cards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Custom branding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Staff roles & permissions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Unlimited customers</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Start Free Trial</Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-2 border-slate-200 rounded-2xl transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: cardsInView ? '400ms' : '0ms' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold">Custom</div>
                <div className="text-slate-600">contact us</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">API access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-600">White-label options</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
