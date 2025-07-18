// ABOUTME: Simple product showcase section
// ABOUTME: Shows how the solution works with minimal text

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, BarChart3, Users } from "lucide-react";
import { trackUserBehavior } from "@/utils/analytics";

const TheSolutionSection = () => {
  const handleGetStartedClick = () => {
    trackUserBehavior('click', 'solution_cta');
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Simple headline - Airtable style */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The simple solution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Digital loyalty that actually works. Setup in minutes, not months.
          </p>
        </div>

        {/* Product preview - Zoom style */}
        <div className="mb-20">
          <div className="relative bg-gray-50 rounded-3xl p-8 overflow-hidden">
            <img 
              src="/lovable-uploads/5318a79b-c5e1-4799-9bdc-2a3420cbb4d7.png" 
              alt="Perkpad Dashboard"
              className="w-full h-auto rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Simple benefits - GitHub style */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">QR code scanning</h3>
            <p className="text-gray-600">Customers scan, you track. No apps to download.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Track everything</h3>
            <p className="text-gray-600">See who visits, when, and how often.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Bring them back</h3>
            <p className="text-gray-600">Automated messages keep customers coming.</p>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <Button 
            size="xl" 
            className="btn-premium text-lg px-10 py-6 rounded-xl"
            onClick={handleGetStartedClick}
          >
            Try It Free for 30 Days
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            5-minute setup • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheSolutionSection;