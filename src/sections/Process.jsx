const steps = [
  'Consultation',
  'Research and Strategy Development',
  'Implementation',
  'Monitoring and Optimization',
  'Reporting and Communication',
  'Continual Improvement',
];

const Process = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-[var(--gray)]">
      <h2 className="text-3xl font-bold mb-10">Our Working Process</h2>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl border ${
              i === 0 ? 'bg-[var(--primary)]' : 'bg-white'
            }`}
          >
            <h3 className="font-semibold">
              {String(i + 1).padStart(2, '0')} {step}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
