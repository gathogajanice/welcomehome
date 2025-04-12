
import React, { useEffect, useState, useCallback } from 'react';
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
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070", // Modern house at golden hour
  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070", // Moody architectural
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070", // Modern villa with clean lines
];

// Community images - authentic Senegalese/West African cultural imagery
const communityImages = [
  "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2070", // West African market scene
  "https://images.unsplash.com/photo-1580323956656-26bbb1206e34?q=80&w=2071", // Traditional clothing
  "https://images.unsplash.com/photo-1526598729284-0c5fc7ee567b?q=80&w=1930", // Village life
  "https://images.unsplash.com/photo-1504264030396-4c2a566e381c?q=80&w=1931", // Family scene
  "https://images.unsplash.com/photo-1571496526135-7d8974a89f71?q=80&w=2129", // Cultural activities
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'PROPERTY' | 'COMMUNITY'>('PROPERTY');
  const [images, setImages] = useState(propertyImages);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(propertyImages.length);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Set loaded state after component mount to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle category change
  const handleCategoryChange = (category: 'PROPERTY' | 'COMMUNITY') => {
    if (category === activeCategory) return;
    
    // Start transition effect
    setIsTransitioning(true);
    
    // After fade out, change images
    setTimeout(() => {
      setActiveCategory(category);
      setImages(category === 'PROPERTY' ? propertyImages : communityImages);
      setTotalSlides(category === 'PROPERTY' ? propertyImages.length : communityImages.length);
      setActiveIndex(0);
      if (swiperInstance) {
        swiperInstance.slideTo(0);
      }
      
      // Complete transition after images changed
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 600);
  };

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
      
      {/* Main slider with transition effect */}
      <div className={`w-full h-full transition-opacity duration-600 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className={`hero-swiper ${isLoaded ? 'loaded' : ''}`}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
        >
          {images.map((url, i) => (
            <SwiperSlide key={`${activeCategory}-${i}`}>
              <div className="slide-image-container">
                <img 
                  src={url} 
                  alt={`${activeCategory === 'PROPERTY' ? 'Luxury property' : 'Senegalese community'} ${i+1}`} 
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

      {/* Category toggle buttons */}
      <div className="absolute bottom-24 left-8 inline-flex border border-black/20 rounded-xl bg-transparent p-0.5 z-20">
        <button
          className={`px-6 py-3 rounded-lg transition-all duration-300 text-[#1A2A2E] text-sm tracking-wider font-extrabold font-apercu ${
            activeCategory === 'PROPERTY' ? 'bg-black/10' : 'bg-transparent'
          }`}
          onClick={() => handleCategoryChange('PROPERTY')}
        >
          PROPERTY
        </button>
        <button
          className={`px-6 py-3 rounded-lg transition-all duration-300 text-[#1A2A2E] text-sm tracking-wider font-extrabold font-apercu ${
            activeCategory === 'COMMUNITY' ? 'bg-black/10' : 'bg-transparent'
          }`}
          onClick={() => handleCategoryChange('COMMUNITY')}
        >
          COMMUNITY
        </button>
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
