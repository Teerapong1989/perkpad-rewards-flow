
import { Card, CardContent } from "@/components/ui/card";
import { Users, BarChart3, Settings, Upload, QrCode, Gift, CheckCircle } from "lucide-react";

const BusinessOwnerJourneySection = () => {
  const businessSteps = [
    {
      icon: Users,
      title: "Quick Sign-Up & Business Info",
      description: "Create your account in minutes with just your business name, phone number, and email address.",
      features: ["Simple registration", "Email verification", "Instant access"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Upload,
      title: "Brand Customization & Plan Selection",
      description: "Upload your logo, describe your business, choose your industry, and select the perfect plan for your needs.",
      features: ["Custom branding", "Industry categories", "Flexible pricing"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Gift,
      title: "Design Your Loyalty Program",
      description: "Set up your loyalty card structure - define stamps needed, rewards offered, and optional premium features.",
      features: ["Custom stamp requirements", "Flexible rewards", "Tier levels & celebrations"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: QrCode,
      title: "Launch & Promote",
      description: "Generate your unique QR code, print it for display, and start welcoming customers to your digital loyalty program.",
      features: ["Instant QR generation", "Print-ready formats", "Easy store display"],
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Monitor & Analyze",
      description: "Access your business dashboard to track visits, active customers, rewards claimed, and engagement metrics.",
      features: ["Real-time analytics", "Customer insights", "Performance tracking"],
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Settings,
      title: "Scale & Advanced Features",
      description: "Add team members, export customer lists, upgrade plans, and unlock advanced features as you grow.",
      features: ["Team management", "Data exports", "Plan upgrades"],
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">For Business Owners</h2>
          <p className="text-base sm:text-lg text-slate-600">Complete setup in 5 minutes, manage with ease</p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {businessSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-100 rounded-full flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-slate-600">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-1.5 sm:space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-slate-500">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessOwnerJourneySection;
