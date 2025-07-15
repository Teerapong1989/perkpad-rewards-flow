import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Coffee, 
  Scissors, 
  Car, 
  Dumbbell, 
  Pizza, 
  Stethoscope, 
  ShoppingBag, 
  Palette,
  ArrowRight,
  Check 
} from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const businessTypes = [
  {
    icon: Coffee,
    name: "Coffee Shops",
    description: "Buy 9 coffees, get the 10th free",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: Scissors,
    name: "Hair Salons",
    description: "Every 10th haircut is complimentary",
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    icon: Car,
    name: "Auto Shops",
    description: "$50 off after 5 oil changes",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Dumbbell,
    name: "Fitness Studios",
    description: "Free session after 10 visits",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Pizza,
    name: "Restaurants",
    description: "Free appetizer after 8 meals",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Wellness rewards for regular visits",
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  },
  {
    icon: ShoppingBag,
    name: "Retail Stores",
    description: "Points for every purchase",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Palette,
    name: "Beauty Services",
    description: "Loyalty rewards for treatments",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  }
];

const BusinessTypeSection = () => {
  const [selectedType, setSelectedType] = useState<typeof businessTypes[0] | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleGetStarted = () => {
    window.open('https://app.perkpad.io', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              Works for Any Business
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Works for Any Business
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Click to see how it works for your industry
            </p>
          </AnimatedSection>
        </div>

        {/* Business Types Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {businessTypes.map((business, index) => {
            const Icon = business.icon;
            const isSelected = selectedType?.name === business.name;
            
            return (
              <div
                key={business.name}
                onClick={() => setSelectedType(isSelected ? null : business)}
                className={`group relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                  isSelected 
                    ? `border-brand-primary bg-white shadow-lg` 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 50}ms` : '0ms'
                }}
              >
                <div className={`w-12 h-12 rounded-xl ${business.bgColor} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className={`w-6 h-6 ${business.color}`} />
                </div>
                <h3 className="font-semibold text-slate-800 text-center text-sm md:text-base mb-2">
                  {business.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 text-center leading-relaxed">
                  {business.description}
                </p>
                
                {isSelected && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Business Details */}
        {selectedType && (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 shadow-lg animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className={`w-16 h-16 rounded-2xl ${selectedType.bgColor} flex items-center justify-center`}>
                <selectedType.icon className={`w-8 h-8 ${selectedType.color}`} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {selectedType.name}
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  {selectedType.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    onClick={handleGetStarted}
                    size="lg"
                    className="bg-brand-primary hover:bg-brand-primary-dark text-white"
                  >
                    Start 30-Day Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* General CTA */}
        {!selectedType && (
          <div className="text-center">
            <p className="text-slate-600 mb-6">Works for any business type!</p>
            <Button 
              variant="outline"
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-lg px-8 py-6 rounded-xl"
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