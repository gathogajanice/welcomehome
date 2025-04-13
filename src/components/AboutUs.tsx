
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
      image: "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png", 
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png",
    },
    {
      icon: Plane,
      title: "Travel Feature",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/1d4323f5-9936-4e6f-9c63-382444393b84.png",
    },
    {
      icon: Lightbulb,
      title: "Innovative Approach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/fc99c9e7-80a3-4106-9a9f-1502fa6ca251.png",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#edf6fc] py-20" id="about-us">
      <div className="container mx-auto px-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-[#4FCBFF]/30 p-8 transition-all duration-300 hover:border-[#4FCBFF]/70"
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-2xl border border-[#4FCBFF]/50 flex items-center justify-center text-[#1B4B72] bg-[#F0F9FF]">
                  <Icon size={24} />
                </div>

                {/* Text content */}
                <h3 className="font-clash text-2xl font-bold text-[#111] mb-4">{card.title}</h3>
                <p className="font-apercu text-base text-[#444] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
