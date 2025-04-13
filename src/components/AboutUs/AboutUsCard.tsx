
import React from 'react';
import { motion } from "framer-motion";
import { IconType } from 'react-icons';

// Card data structure
export type CardData = {
  icon: IconType;
  title: string;
  description: string;
  image: string;
};

interface AboutUsCardProps {
  card: CardData;
  index: number;
  activeCard: number;
  iconRef: React.RefObject<HTMLDivElement>;
}

const AboutUsCard = ({ card, index, activeCard, iconRef }: AboutUsCardProps) => {
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

      {/* Icon */}
      <motion.div 
        ref={iconRef}
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
};

export default AboutUsCard;
