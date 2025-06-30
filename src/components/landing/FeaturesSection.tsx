
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Gift, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const FeaturesSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: card1Ref, isInView: card1InView } = useInView({ threshold: 0.2 });
  const { ref: card2Ref, isInView: card2InView } = useInView({ threshold: 0.2 });
  const { ref: card3Ref, isInView: card3InView } = useInView({ threshold: 0.2 });

  return (
    <section id="features" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Everything you need to build customer loyalty
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple tools that help small businesses create meaningful connections with their customers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card 
            ref={card1Ref}
            className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group hover:-translate-y-2 cursor-pointer ${
              card1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: card1InView ? '100ms' : '0ms' }}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-800 group-hover:text-teal-600 transition-colors duration-300">QR Code Check-In</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                Customers simply scan your unique QR code to earn stamps. No app downloads, no hassle - just point, scan, and collect rewards.
              </CardDescription>
            </CardContent>
          </Card>

          <Card 
            ref={card2Ref}
            className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group hover:-translate-y-2 cursor-pointer ${
              card2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: card2InView ? '200ms' : '0ms' }}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-800 group-hover:text-orange-500 transition-colors duration-300">Custom Rewards</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                Set your own reward rules. Buy 10 get 1 free, spend $100 get $10 off - you decide what works best for your business.
              </CardDescription>
            </CardContent>
          </Card>

          <Card 
            ref={card3Ref}
            className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group hover:-translate-y-2 cursor-pointer ${
              card3InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: card3InView ? '300ms' : '0ms' }}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-800 group-hover:text-purple-500 transition-colors duration-300">Customer Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                Track visits, monitor redemptions, and understand customer behavior with simple analytics that actually help your business grow.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
