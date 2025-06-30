
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Gift, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Everything you need to build customer loyalty
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple tools that help small businesses create meaningful connections with their customers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-800">QR Code Check-In</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg text-slate-600 leading-relaxed">
                Customers simply scan your unique QR code to earn stamps. No app downloads, no hassle - just point, scan, and collect rewards.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-800">Custom Rewards</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg text-slate-600 leading-relaxed">
                Set your own reward rules. Buy 10 get 1 free, spend $100 get $10 off - you decide what works best for your business.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-800">Customer Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg text-slate-600 leading-relaxed">
                Track visits, monitor redemptions, and understand customer behavior with simple analytics that actually help your business grow.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
