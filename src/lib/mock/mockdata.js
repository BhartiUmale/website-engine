// Fallback mock data in case of errors or for development
export const MOCK_DATA = {
  site: {
    id: "site-123",
    name: "D2D Business Solutions",
  },
  siteMeta: {
    title: "D2D Business Solutions",
    description:
      "Professional web development and social media marketing services",
    og_image: "/images/og-image.jpg",
    favicon: "/favicon.ico",
    keywords: "web development, marketing, business, social media",
    twitter_handle: "@d2dbusiness",
  },
  pages: {
    home: {
      id: "page-home",
      title: "Home Page",
      slug: "home",
    },
    about: {
      id: "page-about",
      title: "About Us",
      slug: "about",
    },
    services: {
      id: "page-services",
      title: "Our Services",
      slug: "services",
    },
    contact: {
      id: "page-contact",
      title: "Contact Us",
      slug: "contact",
    },
  },
  sections: [
    {
          i: "8d8d8b47-f240-4b64-9f8a-c0f72c737ced",
          page_i: "a6452a55-af24-40db-9490-42852c3e7b9a",
          typ: "header",
          varian: "3",
          positio: 0,
          is_activ: true,
          conten: {
            i: "9b742a78-b86f-4a6a-9f0c-f39747ec5d3f",
            section_i: "8d8d8b47-f240-4b64-9f8a-c0f72c737ced",
            titl: "Glowiva",
            subtitl: "Subtitle",
            descriptio: "Description for the new section",
            image_ur: "https://i.ibb.co/2LcZ3BQ/logo.webp",
            background_ur: null,
            cta_tex: "Get Started",
            cta_lin: "/contact"
            },
            items: [
              { title: "Home", cta_link: "#hero-section", position: 1 }, { title: "Services", cta_link: "#services-section", "position": 2 },
        { title: "About", cta_link: "#about-section", position: 3 },
       
        { title: "Contact", cta_link: "#contact-section", position: 4 }
            ]
          },
    
    {
      id: "section-hero",
      type: "hero",
      variant: "1",
      position: 1,
      is_active: true,
      content: {
        title: "Glow with Confidence",
        subtitle: "Modern Beauty Experiences",
        description:
          "At Glowiva, we offer indulgent, personalized beauty treatments that leave you radiant from the inside out. Discover a new glow with every visit.",
      
         background_url: "/b.png",
        cta_text: "Book Appoinment",
        
        cta_link: "#contact",
      },
      items: [],
    },
    {
      id: "section-services",
      type: "services",
      variant: "1",
      position: 2,
      is_active: true,
      content: {
        title: "Our Services",
        subtitle: "What We Offer",
        description:
          "Comprehensive digital solutions to help your business thrive online.",
      },
      items: [
        {
          id: "service-1",
          title: "Haircut & Styling",
           subtitle: "Professional Look",
          description:"Trendy haircuts and styling for every occasion and face shape.",
          icon: "scissors",
          position: 1,
        },
        {
          id: "service-2",
          title:  "Hair Coloring",
          subtitle: "Bold or Subtle",
          description:
           "From highlights to global coloring, we bring your hair color dreams to life.",
          icon: "palette",
          position: 2,
        },
        {
          id: "service-3",
          title: "Facial Treatments",
           subtitle: "Glow Naturally",
          description:
            "Custom facials tailored to your skin type for a radiant look.",
          icon: "share",
          position: 3,
        },
      ],
    },
    {
      id: "section-testimonial",
      type: "testimonial",
      variant: "1",
      position: 3,
      is_active: true,
      content: {
        title: "Client Love",
        subtitle: "What Our Gorgeous Clients Say",
         description: "Discover how we’ve helped our clients feel confident, radiant, and pampered—straight from their hearts."
      },
      items: [
        {
          id: "testimonial-1",
          title:"John Smith",
          subtitle: "Bridal Client",
          description:
            "The bridal makeover I got here was absolutely flawless. They made me feel like a queen on my special day!",
          image_url: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          position: 1,
        },
        {
          id: "testimonial-2",
          title: "Emily Carter",
          subtitle:  "Skincare Enthusiast",
          description:
            "This salon is my go-to for facials and skincare. The results are amazing and the ambiance is so relaxing. Highly recommended!",
          image_url: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          position: 2,
        },
         {
          id: "testimonial-3",
          title: "Ava Thompson",
          subtitle:  "Regular Client",
          description:
           "Absolutely love the service here! The staff is so friendly and professional — I always leave feeling refreshed and pampered.",
          image_url:  "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          position: 2,
        },
      ],
    },
    {
      id: "section-about",
      type: "about",
      variant: "1",
      position: 4,
      is_active: true,
      content: {
        title: "Our Story",
        subtitle: "Where Beauty Meets Confidence",
        description:
       "At Glowiva, we believe beauty is more than skin deep—it's a reflection of your inner confidence and care. Founded with passion and precision, our salon is a sanctuary for self-love, offering personalized services that pamper, refresh, and uplift. From the moment you walk in, our mission is to make you feel radiant, inside and out.",
        image_url:"/aboutpage.png",
      },
      items: [],
    },
   
  
    {
      id: "section-contact",
      type: "contact",
      variant: "1",
      position: 5,
      is_active: true,
      content: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        description:
          "Ready to take your business to the next level? Contact us today to discuss your project.",
      },
      items: [],
    },
    
          {
            id: "0a07df4f-b9fb-45f5-843a-f5ae513d0e61",
            page_id: "a6452a55-af24-40db-9490-42852c3e7b9a",
            type: "footer",
            variant: "1",
            position: 6,
            is_active: true,
            content: {
              id: "0c6e2e4e-78dd-4e53-b5f6-2c9b793feccc",
              section_id: "0a07df4f-b9fb-45f5-843a-f5ae513d0e61",
              title: "Glowiva",
              subtitle: "Your Beauty, Our Passion",
              description: "Welcome to Glowiva – where beauty meets perfection. Visit us for hair styling, skin care, bridal packages and more.",
              image_url: null,
              bacground_url: null,
              cta_text: null,
              cta_link: null
            },
            items: []
          }
  ],
  theme: {
    primarysite: "#4F46E5",
    primary_hover: "#4338CA",
    secondary: "#10B981",
    secondary_hover: "#059669",
    accent: "#F59E0B",
    accent_hover: "#D97706",
    background: "#FFFFFF",
    foreground: "#1F2937",
    muted: "#F3F4F6",
    border: "#E5E7EB",
    card: "#FFFFFF",
    card_foreground: "#1F2937",
    error: "#EF4444",
    success: "#10B981",
    footer: "#1F2937",
    footer_text: "#F9FAFB",
    overlay_dark: "rgba(0, 0, 0, 0.7)",
    overlay_light: "rgba(255, 255, 255, 0.7)",
    overlay_medium: "rgba(0, 0, 0, 0.5)",
  },
  config: {
    font_body: "Inter",
    font_heading: "Poppins",
    font_body_weights: ["400", "500", "600"],
    font_heading_weights: ["600", "700"],
    max_width: "1200px",
    radius_lg: "0.5rem",
    radius_md: "0.375rem",
    radius_sm: "0.25rem",
    radius_full: "9999px",
  },
};
