import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

const stats = [
  {
    number: "70%",
    title: "Reduction in Transaction Costs",
    description: "(Compared to traditional real estate channels)"
  },
  {
    number: "12B+",
    title: "Market Opportunity",
    description: "(Africa's real estate by 2030 is within reach)"
  },
  {
    number: "100+",
    title: "Investors Showing Interest",
    description: "(From the U.S., Europe, and Senegal)"
  },
  {
    number: "24/7",
    title: "Service Availability",
    description: "(Supporting global time zones)"
  },
  {
    number: "42%",
    title: "Annual Growth Rate",
    description: "(Exceeding market averages)"
  },
  {
    number: "93%",
    title: "Client Satisfaction",
    description: "(Based on post-investment surveys)"
  }
];

const StatsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const duration = 50000; // Reduced to 50 seconds for slightly faster animation
    let startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      if (!isPaused) {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = (elapsed % duration) / duration;
        
        setScrollPosition(progress * -100);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section 
      className="w-full bg-[#387f79] py-10 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/lovable-uploads/ff9648d3-36eb-4d7a-ba6e-b8fe0ffb8d0f.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#387f79]/90 backdrop-blur-sm" />

      <div className="px-4 relative z-10">
        {/* Title with animation */}
        <motion.h2 
          className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 font-bold uppercase"
          animate={{
            y: [0, -8, 0],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          NUMBERS DON'T LIE
        </motion.h2>

        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6 py-4"
            style={{
              transform: `translateX(${scrollPosition}%)`,
              width: 'fit-content',
              willChange: 'transform'
            }}
          >
            {/* Render stats three times for smoother loop */}
            {[...stats, ...stats, ...stats].map((stat, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col items-center justify-center text-center",
                  "bg-white/10 backdrop-blur-sm rounded-xl border border-white/20",
                  "p-4 min-w-[220px] space-y-2.5",
                  "transition-all duration-300 hover:bg-white/20 hover:border-white/30",
                  "cursor-pointer"
                )}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <h2 className="font-bd-sans text-3xl sm:text-4xl font-bold text-[#032b22]">
                  {stat.number}
                </h2>
                <div className="space-y-1.5">
                  <h3 className="font-bd-sans font-bold text-xs text-white tracking-wide uppercase">
                    {stat.title}
                  </h3>
                  <p className="font-cormorant text-xs text-white/80 italic">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
