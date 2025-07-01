
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, Gift, Star, ArrowRight, Users, Zap, Sparkles, Check, Clock, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-orange-50/30 blur-3xl"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-sm font-medium animate-pulse">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  🔥 Setup fee waived (normally $99) - Limited time
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                The Only Loyalty Program That Takes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-orange-400 animate-pulse">
                  5 Minutes to Launch
                </span>
                <span className="text-slate-600 text-3xl lg:text-4xl block mt-2">(Not 5 Weeks)</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                While competitors make you wait weeks and charge setup fees, Perkpad gets your digital punch card live in 5 minutes. 
                <strong className="text-slate-800"> No contracts, no hassle, no BS.</strong>
              </p>
              
              {/* Problem agitation */}
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl">
                <p className="text-red-800 font-semibold">
                  Still using paper punch cards? You're losing <span className="text-red-600 font-bold">23% of customers</span> who lose their cards before completing them.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-lg px-10 py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your 5-Minute Setup (Free)
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 rounded-2xl border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300">
                <Zap className="mr-2 w-5 h-5" />
                See It Work (90-Second Demo)
              </Button>
            </div>
            
            {/* Social proof with urgency */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-teal-600 font-semibold">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <span>🟢 23 businesses signed up today</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium text-slate-700">Setup typically completed in 4 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium text-slate-700">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium text-slate-700">Simple onboarding process</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            {/* Floating elements with new messaging */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg animate-bounce delay-500 flex items-center justify-center">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-lg animate-bounce delay-700 flex items-center justify-center">
              <Star className="w-8 h-8 text-white fill-current" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl shadow-lg animate-bounce delay-1000 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            
            {/* Enhanced phone mockup */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-white text-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                <QrCode className="w-28 h-28 mx-auto mb-4 animate-pulse" />
                <p className="font-bold text-lg">Your customers will never lose another punch card!</p>
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-lg">Progress</span>
                  <span className="text-teal-600 font-bold text-lg bg-teal-50 px-3 py-1 rounded-full">7/10 stamps</span>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {[1,2,3,4,5,6,7].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                      <Check className="w-5 h-5 text-teal-600" />
                    </div>
                  ))}
                  {[8,9,10].map((i) => (
                    <div key={i} className="w-10 h-10 bg-slate-100 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-6 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent animate-pulse"></div>
                  <p className="text-orange-700 font-bold text-lg relative">🎁 3 more visits to pick a gift box and reveal your prize!</p>
                  <div className="w-full bg-orange-200 rounded-full h-2 mt-3 relative">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
