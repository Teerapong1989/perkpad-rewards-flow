
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Gift, CheckCircle, ArrowRight } from "lucide-react";

const CustomerExperienceSection = () => {
  const customerSteps = [
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
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">For Your Customers</h2>
          <p className="text-base sm:text-lg text-slate-600">Simple, seamless, and rewarding</p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {customerSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl sm:rounded-3xl overflow-hidden group">
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-lg sm:text-xl font-bold text-slate-800">{index + 1}</span>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardContent className="p-6 sm:p-8 text-center relative">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-teal-100">
                    <p className="text-teal-700 font-semibold text-sm sm:text-base">
                      ✨ {step.benefit}
                    </p>
                  </div>
                </CardContent>
                
                {index < customerSteps.length - 1 && (
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
  );
};

export default CustomerExperienceSection;
