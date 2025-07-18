
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BusinessTypeSection from "@/components/landing/BusinessTypeSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import RealTestimonialsSection from "@/components/landing/RealTestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";
import { ChatWidget } from "@/components/support/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <BusinessTypeSection />
      <HowItWorksSection />
      <ComparisonSection />
      <RealTestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ExitIntentPopup />
      {/* <ChatWidget /> */}
    </div>
  );
};

export default Index;
