import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackConversion, trackUserBehavior } from "@/utils/analytics";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const handlePrimaryClick = () => {
    trackUserBehavior("click", "hero_primary_cta");
    trackConversion("signup");
    window.open("https://app.perkpad.io", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-primary-light/20 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-1 text-sm font-medium text-brand-primary">
            Built for local businesses
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Turn one-time shoppers into regulars with digital punch cards.
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Perkpad replaces paper punch cards with a QR loyalty experience your customers can use instantly in the browser.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
            <Button
              size="xl"
              className="w-full max-w-sm bg-gradient-to-r from-brand-primary to-brand-secondary text-lg font-semibold text-white hover:from-brand-primary-dark hover:to-brand-secondary sm:text-xl"
              onClick={handlePrimaryClick}
            >
              Start free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link
              to="/how-it-works"
              className="text-sm font-medium text-gray-500 underline-offset-4 transition hover:text-gray-700 hover:underline"
            >
              See setup guide
            </Link>
            <p className="text-sm text-gray-500">No credit card required • Setup in 5 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
