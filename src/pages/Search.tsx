// ABOUTME: Search page component that handles search queries from the URL parameter
// ABOUTME: and provides a simple search interface with analytics tracking

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { trackUserBehavior } from "@/utils/analytics";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    
    if (q) {
      trackUserBehavior("search_performed", "search_page");
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchTerm = formData.get("search") as string;
    
    if (searchTerm) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
      trackUserBehavior("search_submitted", "search_form");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Search Perkpad
            </h1>
            <p className="text-lg text-muted-foreground">
              Find information about our digital loyalty platform
            </p>
          </header>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2 max-w-2xl mx-auto">
              <input
                type="search"
                name="search"
                defaultValue={query}
                placeholder="Search for features, pricing, documentation..."
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {query && (
            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">
                Search results for "{query}"
              </h2>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">
                    <a href="/features" className="text-primary hover:underline">
                      Features - Digital Loyalty Cards
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Discover how Perkpad transforms traditional punch cards into modern QR-based loyalty programs.
                  </p>
                </div>
                
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">
                    <a href="/pricing" className="text-primary hover:underline">
                      Pricing - Plans for Every Business
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    View our flexible pricing plans starting with a free tier for small businesses.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">
                    <a href="/how-it-works" className="text-primary hover:underline">
                      How It Works - Simple Setup
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Learn how easy it is to set up and manage your digital loyalty program.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;