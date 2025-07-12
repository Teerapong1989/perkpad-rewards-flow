
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Gift, BarChart3, Shield, Clock, Smartphone, Check, Crown } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { memo } from "react";

const features = [
  {
    icon: QrCode,
    title: "Your customers already know how to use it",
    description: "They scan your QR code with their phone camera. That's it. No app downloads, no account creation, no confusing onboarding. Whether they're getting their car fixed or nails done, it just works.",
    gradient: "from-brand-primary-dark to-brand-accent",
    hoverColor: "group-hover:text-brand-primary-dark",
    benefit: "Zero learning curve",
    bgAccent: "bg-brand-primary"
  },
  {
    icon: Gift,
    title: "Rewards that actually make sense for your business",
    description: "Hair salon? 10th cut free. Auto shop? $50 off after 5 oil changes. Coffee shop? Buy 9, get 1. Create rewards that fit how your business actually works, not some generic template.",
    gradient: "from-brand-accent to-brand-accent",
    hoverColor: "group-hover:text-brand-accent",
    benefit: "Fits your business model",
    bgAccent: "bg-brand-accent-light"
  },
  {
    icon: BarChart3,
    title: "See your customer visit patterns",
    description: "Track who visits when, how often they come back, and which rewards they claim. See seasonal trends and identify your most loyal customers with clear, simple analytics.",
    gradient: "from-brand-success to-brand-primary-dark",
    hoverColor: "group-hover:text-brand-success",
    benefit: "Visit & loyalty tracking",
    bgAccent: "bg-brand-success-light"
  }
];

const showcaseFeatures = [
  {
    icon: BarChart3,
    title: "🤖 AI Customer Insights",
    description: "Predictive analytics and retention insights powered by AI",
    gradient: "from-purple-500 to-blue-600",
    plan: "Pro & Growth"
  },
  {
    icon: Smartphone,
    title: "📱 SMS Marketing",
    description: "Automated campaigns and customer engagement tools",
    gradient: "from-green-500 to-teal-600",
    plan: "Pro & Growth"
  },
  {
    icon: Shield,
    title: "👥 Staff Control",
    description: "Role-based permissions and multi-user access",
    gradient: "from-orange-500 to-red-600",
    plan: "Pro & Growth"
  },
  {
    icon: Clock,
    title: "📊 Advanced Analytics",
    description: "ROI tracking and profit analytics for data-driven decisions",
    gradient: "from-indigo-500 to-purple-600",
    plan: "Growth"
  }
];

const FeatureCard = memo(({ feature, index, isInView }: { feature: typeof features[0], index: number, isInView: boolean }) => {
  const Icon = feature.icon;
  
  return (
    <AnimatedCard
      isInView={isInView}
      delay={(index + 1) * 100}
      hoverEffect
    >
      <Card className="border-0 shadow-elegant hover:shadow-brand transition-all duration-500 rounded-2xl group cursor-pointer h-full bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className={`text-2xl font-semibold text-gray-900 ${feature.hoverColor} transition-colors duration-300`}>
            {feature.title}
          </CardTitle>
          <div className={`${feature.bgAccent} border border-gray-200 rounded-lg p-2 mt-2`}>
            <span className="text-sm font-bold text-gray-700">
              ⚡ {feature.benefit}
            </span>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {feature.description}
          </CardDescription>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
});

FeatureCard.displayName = 'FeatureCard';

const TrustElement = memo(({ icon: Icon, text, bgColor, textColor }: { 
  icon: any, 
  text: string, 
  bgColor: string, 
  textColor: string 
}) => (
  <div className={`flex items-center justify-center space-x-3 p-4 ${bgColor} rounded-xl`}>
    <Icon className={`w-6 h-6 ${textColor}`} />
    <span className={`${textColor} font-medium`}>{text}</span>
  </div>
));

TrustElement.displayName = 'TrustElement';

const FeaturesSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(3, { threshold: 0.2 });

  return (
    <section id="features" className="py-16 lg:py-20 px-6 bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Cleaner header layout */}
        <div className="text-center mb-16 lg:mb-20">
          <AnimatedSection threshold={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance max-w-4xl mx-auto">
              Professional tools that work for your business
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-balance max-w-3xl mx-auto">
              From automatic customer check-ins to smart business insights. Manage multiple locations, understand your customers better, and keep their data secure. Powerful features that are simple to use and affordable for small businesses.
            </p>
          </AnimatedSection>
          
          {/* Statistics - now properly aligned */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 max-w-5xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="bg-brand-success-light border border-brand-success/20 rounded-2xl p-4 lg:p-6 text-center h-full flex flex-col justify-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-success mb-2">12</div>
                <div className="text-xs lg:text-sm text-gray-600">Business types supported</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="bg-brand-accent-light border border-brand-accent/20 rounded-2xl p-4 lg:p-6 text-center h-full flex flex-col justify-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-accent mb-2">∞</div>
                <div className="text-xs lg:text-sm text-gray-600">Multi-location support</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <div className="bg-brand-primary border border-brand-primary-dark/20 rounded-2xl p-4 lg:p-6 text-center h-full flex flex-col justify-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-primary-dark mb-2">AI</div>
                <div className="text-xs lg:text-sm text-gray-600">Smart insights</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={800}>
              <div className="bg-gray-100 border border-gray-200 rounded-2xl p-4 lg:p-6 text-center h-full flex flex-col justify-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2">🔒</div>
                <div className="text-xs lg:text-sm text-gray-600">Secure & private</div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Clean aligned feature cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} isInView={cardsInView} />
          ))}
        </div>

        {/* Welcome Screen Feature Showcase */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to grow
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From basic loyalty to advanced AI insights - choose the plan that fits your business
            </p>
          </div>

          {/* Feature Showcase Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {showcaseFeatures.map((feature, index) => (
              <AnimatedCard key={feature.title} isInView={sectionInView} delay={(index + 1) * 100} hoverEffect>
                <div className="bg-white rounded-2xl p-6 text-center shadow-elegant hover:shadow-brand transition-all duration-300 group cursor-pointer border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">{feature.title}</h4>
                  <p className="text-xs lg:text-sm text-gray-600 mb-3">{feature.description}</p>
                  <span className="text-xs font-bold text-brand-accent bg-brand-accent-light px-2 py-1 rounded-full">
                    {feature.plan}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Real Product Features Showcase */}
        <div className="mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Product Screenshot */}
            <div className="order-2 lg:order-1">
              <figure className="relative bg-white rounded-2xl shadow-elegant p-3 sm:p-4 overflow-hidden">
                <img 
                  src="/lovable-uploads/bf240d2c-3e17-40d5-bc56-7afbde00c649.png" 
                  alt="Perkpad Advanced Features - Gamified rewards, analytics tools, staff management, and business integrations dashboard"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-brand-accent text-white px-2 py-1 rounded-full text-xs font-bold">
                  🎮 Gamified
                </div>
                <figcaption className="sr-only">
                  Advanced Perkpad features including reward game settings, business tools, analytics, staff management, and upcoming integrations
                </figcaption>
              </figure>
            </div>
            
            {/* Feature Description */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Advanced tools when you're ready to grow
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">🤖 AI Customer Retention Insights</h4>
                    <p className="text-gray-600">Advanced AI with predictive analytics helps you keep customers coming back</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">📱 SMS & Email Marketing Campaigns</h4>
                    <p className="text-gray-600">Automated campaigns and customer engagement tools that actually work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">👥 Staff Roles & Access Control</h4>
                    <p className="text-gray-600">Multi-user access with role-based permissions for your entire team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">📊 Advanced ROI & Profit Analytics</h4>
                    <p className="text-gray-600">Deep insights into your business performance and customer behavior</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
