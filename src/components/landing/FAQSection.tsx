
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const faqs = [
  {
    question: "What business types do you support?",
    answer: "12 business types including salons, auto shops, cafés, restaurants, retail, and more. Adapts to your industry needs."
  },
  {
    question: "Can customers use this without downloading an app?",
    answer: "Yes! Customers scan your QR code with their phone camera - no app downloads. Works through web browser with location verification."
  },
  {
    question: "What advanced features do you offer?",
    answer: "AI customer insights, multi-location management, geofenced check-ins, SMS/email campaigns, advanced analytics, staff management, and security features."
  },
  {
    question: "How does multi-location management work?",
    answer: "Pro plan: multiple locations (+$10/month each). Growth plan: 3 locations included (+$8/month each extra). Unified customer data and analytics across all locations."
  },
  {
    question: "What kind of analytics and insights do you provide?",
    answer: "Real-time visit tracking, retention analysis, revenue metrics, AI recommendations, customer lifetime value, and predictive insights."
  },
  {
    question: "How secure is the platform?",
    answer: "Encryption, automated security monitoring, fraud detection, IP blocking, and audit logs. Modern security practices protect your data."
  },
  {
    question: "Can I integrate with my existing POS system?",
    answer: "Yes! API endpoints, webhook support, and automated sync. Our team helps with custom integrations for Pro and Growth customers."
  },
  {
    question: "What marketing tools are included?",
    answer: "SMS/email automation, customer segmentation, re-engagement campaigns, birthday rewards, visit reminders, and ROI tracking."
  },
  {
    question: "How does the AI customer retention feature work?",
    answer: "AI analyzes visit patterns and behavior to identify at-risk customers. Provides automated recommendations for rewards, timing, and messaging to maximize retention."
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
