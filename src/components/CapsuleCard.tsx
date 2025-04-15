
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface CapsuleCardProps {
  image: string;
  title: string;
  subtitle?: string;
}

const CapsuleCard = ({ image, title, subtitle }: CapsuleCardProps) => {
  return (
    <div className="relative w-[220px] h-[360px] rounded-[48px] overflow-hidden shadow-md group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-bricolage text-xl font-bold text-white mb-2">{title}</h3>
        {subtitle && (
          <p className="font-bricolage text-sm font-light text-white px-6 text-center">{subtitle}</p>
        )}
      </div>
      <button 
        aria-label="Learn more"
        className="absolute bottom-4 right-4 w-8 h-8 bg-[#6DD6DB] rounded-full flex items-center justify-center hover:bg-[#1f1f2e] transition-colors duration-300"
      >
        <ArrowUp className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default CapsuleCard;
