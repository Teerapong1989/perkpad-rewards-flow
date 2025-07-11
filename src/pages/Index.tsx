
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BusinessTypeSection from "@/components/landing/BusinessTypeSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Diagonal background separator */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 pointer-events-none"></div>
      
      <Navigation />
      <HeroSection />
      
      {/* Diagonal section separator */}
      <div className="relative">
        <div className="absolute inset-0 bg-white transform -skew-y-1 origin-top-left" style={{ height: '120%', top: '-10%' }}></div>
        <div className="relative z-10">
          <FeaturesSection />
        </div>
      </div>
      
      <BusinessTypeSection />
      
      {/* Another diagonal separator */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-subtle transform skew-y-1 origin-bottom-right" style={{ height: '120%', top: '-10%' }}></div>
        <div className="relative z-10">
          <TestimonialsSection />
          <PricingSection />
        </div>
      </div>
      
      <FAQSection />
      <CTASection />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
