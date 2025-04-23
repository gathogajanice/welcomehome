
import React from 'react';
import { motion } from 'framer-motion';
import { PerkCardProps } from './types';

const PerkCard: React.FC<PerkCardProps> = ({ title, subtitle, imageUrl, alt }) => {
  return (
    <motion.div 
      className="relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="h-64 bg-cover bg-center transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 uppercase tracking-wider">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default PerkCard;
