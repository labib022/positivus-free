import {
  Search,
  MousePointerClick,
  Share2,
  Mail,
  FileText,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  { title: 'Search engine optimization', icon: <Search size={36} /> },
  {
    title: 'Pay-per-click advertising',
    icon: <MousePointerClick size={36} />,
    highlight: true,
  },
  { title: 'Social Media Marketing', icon: <Share2 size={36} />, dark: true },
  { title: 'Email Marketing', icon: <Mail size={36} /> },
  {
    title: 'Content Creation',
    icon: <FileText size={36} />,
    highlight: true,
  },
  {
    title: 'Analytics and Tracking',
    icon: <BarChart3 size={36} />,
    dark: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="px-4 sm:px-8 md:px-20 py-20 bg-[#f5f5f5]">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        {/* Title */}
        <div className="flex-shrink-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Services
          </h1>

          <p className="max-w-lg text-gray-600 text-base md:mt-10">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online.
          </p>
        </div>

        {/* Paragraph */}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className={`
              group relative rounded-3xl p-8 min-h-[230px]
              border border-black
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              flex flex-col justify-between
              ${
                item.dark
                  ? 'bg-[#111] text-white'
                  : item.highlight
                  ? 'bg-lime-300 text-black'
                  : 'bg-white text-black'
              }
            `}
          >
            {/* Icon */}
            <div
              className={`mb-6 ${item.dark ? 'text-lime-400' : 'text-black'}`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold leading-snug max-w-[85%]">
              <span className="inline-block bg-lime-300 px-2 py-1 rounded-md">
                {item.title}
              </span>
            </h3>

            {/* Learn more */}
            <div className="flex items-center gap-3 mt-8">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-black transition group-hover:bg-black group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
              <span className="font-medium underline cursor-pointer">
                Learn more
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
