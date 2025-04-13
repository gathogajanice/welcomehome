
import React, { useState, useEffect } from 'react';

// Card data structure
type CardData = {
  icon: string;
  title: string;
  description: string;
  image: string;
};

const AboutUs = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Delay the image reveal animation
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Card data with high-quality house images featuring moody orange hues
  const cards: CardData[] = [
    {
      icon: "/lovable-uploads/cbae74d9-9537-4991-a534-c6cc8de0641f.png",
      title: "Who We Are?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=3540&auto=format&fit=crop", // Sunset hued house
    },
    {
      icon: "/lovable-uploads/cdb81e0e-7b55-4079-ab5c-0068cac75785.png",
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=3540&auto=format&fit=crop", // Golden-hour house
    },
    {
      icon: "/lovable-uploads/dd0611ca-5bcd-4971-ba11-363baf42026a.png",
      title: "Travel Feature",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3546&auto=format&fit=crop", // Modern orange-tinted house
    },
    {
      icon: "/lovable-uploads/103d4b82-df9b-4a43-b3c4-d421e178c215.png",
      title: "Innovative Approach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=3387&auto=format&fit=crop", // Sunset glow home
    },
  ];

  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat py-20 overflow-hidden" 
      style={{
        backgroundImage: "url('/lovable-uploads/97d6ddfa-aa0a-464e-8696-6b1a48362452.png')"
      }} 
      id="about-us"
    >
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
          <h2 className="font-clash font-bold text-5xl md:text-6xl text-[#F97316] mb-4">
            About Us
            <span className="block h-1 w-20 bg-[#F97316] mx-auto mt-2"></span>
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
              className="relative bg-white rounded-xl border border-[#FEC6A1] shadow-md p-6 h-[280px] flex flex-col items-start text-left transition-transform duration-500 group overflow-hidden hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
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

              {/* House image with reveal animation */}
              <div 
                className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-out ${
                  imagesLoaded ? 'opacity-25 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={card.image}
                  alt={`${card.title} house`}
                  className="w-full h-full object-cover"
                  style={{ filter: 'sepia(20%) saturate(140%)' }} // Add orange/warm tint
                />
              </div>
              
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent opacity-60 z-5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
