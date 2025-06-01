import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    src: '/images/bwslogo.png',
    alt: 'BWS',
    delay: 0.1
  },
  {
    src: '/images/frenchlogo.png',
    alt: 'Ministère des Infrastructures, des Transports Terrestres et du Désenclavement',
    delay: 0.2
  },
  {
    src: '/images/minsitry-logo.png',
    alt: 'Ministry of Tourism and Air Transport',
    delay: 0.3
  },
  {
    src: '/images/alkebeluemlogo.png',
    alt: 'Alkebuleum',
    delay: 0.4
  }
];

const CommunityPartners = () => {
  return (
    <section className="bg-[#f5f3ee] min-h-screen py-16 px-4 flex flex-col items-center">
      <motion.h1
        className="font-troye text-2xl sm:text-3xl md:text-4xl text-[#00634d] text-center mb-12 tracking-tight uppercase"
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
              src="/images/zebra.png" 
              alt="Zebra" 
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-xl">
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
                className={
                  logo.alt.includes('Ministère des Infrastructures')
                    ? 'object-contain w-44 h-28 sm:w-56 sm:h-36 md:w-64 md:h-40'
                    : 'object-contain w-36 h-24 sm:w-44 sm:h-28 md:w-52 md:h-32'
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;
