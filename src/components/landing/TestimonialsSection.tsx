import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const TestimonialsSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Loved by small business owners
          </h2>
        </div>
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card className={`border-0 shadow-lg rounded-2xl bg-gradient-to-br from-teal-50 to-white transition-all duration-700 hover:scale-105 ${
            cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: cardsInView ? '100ms' : '0ms' }}>
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 text-lg mb-6">
                "Perkpad transformed our customer retention. We've seen a 40% increase in repeat visits since launching our digital punch card!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Sarah Martinez</div>
                  <div className="text-slate-600">Brew & Bean Café</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`border-0 shadow-lg rounded-2xl bg-gradient-to-br from-orange-50 to-white transition-all duration-700 hover:scale-105 ${
            cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: cardsInView ? '200ms' : '0ms' }}>
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 text-lg mb-6">
                "Setup was incredibly easy. My customers love not having to carry physical punch cards anymore. It's a win-win!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Mike Johnson</div>
                  <div className="text-slate-600">Fresh Cuts Barbershop</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`border-0 shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-white transition-all duration-700 hover:scale-105 ${
            cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: cardsInView ? '300ms' : '0ms' }}>
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 text-lg mb-6">
                "The analytics help me understand my customers better. I can see exactly who my loyal customers are and reward them accordingly."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">LC</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Lisa Chen</div>
                  <div className="text-slate-600">Bloom Flower Boutique</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
