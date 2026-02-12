import { QrCode, Gift, LineChart } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "1. Create your loyalty card",
    description: "Set up points, visits, and rewards in a few clicks.",
  },
  {
    icon: Gift,
    title: "2. Share your QR code",
    description: "Place your QR at checkout so customers can join instantly.",
  },
  {
    icon: LineChart,
    title: "3. Track repeat visits",
    description: "Watch retention grow from your dashboard and reward redemptions.",
  },
];

const HowItWorksSimpleSection = () => {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8" id="how-it-works-simple">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Launch your digital loyalty program in under 10 minutes.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10">
                <step.icon className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSimpleSection;
