"use client";

import Image from "next/image";
import { useState } from "react";

export default function Testimonial1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const { title = "What Our Clients Say", subtitle = "Testimonials" } =
    content || {};

  // Fallback testimonials if items are not provided
  const testimonials =
    items?.length > 0
      ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
      : [
          {
            id: "1",
            title: "Jane Smith",
            subtitle: "CEO at TechCorp",
            description:
              "Working with this team was a game-changer for our business. They delivered exceptional quality and exceeded our expectations in every way.",
            image_url: "/placeholder-avatar.jpg",
            rating: "5",
          },
          {
            id: "2",
            title: "John Davis",
            subtitle: "Marketing Director",
            description:
              "The level of creativity and attention to detail was impressive. Our new website has received countless compliments and has significantly increased our conversions.",
            image_url: "/placeholder-avatar.jpg",
            rating: "5",
          },
          {
            id: "3",
            title: "Sarah Williams",
            subtitle: "Small Business Owner",
            description:
              "As a small business owner, I needed an affordable but professional website. They delivered exactly what I needed, on time and within budget.",
            image_url: "/placeholder-avatar.jpg",
            rating: "4",
          },
        ];

  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const numStars = parseInt(rating) || 5;

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < numStars ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i < numStars ? "text-amber-500" : "text-gray-300"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    }

    return stars;
  };

  // Navigation functions
  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#F9F5F0] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {subtitle && <span className="block text-sm font-semibold text-[#C97434] uppercase tracking-wide">{subtitle}</span>}
          {title && <h2 className="mt-2 text-4xl font-extrabold text-[#5E3D27] tracking-tight">{title}</h2>}
        </div>

        <div className="relative max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex justify-center mb-6">{renderStars(testimonials[activeIndex].rating)}</div>

          <blockquote className="text-xl italic text-[#7E5A40] text-center leading-relaxed">
            "{testimonials[activeIndex].description}"
          </blockquote>

          <div className="mt-8 flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full overflow-hidden">
              <Image
                src={testimonials[activeIndex].image_url}
                alt={testimonials[activeIndex].title || "Author"}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-[#5E3D27]">{testimonials[activeIndex].title}</p>
              <p className="text-sm text-[#9B7A5B]">{testimonials[activeIndex].subtitle}</p>
            </div>
          </div>

          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
            <button
              onClick={goToPrev}
              className="h-8 w-8 flex items-center justify-center bg-[#E6D3C3] rounded-full hover:bg-[#D1B8A0]"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="h-8 w-8 flex items-center justify-center bg-[#E6D3C3] rounded-full hover:bg-[#D1B8A0]"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-[#C97434]" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
