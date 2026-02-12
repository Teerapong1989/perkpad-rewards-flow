const audiences = ["Cafés & coffee shops", "Salons & spas", "Barbershops", "Fitness studios", "Quick-service restaurants", "Neighborhood retailers"];

const WhoItsForSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Who it’s for</h2>
          <p className="mt-3 text-gray-600">Perkpad is built for service businesses that want more repeat customers without extra admin work.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 sm:text-base">
              {audience}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
