
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Gift, ArrowRight } from "lucide-react";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Tally form with email pre-filled if possible
    const tallyUrl = `https://tally.so/r/nGVLNp${email ? `?email=${encodeURIComponent(email)}` : ''}`;
    window.open(tallyUrl, '_blank', 'noopener,noreferrer');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-white rounded-2xl shadow-2xl transform animate-scale-in">
        <CardHeader className="text-center pb-4 relative">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          
          <CardTitle className="text-2xl font-bold text-slate-800">
            Wait! Don't lose customers to forgotten punch cards
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-semibold text-center">
              Get our 'Small Business Loyalty Playbook' 
              <span className="block text-sm font-normal text-red-600">(normally $47) FREE</span>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <input 
              type="email" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3"
            >
              Get Free Playbook + Start 5-Min Setup
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
          
          <p className="text-xs text-center text-slate-500">
            Plus: Early access to new customer retention tools (value $197)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitIntentPopup;
