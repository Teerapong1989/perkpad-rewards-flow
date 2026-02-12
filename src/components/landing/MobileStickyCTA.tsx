import { Button } from "@/components/ui/button";
import { trackConversion, trackUserBehavior } from "@/utils/analytics";

const MobileStickyCTA = () => {
  const handleClick = () => {
    trackUserBehavior("click", "mobile_sticky_cta");
    trackConversion("signup");
    window.open("https://app.perkpad.io", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
      <Button className="w-full bg-brand-primary text-white hover:bg-brand-primary-dark" onClick={handleClick}>
        Start free
      </Button>
    </div>
  );
};

export default MobileStickyCTA;
