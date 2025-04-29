import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    src: '/lovable-uploads/afritech.png',
    alt: 'Africatech NYC',
    className: 'w-56 h-16', // wider
    delay: 0.1
  },
  {
    src: '/lovable-uploads/afrideslogo.png',
    alt: 'Afrides',
    className: 'w-32 h-32', // round, larger
    delay: 0.2
  },
  {
    src: '/lovable-uploads/minsitry logo.png',
    alt: 'Ministry of Tourism and Air Transport',
    className: 'w-32 h-28', // taller
    delay: 0.3
  },
  {
    src: '/lovable-uploads/hedera.png',
    alt: 'Hedera Hashgraph',
    className: 'w-24 h-16', // smaller
    delay: 0.4
  }
];

const CommunityPartners = () => {
  return (
    <section className="bg-[#f5f3ee] min-h-screen py-16 px-4 flex flex-col items-center">
      <motion.h1
        className="text-[#387f79] text-2xl md:text-3xl font-troye text-center mb-16 tracking-widest uppercase"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        COMMUNITY PARTNERS
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl items-center justify-center">
        {/* Zebra Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-[350px] h-[400px] rounded-xl overflow-hidden flex items-center justify-center">
            <img src="/lovable-uploads/zebra.png" alt="Zebra" className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Logos/Partners */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-8 w-full max-w-lg items-center justify-items-center">
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: logo.delay }}
              className="flex items-center justify-center"
            >
              <img src={logo.src} alt={logo.alt} className={`object-contain ${logo.className}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners; 