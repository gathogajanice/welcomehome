
import React from 'react';
import { motion } from "framer-motion";
import { IconType } from 'react-icons';

type AboutUsCardProps = {
  title: string;
  description: string;
  image: string;
  icon: IconType;
  index: number;
  isActive: boolean;
  scopeRef: React.RefObject<HTMLDivElement>;
};

const AboutUsCard = ({ 
  title, 
  description, 
  image, 
  icon: Icon, 
  index, 
  isActive, 
  scopeRef 
}: AboutUsCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
        relative bg-white rounded-xl border border-[#C8E7FA] shadow-md p-5 
        h-[260px] max-w-[280px] mx-auto
        flex flex-col items-start text-left transition-transform duration-500 
        group overflow-hidden hover:shadow-xl hover:-translate-y-2
        ${isActive ? 'shadow-[0_8px_32px_0_rgba(14,81,125,0.2)]' : ''}
      `}
    >
      {/* Glowing effect */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-[#0e517d]/10 to-transparent
          transition-opacity duration-1000 pointer-events-none
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          transform: 'translateX(-100%)',
          animation: isActive ? 'shine 2s ease-in-out' : 'none',
        }}
      />

      {/* Icon - maintain color during animation */}
      <motion.div 
        ref={scopeRef}
        className="w-16 h-16 mb-4 flex items-center justify-center z-10"
        style={{
          background: 'rgba(14, 81, 125, 0.1)',
          border: '1px solid rgba(14, 81, 125, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(14, 81, 125, 0.1)',
          borderRadius: '12px',
          padding: '12px',
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 180,
          background: 'rgba(14, 81, 125, 0.2)',
          transition: { duration: 0.3 }
        }}
      >
        <Icon size={24} className="text-[#0e517d]" />
      </motion.div>

      {/* Text content */}
      <h3 className="font-clash text-lg font-semibold text-[#0e517d] mb-2 z-10">{title}</h3>
      <p className="font-apercu text-sm text-gray-600 leading-relaxed z-10">
        {description}
      </p>

      {/* Background image - only visible on hover */}
      <img
        src={image}
        alt={`${title} image`}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 z-0
          opacity-0 group-hover:opacity-20
        `}
      />
    </motion.div>
  );
};

export default AboutUsCard;
