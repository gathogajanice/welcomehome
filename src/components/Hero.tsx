
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Property images - cinematic architectural photography in 4K (no pools, clean facades)
const propertyImages = [
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2070", // Senegalese village life
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070", // Traditional architecture in Senegal
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070", // Dark villa theme
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070", // Modern concrete home, overcast (keeping)
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070", // Minimalist geometric architecture (keeping)
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
      
      {/* Black overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
      
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

      {/* Glassmorphic container with text */}
      <div className="absolute inset-0 flex items-center justify-center z-40 px-6">
        <div className="backdrop-blur-lg bg-black/30 border border-white/10 rounded-3xl w-full max-w-4xl p-12 text-white">
          {/* Tagline */}
          <p className="text-lg font-light mb-2 text-left opacity-80">
            Empowering you to invest in real estate
          </p>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-light text-left leading-tight mb-20">
            Because everyone<br />
            deserves to own<br />
            build
          </h1>
          
          {/* Stats row */}
          <div className="flex flex-wrap gap-16 justify-start">
            <div className="flex items-baseline">
              <span className="text-4xl md:text-5xl font-canela">12</span>
              <span className="text-orange-400 text-xl mx-1">+</span>
              <span className="text-gray-300 ml-2">Lorem Ipsum</span>
            </div>
            
            <div className="flex items-baseline">
              <span className="text-4xl md:text-5xl font-canela">83K</span>
              <span className="text-orange-400 text-xl mx-1">+</span>
              <span className="text-gray-300 ml-2">Lorem Ipsum</span>
            </div>
            
            <div className="flex items-baseline">
              <span className="text-4xl md:text-5xl font-canela">4.2K</span>
              <span className="text-orange-400 text-xl mx-1">+</span>
              <span className="text-gray-300 ml-2">Lorem Ipsum</span>
            </div>
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
