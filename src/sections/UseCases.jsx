const UseCases = () => {
  return (
    <section id="usecases" className="px-6 md:px-20 py-20">
      <h2 className="text-3xl font-bold mb-10">Case Studies</h2>

      <div className="bg-[var(--dark)] text-white rounded-3xl p-10 grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <p className="text-sm text-gray-300">
              Increased traffic and conversions through strategic marketing.
            </p>
            <p className="mt-4 text-[var(--primary)]">Learn more →</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
