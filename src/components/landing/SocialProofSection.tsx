const testimonials = [
  {
    quote: "We launched in one afternoon and already see more return visits.",
    author: "Owner, Local Café",
  },
  {
    quote: "Customers love that there’s no app download. Scan and done.",
    author: "Manager, Urban Salon",
  },
];

const SocialProofSection = () => {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8" aria-label="Social proof">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Trusted by growing local brands</p>
        <div className="mt-5 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          {["Your Logo", "Your Logo", "Your Logo", "Your Logo"].map((logo, index) => (
            <div key={`${logo}-${index}`} className="rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm font-semibold text-gray-500">
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-700">“{item.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-gray-500">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
