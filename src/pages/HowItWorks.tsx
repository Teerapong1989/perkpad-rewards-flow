
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/how-it-works/HeroSection";
import CustomerExperienceSection from "@/components/how-it-works/CustomerExperienceSection";
import BusinessOwnerJourneySection from "@/components/how-it-works/BusinessOwnerJourneySection";
import PricingPlansSection from "@/components/how-it-works/PricingPlansSection";
import BenefitsSection from "@/components/how-it-works/BenefitsSection";
import CTASection from "@/components/how-it-works/CTASection";
import Footer from "@/components/landing/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CustomerExperienceSection />
      <BusinessOwnerJourneySection />
      <PricingPlansSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HowItWorks;
