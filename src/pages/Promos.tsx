import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const promoOffers = [
  {
    title: "STEP 1: INVEST IN VERIFIED LAND OWNERSHIP",
    image: "/lovable-uploads/land.png",
    description:
      "Secure fractional ownership in curated properties across Africa. Every asset is blockchain-verified for transparency, security, and ease—giving you a direct stake in real estate's fastest-growing frontier."
  },
  {
    title: "STEP 2: UNLOCK TRAVEL, REWARDS, AND COMMUNITY ACCESS",
    image: "/lovable-uploads/happy-woman.png",
    description:
      "Your investment unlocks luxury travel perks, exclusive cultural experiences, and early access to new developments. Enjoy annual stay credits, community events, and the pride of being a founding investor."
  },
  {
    title: "STEP 3: BUILD WEALTH, IMPACT, AND LEGACY",
    image: "/lovable-uploads/posh-home.png",
    description:
      "Watch your investment grow over time. Through land appreciation, sustainable community projects, and innovative tokenized opportunities, you're creating generational wealth and contributing to Africa's global rise."
  }
];

const Promos = () => {
  return (
    <>
      {/* Discover Senegal Section */}
      <motion.section
        className="bg-white py-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-end justify-center gap-10 md:gap-12">
            {/* Left Image */}
            <div className="flex-1 flex justify-center md:justify-start md:pr-2">
              <img
                src="/lovable-uploads/Canoe.png"
                alt="Traditional Senegalese canoe"
                className="w-full max-w-[340px] h-[480px] md:h-[520px] object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>

            {/* Right Section */}
            <div className="flex-[1.7] flex flex-col items-end w-full max-w-3xl md:ml-8">
              <div className="w-full flex flex-col items-center">
                <h1 className="font-troye text-[#387f79] text-center uppercase text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-4 mb-6 md:mb-10 max-w-2xl mx-auto">
                  AFRICA'S FUTURE IS BEING BUILT TODAY. WILL YOU BE PART OF IT?
                </h1>
              </div>

              <img
                src="/lovable-uploads/hotel.png"
                alt="Luxury hotel amenities"
                className="w-full max-w-[600px] h-[280px] md:h-[340px] object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 rounded-full bg-white border border-[#387f79] text-[#387f79] font-bd-sans font-bold transition-all duration-300 flex items-center gap-2 text-base shadow-md hover:bg-[#e6f4f1] hover:scale-105 hover:shadow-xl uppercase">
              RESERVE YOUR SPOT TODAY
            </button>
          </div>
        </div>
      </motion.section>

      {/* Promos Section */}
      <section id="promos" className="bg-[#387f79] py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("/lovable-uploads/bg-img.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            mixBlendMode: "overlay"
          }}
        />

        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center font-troye text-2xl sm:text-4xl text-white mb-16"
          >
            A NEW ERA OF REAL ESTATE—VERIFIED, FRACTIONAL, UNFORGETTABLE.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {promoOffers.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index === 1 || index === 2 ? "eager" : "lazy"}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bd-sans text-lg text-white">{promo.title}</h3>
                  <p className="font-cormorant text-sm text-white/80">
                    {promo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/form">
            <button className="px-8 py-3 rounded-full bg-white border border-[#387f79] text-[#387f79] font-bd-sans font-semibold transition-all duration-300 flex items-center gap-2 text-lg shadow-md hover:bg-[#e6f4f1] hover:scale-105 hover:shadow-xl uppercase">
              JOIN THE MOVEMENT
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promos;
