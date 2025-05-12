import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WelcomeHome = () => {
  return (
    <div id="welcome" className="relative min-h-screen overflow-hidden bg-[#387f79]">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/bg-img.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          mixBlendMode: "overlay"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-24 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-left">
          <motion.h2
            className="font-troye-sans text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-[#fffbf0] tracking-tight"
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

          <div className="mt-8 space-y-6 max-w-md">
            <p className="font-cormorant text-sm md:text-base text-white/90 leading-relaxed">
              Welcome Home is a blockchain-powered real estate platform reimagining how the African Diaspora builds wealth, reclaims land, and experiences the world.
            </p>

            <div className="font-cormorant text-sm md:text-base text-white/90 leading-relaxed space-y-4">
              <p>
                Through fractional ownership, we make it possible for anyone—anywhere—to invest in verified property across Africa and beyond. But we’re more than just real estate. Every investment unlocks luxury travel perks, exclusive cultural experiences, and access to a global community committed to legacy, sustainability, and economic empowerment.
              </p>
              <p>
                This is where technology meets tradition, and ownership becomes a lifestyle. Welcome Home transforms your capital into a deeper connection—with land, with culture, and with a movement rooted in reclaiming what’s ours. From digital deeds secured by smart contracts to curated stays in vibrant destinations like Senegal, your investment isn’t just an asset—it’s a gateway to impact, identity, and generational wealth.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 xl:w-2/5 flex flex-col items-center">
          <div className="aspect-[3/4] w-full relative overflow-hidden shadow-xl">
            <img
              src="/images/scenicview.png"
              alt="Scenic property view"
              className="w-full h-full object-cover shadow-lg transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: "center" }}
              loading="eager"
            />
          </div>
          <Link to="/form" className="w-full mt-6 flex justify-center">
            <motion.button
              className="px-5 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/70 border border-[#387f79] text-[#387f79] font-bd-sans font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-300 shadow-md hover:bg-[#e6f4f1] hover:scale-105 hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              CLAIM YOUR EARLY ACCESS
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5m0 0l-4.5-4.5m4.5 4.5l-4.5 4.5" />
                </svg>
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHome;
