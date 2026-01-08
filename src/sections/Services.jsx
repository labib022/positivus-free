const services = [
  { title: 'Search engine optimization', dark: false },
  { title: 'Pay-per-click advertising', dark: true },
  { title: 'Social Media Marketing', dark: false },
  { title: 'Email Marketing', dark: true },
  { title: 'Content Creation', dark: false },
  { title: 'Analytics and Tracking', dark: true },
];

const Services = () => {
  return (
    <section id="services" className="px-6 md:px-20 py-20 bg-[var(--gray)]">
      <h2 className="text-3xl font-bold mb-10">Services</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl border ${
              item.dark ? 'bg-[var(--dark)] text-white' : 'bg-[var(--primary)]'
            }`}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-6 flex items-center gap-2">
              <span className="underline">Learn more</span> →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
