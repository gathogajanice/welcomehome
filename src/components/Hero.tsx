
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Property images - cinematic architectural photography in 4K (no pools, clean facades)
const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070", // Modern concrete home, overcast (keeping)
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070", // Minimalist geometric architecture (keeping)
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2070", // Senegalese village life
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070", // Traditional architecture in Senegal
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070", // Dark villa theme
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(propertyImages.length);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [viewType, setViewType] = useState("property");
  
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

      {/* WELCOME HOME Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
        <div className="text-white text-center">
          <span className="block font-canela uppercase font-normal text-[clamp(4rem,12vw,14rem)] tracking-[0.03em] leading-[1] opacity-0 transform translate-y-5" 
                style={{animation: "fadeInUp 0.6s ease forwards"}}>
            WELCOME
          </span>
          <span className="block font-canela uppercase font-normal text-[clamp(4rem,12vw,14rem)] tracking-[0.03em] leading-[1] opacity-0 transform translate-y-5"
                style={{animation: "fadeInUp 0.6s ease forwards 0.3s"}}>
            HOME
          </span>
        </div>
      </div>

      {/* Paragraph Text (Bottom Left) */}
      <div className="absolute bottom-[6rem] left-8 z-40 max-w-[480px]">
        <p className="font-canela text-base md:text-xl text-white font-light leading-[1.6]">
          Welcome to your future sanctuary — where design meets comfort, and every sunrise feels like a new beginning.
        </p>

        {/* Toggle Group for PROPERTY/COMMUNITY */}
        <div className="mt-6 border border-white/20 rounded-xl inline-flex p-1">
          <ToggleGroup type="single" defaultValue="property" value={viewType} onValueChange={(val) => val && setViewType(val)}>
            <ToggleGroupItem 
              value="property"
              className={`text-[0.875rem] uppercase tracking-[0.08em] font-apercu px-4 py-1.5 rounded-lg ${viewType === 'property' ? 'bg-white/15 text-black' : 'bg-transparent text-white'}`}
            >
              PROPERTY
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="community"
              className={`text-[0.875rem] uppercase tracking-[0.08em] font-apercu px-4 py-1.5 rounded-lg ${viewType === 'community' ? 'bg-white/15 text-black' : 'bg-transparent text-white'}`}
            >
              COMMUNITY
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
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
