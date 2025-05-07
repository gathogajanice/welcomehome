import { useState } from 'react';
import { motion } from 'framer-motion';
import { PerkCardProps } from './types';

const PerkCard: React.FC<PerkCardProps> = ({ imageUrl, alt }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <motion.div 
          className="h-full w-full relative"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img 
            src={imageUrl} 
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Image not found</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PerkCard;
