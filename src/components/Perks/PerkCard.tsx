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
          whileHover={{ scale: 1.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
      {/* Removed text overlay, only image remains in the card */}
    </motion.div>
  );
};

export default PerkCard;
