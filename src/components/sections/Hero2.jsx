import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero2({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Glow with Confidence',
    subtitle = 'Your subtitle here',
    description = 'This is a brief description of what you do. Add a few sentences to introduce your business to new visitors.',
     image_url = '/placeholder-hero.jpg',
    background_url,
    cta_text = 'Book Appoinment',

    cta_link = '#',
  } = content || {};

  return (
  <div id='hero-section'
  className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-17 min-h-screen"
>
  <div 
    className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center bg-cover bg-center" 
    style={{ backgroundImage: `url(${background_url})` }}
  >
    {/* Left empty column for spacing/image */}
    <div className="hidden lg:block" />

    {/* Right-side content */}<div 
  className="p-6 lg:p-12 rounded-lg shadow-lg backdrop-blur-sm bg-beige-overlay m-4 lg:mr-20"
>
  <div className="flex flex-col space-y-6 text-right">
    {subtitle && (
      <span className="inline-block text-sm font-semibold uppercase tracking-wider text-subtitle">
        {subtitle}
      </span>
    )}
    {title && (
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-title  drop-shadow-md">
        {title}
      </h1>
    )}
    {description && (
      <p className="max-w-prose text-lg text-description ml-auto leading-relaxed">
        {description}
      </p>
    )}
    {cta_text && cta_link && (
      <div className="flex justify-end gap-4">
        <Button asChild size="lg" className="bg-button text-button-text hover:bg-button-hover hover:text-[#]
        hover:border-2 
        transition-colors duration-300 font-semibold shadow-md">
          <Link href={cta_link}>
            {cta_text}
          </Link>
        </Button>
      </div>
    )}
  </div>
</div>

      </div>
    </div>
  
  );
} 