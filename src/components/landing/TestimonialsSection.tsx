import { Star, Users, Target, Lightbulb, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote: "After seeing successful franchises with sophisticated loyalty systems, we asked: why can't every local business have professional-grade features? We built a platform with AI insights, multi-location management, advanced security, and powerful analytics - all at small business prices.",
    author: "The Perkpad Team",
    role: "Professional Features for Everyone",
    avatar: "P",
    color: "from-teal-400 to-teal-500"
  },
  {
    quote: "Built with the same infrastructure standards as Fortune 500 companies. Real-time sync, automated backups, 99.9% uptime SLA, and professional-grade security features that protect your customer data.",
    author: "Technical Excellence",
    role: "Production-Ready Platform",
    avatar: "T",
    color: "from-purple-400 to-purple-500"
  },
  {
    quote: "AI-powered customer retention insights, predictive analytics, ROI tracking, and automated campaign management. Get the same insights as big chains, tailored for your local business.",
    author: "Business Intelligence",
    role: "Complete Analytics Suite",
    avatar: "B",
    color: "from-orange-400 to-orange-500"
  }
];

const stats = [
  { number: "99.9%", label: "Uptime SLA" },
  { number: "5 min", label: "Setup time" },
  { number: "24/7", label: "Support" },
  { number: "SOC2", label: "Compliant" }
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-spacing container-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Professional Technology for Local Business
            </h2>
            <p className="text-xl text-slate-600">
              Built by experienced engineers who understand both technology and small business needs
            </p>
          </AnimatedSection>
        </div>

        {/* Flowing Testimonials */}
        <div className="space-y-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className={`inline-block max-w-4xl ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
                    <Quote className={`w-8 h-8 text-slate-300 mb-4 ${index % 2 === 0 ? '' : 'ml-auto'}`} />
                    <blockquote className="text-base lg:text-lg text-slate-700 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                      </div>
                      <div className={index % 2 === 0 ? '' : 'text-right'}>
                        <div className="font-semibold text-slate-800">{testimonial.author}</div>
                        <div className="text-slate-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <AnimatedSection threshold={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="text-center mt-16" threshold={0.1}>
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Start with professional-grade tools today
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Multi-location management, AI insights, advanced security, SMS campaigns, and comprehensive analytics. Everything you need to compete with the big chains.
            </p>
            <div className="flex items-center justify-center space-x-2 text-teal-600 font-semibold">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <span>Free trial • Cancel anytime • No setup fees</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;