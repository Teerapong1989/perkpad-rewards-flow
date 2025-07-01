
import { CheckCircle, Zap, Shield } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Why Businesses Choose Perkpad
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">34% More Completions</h3>
            <p className="text-slate-600">Digital cards are never lost or forgotten, leading to significantly higher completion rates.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">5-Minute Setup</h3>
            <p className="text-slate-600">Unlike competitors who take weeks, you'll be live in minutes with our simple setup process.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">30-Day Guarantee</h3>
            <p className="text-slate-600">If you don't see more repeat customers in 30 days, we'll refund everything + pay you $100.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
