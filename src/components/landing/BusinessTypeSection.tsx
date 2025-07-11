import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Wrench, Coffee, Shirt, Car, UserCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { useMultipleInView } from "@/hooks/useInView";

const businessTypes = [
  {
    icon: Scissors,
    type: "Nail Salon / Barbershop",
    description: "10 services = 1 free manicure/haircut",
    gradient: "from-pink-400 to-pink-500",
    bgGradient: "from-pink-50 to-white",
    examples: ["Nail salons", "Barbershops", "Hair salons", "Spas"]
  },
  {
    icon: Wrench,
    type: "Auto / Repair Shop",
    description: "5 oil changes = 1 free service",
    gradient: "from-blue-400 to-blue-500", 
    bgGradient: "from-blue-50 to-white",
    examples: ["Auto repair", "Oil change", "Tire shops", "Mechanics"]
  },
  {
    icon: Coffee,
    type: "Café / Food Service",
    description: "Buy 9 drinks, get the 10th free",
    gradient: "from-amber-400 to-amber-500",
    bgGradient: "from-amber-50 to-white",
    examples: ["Cafés", "Restaurants", "Bakeries", "Juice bars"]
  },
  {
    icon: Shirt,
    type: "Laundromat / Dry Cleaning",
    description: "10 loads = $10 off next visit",
    gradient: "from-green-400 to-green-500",
    bgGradient: "from-green-50 to-white",
    examples: ["Laundromats", "Dry cleaners", "Tailors", "Cleaners"]
  },
  {
    icon: Car,
    type: "Car Wash / Detailing",
    description: "8 washes = 1 free premium wash",
    gradient: "from-cyan-400 to-cyan-500",
    bgGradient: "from-cyan-50 to-white",
    examples: ["Car washes", "Detailing", "Mobile washing", "Valet services"]
  },
  {
    icon: UserCheck,
    type: "Other Service Business",
    description: "Custom rewards for your business",
    gradient: "from-purple-400 to-purple-500",
    bgGradient: "from-purple-50 to-white",
    examples: ["Gyms", "Pet grooming", "Tutoring", "Personal services"]
  }
];

const BusinessTypeSection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { containerRef, isInView } = useMultipleInView(6, { threshold: 0.1 });

  const handleGetStarted = () => {
    window.open('https://tally.so/r/nGVLNp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Perfect for your type of business
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how Perkpad works for businesses like yours. Click any business type to see a customized loyalty program example.
          </p>
        </AnimatedSection>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businessTypes.map((business, index) => {
            const Icon = business.icon;
            const isSelected = selectedType === business.type;
            
            return (
              <AnimatedCard
                key={business.type}
                isInView={isInView}
                delay={index * 100}
                hoverEffect
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 border-2 h-full ${
                    isSelected 
                      ? 'border-teal-400 shadow-lg ring-2 ring-teal-200' 
                      : 'border-slate-200 hover:border-teal-300 hover:shadow-md'
                  } bg-gradient-to-br ${business.bgGradient}`}
                  onClick={() => setSelectedType(isSelected ? null : business.type)}
                >
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${business.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 ${isSelected ? 'scale-110 rotate-3' : ''}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-800">{business.type}</h3>
                      
                      <div className={`p-3 rounded-lg transition-all duration-300 ${
                        isSelected ? 'bg-teal-100 border-2 border-teal-300' : 'bg-slate-100'
                      }`}>
                        <p className={`font-semibold text-sm ${isSelected ? 'text-teal-700' : 'text-slate-700'}`}>
                          Example: {business.description}
                        </p>
                      </div>
                      
                      <div className="space-y-1">
                        {business.examples.map((example, idx) => (
                          <span key={idx} className="inline-block bg-white/70 text-slate-600 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>

        {selectedType && (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border-2 border-teal-200 animate-fade-in">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-teal-700">Perfect! Let's set up your {selectedType.toLowerCase()}</h3>
              <p className="text-slate-600">
                Our 2-minute setup will create a loyalty program specifically designed for businesses like yours.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-lg px-8 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={handleGetStarted}
              >
                Start Free Setup for {selectedType}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-slate-500">
                No credit card required • 30-day money-back guarantee
              </p>
            </div>
          </div>
        )}

        {!selectedType && (
          <div className="text-center">
            <p className="text-slate-600 mb-6">Don't see your business type? No problem!</p>
            <Button 
              variant="outline"
              size="lg"
              className="border-teal-300 text-teal-700 hover:bg-teal-50 text-lg px-8 py-6 rounded-xl"
              onClick={handleGetStarted}
            >
              Set Up For Any Business Type
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessTypeSection;