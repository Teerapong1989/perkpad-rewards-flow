
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const faqs = [
  {
    question: "Can customers use this without downloading an app?",
    answer: "Yes! That's the beauty of Perkpad. Customers simply use their phone's camera to scan your QR code - no app downloads required. It works through their web browser, making it incredibly convenient for everyone."
  },
  {
    question: "How do customers collect stamps or rewards?",
    answer: "Customers simply scan your QR code at checkout. It opens a browser-based experience (no app needed), where they can track stamps and unlock rewards."
  },
  {
    question: "Can I customize the look and feel of my loyalty card?",
    answer: "Yes! With a paid plan, you can add your logo, brand colors, and custom messaging for your customers."
  },
  {
    question: "What happens if a customer loses their phone?",
    answer: "As long as they use the same phone number, their reward history is still saved and can be retrieved."
  },
  {
    question: "How do I switch plans or cancel my subscription?",
    answer: "You can upgrade, downgrade, or cancel your subscription at any time through your account dashboard under 'Billing & Plans.' There are no long-term contracts or cancellation fees. If you cancel, your account will remain active until the end of your current billing period."
  },
  {
    question: "Can I use this for multiple business locations?",
    answer: "Yes, our Pro plan supports multi-location loyalty programs with shared analytics and controls."
  },
  {
    question: "Is customer data safe?",
    answer: "Absolutely. We never sell or misuse customer data. Everything is securely encrypted and handled with care."
  },
  {
    question: "What happens to my customer data if I cancel?",
    answer: "Your customer data is always yours. Before canceling, you can export all your customer information and loyalty program data. We'll keep your data secure for 30 days after cancellation in case you decide to reactivate your account."
  },
  {
    question: "Do you offer support for setting up my loyalty program?",
    answer: "Absolutely! All paid plans include email support, and we have extensive setup guides and video tutorials. Pro and Enterprise customers get priority support, and Enterprise customers can schedule one-on-one setup calls with our team."
  }
];

const FAQSection = () => {
  const { containerRef: accordionRef, isInView: accordionInView } = useMultipleInView(9, { threshold: 0.2 });

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <Accordion type="single" collapsible className="space-y-4" ref={accordionRef}>
          {faqs.map((faq, index) => (
            <AnimatedCard
              key={`item-${index + 1}`}
              isInView={accordionInView}
              delay={(index + 1) * 100}
            >
              <AccordionItem 
                value={`item-${index + 1}`} 
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimatedCard>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
