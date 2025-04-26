import React from 'react';
import { motion } from 'framer-motion';

const promoOffers = [
  {
    title: "Early Bird Discount",
    image: "/lovable-uploads/home.png",
    description: "List your offers, promos, or special membership privileges and perks here to entice people to book your property."
  },
  {
    title: "Book 3 Nights, Get 1 Night Free",
    image: "/lovable-uploads/poolside.png",
    description: "List your offers, promos, or special membership privileges and perks here to entice people to book your property."
  },
  {
    title: "Wellhall Members Club",
    image: "/lovable-uploads/lounge.png",
    description: "List your offers, promos, or special membership privileges and perks here to entice people to book your property."
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
        className="bg-[#efede7] py-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-8 md:px-16">
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Traditional Card - Vertical */}
            <div className="flex flex-col space-y-4 px-8 md:px-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="group w-full md:max-w-[280px] justify-self-end overflow-hidden relative"
              >
                <motion.div 
                  className="aspect-[3/4] overflow-hidden"
                  whileHover={{ 
                    scale: 1.03,
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
              <motion.div 
                className="text-left pl-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="font-cormorant text-base text-[#387f79]/80 italic">An intriguing caption that describes the room goes here.</p>
                <p className="font-cormorant text-base text-[#387f79]/80 italic">Use a flattering photo, then describe away!</p>
              </motion.div>
            </div>

            {/* Luxury Card - Horizontal */}
            <div className="flex flex-col space-y-4 px-8 md:px-12 md:mt-[120px]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="group w-full md:max-w-[460px] justify-self-start overflow-hidden relative"
              >
                <motion.div 
                  className="aspect-[16/9] overflow-hidden"
                  whileHover={{ 
                    scale: 1.03,
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
              <motion.div 
                className="text-left pl-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="font-cormorant text-base text-[#387f79]/80 italic">An intriguing caption that describes the room goes here. Use a</p>
                <p className="font-cormorant text-base text-[#387f79]/80 italic">flattering photo, then describe away!</p>
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
            className="text-center font-troye text-3xl sm:text-4xl text-white mb-16"
          >
            PROMOS AND OFFERS
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
        </div>
      </section>
    </>
  );
};

export default Promos; 