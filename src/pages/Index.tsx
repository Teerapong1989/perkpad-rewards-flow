
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import { Suspense, lazy } from "react";

// Lazy load non-critical landing sections to reduce initial bundle
const ValueStackSection = lazy(() => import("@/components/landing/ValueStackSection"));
const KeywordOptimizedSection = lazy(() => import("@/components/landing/KeywordOptimizedSection"));
const WhyNowSection = lazy(() => import("@/components/landing/WhyNowSection"));
const TheSolutionSection = lazy(() => import("@/components/landing/TheSolutionSection"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const ExitIntentPopup = lazy(() => import("@/components/landing/ExitIntentPopup"));

// Lightweight loading fallback
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <ValueStackSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <KeywordOptimizedSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WhyNowSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TheSolutionSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <ExitIntentPopup />
      </Suspense>
    </div>
  );
};

export default Index;
