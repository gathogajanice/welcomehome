import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: "50+", description: "Countries Launched" },
  { number: "150+", description: "Properties Secured" },
  { number: "10K+", description: "Community Interest" },
  { number: "99%", description: "Member Target 2025" },
  { number: "15+", description: "Travel Perks Program" },
  { number: "$1.2T", description: "Real Estate Pipeline Value" }
];

const StatsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleStats = [...stats.slice(currentIndex), ...stats.slice(0, currentIndex)].slice(0, 4);

  return (
    <section className="bg-[#387f79] py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/lovable-uploads/ff9648d3-36eb-4d7a-ba6e-b8fe0ffb8d0f.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          mixBlendMode: "overlay"
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <span className="font-troye-sans text-white text-lg md:text-xl tracking-wide">
            Where Ownership, Legacy, and Travel Begin Together
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {visibleStats.map((stat, index) => (
            <motion.div
              key={`${stat.number}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1]
              }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <h3 className="font-bd-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {stat.number}
                </h3>
              </motion.div>
              <p className="font-cormorant text-lg md:text-xl text-white/80">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
