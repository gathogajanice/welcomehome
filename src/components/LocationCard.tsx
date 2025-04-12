
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

type LocationCardProps = {
  time: string;       // e.g. "25"
  unit: string;       // e.g. "MIN DRIVE BY CAR"
  label: string;      // e.g. "Malaga Train Station "Maria Zambrano""
  image: string;      // path to hover image
};

const LocationCard = ({ time, unit, label, image }: LocationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-[280px] h-[180px] p-6 bg-[#F7F5F2] rounded-md relative overflow-hidden transition-colors duration-300 ease-in-out flex-shrink-0 scroll-snap-align-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#ffffff' : '#F7F5F2',
      }}
    >
      {/* Hover image with animation */}
      <img 
        src={image} 
        alt={label}
        className={cn(
          "absolute inset-0 w-full h-full object-cover z-[5] transition-all duration-800 ease-in-out",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
        )}
      />
      
      {/* Content overlay */}
      <div className={cn(
        "relative z-10 h-full flex flex-col justify-between",
        isHovered && "text-white"
      )}>
        {/* Top content */}
        <div>
          <span className="font-canela text-4xl font-normal text-[#1a1a1a] leading-none block mb-1"
                style={{ color: isHovered ? 'white' : '#1a1a1a' }}>
            {time}
          </span>
          <span className="font-apercu text-xs uppercase tracking-wider text-[#555] block"
                style={{ color: isHovered ? 'rgba(255,255,255,0.8)' : '#555' }}>
            {unit}
          </span>
        </div>
        
        {/* Bottom content */}
        <div className="mb-2">
          <h3 className="font-canela text-xl font-normal text-[#1a1a1a] leading-tight"
              style={{ color: isHovered ? 'white' : '#1a1a1a' }}>
            {label}
          </h3>
        </div>
      </div>
      
      {/* Pin icon */}
      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-300 bg-white/80 flex items-center justify-center text-black hover:bg-gray-100 transition z-20" title="View on map">
        <MapPin className="w-4 h-4" />
      </div>
    </div>
  );
};

export default LocationCard;
