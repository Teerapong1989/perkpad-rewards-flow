import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import { usePageTracking } from "./hooks/usePageTracking";

// Lazy load non-critical page components
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const SMSHelp = lazy(() => import("./pages/SMSHelp"));
const Search = lazy(() => import("./pages/Search"));
const SolutionsCoffeeShops = lazy(() => import("./pages/SolutionsCoffeeShops"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load chat widget for better initial load
const ChatWidget = lazy(() => import("./components/support/ChatWidget").then(module => ({ default: module.ChatWidget })));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const AppContent = () => {
  usePageTracking();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/features" element={<Suspense fallback={<PageLoader />}><Features /></Suspense>} />
      <Route path="/pricing" element={<Suspense fallback={<PageLoader />}><Pricing /></Suspense>} />
      <Route path="/how-it-works" element={<Suspense fallback={<PageLoader />}><HowItWorks /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
      <Route path="/dashboard" element={<Suspense fallback={<PageLoader />}><Dashboard /></Suspense>} />
      <Route path="/privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />
      <Route path="/terms-of-service" element={<Suspense fallback={<PageLoader />}><TermsOfService /></Suspense>} />
      <Route path="/sms-help" element={<Suspense fallback={<PageLoader />}><SMSHelp /></Suspense>} />
      <Route path="/search" element={<Suspense fallback={<PageLoader />}><Search /></Suspense>} />
      <Route path="/solutions/coffee-shops" element={<Suspense fallback={<PageLoader />}><SolutionsCoffeeShops /></Suspense>} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
