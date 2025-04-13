
import React, { useEffect, useState } from 'react';
import { Skeleton } from "./ui/skeleton";

const StatsSection = () => {
  // Stats data array
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
    }
  ];
  
  // State for animated numbers
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(["0%", "0B+", "0+"]);
  
  // Animation effect for numbers
  useEffect(() => {
    const targets = stats.map(stat => stat.number);
    const animationDuration = 1500; // milliseconds
    const startTime = Date.now();
    
    const animateNumbers = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      const newNumbers = targets.map((target, index) => {
        if (target.includes('%')) {
          const value = Math.round(parseFloat(target) * progress);
          return `${value}%`;
        } else if (target.includes('B+')) {
          const value = Math.round(parseFloat(target) * progress);
          return `${value}B+`;
        } else if (target.includes('+')) {
          const value = Math.round(parseFloat(target) * progress);
          return `${value}+`;
        }
        return target;
      });
      
      setAnimatedNumbers(newNumbers);
      
      if (progress < 1) {
        requestAnimationFrame(animateNumbers);
      }
    };
    
    requestAnimationFrame(animateNumbers);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section 
      className="w-full bg-[#0e517d] py-12 relative z-10 overflow-hidden" 
      id="stats-section"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Stats container */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col items-center md:items-start text-white py-6 px-4 md:px-8 ${
                index === 1 ? "md:border-x border-white/20" : ""
              } ${index !== 0 ? "border-t md:border-t-0" : ""} flex-1`}
            >
              {/* Number with animation */}
              <h2 className="font-clash text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">
                {animatedNumbers[index] || <Skeleton className="h-16 w-20 bg-white/10" />}
              </h2>
              
              {/* Title */}
              <h3 className="font-apercu text-[#4bbfe2] text-sm md:text-base lg:text-lg mb-1">
                {stat.title}
              </h3>
              
              {/* Description */}
              <p className="font-apercu text-white/70 text-xs md:text-sm max-w-[200px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
