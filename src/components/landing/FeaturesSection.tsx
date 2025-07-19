import { QrCode, Gift, BarChart3, Smartphone, Shield, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: QrCode,
    title: "No App Required",
    description: "Customers scan QR code with phone camera. Works instantly.",
    benefit: "Zero friction",
    image: "/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png"
  },
  {
    icon: BarChart3,
    title: "Customer Analytics",
    description: "Track visits, retention, and loyalty patterns.",
    benefit: "Know your customers",
    image: "/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png"
  },
  {
    icon: Smartphone,
    title: "Customer Management",
    description: "View and manage your loyal customers easily.",
    benefit: "Customer insights",
    image: "/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png"
  }
];

const advancedFeatures = [
  {
    icon: Brain,
    title: "AI Insights",
    description: "Predictive analytics"
  },
  {
    icon: Smartphone,
    title: "SMS Marketing",
    description: "Automated campaigns"
  },
  {
    icon: Shield,
    title: "Staff Control",
    description: "Role permissions"
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "ROI tracking"
  }
];

const FeaturesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleGetStarted = () => {
    window.open('https://app.perkpad.io', '_blank');
  };

  return (
    <section className="section-spacing container-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-20" threshold={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Digital <span className="text-gradient">Wins</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why digital loyalty beats punch cards every time
            </p>
          </AnimatedSection>
        </div>

        {/* Professional Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20">
          {/* QR Code Generator */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-primary/0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mr-3">
                  <QrCode className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">QR Code Generator</h3>
                  <p className="text-sm text-gray-600">Create custom QR codes instantly</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-3">
                <img 
                  src="/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png" 
                  alt="QR Code Generator interface"
                  className="w-full h-auto rounded-xl shadow-sm ring-1 ring-gray-200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Business Analytics */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-brand-secondary/0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-brand-secondary/10 rounded-xl flex items-center justify-center mr-3">
                  <BarChart3 className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Business Analytics</h3>
                  <p className="text-sm text-gray-600">Track customer behavior and trends</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-3">
                <img 
                  src="/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png" 
                  alt="Business Analytics dashboard"
                  className="w-full h-auto rounded-xl shadow-sm ring-1 ring-gray-200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Customer Management */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-accent/0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Customer Management</h3>
                  <p className="text-sm text-gray-600">Manage all customer interactions</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-3">
                <img 
                  src="/lovable-uploads/602ca246-112d-477a-9195-34755714f7df.png" 
                  alt="Customer Management interface"
                  className="w-full h-auto rounded-xl shadow-sm ring-1 ring-gray-200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features Grid */}
        <div className="mt-32">
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced Features for <span className="text-gradient">Growth</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tools when you're ready to scale
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title} 
                  className="text-center p-8 card-premium group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-brand group-hover:shadow-brand-glow transition-shadow duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;