// ABOUTME: Simple section explaining why businesses are switching
// ABOUTME: Clean comparison between old and new way

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, Zap } from "lucide-react";
import { trackUserBehavior } from "@/utils/analytics";

const WhyNowSection = () => {
  const handleGetStartedClick = () => {
    trackUserBehavior('click', 'why_now_cta');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Simple headline - Vercel style */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Why businesses are switching
        </h2>
        
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          The old way is broken. Smart businesses are already moving.
        </p>

        {/* Clean comparison - Slack style */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Paper cards get lost</h3>
            <p className="text-gray-600">73% completion rate drops to 12% with traditional punch cards</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No customer data</h3>
            <p className="text-gray-600">You can't reach customers or track what works</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Manual tracking</h3>
            <p className="text-gray-600">Staff time wasted on stamping and managing cards</p>
          </div>
        </div>

        {/* Simple CTA */}
        <Button 
          size="xl" 
          className="btn-premium text-lg px-10 py-6 rounded-xl"
          onClick={handleGetStartedClick}
        >
          Start Getting More Repeat Customers
          <ArrowRight className="ml-3 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default WhyNowSection;