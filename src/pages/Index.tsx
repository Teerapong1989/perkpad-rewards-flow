
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import KeywordOptimizedSection from "@/components/landing/KeywordOptimizedSection";
import WhyNowSection from "@/components/landing/WhyNowSection";
import TheSolutionSection from "@/components/landing/TheSolutionSection";
import Footer from "@/components/landing/Footer";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <KeywordOptimizedSection />
      <WhyNowSection />
      <TheSolutionSection />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
