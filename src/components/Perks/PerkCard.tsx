import { useState } from 'react';
import { motion } from 'framer-motion';
import { PerkCardProps } from './types';

const PerkCard: React.FC<PerkCardProps> = ({ title, subtitle, description, imageUrl, alt }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      className="card relative overflow-hidden rounded-xl transform transition-all duration-500 hover:shadow-2xl h-[400px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image container with fixed height */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="h-full w-full relative"
          whileHover={{ scale: 1.15 }}
        >
          <img 
            src={imageUrl} 
            alt={alt}
            className="h-full w-full object-cover"
            onError={(e) => {
              console.error('Image failed to load:', imageUrl);
              setImageError(true);
            }}
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Image not found</p>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="font-bd-sans text-lg font-bold text-white mb-2">{title}</h3>
        <p className="font-bd-sans text-sm text-white/80 uppercase tracking-wider mb-2">{subtitle}</p>
        {description && (
          <p className="font-cormorant text-sm text-white/90">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default PerkCard;
