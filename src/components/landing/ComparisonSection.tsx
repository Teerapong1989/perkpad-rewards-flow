// ABOUTME: Competition comparison section that highlights Perkpad's unique differentiators
// ABOUTME: Shows feature comparison table against other loyalty platforms

import { Check, X, AlertTriangle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const ComparisonSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const competitors = [
    { name: "Perkpad", highlight: true },
    { name: "LoyaltyLion", highlight: false },
    { name: "Smile.io", highlight: false },
    { name: "Basic Apps", highlight: false },
    { name: "Punch Cards", highlight: false }
  ];

  const features = [
    {
      category: "Setup & Ease of Use",
      items: [
        {
          feature: "5-minute setup",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: true,
          punchcards: true
        },
        {
          feature: "No technical skills required",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: true,
          punchcards: true
        }
      ]
    },
    {
      category: "Security & Protection",
      items: [
        {
          feature: "Advanced fraud protection",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: false,
          punchcards: false
        },
        {
          feature: "Real-time fraud alerts",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: false,
          punchcards: false
        }
      ]
    },
    {
      category: "Engagement & Gamification",
      items: [
        {
          feature: "XP system with achievements",
          perkpad: true,
          loyaltylion: false,
          smile: true,
          basicapps: false,
          punchcards: false
        },
        {
          feature: "Weekly challenges",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: false,
          punchcards: false
        },
        {
          feature: "Gift box rewards system",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: false,
          punchcards: false
        }
      ]
    },
    {
      category: "AI & Intelligence",
      items: [
        {
          feature: "AI-powered customer recommendations",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: false,
          punchcards: false
        },
        {
          feature: "Predictive analytics for at-risk customers",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: false,
          punchcards: false
        }
      ]
    },
    {
      category: "Cost Control",
      items: [
        {
          feature: "Transparent SMS pricing",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: true,
          punchcards: true
        },
        {
          feature: "Proactive cost notifications",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: false,
          punchcards: false
        },
        {
          feature: "No surprise billing",
          perkpad: true,
          loyaltylion: false,
          smile: false,
          basicapps: true,
          punchcards: true
        }
      ]
    }
  ];

  const getFeatureValue = (feature: any, competitor: string) => {
    switch (competitor) {
      case "Perkpad": return feature.perkpad;
      case "LoyaltyLion": return feature.loyaltylion;
      case "Smile.io": return feature.smile;
      case "Basic Apps": return feature.basicapps;
      case "Punch Cards": return feature.punchcards;
      default: return false;
    }
  };

  const renderIcon = (value: boolean, isHighlight: boolean) => {
    if (value) {
      return <Check className={`w-5 h-5 ${isHighlight ? 'text-white' : 'text-green-500'}`} />;
    } else {
      return <X className={`w-5 h-5 ${isHighlight ? 'text-white/60' : 'text-red-400'}`} />;
    }
  };

  return (
    <section className="section-spacing container-padding bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <AnimatedSection className="text-center mb-16" threshold={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Why Choose <span className="text-gradient">Perkpad?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we compare against other loyalty solutions
            </p>
          </AnimatedSection>
        </div>

        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Mobile: Simplified View */}
          <div className="lg:hidden space-y-8">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800">{category.category}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between">
                      <span className="text-slate-700 font-medium">{item.feature}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-brand-primary">Perkpad</span>
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Full Comparison Table */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-6 bg-slate-50 border-b border-slate-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800">Features</h3>
              </div>
              {competitors.map((competitor) => (
                <div 
                  key={competitor.name} 
                  className={`p-6 text-center ${
                    competitor.highlight 
                      ? 'bg-brand-primary text-white shadow-xl ring-2 ring-brand-primary/20' 
                      : 'bg-white'
                  }`}
                >
                  <h4 className={`text-lg font-bold ${
                    competitor.highlight ? 'text-white' : 'text-slate-800'
                  }`}>
                    {competitor.name}
                  </h4>
                  {competitor.highlight && (
                    <div className="text-sm text-white/90 mt-1">Our Platform</div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Categories */}
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="grid grid-cols-6 bg-slate-100 border-b border-slate-200">
                  <div className="p-4 col-span-6">
                    <h4 className="text-md font-semibold text-slate-700">{category.category}</h4>
                  </div>
                </div>
                
                {/* Feature Rows */}
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="grid grid-cols-6 border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
                    <div className="p-4 font-medium text-slate-700 border-r border-slate-200">
                      {item.feature}
                    </div>
                    {competitors.map((competitor) => (
                      <div 
                        key={competitor.name} 
                        className={`p-4 text-center border-r border-slate-200 last:border-r-0 ${
                          competitor.highlight ? 'bg-brand-primary/5' : ''
                        }`}
                      >
                        {renderIcon(getFeatureValue(item, competitor.name), competitor.highlight)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <AnimatedSection className="text-center mt-12" threshold={0.1}>
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to outperform the competition?</h3>
              <p className="text-lg mb-6 text-white/90">
                Join businesses using Perkpad's advanced features to drive 40% more customer retention
              </p>
              <button 
                onClick={() => window.open('https://app.perkpad.io', '_blank')}
                className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Start Free Trial
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;