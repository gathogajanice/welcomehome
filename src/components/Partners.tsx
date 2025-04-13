
import React from 'react';
import { motion } from 'framer-motion';
import './partners.css';

// Real estate logo URLs (these are placeholder SVG logos)
const partnerLogos = [
  {
    name: "Century 21",
    url: "https://cdn.worldvectorlogo.com/logos/century-21-1.svg"
  },
  {
    name: "RE/MAX",
    url: "https://cdn.worldvectorlogo.com/logos/remax.svg"
  },
  {
    name: "Keller Williams",
    url: "https://cdn.worldvectorlogo.com/logos/keller-williams-realty.svg"
  },
  {
    name: "Coldwell Banker",
    url: "https://cdn.worldvectorlogo.com/logos/coldwell-banker-commercial.svg"
  },
  {
    name: "Sotheby's",
    url: "https://cdn.worldvectorlogo.com/logos/sothebys-international-realty.svg"
  },
  {
    name: "Berkshire Hathaway",
    url: "https://cdn.worldvectorlogo.com/logos/berkshire-hathaway-homeservices.svg"
  }
];

const Partners = () => {
  return (
    <div className="py-6 md:py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* First set of logos */}
            {partnerLogos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="w-32 h-16 flex items-center justify-center">
                <img 
                  src={logo.url} 
                  alt={`${logo.name} Logo`} 
                  className="logo-ticker-image" 
                />
              </div>
            ))}
            
            {/* Second set of logos for seamless looping */}
            {partnerLogos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="w-32 h-16 flex items-center justify-center">
                <img 
                  src={logo.url} 
                  alt={`${logo.name} Logo`} 
                  className="logo-ticker-image" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
