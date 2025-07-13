
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const faqs = [
  {
    question: "What business types do you support?",
    answer: "We support 12 different business types including nail salons, auto repair shops, cafés, restaurants, retail stores, laundromats, pet groomers, dry cleaners, barber shops, fitness studios, beauty salons, and other service businesses. Our system adapts to your specific industry needs."
  },
  {
    question: "Can customers use this without downloading an app?",
    answer: "Yes! Customers simply scan your QR code with their phone camera - no app downloads required. It works through their web browser with advanced features like location verification and real-time progress tracking."
  },
  {
    question: "What advanced features do you offer?",
    answer: "Professional-grade features include: AI-powered customer retention insights, multi-location management, geofenced location verification, SMS and email marketing campaigns, advanced analytics and ROI tracking, staff role management, automated rewards, and comprehensive security features."
  },
  {
    question: "How does multi-location management work?",
    answer: "Our Pro plan supports multiple locations (+$10/month per extra location), and Growth plan includes 3 locations (+$8/month per extra). Each location gets its own QR codes and staff PINs, while you maintain unified customer data, analytics, and reward configurations across all locations."
  },
  {
    question: "What kind of analytics and insights do you provide?",
    answer: "Advanced analytics include: real-time customer visit tracking, retention rate analysis, revenue impact metrics, AI-powered recommendations for improving loyalty, customer lifetime value calculations, and predictive insights about customer behavior patterns."
  },
  {
    question: "How secure is the platform?",
    answer: "Security features include encryption at rest and in transit, automated security monitoring, fraud detection algorithms, IP blocking capabilities, and comprehensive audit logs. Your customer data is protected with modern security practices."
  },
  {
    question: "Can I integrate with my existing POS system?",
    answer: "Yes! We provide API endpoints for POS integration, webhook support for real-time updates, and automated data sync capabilities. Our technical team can help with custom integrations for Pro and Growth plan customers."
  },
  {
    question: "What marketing tools are included?",
    answer: "SMS and email campaign automation, customer segmentation tools, automated re-engagement campaigns, birthday and anniversary rewards, visit reminder notifications, and comprehensive campaign performance tracking with ROI metrics."
  },
  {
    question: "How does the AI customer retention feature work?",
    answer: "Our AI analyzes customer visit patterns, spending behavior, and engagement metrics to identify at-risk customers and suggest targeted retention strategies. It provides automated recommendations for rewards, timing, and messaging to maximize customer lifetime value."
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
