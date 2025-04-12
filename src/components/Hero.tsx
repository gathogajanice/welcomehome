
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Property images - cinematic architectural photography in 4K (no pools, clean facades)
const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070", // Modern concrete home, overcast
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070", // Minimalist geometric architecture
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073", // Modern house with warm lighting
  "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065", // Elegant concrete home at dusk
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080", // Modern villa with moody atmosphere
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(propertyImages.length);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  
  // Set loaded state after component mount to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle slide change
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  // Format slide numbers with leading zero
  const formatSlideNumber = (num: number) => {
    return String(num).padStart(2, '0');
  };

  return (
    <div className="hero-container">
      {/* Ambient frame - decorative borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/25 pointer-events-none z-20" />
      <div className="absolute top-0 left-0 h-full w-[1px] bg-white/25 pointer-events-none z-20" />
      
      {/* Left/Right vignette blur */}
      <div className="absolute inset-0 pointer-events-none z-10" 
           style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent 15%, transparent 85%, rgba(0,0,0,0.3))' }} />
      
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

      {/* Slide counter with zoom hierarchy */}
      <div className="absolute bottom-8 left-8 flex items-baseline gap-1 text-white z-40">
        <span className="text-[3.5rem] font-bold tracking-tight font-canela">{formatSlideNumber(activeIndex + 1)}</span>
        <span className="text-[1.5rem] font-light opacity-80 font-canela">/{formatSlideNumber(totalSlides)}</span>
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
