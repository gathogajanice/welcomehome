import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// First image imported statically to ensure it's included in the initial bundle
const firstImage = "/lovable-uploads/a7deb50e-14f0-44cb-89db-2271fb5bb36b.png";

// Rest of the property images
const propertyImages = ["/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png", "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png", "/lovable-uploads/3c1c89aa-56ec-4553-8aaa-7e7c12feea72.png", "/lovable-uploads/1d4323f5-9936-4e6f-9c63-382444393b84.png"];
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [remainingImagesLoaded, setRemainingImagesLoaded] = useState(0);

  // Preload first image immediately on component mount
  useEffect(() => {
    const img = new Image();
    img.src = firstImage;
    img.onload = () => {
      setFirstImageLoaded(true);

      // Start loading remaining images after first one is loaded
      propertyImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setRemainingImagesLoaded(prev => prev + 1);
        };
      });
    };
  }, []);

  // Handle slide change
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };
  return <div className="relative w-full h-[100svh] overflow-hidden">
      {/* No ambient frames until first image loads */}
      {firstImageLoaded && <>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/25 pointer-events-none z-20" />
          <div className="absolute top-0 left-0 h-full w-[1px] bg-white/25 pointer-events-none z-20" />
        </>}
      
      {/* Left/Right vignette blur */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
      background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent 15%, transparent 85%, rgba(0,0,0,0.3))'
    }} />
      
      {/* Dark tint - only show after first image loads */}
      {firstImageLoaded && <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />}
      
      {/* Main slider */}
      <div className="w-full h-full">
        <Swiper modules={[EffectFade, Autoplay]} effect="fade" loop={true} autoplay={{
        delay: activeIndex === 0 ? 8000 : 6000,
        // Longer delay for first slide
        disableOnInteraction: false
      }} className="hero-swiper" onSwiper={setSwiperInstance} onSlideChange={handleSlideChange}>
          {/* First Image Slide */}
          <SwiperSlide>
            <div className="w-full h-full">
              <img src={firstImage} alt="Luxury property 1" className="w-full h-full object-cover" loading="eager" fetchPriority="high" width={1920} height={1080} />
            </div>
          </SwiperSlide>

          {/* Remaining Image Slides */}
          {propertyImages.map((url, i) => <SwiperSlide key={`property-${i + 1}`}>
              <div className="w-full h-full">
                <img src={url} alt={`Luxury property ${i + 2}`} className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
              </div>
            </SwiperSlide>)}
        </Swiper>
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 flex items-end pb-28 md:pb-36 justify-center z-40 px-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-bricolage text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#fffbf0] leading-tight tracking-wide font-bold">WELCOME
HOME</h1>

          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#fffbf0] uppercase tracking-[0.15em]">
            WHERE OWNERSHIP MEETS ADVENTURE
          </p>

          <p className="font-delicious text-lg sm:text-xl md:text-2xl text-[#fffbf0] tracking-wide">
            SENEGAL | GHANA | KENYA
          </p>

          <motion.button className="mt-4 px-6 py-2 border border-[#cbe9e9] rounded-xl 
                     bg-white/10 backdrop-blur-sm
                     text-[#fffbf0] font-bricolage tracking-wider text-sm
                     transition-all duration-300 flex items-center gap-2
                     hover:bg-white/15 hover:shadow-[0_0_15px_rgba(203,233,233,0.3)]" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            JOIN THE MOVEMENT
            <motion.span initial={{
            x: 0
          }} whileHover={{
            x: 3
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 10
          }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>;
};
export default Hero;