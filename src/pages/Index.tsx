
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import WhyNowSection from "@/components/landing/WhyNowSection";
import TheSolutionSection from "@/components/landing/TheSolutionSection";
import Footer from "@/components/landing/Footer";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <WhyNowSection />
      <TheSolutionSection />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
