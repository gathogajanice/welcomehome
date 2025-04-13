
import React from 'react';
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useMemo } from 'react';
import { 
  FaLink, 
  FaWater, 
  FaSeedling, 
  FaLock, 
  FaChartBar, 
  FaRecycle 
} from 'react-icons/fa';

const Features = () => {
  const [activeCard, setActiveCard] = useState(0);
  
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
    { scope: scope6, animate: animate6 }
  ], [
    scope1, animate1,
    scope2, animate2,
    scope3, animate3,
    scope4, animate4,
    scope5, animate5,
    scope6, animate6
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateIcons = async () => {
      for (let i = 0; i < controls.length; i++) {
        const { scope, animate } = controls[i];
        
        await animate(scope.current, 
          { 
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }, 
          { 
            duration: 1.5,
            delay: 0.2,
          }
        );
      }

      setTimeout(animateIcons, 1000);
    };

    animateIcons();
    return () => {};
  }, [controls]);

  const coinFeatures = [
    {
      icon: <FaLink className="w-6 h-6 text-[#0e517d] group-hover:text-white transition-colors duration-300" />,
      title: "Lorem Ipsum",
      description: <span>Lorem ipsum dolor sit amet, <span className="text-xl font-bold">consectetur</span> adipiscing elit. Sed do eiusmod tempor incididunt.</span>
    },
    {
      icon: <FaWater className="w-6 h-6 text-[#0e517d] group-hover:text-white transition-colors duration-300" />,
      title: "Dolor Sit Amet",
      description: <span>Ut enim ad minim veniam, <span className="text-xl font-bold">quis nostrud</span> exercitation ullamco laboris nisi.</span>
    },
    {
      icon: <FaSeedling className="w-6 h-6 text-[#0e517d] group-hover:text-white transition-colors duration-300" />,
      title: "Consectetur Elit",
      description: <span>Duis aute irure dolor in reprehenderit, <span className="text-xl font-bold">voluptate</span> velit esse cillum dolore eu fugiat.</span>
    },
    {
      icon: <FaLock className="w-6 h-6 text-[#0e517d] group-hover:text-white transition-colors duration-300" />,
      title: "Tempor Incididunt",
      description: <span>Excepteur sint occaecat <span className="text-xl font-bold">cupidatat</span> non proident, sunt in culpa qui officia.</span>
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-[#0e517d] group-hover:text-white transition-colors duration-300" />,
      title: "Labore Et Dolore",
      description: <span>Nemo enim ipsam voluptatem <span className="text-xl font-bold">quia voluptas</span> sit aspernatur aut odit aut fugit.</span>
    },
    {
      icon: <FaRecycle className="w-6 h-6 text-[#0e517d] group-hover:text-white transition-colors duration-300" />,
      title: "Aliquid Ex Ea",
      description: <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.</span>
    }
  ];

  return (
    <div className="bg-[#f8f6f2] py-16">
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-[#0e517d]/10 text-[#0e517d] border border-[#0e517d]/20">
              Features
            </div>
          </div>
          <h2 className="mt-5 text-4xl font-bold font-clash text-[#0e517d]">
            Lorem Ipsum Dolor Sit
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto font-apercu">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {coinFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                p-8 rounded-[32px] bg-white/40 backdrop-blur-[2px]
                border border-white/50 group transition-all duration-500
                hover:shadow-[0_8px_32px_0_rgba(14,81,125,0.2)]
                ${activeCard === index ? 'shadow-[0_8px_32px_0_rgba(14,81,125,0.25)]' : ''}
                relative overflow-hidden
              `}
            >
              {/* Glowing effect */}
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

              {/* Card content */}
              <motion.div 
                ref={controls[index].scope}
                className="relative p-3 rounded-xl w-fit mb-4 overflow-hidden"
                style={{
                  background: 'rgba(14, 81, 125, 0.1)',
                  border: '1px solid rgba(14, 81, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(14, 81, 125, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  background: 'rgba(14, 81, 125, 0.9)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative z-10">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-clash mb-4 text-[#0e517d]">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-apercu">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

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
    </div>
  );
};

export default Features;
