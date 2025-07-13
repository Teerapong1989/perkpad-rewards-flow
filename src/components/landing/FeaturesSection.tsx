import { QrCode, Gift, BarChart3, Smartphone, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: QrCode,
    title: "Your customers already know how to use it",
    description: "They scan your QR code with their phone camera. That's it. No app downloads, no account creation, no confusing onboarding. Whether they're getting their car fixed or nails done, it just works.",
    benefit: "Zero learning curve",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    icon: Gift,
    title: "Rewards that actually make sense for your business",
    description: "Hair salon? 10th cut free. Auto shop? $50 off after 5 oil changes. Coffee shop? Buy 9, get 1. Create rewards that fit how your business actually works, not some generic template.",
    benefit: "Fits your business model",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop"
  },
  {
    icon: BarChart3,
    title: "See your customer visit patterns",
    description: "Track who visits when, how often they come back, and which rewards they claim. See seasonal trends and identify your most loyal customers with clear, simple analytics.",
    benefit: "Visit & loyalty tracking",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
  }
];

const advancedFeatures = [
  {
    icon: Brain,
    title: "AI Customer Insights",
    description: "Predictive analytics and retention insights"
  },
  {
    icon: Smartphone,
    title: "SMS Marketing",
    description: "Automated campaigns and customer engagement"
  },
  {
    icon: Shield,
    title: "Staff Control",
    description: "Role-based permissions and multi-user access"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "ROI tracking and profit analytics"
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
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Local Businesses Choose PerkPad
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple enough for anyone to use, powerful enough to compete with big chains
            </p>
          </AnimatedSection>
        </div>

        {/* Main Features - Alternating Layout */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-${index * 200} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {/* Content */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-primary-dark rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-brand-primary-light text-brand-primary-dark px-4 py-2 rounded-full text-sm font-semibold">
                      {feature.benefit}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <Button 
                    onClick={handleGetStarted}
                    className="bg-brand-primary hover:bg-brand-primary-dark text-white"
                  >
                    Try This Feature Free
                  </Button>
                </div>

                {/* Image */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced Features Grid */}
        <div className="mt-24">
          <AnimatedSection className="text-center mb-12" threshold={0.1}>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Plus Advanced Features for Growth
            </h3>
            <p className="text-lg text-slate-600">
              Professional tools when you're ready to scale
            </p>
          </AnimatedSection>
          
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
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