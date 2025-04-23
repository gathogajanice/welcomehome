
import React from 'react';
import { motion } from 'framer-motion';
import { PerkCardProps } from './types';

const PerkCard: React.FC<PerkCardProps> = ({ title, subtitle, imageUrl, alt }) => {
  return (
    <motion.div 
      className="perk-card relative overflow-hidden rounded-xl bg-white shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="h-72 bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-8 relative z-10">
        <h3 className="text-xl font-medium text-gray-900 mb-3 font-cormorant">{title}</h3>
        <p className="text-sm text-gray-600 uppercase tracking-wider font-bricolage">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default PerkCard;
