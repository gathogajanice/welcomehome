
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type LocationCardProps = {
  time: string;       // e.g. "65%"
  unit: string;       // e.g. "ANNUAL GROWTH"
  label: string;      // e.g. "Property Value Increase"
  image: string;      // path to hover image
};

const LocationCard = ({ time, unit, label, image }: LocationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-[280px] h-[180px] p-6 bg-[#F7F5F2] rounded-md relative overflow-hidden transition-all duration-700 ease-out flex-shrink-0 scroll-snap-align-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#ffffff' : '#F7F5F2',
        boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.08)' : 'none',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
    >
      {/* Hover image with smoother animation */}
      <img 
        src={image} 
        alt={label}
        className={cn(
          "absolute inset-0 w-full h-full object-cover z-[5] transition-all duration-1000 ease-in-out",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
        )}
      />
      
      {/* Content overlay */}
      <div className={cn(
        "relative z-10 h-full flex flex-col justify-between transition-colors duration-700",
        isHovered && "text-white"
      )}>
        {/* Top content */}
        <div>
          <span className="font-canela text-4xl font-normal text-[#1a1a1a] leading-none block mb-1 transition-colors duration-700"
                style={{ color: isHovered ? 'white' : '#1a1a1a' }}>
            {time}
          </span>
          <span className="font-apercu text-xs uppercase tracking-wider text-[#555] block transition-colors duration-700"
                style={{ color: isHovered ? 'rgba(255,255,255,0.8)' : '#555' }}>
            {unit}
          </span>
        </div>
        
        {/* Bottom content */}
        <div className="mb-2">
          <h3 className="font-canela text-xl font-normal text-[#1a1a1a] leading-tight transition-colors duration-700"
              style={{ color: isHovered ? 'white' : '#1a1a1a' }}>
            {label}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
