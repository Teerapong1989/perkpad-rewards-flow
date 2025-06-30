
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const testimonials = [
  {
    quote: "Perkpad transformed our customer retention. We've seen a 40% increase in repeat visits since launching our digital punch card!",
    author: "Sarah Martinez",
    business: "Brew & Bean Café",
    initials: "SM",
    gradient: "from-teal-400 to-teal-500",
    cardGradient: "from-teal-50 to-white"
  },
  {
    quote: "Setup was incredibly easy. My customers love not having to carry physical punch cards anymore. It's a win-win!",
    author: "Mike Johnson",
    business: "Fresh Cuts Barbershop",
    initials: "MJ",
    gradient: "from-orange-400 to-orange-500",
    cardGradient: "from-orange-50 to-white"
  },
  {
    quote: "The analytics help me understand my customers better. I can see exactly who my loyal customers are and reward them accordingly.",
    author: "Lisa Chen",
    business: "Bloom Flower Boutique",
    initials: "LC",
    gradient: "from-purple-400 to-purple-500",
    cardGradient: "from-purple-50 to-white"
  }
];

const TestimonialsSection = () => {
  const { containerRef: cardsRef, isInView: cardsInView } = useMultipleInView(3, { threshold: 0.2 });

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Loved by small business owners
          </h2>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={testimonial.author}
              isInView={cardsInView}
              delay={(index + 1) * 100}
              hoverEffect
            >
              <Card className={`border-0 shadow-lg rounded-2xl bg-gradient-to-br ${testimonial.cardGradient} transition-all duration-700`}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 text-lg mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.author}</div>
                      <div className="text-slate-600">{testimonial.business}</div>
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
