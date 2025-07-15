
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const faqs = [
  {
    question: "What business types work?",
    answer: "Coffee, salons, auto, fitness, restaurants, retail, healthcare, beauty - and more."
  },
  {
    question: "Need an app?",
    answer: "No! Customers scan QR code with phone camera. Works in browser."
  },
  {
    question: "What features included?",
    answer: "AI insights, multi-location, SMS/email, analytics, staff management."
  },
  {
    question: "Multi-location pricing?",
    answer: "Pro: +$10/month each. Growth: 3 included, +$8/month each extra."
  },
  {
    question: "What analytics?",
    answer: "Visit tracking, retention analysis, revenue metrics, AI recommendations."
  },
  {
    question: "Security?",
    answer: "Encryption, monitoring, fraud detection, IP blocking, audit logs."
  },
  {
    question: "POS integration?",
    answer: "Yes! API endpoints, webhooks, automated sync. We help with setup."
  },
  {
    question: "Marketing tools?",
    answer: "SMS/email automation, segmentation, campaigns, birthday rewards."
  },
  {
    question: "How does AI work?",
    answer: "Analyzes patterns to identify at-risk customers. Auto recommendations."
  }
];

const FAQSection = () => {
  const { containerRef: accordionRef, isInView: accordionInView } = useMultipleInView(9, { threshold: 0.2 });

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16" threshold={0.1}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            FAQ
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
