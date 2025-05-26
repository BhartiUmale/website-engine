import Image from 'next/image';
import Link from 'next/link';

export default function Footer1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Your Company',
    description = 'Building amazing digital experiences that make a difference.',
    image_url,
    copyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    columns = '3',
  } = content || {};

  // Group items by column tag
  const getFooterGroups = () => {
    if (!items || items.length === 0) {
      // Fallback footer items
      return {
        'Company': [
          { title: 'About', cta_link: '#about-section' },
          { title: 'Our Team', cta_link: '#about-section' },
          { title: 'Careers', cta_link: '/careers' },
          { title: 'Contact', cta_link: '#contact-section' },
        ],
        'Resources': [
          { title: 'Blog', cta_link: '/blog' },
          { title: 'Newsletter', cta_link: '/newsletter' },
          { title: 'Events', cta_link: '/events' },
          { title: 'Help Center', cta_link: '/help' },
        ],
        'Legal': [
          { title: 'Terms', cta_link: '/terms' },
          { title: 'Privacy', cta_link: '/privacy' },
          { title: 'Cookies', cta_link: '/cookies' },
          { title: 'Licenses', cta_link: '/licenses' },
        ],
      };
    }

    // Group items by their tag (column group)
    const groups = {};
    const sortedItems = [...items].sort((a, b) => (a.position || 0) - (b.position || 0));

    sortedItems.forEach(item => {
      const group = item.tag || 'Links';
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(item);
    });

    return groups;
  };

  const footerGroups = getFooterGroups();
  const footerGroupKeys = Object.keys(footerGroups);

  // Determine grid columns based on the columns setting or number of groups
  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  return (<footer className="bg-[#5E3D27]/10 border-t border-[#5E3D27]/30 shadow-inner">
  <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-4">
      {/* Brand Info */}
      <div className="lg:col-span-1">
        <div className="flex flex-col space-y-4">
          {image_url ? (
            <Link href="/" className="block w-40">
              <Image
                src={image_url}
                alt={title}
                width={160}
                height={60}
                className="h-auto w-full object-contain"
              />
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-bold text-[#5E3D27]">
              {title}
            </Link>
          )}
          {description && (
            <p className="text-sm text-[#5E3D27]/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Link Groups */}
      <div className={`lg:col-span-3 grid gap-8 sm:grid-cols-2 md:grid-cols-3`}>
        {footerGroupKeys.map((group) => (
          <div key={group}>
            <h3 className="text-[#5E3D27] font-semibold mb-4">{group}</h3>
            <ul className="space-y-2">
              {footerGroups[group].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.cta_link || '#'}
                    className="text-sm text-[#5E3D27]/70 hover:text-[#5E3D27] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Divider */}
    <div className="mt-12 border-t border-[#5E3D27]/20 pt-6 text-center text-sm text-[#5E3D27]/70">
      © {new Date().getFullYear()} Glamour Touch. All rights reserved.
    </div>
  </div>
</footer>

  );
} 