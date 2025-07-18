
const HeroSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-[1.1] px-2">
          How{" "}
          <span className="text-gradient">Perkpad</span>
          {" "}works
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
          See how easy it is to transform your paper punch cards into a modern digital loyalty program that customers actually complete.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
