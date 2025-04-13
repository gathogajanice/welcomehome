
import React, { useEffect, useState, useRef } from 'react';
import { Skeleton } from "./ui/skeleton";

const StatsSection = () => {
  // Stats data array with two additional stats
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
    },
    {
      number: "24/7",
      title: "Service Availability",
      description: "(Supporting global time zones and inquiries)"
    },
    {
      number: "42%",
      title: "Annual Growth Rate",
      description: "(Exceeding local market averages since launch)"
    }
  ];
  
  // State for animated numbers
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(["0%", "0B+", "0+", "0/0", "0%"]);
  
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
        } else if (target.includes('/')) {
          const parts = target.split('/');
          const targetValue1 = parseFloat(parts[0]);
          const targetValue2 = parseFloat(parts[1]);
          const value1 = Math.min(Math.round(targetValue1 * oscillation), targetValue1);
          const value2 = Math.min(Math.round(targetValue2 * oscillation), targetValue2);
          return `${value1}/${value2}`;
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
        {/* Stats container - updated to grid-cols-5 to span full width */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-2 lg:gap-3">
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
