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
    src: '/lovable-uploads/hedera.png',
    alt: 'Hedera Hashgraph',
    delay: 0.4
  }
];

const CommunityPartners = () => {
  return (
    <section className="bg-[#f5f3ee] min-h-screen py-16 px-4 flex flex-col items-center">
      <motion.h1
        className="font-troye text-[2.5rem] text-[#00634d] text-center mb-6 tracking-tight uppercase"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        COMMUNITY PARTNERS
      </motion.h1>
      <div className="w-full flex justify-center mb-2">
      </div>
      <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-6xl items-center justify-center flex-wrap">
        {/* Zebra Image */}
        <div className="flex-1 min-w-[220px] max-w-[420px] flex justify-center ml-8 md:ml-16 lg:ml-24">
          <div className="w-[220px] h-[260px] sm:w-[320px] sm:h-[380px] md:w-[420px] md:h-[500px] rounded-none overflow-hidden flex items-center justify-center">
            <img 
              src="/lovable-uploads/zebra.png" 
              alt="Zebra" 
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>
        {/* Logos/Partners */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-[420px] sm:max-w-xl md:max-w-2xl items-center justify-items-start pl-8 md:pl-16 lg:pl-24">
          {logos.map((logo, idx) => (
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
                className="object-contain w-32 h-28 sm:w-44 sm:h-36 md:w-56 md:h-44"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners; 