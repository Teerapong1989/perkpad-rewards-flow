import { Suspense, lazy, memo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import { usePageTracking } from "./hooks/usePageTracking";

// Lazy load UI components to improve TTI
const Toaster = lazy(() => import("@/components/ui/toaster").then(module => ({ 
  default: module.Toaster 
})));
const Sonner = lazy(() => import("@/components/ui/sonner").then(module => ({ 
  default: module.Toaster 
})));
const TooltipProvider = lazy(() => import("@/components/ui/tooltip").then(module => ({ 
  default: module.TooltipProvider 
})));

// Create query client with optimized settings for TTI
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1, // Reduce retries for faster TTI
      refetchOnWindowFocus: false,
    },
  },
});

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

// Aggressively lazy load chat widget
const ChatWidget = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    const loadWidget = () => {
      import("./components/support/ChatWidget").then(module => 
        resolve({ default: module.ChatWidget })
      );
    };
    
    // Load after significant delay or user interaction
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadWidget, { timeout: 15000 });
    } else {
      setTimeout(loadWidget, 10000);
    }
    
    // Load on any user interaction
    const interactions = ['click', 'keydown', 'scroll', 'mousemove', 'touchstart'];
    const handleInteraction = () => {
      loadWidget();
      interactions.forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };
    
    interactions.forEach(event => 
      document.addEventListener(event, handleInteraction, { once: true, passive: true })
    );
  })
);

// Minimal loading fallback
const PageLoader = memo(() => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loading-spinner"></div>
  </div>
));

// Lazy load routing to reduce initial bundle
const AppRoutes = lazy(() => import("react-router-dom").then(module => ({
  default: memo(() => {
    const { Routes, Route } = module;
    
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
        <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
      </Routes>
    );
  })
})));

// App content with page tracking
const AppContent = memo(() => {
  usePageTracking();
  
  return (
    <Suspense fallback={<PageLoader />}>
      <AppRoutes />
    </Suspense>
  );
});

// Optimized App component - minimal initial render
const App = memo(() => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<PageLoader />}>
        <TooltipProvider>
          <BrowserRouter>
            <AppContent />
            <Suspense fallback={null}>
              <ChatWidget />
            </Suspense>
          </BrowserRouter>
          <Suspense fallback={null}>
            <Toaster />
          </Suspense>
          <Suspense fallback={null}>
            <Sonner />
          </Suspense>
        </TooltipProvider>
      </Suspense>
    </QueryClientProvider>
  );
});

App.displayName = 'App';

export default App;
