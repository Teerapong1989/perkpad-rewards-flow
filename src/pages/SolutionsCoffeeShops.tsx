// ABOUTME: SEO-optimized landing page for coffee shop loyalty programs 
// ABOUTME: targeting specific keywords and providing targeted content for coffee shop owners

import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { updateMetaTags, addStructuredData } from "@/utils/seo";
import { trackConversion } from "@/utils/analytics";

const SolutionsCoffeeShops = () => {
  useEffect(() => {
    // Update SEO meta tags for this specific page
    updateMetaTags({
      title: "Coffee Shop Loyalty Program | Digital Punch Cards for Cafes | Perkpad",
      description: "Transform your coffee shop's paper punch cards into a digital loyalty program. Boost customer retention with QR code loyalty cards perfect for cafes and coffee shops.",
      keywords: "coffee shop loyalty program, digital punch cards for cafes, cafe customer retention, QR code loyalty cards coffee shop",
      canonical: "https://perkpad.io/solutions/coffee-shops"
    });

    // Add FAQPage structured data specific to coffee shops
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", 
          "name": "How does a digital loyalty program work for coffee shops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers scan a QR code at your coffee shop counter with their phone camera. No app download needed. They collect digital stamps for each purchase and automatically unlock rewards like free coffee or pastries."
          }
        },
        {
          "@type": "Question",
          "name": "Can customers use this if they don't have the latest smartphone?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Yes! Any smartphone with a camera can scan QR codes. The loyalty program works in the web browser, so no app installation is required. It works on both iPhone and Android devices."
          }
        },
        {
          "@type": "Question",
          "name": "How do I set up the loyalty program for my coffee shop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Setup takes just 5 minutes. Create your account, customize your loyalty card design, print your QR code, and place it at your counter. Start rewarding customers immediately."
          }
        }
      ]
    });

    // Track page view conversion
    trackConversion('page_view');
  }, []);

  const handleGetStartedClick = () => {
    trackConversion('demo_request');
    window.open('https://tally.so/r/mYgXjK', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Coffee Shop Loyalty Program That Actually{" "}
              <span className="text-gradient">Works</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Replace those lost paper punch cards with QR code loyalty cards. Perfect for coffee shops, cafes, and specialty beverage stores.
            </p>
            <button
              onClick={handleGetStartedClick}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
            >
              Start Free Coffee Shop Program
            </button>
          </div>
        </section>

        {/* Coffee Shop Specific Benefits */}
        <section className="py-16 px-4 sm:px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
              Why Coffee Shops Love Perkpad
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☕</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Perfect for Daily Customers</h3>
                <p className="text-muted-foreground">
                  Track your regulars who come in for their morning coffee. Build stronger relationships with your daily customers.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">No App Required</h3>
                <p className="text-muted-foreground">
                  Customers just scan your QR code. No apps to download, no accounts to create. Works instantly on any smartphone.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Boost Repeat Visits</h3>
                <p className="text-muted-foreground">
                  Turn one-time visitors into regulars. Our coffee shop customers see 40% more repeat visits on average.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works for Coffee Shops */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
              Setup for Your Coffee Shop in 5 Minutes
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create Your Coffee Shop Loyalty Program</h3>
                  <p className="text-muted-foreground">
                    Sign up and customize your loyalty card. Set rewards like "Buy 9 coffees, get 1 free" or "Free pastry after 5 visits."
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Print Your QR Code</h3>
                  <p className="text-muted-foreground">
                    Download and print your QR code. Place it at your counter, on your menu board, or near your register.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customers Scan & Earn</h3>
                  <p className="text-muted-foreground">
                    When customers buy coffee, they scan your QR code to collect stamps. They'll see their progress and upcoming rewards instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Boost Your Coffee Shop's Customer Loyalty?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of coffee shops using Perkpad to increase customer retention and drive more repeat business.
            </p>
            <button
              onClick={handleGetStartedClick}
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg"
            >
              Start Your Coffee Shop Program Free
            </button>
            <p className="text-sm mt-4 opacity-75">
              Free forever plan available • 5-minute setup • No contracts
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolutionsCoffeeShops;