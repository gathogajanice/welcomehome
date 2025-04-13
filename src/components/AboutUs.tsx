
import React from 'react';
import { HelpCircle, Target, Plane, Lightbulb } from 'lucide-react';

// Card data structure
type CardData = {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
};

const AboutUs = () => {
  // Card data with African-themed images
  const cards: CardData[] = [
    {
      icon: HelpCircle,
      title: "Who We Are?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png", // African architecture image
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png", // Senegal community image
    },
    {
      icon: Plane,
      title: "Travel Feature",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/1d4323f5-9936-4e6f-9c63-382444393b84.png", // West African scene
    },
    {
      icon: Lightbulb,
      title: "Innovative Approach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/fc99c9e7-80a3-4106-9a9f-1502fa6ca251.png", // Modern African city
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[url('/textures/fiber-light.png')] bg-[#F0F5F9] bg-blend-overlay bg-cover py-20 overflow-hidden" id="about-us">
      {/* Dotted path decoration - using a simple SVG path instead of an image */}
      <div className="absolute top-[-40px] left-[-20px] w-1/2 max-w-md opacity-60 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="none" 
            stroke="#00BFFF" 
            strokeWidth="1" 
            strokeDasharray="5,5"
            d="M10,80 Q50,30 100,90 T180,100" 
          />
          <path 
            fill="none" 
            stroke="#00BFFF" 
            strokeWidth="1" 
            strokeDasharray="5,5"
            d="M20,100 Q60,50 110,110 T190,120" 
            strokeOpacity="0.6"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <div className="text-center mb-16">
          <h2 className="font-clash font-bold text-5xl md:text-6xl text-[#00BFFF] mb-4">
            About Us
            <span className="block h-1 w-20 bg-[#00BFFF] mx-auto mt-2"></span>
          </h2>
          <p className="font-apercu text-lg text-[#333] max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index} 
                className="relative bg-white rounded-xl border border-[#C8E7FA] shadow-md p-6 h-[280px] flex flex-col items-start text-left transition-transform duration-500 group overflow-hidden hover:shadow-xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4 rounded-full border-2 border-[#00BFFF] flex items-center justify-center text-[#00BFFF] text-xl bg-[#F0F9FF] z-10">
                  <Icon size={20} />
                </div>

                {/* Text content */}
                <h3 className="font-clash text-lg font-semibold text-[#111] mb-2 z-10">{card.title}</h3>
                <p className="font-apercu text-sm text-[#444] leading-relaxed z-10">
                  {card.description}
                </p>

                {/* Hover image reveal */}
                <img
                  src={card.image}
                  alt={`${card.title} image`}
                  className="absolute inset-0 w-full h-full opacity-0 scale-105 object-cover transition-all duration-700 ease-in-out group-hover:opacity-20 group-hover:scale-100 z-0"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
