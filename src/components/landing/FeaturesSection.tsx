import { QrCode, Gift, BarChart3, Smartphone, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: QrCode,
    title: "No App Required",
    description: "Customers scan QR code with phone camera. Works instantly.",
    benefit: "Zero friction",
    image: "/lovable-uploads/0f4a4c87-f800-4449-a851-e42a11d6e15e.png"
  },
  {
    icon: BarChart3,
    title: "Customer Analytics",
    description: "Track visits, retention, and loyalty patterns.",
    benefit: "Know your customers",
    image: "/lovable-uploads/7d33aade-01f8-438c-902d-769b4035603c.png"
  },
  {
    icon: Smartphone,
    title: "Customer Management",
    description: "View and manage your loyal customers easily.",
    benefit: "Customer insights",
    image: "/lovable-uploads/f1f13d36-14c6-4735-a5f9-17fa8b03776b.png"
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

        {/* Main Features - Alternating Layout */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-brand">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-brand-primary-light to-brand-accent-light text-brand-primary px-6 py-3 rounded-full font-bold">
                      {feature.benefit}
                    </div>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative hover-lift">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-72 lg:h-96 object-cover rounded-3xl shadow-elegant"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            );
          })}
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