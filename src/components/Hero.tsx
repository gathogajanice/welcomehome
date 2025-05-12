import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.6 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1] }
  }
};

const firstImage = "/images/Boys.png";
const propertyImages = [
  "/images/Boys.png",
  "/images/SenegalBus.png",
  "/images/Boats.png",
  "/images/House.png"
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = firstImage;
    img.onload = () => setFirstImageLoaded(true);
  }, []);

  return (
    <div id="hero" className="relative w-full h-[100vh] overflow-hidden">
      {firstImageLoaded && (
        <>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/25 z-20" />
          <div className="absolute top-0 left-0 h-full w-[1px] bg-white/25 z-20" />
        </>
      )}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%), linear-gradient(to right, rgba(0,0,0,0.3), transparent 15%, transparent 85%, rgba(0,0,0,0.3))'
        }}
      />
      {firstImageLoaded && <div className="absolute inset-0 bg-black/20 z-10" />}

      <div className="absolute inset-0">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="h-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {propertyImages.map((url, i) => (
            <SwiperSlide key={i}>
              <img src={url} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-x-0 bottom-[8vh] flex justify-center z-40 px-4 sm:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto min-h-[60vh] sm:min-h-0"
          style={{ minHeight: '60vh' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.div variants={titleVariants} className="text-center w-full">
            <h1 className="troye-font text-5xl xs:text-6xl sm:text-7xl md:text-7xl lg:text-8xl text-[#fffbf0] leading-tight tracking-wide font-bold text-balance">
              <motion.span className="block mb-1" variants={titleVariants}>
                WELCOME
              </motion.span>
              <motion.span className="block" variants={titleVariants}>
                HOME
              </motion.span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-cormorant text-base sm:text-lg md:text-xl text-[#fffbf0] uppercase tracking-[0.2em] font-bold text-center w-full max-w-[100%] mx-auto"
          >
            WHERE OWNERSHIP MEETS ADVENTURE
          </motion.p>

          {/* Locations */}
          <motion.p
            variants={itemVariants}
            className="font-bd-sans font-bold text-sm sm:text-base md:text-lg text-[#fffbf0] tracking-[0.2em] text-center"
          >
            SENEGAL | GHANA | KENYA
          </motion.p>

          {/* CTA Button */}
          <Link to="/form">
            <motion.button
              variants={itemVariants}
              className="mt-6 sm:mt-8 px-6 py-2 sm:px-8 sm:py-2.5 border border-[#cbe9e9] rounded-xl 
                       bg-white/10 backdrop-blur-sm
                       text-[#fffbf0] font-bd-sans tracking-wider text-xs sm:text-sm
                       transition-all duration-300 flex items-center gap-2
                       hover:bg-white/15 hover:shadow-[0_0_15px_rgba(203,233,233,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              JOIN THE MOVEMENT <ArrowRight className="ml-1 h-4 w-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
