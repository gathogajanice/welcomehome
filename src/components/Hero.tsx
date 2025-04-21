import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Property images - Add the new uploaded image as the first one
const propertyImages = [
  "/lovable-uploads/a7deb50e-14f0-44cb-89db-2271fb5bb36b.png", // New image first
  "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png",
  "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png",
  "/lovable-uploads/fc99c9e7-80a3-4106-9a9f-1502fa6ca251.png",
  "/lovable-uploads/6c3020ad-df5a-430d-9920-608d492d64ec.png",
  "/lovable-uploads/e2fd9bc5-9787-406b-963d-2a0b8f8515a1.png",
  "/lovable-uploads/3c1c89aa-56ec-4553-8aaa-7e7c12feea72.png",
  "/lovable-uploads/1d4323f5-9936-4e6f-9c63-382444393b84.png"
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(0);

  // Improved image preloading
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = propertyImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setAllImagesLoaded(prev => prev + 1);
            resolve(true);
          };
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Handle slide change
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="hero-container">
      {/* Ambient frame - decorative borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/25 pointer-events-none z-20" />
      <div className="absolute top-0 left-0 h-full w-[1px] bg-white/25 pointer-events-none z-20" />
      
      {/* Left/Right vignette blur */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent 15%, transparent 85%, rgba(0,0,0,0.3))'
      }} />
      
      {/* Subtle dark green tint */}
      <div className="absolute inset-0 bg-[#032b22]/40 pointer-events-none z-10" />
      
      {/* Main slider - only show when images are loaded */}
      <div className={`w-full h-full transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Swiper 
          modules={[EffectFade, Autoplay]} 
          effect="fade"
          loop={true} 
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }} 
          className="hero-swiper" 
          onSwiper={setSwiperInstance} 
          onSlideChange={handleSlideChange}
        >
          {propertyImages.map((url, i) => (
            <SwiperSlide key={`property-${i}`}>
              <div className="slide-image-container">
                <img 
                  src={url} 
                  alt={`Luxury property ${i + 1}`} 
                  className="slide-image opacity-90"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 flex items-end pb-28 md:pb-36 justify-center z-40 px-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-bricolage text-6xl sm:text-7xl md:text-8xl text-[#fffbf0] leading-tight tracking-wide font-bold">
            WELCOME HOME
          </h1>

          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#fffbf0] uppercase tracking-[0.15em]">
            WHERE OWNERSHIP MEETS ADVENTURE
          </p>

          <p className="font-delicious text-lg sm:text-xl md:text-2xl text-[#fffbf0] tracking-wide">
            SENEGAL | GHANA | KENYA
          </p>

          <motion.button 
            className="mt-4 px-6 py-2 border border-[#cbe9e9] rounded-xl 
                     bg-white/10 backdrop-blur-sm
                     text-[#fffbf0] font-bricolage tracking-wider text-sm
                     transition-all duration-300 flex items-center gap-2
                     hover:bg-white/15 hover:shadow-[0_0_15px_rgba(203,233,233,0.3)]"
            whileHover={{ 
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
          >
            JOIN THE MOVEMENT
            <motion.span 
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
