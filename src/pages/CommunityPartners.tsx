import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    src: '/lovable-uploads/afritech.png',
    alt: 'Africatech NYC',
    delay: 0.1
  },
  {
    src: '/lovable-uploads/afrideslogo.png',
    alt: 'Afrides',
    delay: 0.2
  },
  {
    src: '/lovable-uploads/minsitry-logo.png',
    alt: 'Ministry of Tourism and Air Transport',
    delay: 0.3
  },
  {
    src: '/lovable-uploads/alkebeluemlogo.png',
    alt: 'Alkebuleum',
    delay: 0.4
  }
];

const CommunityPartners = () => {
  return (
    <section className="bg-[#f5f3ee] min-h-screen py-16 px-4 flex flex-col items-center">
      <motion.h1
        className="font-troye text-3xl sm:text-4xl md:text-[2.5rem] text-[#00634d] text-center mb-12 tracking-tight uppercase"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OUR PARTNERS
      </motion.h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Zebra Image */}
        <div className="flex justify-center">
          <div className="w-[240px] h-[280px] sm:w-[340px] sm:h-[400px] md:w-[460px] md:h-[520px] overflow-hidden">
            <img 
              src="/lovable-uploads/zebra.png" 
              alt="Zebra" 
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-xl">
          {logos.map((logo) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: logo.delay }}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-36 h-24 sm:w-44 sm:h-28 md:w-52 md:h-32"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;
