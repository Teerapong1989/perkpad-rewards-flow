
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const testimonials = [
  {
    quote: "Setup took exactly 4 minutes. In the first month, we saw 47 customers complete their loyalty cards vs. maybe 12 with paper cards. The difference is night and day.",
    author: "Sarah Martinez",
    business: "Brew & Bean Café • 3 locations",
    initials: "SM",
    gradient: "from-teal-400 to-teal-500",
    cardGradient: "from-teal-50 to-white",
    metric: "47 vs 12 completed cards/month",
    timeframe: "First month results"
  },
  {
    quote: "My barber shop customers love not carrying punch cards. I can see who's close to their free cut and text them. Revenue up 28% in 8 weeks.",
    author: "Mike Johnson", 
    business: "Fresh Cuts Barbershop • Downtown",
    initials: "MJ",
    gradient: "from-orange-400 to-orange-500",
    cardGradient: "from-orange-50 to-white",
    metric: "28% revenue increase",
    timeframe: "8 weeks"
  },
  {
    quote: "I can finally see who my actual loyal customers are. Turns out 6 customers make up 31% of my revenue. Now I treat them like VIPs and they bring their friends.",
    author: "Lisa Chen",
    business: "Bloom Flower Boutique • Est. 2018",
    initials: "LC",
    gradient: "from-purple-400 to-purple-500",
    cardGradient: "from-purple-50 to-white",
    metric: "6 customers = 31% of revenue",
    timeframe: "Customer insights revealed"
  }
];

const TestimonialsSection = () => {
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(3, { threshold: 0.2 });

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Real results from real small business owners
          </h2>
          <p className="text-xl text-slate-600">
            487 coffee shops, salons, and local businesses switched to Perkpad this month
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={testimonial.author}
              isInView={cardsInView}
              delay={(index + 1) * 100}
              hoverEffect
            >
              <Card className={`border-0 shadow-lg rounded-2xl bg-gradient-to-br ${testimonial.cardGradient} transition-all duration-700 h-full`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Metric highlight */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-800 font-bold text-sm">{testimonial.metric}</span>
                    </div>
                    <span className="text-green-600 text-xs">{testimonial.timeframe}</span>
                  </div>
                  
                  <blockquote className="text-slate-700 text-lg mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3 mt-auto">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.author}</div>
                      <div className="text-slate-600 text-sm">{testimonial.business}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
