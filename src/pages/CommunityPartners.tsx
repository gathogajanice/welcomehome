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
    src: '/lovable-uploads/minsitry logo.png',
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
        className="text-[#032b22] text-3xl sm:text-4xl font-troye text-center mb-6 tracking-widest uppercase"
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
        <div className="flex-1 min-w-[180px] max-w-[320px] flex justify-center">
          <div className="w-[180px] h-[200px] sm:w-[250px] sm:h-[280px] md:w-[350px] md:h-[400px] rounded-xl overflow-hidden flex items-center justify-center">
            <img src="/lovable-uploads/zebra.png" alt="Zebra" className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Logos/Partners */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-[320px] sm:max-w-md md:max-w-lg items-center justify-items-center">
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
                className="object-contain w-28 h-20 sm:w-40 sm:h-32 md:w-64 md:h-48"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners; 