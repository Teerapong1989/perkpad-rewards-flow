
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block mb-6 animate-pulse">
          <Clock className="w-4 h-4 inline mr-2" />
          Limited Time: Setup fee waived (normally $99)
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to stop losing customers to forgotten punch cards?
        </h2>
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          Join 487 businesses that made the switch this month. Your 5-minute setup starts now.
        </p>
        
        {/* Risk reversal prominently displayed */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 text-white">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-teal-200" />
              <span className="font-semibold">30-day guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-teal-200" />
              <span className="font-semibold">5-minute setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-teal-200" />
              <span className="font-semibold">Simple onboarding</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-teal-700 hover:bg-slate-50 text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your 5-Minute Setup (Free)
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 text-lg px-8 py-6 rounded-xl">
            See 90-Second Demo
          </Button>
        </div>
        
        <p className="text-teal-200 text-sm mt-6">
          If you don't see more repeat customers in 60 days, we'll refund everything + pay you $100
        </p>
      </div>
    </section>
  );
};

export default CTASection;
