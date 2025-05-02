import React from 'react';
import { motion } from 'framer-motion';

const promoOffers = [
  {
    title: "STEP 1: INVEST IN VERIFIED LAND OWNERSHIP",
    image: "/lovable-uploads/land.png",
    description: "Secure fractional ownership in curated properties across Africa. Every asset is blockchain-verified for transparency, security, and ease—giving you a direct stake in real estate's fastest-growing frontier."
  },
  {
    title: "STEP 2: UNLOCK TRAVEL, REWARDS, AND COMMUNITY ACCESS",
    image: "/lovable-uploads/happy-woman.png",
    description: "Your investment unlocks luxury travel perks, exclusive cultural experiences, and early access to new developments. Enjoy annual stay credits, community events, and the pride of being a founding investor."
  },
  {
    title: "STEP 3: BUILD WEALTH, IMPACT, AND LEGACY",
    image: "/lovable-uploads/posh-home.png",
    description: "Watch your investment grow over time. Through land appreciation, sustainable community projects, and innovative tokenized opportunities, you're creating generational wealth and contributing to Africa's global rise."
  }
];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
};

const Promos = () => {
  return (
    <>
      {/* New Section: DISCOVER SENEGAL */}
      <motion.section 
        className="bg-white py-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-8 md:px-16">
          {/* New right-aligned title */}
          <motion.h1
            className="text-right font-troye text-3xl sm:text-4xl text-[#00634d] mb-4 uppercase"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            AFRICA'S FUTURE IS BEING BUILT TODAY.<br />
            WILL YOU BE PART OF IT?
          </motion.h1>
          <div className="w-full flex justify-end mb-12">
            <motion.button
              className="px-8 py-3 rounded-full bg-white border border-[#387f79] text-[#387f79] font-bd-sans font-bold transition-all duration-300 flex items-center gap-2 text-base shadow-md hover:bg-[#e6f4f1] hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
            >
              RESERVE YOUR SPOT
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5m0 0l-4.5-4.5m4.5 4.5l-4.5 4.5" />
                </svg>
              </motion.span>
            </motion.button>
          </div>
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Traditional Card - Vertical */}
            <div className="flex flex-col space-y-4 px-8 md:px-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="group w-full md:max-w-[420px] justify-self-end overflow-hidden relative"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(56,127,121,0.18)' }}
              >
                <motion.div 
                  className="aspect-[3/4] overflow-hidden"
                  whileHover={{ 
                    scale: 1.06,
                    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
                  }}
                >
                  <motion.img
                    src="/lovable-uploads/Canoe.png"
                    alt="Traditional Senegalese canoe"
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.08,
                      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Luxury Card - Horizontal */}
            <div className="flex flex-col space-y-4 px-0 md:px-0 md:mt-[120px] w-full">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="group w-full justify-self-start overflow-hidden relative"
                style={{maxWidth: '100vw'}}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(56,127,121,0.18)' }}
              >
                <motion.div 
                  className="aspect-[16/9] overflow-hidden"
                  whileHover={{ 
                    scale: 1.06,
                    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
                  }}
                >
                  <motion.img
                    src="/lovable-uploads/hotel.png"
                    alt="Luxury hotel amenities"
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.08,
                      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Promos Section - More Compact Version */}
      <section className="bg-[#387f79] py-12 relative overflow-hidden">
        {/* Background image and overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("/lovable-uploads/ff9648d3-36eb-4d7a-ba6e-b8fe0ffb8d0f.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            mixBlendMode: "overlay"
          }}
        />

        <div className="container mx-auto px-4">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center font-troye text-2xl sm:text-4xl text-white mb-16"
          >
            A NEW ERA OF REAL ESTATE—VERIFIED, FRACTIONAL, UNFORGETTABLE.
          </motion.h2>
          

          {/* Promos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {promoOffers.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                    loading={index === 1 || index === 2 ? "eager" : undefined}
                    whileHover={{ 
                      scale: 1.08,
                      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bd-sans text-lg text-white">
                    {promo.title}
                  </h3>
                  <p className="font-cormorant text-sm text-white/80">
                    {promo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Join the movement button */}
          <div className="flex justify-center mt-12">
            <button
              className="px-8 py-3 rounded-full bg-white border border-[#387f79] text-[#387f79] font-bd-sans font-semibold transition-all duration-300 flex items-center gap-2 text-lg shadow-md hover:bg-[#e6f4f1] hover:scale-105 hover:shadow-xl uppercase"
            >
              JOIN THE MOVEMENT
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promos; 