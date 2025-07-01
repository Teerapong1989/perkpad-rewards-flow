
import { CheckCircle, Zap, Shield } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8">
          Why Businesses Choose Perkpad
        </h2>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 sm:space-y-4 p-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800">34% More Completions</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Digital cards are never lost or forgotten, leading to significantly higher completion rates.</p>
          </div>
          <div className="space-y-3 sm:space-y-4 p-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800">5-Minute Setup</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Unlike competitors who take weeks, you'll be live in minutes with our simple setup process.</p>
          </div>
          <div className="space-y-3 sm:space-y-4 p-4 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800">30-Day Guarantee</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">If you don't see more repeat customers in 30 days, we'll refund everything + pay you $100.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
