
import React from 'react';
import { motion } from 'framer-motion';
import { PerkCardProps } from './types';

const PerkCard: React.FC<PerkCardProps> = ({ title, subtitle, imageUrl, alt }) => {
  return (
    <motion.div 
      className="card relative overflow-hidden rounded-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card__img-container h-72 overflow-hidden">
        <div 
          className="card__img h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      
      <motion.div 
        className="card__info p-8 bg-white relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="card__title text-xl font-medium text-gray-900 mb-3 font-cormorant">{title}</h3>
        <p className="card__subtitle text-sm text-gray-600 uppercase tracking-wider font-bricolage">{subtitle}</p>
      </motion.div>
      
      {/* Overlay that appears on hover */}
      <motion.div 
        className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100 z-20"
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default PerkCard;
