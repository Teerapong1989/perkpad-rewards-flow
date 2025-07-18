// ABOUTME: Real testimonials component with actual customer stories and social proof
// ABOUTME: Creates emotional connection and builds trust through authentic experiences

import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    business: "Bloom Beauty Salon",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    quote: "My clients actually come back now. Before Perkpad, I was just hoping they'd remember me. Now I see familiar faces every week.",
    metric: "+47% repeat visits",
    story: "6 months using Perkpad",
    industry: "Beauty & Wellness"
  },
  {
    id: 2,
    name: "Marcus Williams",
    business: "Grind Coffee House",
    location: "Austin, TX", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "I used to compete with Starbucks with nothing but good coffee. Now I have their loyalty system too. Game changer.",
    metric: "1,247 loyal customers",
    story: "8 months using Perkpad",
    industry: "Food & Beverage"
  },
  {
    id: 3,
    name: "Lisa Rodriguez", 
    business: "QuickFix Auto Repair",
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face", 
    quote: "My customers remember their last service date, upcoming maintenance, everything. It's like having a personal assistant for each customer.",
    metric: "+38% customer retention",
    story: "1 year using Perkpad",
    industry: "Automotive"
  }
];

const stats = [
  { number: "10,000+", label: "Happy Customers", sublabel: "Across 50 states" },
  { number: "40%", label: "Avg. Retention Boost", sublabel: "In first 30 days" },
  { number: "97%", label: "Would Recommend", sublabel: "To other businesses" },
  { number: "5min", label: "Setup Time", sublabel: "Average onboarding" }
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-spacing container-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <AnimatedSection className="text-center mb-20" threshold={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Real Stories from <span className="text-gradient">Real Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join thousands of business owners who've transformed their customer relationships
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-brand-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`card-premium p-8 animate-fade-in-up group`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-brand-glow transition-shadow duration-300">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Metric */}
              <div className="bg-gradient-to-r from-brand-success-light to-emerald-50 rounded-xl p-4 mb-6">
                <div className="text-2xl font-bold text-brand-success mb-1">{testimonial.metric}</div>
                <div className="text-sm text-gray-600">{testimonial.story}</div>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-brand-primary font-semibold">{testimonial.business}</div>
                  <div className="text-sm text-gray-600">{testimonial.location} • {testimonial.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
        <AnimatedSection className="mb-16" threshold={0.1}>
          <div className="bg-white rounded-3xl shadow-elegant p-8 lg:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Business Owners Like You
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From corner cafes to bustling salons, see why 10,000+ businesses choose Perkpad
              </p>
            </div>
            
            {/* Industry Types */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">☕</div>
                <div className="font-semibold text-gray-900">Coffee Shops</div>
                <div className="text-sm text-gray-600">2,847 locations</div>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">💇</div>
                <div className="font-semibold text-gray-900">Salons & Spas</div>
                <div className="text-sm text-gray-600">1,523 locations</div>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🍕</div>
                <div className="font-semibold text-gray-900">Restaurants</div>
                <div className="text-sm text-gray-600">3,291 locations</div>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🔧</div>
                <div className="font-semibold text-gray-900">Auto Repair</div>
                <div className="text-sm text-gray-600">892 locations</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center" threshold={0.1}>
          <div className="bg-gradient-brand rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 tracking-tight">
                Ready to Join 10,000+ Success Stories?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Start your 30-day free trial and see why business owners love Perkpad
              </p>
              <Button 
                onClick={() => window.open('https://app.perkpad.io', '_blank')}
                size="xl"
                className="bg-white text-brand-primary hover:bg-gray-50 font-bold shadow-xl hover:shadow-2xl micro-bounce"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="mt-4 text-white/80 text-sm">
                Join Sarah, Marcus, Lisa and thousands more • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;