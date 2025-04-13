
import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

type CardData = {
  title: string;
  description: string[];
  image: string;
};

const AboutUs2 = () => {
  const cards: CardData[] = [
    {
      title: "Our Mission",
      description: [
        "To increase the accessibility",
        "for property ownership in",
        "Senegal, Africa.",
        "",
        "Through our platform",
        "anyone can own property",
        "with a push of a button."
      ],
      image: "/lovable-uploads/4bfe7cb1-0322-43ee-baeb-7d1bfda89370.png",
    },
    {
      title: "Our Vision",
      description: [
        "To become the leading",
        "platform for property",
        "investment in Africa",
        "",
        "Creating opportunities",
        "for everyone regardless",
        "of their background."
      ],
      image: "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png",
    },
    {
      title: "Our Approach",
      description: [
        "Leveraging technology",
        "to simplify the process",
        "of property acquisition",
        "",
        "Ensuring transparency",
        "and security in every",
        "transaction we facilitate."
      ],
      image: "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png",
    },
    {
      title: "Our Promise",
      description: [
        "Delivering exceptional",
        "value to our clients",
        "with every property",
        "",
        "Building trust through",
        "quality and reliable",
        "service every time."
      ],
      image: "/lovable-uploads/fc99c9e7-80a3-4106-9a9f-1502fa6ca251.png",
    },
  ];

  // Track hover state for each card
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen w-full bg-white py-20 px-4 md:px-10 overflow-hidden" id="about-us-2">
      {/* Title section */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold mb-2 relative">
          <span className="text-[#2D2E45]">About</span>
          <span className="text-[#F47521]"> Us</span>
          <div className="w-56 h-1 bg-[#F47521] mx-auto mt-4"></div>
        </h2>
      </div>

      {/* Cards grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="relative rounded-[40px] h-[630px] overflow-hidden transform transition-transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"
              }}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Dark overlay for text readability */}
              <div 
                className="absolute inset-0 w-full h-full bg-black opacity-40"
              />
              
              {/* Content */}
              <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-8 text-white">
                <div>
                  {/* Show title always */}
                  <h3 className="text-4xl font-bold mb-4">{card.title}</h3>
                  
                  {/* Description visible on hover */}
                  <div 
                    className={`transition-opacity duration-500 ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {card.description.map((line, i) => (
                      <p key={i} className="text-xl leading-tight mb-2">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Bottom arrow icon */}
                <div className="self-start">
                  <div className="w-12 h-12 bg-[#F47521] rounded-full flex items-center justify-center">
                    <ArrowUp className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
