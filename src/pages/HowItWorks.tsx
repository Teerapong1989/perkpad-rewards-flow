
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Gift, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const handleSignUpClick = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  const steps = [
    {
      icon: QrCode,
      title: "Customer Scans QR Code",
      description: "Your customers simply scan your unique QR code with their phone camera - no app downloads required!",
      benefit: "No more lost paper cards or forgotten loyalty programs",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: CheckCircle,
      title: "Collect Digital Stamps",
      description: "Each visit automatically adds a digital stamp to their loyalty card. Progress is saved instantly in the cloud.",
      benefit: "Customers can track their progress anytime, anywhere",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Gift,
      title: "Unlock Rewards Instantly",
      description: "When customers complete their card, they instantly unlock their reward - no waiting, no hassle!",
      benefit: "Immediate gratification drives more repeat visits",
      gradient: "from-orange-400 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <ArrowLeft className="w-5 h-5 text-teal-600" />
          <span className="text-teal-600 hover:text-teal-700 font-medium">Back to Home</span>
        </Link>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">Perkpad</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            How Perkpad Works
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            See how easy it is to transform your paper punch cards into a modern digital loyalty program that customers actually complete.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                  {/* Step Number */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-xl font-bold text-slate-800">{index + 1}</span>
                  </div>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-4 border border-teal-100">
                      <p className="text-teal-700 font-semibold text-sm">
                        ✨ {step.benefit}
                      </p>
                    </div>
                  </CardContent>
                  
                  {/* Arrow for non-last items */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-teal-400" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Why Businesses Choose Perkpad
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">34% More Completions</h3>
              <p className="text-slate-600">Digital cards are never lost or forgotten, leading to significantly higher completion rates.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">5-Minute Setup</h3>
              <p className="text-slate-600">Unlike competitors who take weeks, you'll be live in minutes with our simple setup process.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Instant Rewards</h3>
              <p className="text-slate-600">Customers get immediate satisfaction when they complete their loyalty journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join hundreds of businesses already using Perkpad to increase customer loyalty.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-teal-700 hover:bg-slate-50 text-lg px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={handleSignUpClick}
          >
            Start Your 5-Minute Setup (Free)
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="text-teal-200 text-sm mt-4">
            No setup fees • 30-day money-back guarantee
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
