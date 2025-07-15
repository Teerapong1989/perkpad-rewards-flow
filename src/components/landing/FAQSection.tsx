
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useInView, useMultipleInView } from "@/hooks/useInView";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const faqs = [
  {
    question: "What business types work best with your platform?",
    answer: "Our platform works for coffee shops, salons, auto repair, fitness centers, restaurants, retail stores, healthcare practices, beauty services, and many other customer-facing businesses. Any business that wants to build customer loyalty and increase repeat visits can benefit from our QR-based loyalty system."
  },
  {
    question: "Do customers need to download an app?",
    answer: "No app required! Customers simply scan your QR code with their phone's camera and everything works directly in their web browser. This removes the biggest barrier to adoption - no app store downloads, no account creation friction, just instant engagement."
  },
  {
    question: "What features are included in the platform?",
    answer: "All plans include AI-powered customer insights, multi-location support, SMS and email automation, detailed analytics dashboard, staff management tools, customizable rewards programs, and real-time visit tracking with geolocation verification."
  },
  {
    question: "How does multi-location pricing work?",
    answer: "Pro plan includes 1 location with additional locations at $10/month each. Growth plan includes 3 locations with additional locations at $8/month each. Each location gets its own dashboard, staff management, and customer analytics."
  },
  {
    question: "What kind of analytics and insights do you provide?",
    answer: "Get comprehensive visit tracking, customer retention analysis, revenue impact metrics, churn prediction, customer lifetime value calculations, and AI-powered recommendations to improve your business performance and customer engagement."
  },
  {
    question: "How secure is the platform?",
    answer: "We use enterprise-grade security including end-to-end encryption, 24/7 monitoring, fraud detection systems, IP blocking for suspicious activity, complete audit logs, and SOC 2 compliance. Your customer data is protected with bank-level security."
  },
  {
    question: "Can you integrate with our existing POS system?",
    answer: "Yes! We offer API endpoints, webhook integrations, and automated sync capabilities. Our team provides hands-on setup assistance to ensure seamless integration with your existing point-of-sale system and business workflows."
  },
  {
    question: "What marketing automation tools are included?",
    answer: "Built-in SMS and email automation, customer segmentation based on behavior, targeted campaign management, birthday and anniversary rewards, win-back campaigns for inactive customers, and personalized messaging based on visit patterns."
  },
  {
    question: "How does the AI recommendation system work?",
    answer: "Our AI analyzes customer visit patterns, spending behavior, and engagement metrics to identify at-risk customers before they churn. It automatically generates actionable recommendations to improve retention, increase visit frequency, and boost customer lifetime value."
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
