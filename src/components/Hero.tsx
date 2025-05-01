import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.6,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 40
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

// First image imported statically to ensure it's included in the initial bundle for faster LCP
const firstImage = "/lovable-uploads/Boys.png";

// Array of property images for the slideshow
const propertyImages = [
  "/lovable-uploads/Boys.png",
  "/lovable-uploads/SenegalBus.png",
  "/lovable-uploads/Boats.png",
  "/lovable-uploads/House.png"
];

/**
 * Hero Component
 * A full-screen hero section with an auto-playing image carousel and centered content
 */
const Hero = () => {
  // State management for carousel and image loading
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [remainingImagesLoaded, setRemainingImagesLoaded] = useState(0);

  // Preload images for smooth transitions
  useEffect(() => {
    const img = new Image();
    img.src = firstImage;
    img.onload = () => {
      setFirstImageLoaded(true);
      // Preload remaining images after first image loads
      propertyImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setRemainingImagesLoaded(prev => prev + 1);
        };
      });
    };
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Decorative grid lines */}
      {firstImageLoaded && (
        <>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/25 pointer-events-none z-20" />
          <div className="absolute top-0 left-0 h-full w-[1px] bg-white/25 pointer-events-none z-20" />
        </>
      )}
      
      {/* Image vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%), linear-gradient(to right, rgba(0,0,0,0.3), transparent 15%, transparent 85%, rgba(0,0,0,0.3))'
        }} 
      />
      
      {/* Image overlay for better text contrast */}
      {firstImageLoaded && <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />}
      
      {/* Image carousel */}
      <div className="absolute inset-0">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: activeIndex === 0 ? 8000 : 6000,
            disableOnInteraction: false
          }}
          className="h-full"
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
        >
          {/* First slide - eagerly loaded */}
          <SwiperSlide className="h-full">
            <div className="w-full h-full">
              <img 
                src={firstImage} 
                alt="Luxury property 1" 
                className="w-full h-full object-cover" 
                loading="eager" 
                fetchPriority="high"
                width={1920} 
                height={1080} 
              />
            </div>
          </SwiperSlide>

          {/* Remaining slides - lazy loaded */}
          {propertyImages.map((url, i) => (
            <SwiperSlide key={`property-${i + 1}`} className="h-full">
              <div className="w-full h-full">
                <img 
                  src={url} 
                  alt={`Luxury property ${i + 2}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero content - Updated positioning */}
      <div className="absolute inset-x-0 bottom-[10vh] flex items-end justify-center z-40 px-4 sm:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-6 sm:space-y-7 md:space-y-8 max-w-4xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.div variants={titleVariants} className="text-center w-full">
            <h1 className="troye-font text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#fffbf0] leading-tight tracking-wide font-bold">
              <motion.span
                className="block mb-1"
                variants={titleVariants}
              >
                WELCOME
              </motion.span>
              <motion.span
                className="block"
                variants={titleVariants}
              >
                HOME
              </motion.span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="font-cormorant text-base xs:text-lg sm:text-xl md:text-2xl text-[#fffbf0] uppercase tracking-[0.3em] font-bold text-center max-w-[90%] sm:max-w-[80%] mx-auto mt-2"
          >
            WHERE OWNERSHIP MEETS ADVENTURE
          </motion.p>

          {/* Locations */}
          <motion.p 
            variants={itemVariants}
            className="font-bd-sans font-bold text-xs xs:text-sm sm:text-base md:text-lg text-[#fffbf0] tracking-[0.2em] text-center mt-2"
          >
            SENEGAL | GHANA | KENYA
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            variants={itemVariants}
            className="mt-8 sm:mt-10 px-5 sm:px-6 py-2 sm:py-2.5 border border-[#cbe9e9] rounded-xl 
                     bg-white/10 backdrop-blur-sm
                     text-[#fffbf0] font-bd-sans tracking-wider text-xs sm:text-sm
                     transition-all duration-300 flex items-center gap-2
                     hover:bg-white/15 hover:shadow-[0_0_15px_rgba(203,233,233,0.3)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join The Movement
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
