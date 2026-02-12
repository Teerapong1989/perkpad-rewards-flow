import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSimpleSection from "@/components/landing/HowItWorksSimpleSection";
import WhoItsForSection from "@/components/landing/WhoItsForSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import Footer from "@/components/landing/Footer";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-20 md:pb-0">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofSection />
        <HowItWorksSimpleSection />
        <WhoItsForSection />
      </main>
      <Footer />
      <ExitIntentPopup />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
