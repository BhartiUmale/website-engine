import Image from 'next/image';

export default function Services1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Our Services',
    subtitle = 'What We Offer',
    description = 'We provide a range of services to help your business succeed.',
    columns = '3',
  } = content || {};

  // Fallback services if items are not provided
  const services = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
           title: "Haircut & Styling",
                subtitle: "Professional Look",
                description: "Trendy haircuts and styling for every occasion and face shape.",
                icon: "scissors",

        },
        {
          id: '2',
          title: "Hair Coloring",
                subtitle: "Bold or Subtle",
                description: "From highlights to global coloring, we bring your hair color dreams to life.",
                icon: "palette",
        },
        {
          id: '3',
          title: "Facial Treatments",
                subtitle: "Glow Naturally",
                description: "Custom facials tailored to your skin type for a radiant look.",
                icon: "share",
        },
      ];

  // Determine grid columns based on the columns setting
  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  // Simple icon map for fallback icons
 const iconMap = {
  scissors: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  palette: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.65-.75 1.65-1.69 0-.43-.18-.83-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z" />
    </svg>
  ),
  share: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
};

  return (<div
  id="services-section"
  className="bg-gradient-to-br from-[#f5efe6] via-[#e9dccb] to-[#d8bfa4] py-16 sm:py-20 lg:py-24"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center mb-16">
      {subtitle && (
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#8B5E3C]">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#3B2C25] sm:text-5xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-lg text-gray-700">
          {description}
        </p>
      )}
    </div>

    <div className={`grid gap-10 ${gridCols}`}>
      {services.map((service) => (
        <div
          key={service.id || service.title}
          className="group flex flex-col items-start rounded-xl bg-white text-gray-800 shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#8B5E3C]"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#fce8d5] text-[#8B5E3C] shadow-md transition-all group-hover:scale-110">
            {iconMap[service.icon]}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
} 