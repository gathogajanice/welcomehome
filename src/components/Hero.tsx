
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Property images - Senegal-themed images
const propertyImages = [
  "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png", // People image
  "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png", // Senegal travel bus
  "/lovable-uploads/fc99c9e7-80a3-4106-9a9f-1502fa6ca251.png", // Smiling girl
  "/lovable-uploads/6c3020ad-df5a-430d-9920-608d492d64ec.png", // Person holding polaroids
  "/lovable-uploads/e2fd9bc5-9787-406b-963d-2a0b8f8515a1.png", // Yellow building by water
  "/lovable-uploads/3c1c89aa-56ec-4553-8aaa-7e7c12feea72.png", // Red and yellow buildings
  "/lovable-uploads/1d4323f5-9936-4e6f-9c63-382444393b84.png", // Boats on orange water
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  
  // Set loaded state after component mount to trigger animations
  useEffect(() => {
    setIsLoaded(true);
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
      <div className="absolute inset-0 pointer-events-none z-10" 
           style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent 15%, transparent 85%, rgba(0,0,0,0.3))' }} />
      
      {/* Black overlay for better text visibility - reduced opacity */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
      
      {/* Main slider */}
      <div className="w-full h-full">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className={`hero-swiper ${isLoaded ? 'loaded' : ''}`}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
        >
          {propertyImages.map((url, i) => (
            <SwiperSlide key={`property-${i}`}>
              <div className="slide-image-container">
                <img 
                  src={url} 
                  alt={`Luxury property ${i+1}`} 
                  className="slide-image"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Glassmorphic container - rectangular with increased height, more rounded corners and subtle shadow */}
      <div className="absolute inset-0 flex items-center justify-center z-40 px-6">
        <div className="backdrop-blur-[2px] bg-black/25 border border-white/20 rounded-xl w-full max-w-3xl h-96 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform translate-y-[-4px]">
          {/* Hero title text centered in the container */}
          <div className="flex items-center justify-center h-full w-full">
            <h1 className="text-5xl font-bold text-white tracking-wider">FRACTIONALIZING</h1>
          </div>
        </div>
      </div>

      {/* Navigation arrows with subtle animation */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-40">
        <button 
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-all duration-300 hover:translate-x-[-2px] shadow-lg"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-all duration-300 hover:translate-x-[2px] shadow-lg"
          onClick={() => swiperInstance?.slideNext()}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
