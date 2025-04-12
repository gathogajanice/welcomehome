
import React, { useEffect, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Villa images - cinematic with consistent mood
const villaImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070", // Golden hour villa
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070", // Luxury estate twilight
  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070", // Moody architectural
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075", // Modern exterior dusk
  "https://images.unsplash.com/photo-1600607687644-afc93b20a606?q=80&w=2070", // Dramatic lighting
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"  // Evening luxury home
];

// Residence images - cinematic with consistent mood
const residenceImages = [
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2074", // Modern apartment
  "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070", // Luxury interior
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074", // Contemporary living
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2070", // Elegant bedroom
  "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=2070", // High-end residence
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2070"  // Stylish condo
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'VILLAS' | 'RESIDENCES'>('VILLAS');
  const [images, setImages] = useState(villaImages);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(villaImages.length);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Set loaded state after component mount to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle category change
  const handleCategoryChange = (category: 'VILLAS' | 'RESIDENCES') => {
    setActiveCategory(category);
    setImages(category === 'VILLAS' ? villaImages : residenceImages);
    setTotalSlides(category === 'VILLAS' ? villaImages.length : residenceImages.length);
    setActiveIndex(0);
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
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
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 pointer-events-none z-10" />
      <div className="absolute top-0 left-0 h-full w-[1px] bg-white/20 pointer-events-none z-10" />
      
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
                alt={`${activeCategory === 'VILLAS' ? 'Luxury villa' : 'Luxury residence'} ${i+1}`} 
                className="slide-image"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-8 text-white font-canela text-2xl md:text-3xl z-20">
        {formatSlideNumber(activeIndex + 1)} / {formatSlideNumber(totalSlides)}
      </div>

      {/* Category toggle buttons */}
      <div className="absolute bottom-24 left-8 flex gap-4 text-white uppercase z-20">
        <button
          className={`px-4 py-2 rounded-full transition-all duration-300 text-xs tracking-wider ${
            activeCategory === 'VILLAS' ? 'bg-white/20' : 'opacity-50'
          }`}
          onClick={() => handleCategoryChange('VILLAS')}
        >
          Villas
        </button>
        <button
          className={`px-4 py-2 rounded-full transition-all duration-300 text-xs tracking-wider ${
            activeCategory === 'RESIDENCES' ? 'bg-white/20' : 'opacity-50'
          }`}
          onClick={() => handleCategoryChange('RESIDENCES')}
        >
          Residences
        </button>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-20">
        <button 
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg"
          onClick={() => swiperInstance?.slideNext()}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
