import Image from 'next/image';

export default function About1({ content, items }) {
  const {
    title = 'About Us',
    subtitle = 'Our Story',
    description =
      "We're a team of passionate developers and designers committed to creating exceptional digital experiences.",
    image_url = '/aboutpage.jsx',
  } = content || {};

  const team = items?.length
    ? items
    :  [
  {
    id: '1',
    title: 'Bharti Umale',
    subtitle: 'Founder & Master Stylist',
    description:
      'With over 12 years in the beauty industry, Bharti specializes in bridal styling, hair care, and personalized transformations.',
    image_url: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    title: 'Priya Mehta',
    subtitle: 'Makeup Artist',
    description:
      'Priya creates stunning looks for weddings, parties, and special occasions. Her work enhances natural beauty with a flawless touch.',
    image_url: 'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '3',
    title: 'Anjali Sharma',
    subtitle: 'Skincare Specialist',
    description:
      'Anjali provides expert skin consultations and treatments, helping clients achieve glowing, healthy skin with natural products.',
    image_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '4',
    title: 'Ritika Verma',
    subtitle: 'Hair Color Expert',
    description:
      'Ritika brings creativity and precision to every hair transformation, specializing in balayage, highlights, and color correction.',
    image_url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
  },
]

  return (
    <section id="about-section" className="bg-gradient-to-br from-[#f5efe6] via-[#e9dccb] to-[#d8bfa4]  py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
       <div className="grid font-extrabold text-[#5E3D27] gap-10 lg:grid-cols-2 items-center mb-20">
  <div>
    {subtitle && (
      <span className="text-sm text-sm font-semibold text-[#C97434] uppercase tracking-wide">
        {subtitle}
      </span>
    )}
    {title && (
      <h2 className="mt-3 text-4xl font-extrabold text-[#5E3D27]  sm:text-5xl">
        {title}
      </h2>
    )}
    {description && (
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        {description}
      </p>
    )}
  </div>

  {image_url && (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
      <Image
        src={image_url}
        alt={title || 'About us'}
        width={800}
        height={600}
        className="object-cover w-full h-full"
      />
    </div>
  )}
</div>

        {/* Team Section */}
        {team.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-extrabold text-[#5E3D27]  sm:text-5xl">Our Team</h3>
              <p className="mt-3 text-lg text-sm font-semibold text-[#C97434] uppercase tracking-wide">
                Meet the people who make it all possible.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition"
                >
                  {member.image_url && (
                    <div className="mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={member.image_url}
                        alt={member.title || 'Team member'}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {member.title && (
                    <h4 className="text-lg font-semibold text-gray-900">
                      {member.title}
                    </h4>
                  )}
                  {member.subtitle && (
                    <p className="text-sm text-[#5E3D27]">{member.subtitle}</p>
                  )}
                  {member.description && (
                    <p className="mt-2 text-sm text-gray-600">
                      {member.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
