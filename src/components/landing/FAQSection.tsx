
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-2xl px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
              Can customers use this without downloading an app?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              Yes! That's the beauty of Perkpad. Customers simply use their phone's camera to scan your QR code - no app downloads required. It works through their web browser, making it incredibly convenient for everyone.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-2xl px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
              How do I upgrade or cancel my subscription?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              You can upgrade, downgrade, or cancel your subscription at any time through your account dashboard. There are no long-term contracts or cancellation fees. If you cancel, your account will remain active until the end of your current billing period.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-2xl px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
              What happens to my customer data if I cancel?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              Your customer data is always yours. Before canceling, you can export all your customer information and loyalty program data. We'll keep your data secure for 30 days after cancellation in case you decide to reactivate your account.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-2xl px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
              Do you offer support for setting up my loyalty program?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              Absolutely! All paid plans include email support, and we have extensive setup guides and video tutorials. Pro and Enterprise customers get priority support, and Enterprise customers can schedule one-on-one setup calls with our team.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
