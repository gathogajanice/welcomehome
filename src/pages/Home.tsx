import React from 'react';
import { motion } from 'framer-motion';

const WelcomeHome = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#387f79" }}>
      {/* Single background image - stretched to fit */}
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

      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-24 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
        {/* Left: Title and subtext */}
        <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left">
          <motion.h2 
            className="font-troye-sans text-3xl lg:text-5xl leading-tight font-bold text-slate-50 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            YOUR<br />
            INVESTMENT IS<br />
            YOUR PASSPORT<br />
            TO PREMIUM<br />
            STAYS AND<br />
            GLOBAL IMPACT
          </motion.h2>
          
          <div className="mt-8 space-y-6">
            <p className="font-cormorant text-sm md:text-base text-white/90 leading-relaxed max-w-md">
              Welcome Home is a blockchain-powered real estate platform reimagining how the African Diaspora builds wealth, reclaims land, and experiences the world.
            </p>
            
            <div className="font-cormorant text-sm md:text-base text-white/90 leading-relaxed max-w-md space-y-4">
              <p>
                Through fractional ownership, we make it possible for anyone—anywhere—to invest in verified property across Africa and beyond. But we're more than just real estate. Every investment unlocks luxury travel perks, exclusive cultural experiences, and access to a global community committed to legacy, sustainability, and economic empowerment.
              </p>
              <p>
                This is where technology meets tradition, and ownership becomes a lifestyle. Welcome Home transforms your capital into a deeper connection—with land, with culture, and with a movement rooted in reclaiming what's ours. From digital deeds secured by smart contracts to curated stays in vibrant destinations like Senegal, your investment isn't just an asset—it's a gateway to impact, identity, and generational wealth.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Main image with smooth load-in */}
        <div className="w-full md:w-2/5 xl:w-2/5 overflow-hidden transition-all duration-500 rounded-3xl flex flex-col items-center">
          <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/lovable-uploads/ca87bf3e-2857-43b0-acdc-ea06e8785fe8.png"
              alt="Scenic property view"
              className="w-full h-full object-cover rounded-3xl shadow-lg transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: "center" }}
              loading="eager"
            />
          </div>
          <motion.button
            className="mt-8 px-8 py-3 rounded-full bg-white border border-[#387f79] text-[#387f79] font-bd-sans font-bold transition-all duration-300 flex items-center gap-2 text-base shadow-md hover:bg-[#e6f4f1] hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
          >
            START YOUR INVESTMENT JOURNEY
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
      </div>
    </div>
  );
};

export default WelcomeHome;
