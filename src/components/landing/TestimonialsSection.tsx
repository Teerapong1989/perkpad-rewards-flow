import { Star, Users, Target, Lightbulb, Quote, Shield, Zap, Brain, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote: "After seeing successful franchises with sophisticated loyalty systems, we asked: why can't every local business have professional-grade features? We built a platform with AI insights, multi-location management, advanced security, and powerful analytics - all at small business prices.",
    author: "The Perkpad Team",
    role: "Professional Features for Everyone", 
    icon: Users,
    category: "Vision",
    color: "from-emerald-400 via-teal-500 to-cyan-600",
    accent: "emerald"
  },
  {
    quote: "Built with the same infrastructure standards as Fortune 500 companies. Real-time sync, automated backups, 99.9% uptime SLA, and professional-grade security features that protect your customer data.",
    author: "Technical Excellence",
    role: "Production-Ready Platform",
    icon: Shield,
    category: "Security",
    color: "from-violet-400 via-purple-500 to-indigo-600", 
    accent: "violet"
  },
  {
    quote: "AI-powered customer retention insights, predictive analytics, ROI tracking, and automated campaign management. Get the same insights as big chains, tailored for your local business.",
    author: "Business Intelligence", 
    role: "Complete Analytics Suite",
    icon: Brain,
    category: "Intelligence",
    color: "from-orange-400 via-red-500 to-pink-600",
    accent: "orange"
  }
];

const stats = [
  { number: "99.9%", label: "Uptime SLA", icon: Shield },
  { number: "5 min", label: "Setup time", icon: Zap },
  { number: "24/7", label: "Support", icon: Users },
  { number: "SOC2", label: "Compliant", icon: Star }
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
              Built for Local Business Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Engineered by experienced developers who understand both enterprise-grade technology and the unique challenges of local businesses
            </p>
          </AnimatedSection>
        </div>

        {/* Modern Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <div 
                key={index}
                className={`testimonial-card group transition-all duration-700 delay-${index * 150} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-slate-300 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Category Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${testimonial.accent}-100 text-${testimonial.accent}-700 text-sm font-medium mb-6`}>
                    <IconComponent className="w-4 h-4" />
                    {testimonial.category}
                  </div>

                  {/* Quote Icon */}
                  <div className="relative mb-6">
                    <Quote className="w-10 h-10 text-slate-200 group-hover:text-slate-300 transition-colors duration-300" />
                    <div className={`absolute -top-1 -left-1 w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-slate-700 leading-relaxed mb-8 group-hover:text-slate-800 transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Section */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-800 text-lg">{testimonial.author}</div>
                      <div className="text-slate-600 text-sm">{testimonial.role}</div>
                    </div>
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
                Enterprise-Grade Reliability
              </h3>
              <p className="text-slate-300 text-lg">
                Built with the same standards as Fortune 500 companies
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
                Start with professional-grade tools today
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Multi-location management, AI insights, advanced security, SMS campaigns, and comprehensive analytics. Everything you need to compete with the big chains.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button className="group bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Free Trial
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