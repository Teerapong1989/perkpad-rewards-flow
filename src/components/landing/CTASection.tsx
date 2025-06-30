
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-teal-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to build customer loyalty that lasts?
        </h2>
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          Join thousands of small businesses using Perkpad to create meaningful connections with their customers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-teal-700 hover:bg-slate-50 text-lg px-8 py-6 rounded-xl">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 text-lg px-8 py-6 rounded-xl">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
