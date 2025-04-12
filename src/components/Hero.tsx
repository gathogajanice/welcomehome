
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  "https://images.unsplash.com/photo-1628744448840-b38e460f157a?q=80&w=2070",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
  "https://images.unsplash.com/photo-1600607687644-afc93b20a606?q=80&w=2070",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2074"
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mount to trigger animations
    setIsLoaded(true);
  }, []);

  return (
    <div className="hero-container">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className={`hero-swiper ${isLoaded ? 'loaded' : ''}`}
      >
        {images.map((url, i) => (
          <SwiperSlide key={i}>
            <div className="slide-image-container">
              <img 
                src={url} 
                alt={`Luxury property ${i+1}`} 
                className="slide-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
