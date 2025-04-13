
import React, { useEffect, useState, useMemo } from 'react';
import { motion, useAnimate } from "framer-motion";
import { FaInfoCircle, FaBullseye, FaPlane, FaLightbulb, FaChartLine, FaRocket } from 'react-icons/fa';
import { useIsMobile } from '@/hooks/use-mobile';

// Card data structure
type CardData = {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
};

const AboutUs = () => {
  const [activeCard, setActiveCard] = useState(0);
  const isMobile = useIsMobile();

  // Create individual hooks for each control
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const [scope4, animate4] = useAnimate();
  const [scope5, animate5] = useAnimate();
  const [scope6, animate6] = useAnimate();

  // Memoize the controls array
  const controls = useMemo(() => [
    { scope: scope1, animate: animate1 },
    { scope: scope2, animate: animate2 },
    { scope: scope3, animate: animate3 },
    { scope: scope4, animate: animate4 },
    { scope: scope5, animate: animate5 },
    { scope: scope6, animate: animate6 },
  ], [
    scope1, animate1,
    scope2, animate2,
    scope3, animate3,
    scope4, animate4,
    scope5, animate5,
    scope6, animate6,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateIcons = async () => {
      for (let i = 0; i < controls.length; i++) {
        const { scope, animate } = controls[i];
        
        await animate(scope.current, 
          { 
            scale: [1, 1.15, 1],
            rotate: [0, 180, 0],
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

  // Card data with React icons
  const cards: CardData[] = [
    {
      icon: FaInfoCircle,
      title: "Who We Are?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png",
    },
    {
      icon: FaBullseye,
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png",
    },
    {
      icon: FaPlane,
      title: "Travel Feature",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/1d4323f5-9936-4e6f-9c63-382444393b84.png",
    },
    {
      icon: FaLightbulb,
      title: "Innovative Approach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/fc99c9e7-80a3-4106-9a9f-1502fa6ca251.png",
    },
    {
      icon: FaChartLine,
      title: "Our Values",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png",
    },
    {
      icon: FaRocket,
      title: "Future Goals",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png",
    },
  ];

  return (
    <section 
      className="relative min-h-screen w-full py-16 overflow-hidden bg-[#f8f6f2]" 
      id="about-us"
      style={{ 
        backgroundImage: "url('/textures/fiber-light.png')", 
        backgroundRepeat: "repeat" 
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section with animated scribble underline */}
        <div className="text-center mb-12">
          <h2 className="mt-5 text-4xl font-bold font-clash text-[#0e517d] mb-2">
            About Us
            {/* Animated scribble underline */}
            <div className="relative flex justify-center mt-2">
              <motion.svg 
                className="w-32 h-4" 
                viewBox="0 0 100 10" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ 
                  y: [0, -2, 0, 2, 0],
                  scaleX: [1, 1.03, 1, 0.97, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <motion.path 
                  d="M0,5 C10,2 15,8 25,5 C35,2 40,8 50,5 C60,2 65,8 75,5 C85,2 90,8 100,5" 
                  fill="none" 
                  stroke="#0e517d" 
                  strokeWidth="2"
                  animate={{
                    d: [
                      "M0,5 C10,2 15,8 25,5 C35,2 40,8 50,5 C60,2 65,8 75,5 C85,2 90,8 100,5",
                      "M0,5 C10,8 15,2 25,5 C35,8 40,2 50,5 C60,8 65,2 75,5 C85,8 90,2 100,5",
                      "M0,5 C10,2 15,8 25,5 C35,2 40,8 50,5 C60,2 65,8 75,5 C85,2 90,8 100,5"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }}
                />
              </motion.svg>
            </div>
          </h2>
          <p className="font-apercu text-lg text-gray-600 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cards grid - reduced spacing between cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-6 px-2 md:px-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  relative bg-white rounded-xl border border-[#C8E7FA] shadow-md p-5 
                  h-[220px] max-w-[260px] mx-auto
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

                {/* Icon - maintain color during animation */}
                <motion.div 
                  ref={controls[index].scope}
                  className="w-14 h-14 mb-3 flex items-center justify-center z-10"
                  style={{
                    background: 'rgba(14, 81, 125, 0.1)',
                    border: '1px solid rgba(14, 81, 125, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(14, 81, 125, 0.1)',
                    borderRadius: '12px',
                    padding: '10px',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 180,
                    background: 'rgba(14, 81, 125, 0.2)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon size={22} className="text-[#0e517d]" />
                </motion.div>

                {/* Text content */}
                <h3 className="font-clash text-lg font-semibold text-[#0e517d] mb-2 z-10">{card.title}</h3>
                <p className="font-apercu text-sm text-gray-600 leading-relaxed z-10">
                  {card.description}
                </p>

                {/* Background image - only visible on hover */}
                <img
                  src={card.image}
                  alt={`${card.title} image`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 z-0
                    opacity-0 group-hover:opacity-20
                  `}
                />
              </motion.div>
            );
          })}
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
