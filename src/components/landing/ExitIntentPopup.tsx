
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Gift, ArrowRight } from "lucide-react";
import SecureForm from "@/components/security/SecureForm";
import { trackUserBehavior, trackConversion } from "@/utils/analytics";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        trackUserBehavior('view', 'exit_intent_popup');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleFormSubmit = async ({ email }: { email: string }) => {
    trackUserBehavior('submit', 'exit_intent_form');
    trackConversion('signup');
    
    try {
      // Send the loyalty playbook email
      const response = await fetch('https://kbnglvsmilhglajiuzsl.supabase.co/functions/v1/send-loyalty-playbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Email sent successfully, redirect to Tally form
        const tallyUrl = `https://tally.so/r/nGVLNp${email ? `?email=${encodeURIComponent(email)}` : ''}`;
        window.open(tallyUrl, '_blank', 'noopener,noreferrer');
        setIsVisible(false);
      } else {
        console.error('Failed to send email');
        // Still redirect to Tally form as fallback
        const tallyUrl = `https://tally.so/r/nGVLNp${email ? `?email=${encodeURIComponent(email)}` : ''}`;
        window.open(tallyUrl, '_blank', 'noopener,noreferrer');
        setIsVisible(false);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Still redirect to Tally form as fallback
      const tallyUrl = `https://tally.so/r/nGVLNp${email ? `?email=${encodeURIComponent(email)}` : ''}`;
      window.open(tallyUrl, '_blank', 'noopener,noreferrer');
      setIsVisible(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    trackUserBehavior('click', 'exit_intent_close');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-white rounded-2xl shadow-2xl transform animate-scale-in">
        <CardHeader className="text-center pb-4 relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            aria-label="Close popup"
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
          
          <SecureForm
            onSubmit={handleFormSubmit}
            placeholder="Enter your email address"
            buttonText="Get Free Playbook + Start 5-Min Setup"
          >
            <ArrowRight className="ml-2 w-4 h-4" />
          </SecureForm>
          
          <p className="text-xs text-center text-slate-500">
            Plus: Early access to new customer retention tools (value $197)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitIntentPopup;
