import { Star, Users, Target, Lightbulb, Quote, Shield, Zap, Brain, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    title: "Modern QR-Based Loyalty",
    description: "Replace lost punch cards with instant QR scanning. Customers love the convenience of digital tracking.",
    icon: Users,
    category: "Core Feature",
    color: "from-emerald-400 via-teal-500 to-cyan-600",
    accent: "emerald"
  },
  {
    title: "SMS Marketing That Works",
    description: "Reach customers directly with targeted messages. Proven to increase repeat visits and customer engagement.",
    icon: Brain,
    category: "Marketing Tool",
    color: "from-violet-400 via-purple-500 to-indigo-600", 
    accent: "violet"
  },
  {
    title: "Professional Analytics",
    description: "Get clear insights into customer behavior and campaign performance. Make data-driven decisions for your business.",
    icon: Shield,
    category: "Business Intelligence",
    color: "from-orange-400 via-red-500 to-pink-600",
    accent: "orange"
  }
];

const stats = [
  { number: "99%+", label: "Uptime", icon: Shield },
  { number: "5 min", label: "Setup time", icon: Zap },
  { number: "Email", label: "Support", icon: Users },
  { number: "Secure", label: "Platform", icon: Star }
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-spacing container-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-20" threshold={0.1}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 mb-6">
              <Star className="w-4 h-4 text-yellow-500" />
              Professional Technology
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-6">
              Platform Features
            </h2>
          </AnimatedSection>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`feature-card group transition-all duration-700 delay-${index * 150} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-slate-300 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Category Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${feature.accent}-100 text-${feature.accent}-700 text-sm font-medium mb-6`}>
                    <IconComponent className="w-4 h-4" />
                    {feature.category}
                  </div>

                  {/* Feature Icon */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="flex justify-end mt-6">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern Stats Grid */}
        <AnimatedSection threshold={0.1}>
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Reliable Platform
              </h3>
              <p className="text-slate-300 text-lg">
                Built with modern technology you can trust
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced Call to Action */}
        <AnimatedSection className="text-center" threshold={0.1}>
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 max-w-4xl mx-auto">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-white/5 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium mb-6">
                <Zap className="w-4 h-4" />
                Ready to get started?
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Start with professional tools today
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Everything you need to compete with big chains.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button className="group bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started Free
                  <ChevronRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="text-white border-2 border-white/30 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>No setup fees</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;