
import React, { useEffect, useState, useRef } from 'react';
import { Skeleton } from "./ui/skeleton";

const StatsSection = () => {
  // Stats data array
  const stats = [
    {
      number: "62%",
      title: "Reduction in Transaction Costs",
      description: "(Compared to traditional real estate channels)"
    },
    {
      number: "11B+",
      title: "Market Opportunity",
      description: "(Africa's real estate by 2030 is within reach)"
    },
    {
      number: "88+",
      title: "Investors Showing Interest",
      description: "(From the U.S., Europe, and Senegal)"
    }
  ];
  
  // State for animated numbers
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(["0%", "0B+", "0+"]);
  
  // Ref for animation frame
  const animationFrameRef = useRef<number | null>(null);
  
  // Animation effect for numbers with continuous motion
  useEffect(() => {
    const targets = stats.map(stat => stat.number);
    let lastTime = 0;
    
    const animateNumbers = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      
      // Create a continuous oscillating effect
      // Using sine wave to create smooth oscillation between 0.85 and 1
      const oscillation = 0.925 + Math.sin(timestamp / 1000) * 0.075;
      
      const newNumbers = targets.map((target, index) => {
        if (target.includes('%')) {
          const targetValue = parseFloat(target);
          const value = Math.min(Math.round(targetValue * oscillation), targetValue);
          return `${value}%`;
        } else if (target.includes('B+')) {
          const targetValue = parseFloat(target);
          const value = Math.min(Math.round(targetValue * oscillation), targetValue);
          return `${value}B+`;
        } else if (target.includes('+')) {
          const targetValue = parseFloat(target);
          const value = Math.min(Math.round(targetValue * oscillation), targetValue);
          return `${value}+`;
        }
        return target;
      });
      
      setAnimatedNumbers(newNumbers);
      
      // Continue the animation loop
      animationFrameRef.current = requestAnimationFrame(animateNumbers);
    };
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animateNumbers);
    
    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="w-full bg-[#0e517d] py-10 relative z-10 overflow-hidden" 
      id="stats-section"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      <div className="container mx-auto px-4">
        {/* Stats container */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center justify-center text-white py-4 px-2 max-w-[220px] mx-auto border border-[#4bbfe2]/30 rounded-lg bg-[#0e517d]/50"
            >
              {/* Number with animation */}
              <h2 className="font-clash text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-white">
                {animatedNumbers[index] || <Skeleton className="h-10 w-14 bg-white/10" />}
              </h2>
              
              {/* Title */}
              <h3 className="font-apercu text-[#4bbfe2] text-xs md:text-xs lg:text-sm mb-1 text-center">
                {stat.title}
              </h3>
              
              {/* Description */}
              <p className="font-apercu text-white/70 text-[10px] md:text-[10px] lg:text-xs max-w-[170px] text-center">
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
