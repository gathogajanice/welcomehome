
import React from 'react';

// Card data structure
type CardData = {
  icon: string;
  title: string;
  description: string;
  image: string;
};

const AboutUs = () => {
  // Card data with African-themed images
  const cards: CardData[] = [
    {
      icon: "/lovable-uploads/cbae74d9-9537-4991-a534-c6cc8de0641f.png",
      title: "Who We Are?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png", // African architecture image
    },
    {
      icon: "/lovable-uploads/cdb81e0e-7b55-4079-ab5c-0068cac75785.png",
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png", // Senegal community image
    },
    {
      icon: "/lovable-uploads/dd0611ca-5bcd-4971-ba11-363baf42026a.png",
      title: "Travel Feature",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/1d4323f5-9936-4e6f-9c63-382444393b84.png", // West African scene
    },
    {
      icon: "/lovable-uploads/103d4b82-df9b-4a43-b3c4-d421e178c215.png",
      title: "Innovative Approach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/fc99c9e7-80a3-4106-9a9f-1502fa6ca251.png", // Modern African city
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[url('/lovable-uploads/97d6ddfa-aa0a-464e-8696-6b1a48362452.png')] bg-blend-overlay bg-cover py-20 overflow-hidden" id="about-us">
      {/* Dotted path decoration - using the uploaded doodle image */}
      <div className="absolute top-[-40px] left-[-20px] w-1/2 max-w-md opacity-60 z-0">
        <img 
          src="/lovable-uploads/0ba03bf7-67e6-4a4e-a18c-5c4890729a57.png"
          alt="Dotted path"
          className="w-full"
        />
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
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl border border-[#C8E7FA] shadow-md p-6 h-[280px] flex flex-col items-start text-left transition-transform duration-500 group overflow-hidden hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon - now using image instead of Lucide icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center z-10">
                <img 
                  src={card.icon} 
                  alt={`${card.title} icon`}
                  className="w-8 h-8 object-contain"
                />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
