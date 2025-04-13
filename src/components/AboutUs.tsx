
import React, { useEffect, useState, useMemo } from 'react';
import { motion, useAnimate } from "framer-motion";

// Card data structure
type CardData = {
  icon: string;
  title: string;
  description: string;
  image: string;
};

const AboutUs = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Create individual hooks for each control
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const [scope4, animate4] = useAnimate();

  // Memoize the controls array
  const controls = useMemo(() => [
    { scope: scope1, animate: animate1 },
    { scope: scope2, animate: animate2 },
    { scope: scope3, animate: animate3 },
    { scope: scope4, animate: animate4 },
  ], [
    scope1, animate1,
    scope2, animate2,
    scope3, animate3,
    scope4, animate4,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000); // Slightly slower than Features to maintain subtlety

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateIcons = async () => {
      for (let i = 0; i < controls.length; i++) {
        const { scope, animate } = controls[i];
        
        await animate(scope.current, 
          { 
            scale: [1, 1.15, 1], // Slightly more subtle than Features
            rotate: [0, 180, 0], // Half rotation for subtlety
          }, 
          { 
            duration: 2,
            delay: 0.3,
          }
        );
      }

      setTimeout(animateIcons, 1500);
    };

    animateIcons();
    return () => {};
  }, [controls]);

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
    <section 
      className="relative min-h-screen w-full py-20 overflow-hidden bg-white" 
      id="about-us"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section using the same styling as Features */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <div className="inline-block px-4 py-1 text-sm font-medium bg-[#0e517d]/10 text-[#0e517d] border border-[#0e517d]/20">
              About Us
            </div>
          </div>
          <h2 className="mt-5 text-4xl font-bold font-clash text-[#0e517d] mb-4">
            About Us
            <span className="block h-1 w-20 bg-[#0e517d] mx-auto mt-2"></span>
          </h2>
          <p className="font-apercu text-lg text-gray-600 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-12">
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative bg-white rounded-xl border border-[#C8E7FA] shadow-md p-6 h-[280px] 
                flex flex-col items-start text-left transition-transform duration-500 
                group overflow-hidden hover:shadow-xl hover:-translate-y-2
                ${activeCard === index ? 'shadow-[0_8px_32px_0_rgba(14,81,125,0.2)]' : ''}
              `}
            >
              {/* Glowing effect similar to Features */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-r from-transparent via-[#0e517d]/10 to-transparent
                  transition-opacity duration-1000 pointer-events-none
                  ${activeCard === index ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  transform: 'translateX(-100%)',
                  animation: activeCard === index ? 'shine 2s ease-in-out' : 'none',
                }}
              />

              {/* Icon - using the same animation and styling as Features but LARGER */}
              <motion.div 
                ref={controls[index].scope}
                className="w-16 h-16 mb-4 flex items-center justify-center z-10"
                style={{
                  background: 'rgba(14, 81, 125, 0.1)',
                  border: '1px solid rgba(14, 81, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(14, 81, 125, 0.1)',
                  borderRadius: '12px',
                  padding: '12px',
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 180,
                  background: 'rgba(14, 81, 125, 0.9)',
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={card.icon} 
                  alt={`${card.title} icon`}
                  className="w-12 h-12 object-contain group-hover:filter group-hover:brightness-200"
                />
              </motion.div>

              {/* Text content */}
              <h3 className="font-clash text-lg font-semibold text-[#0e517d] mb-2 z-10">{card.title}</h3>
              <p className="font-apercu text-sm text-gray-600 leading-relaxed z-10">
                {card.description}
              </p>

              {/* Background image with enhanced visibility on active card */}
              <img
                src={card.image}
                alt={`${card.title} image`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 z-0
                  ${activeCard === index ? 'opacity-30' : 'opacity-0'}
                  group-hover:opacity-20 group-hover:scale-100
                `}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
