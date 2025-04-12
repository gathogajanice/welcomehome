
import React, { useState } from 'react';
import LocationCard from './LocationCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";

// Senegal real estate statistics
const locations = [
  {
    time: "65%",
    unit: "ANNUAL GROWTH",
    label: "Property Value Increase",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=1324&auto=format&fit=crop"
  },
  {
    time: "12%",
    unit: "RENTAL YIELD",
    label: "Dakar Beachfront Villas",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1740&auto=format&fit=crop"
  },
  {
    time: "40%",
    unit: "FOREIGN INVESTMENT",
    label: "Luxury Real Estate Market",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1740&auto=format&fit=crop"
  },
  {
    time: "28%",
    unit: "PRICE INCREASE",
    label: "Urban Properties 2023",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1753&auto=format&fit=crop"
  },
  {
    time: "350",
    unit: "NEW DEVELOPMENTS",
    label: "Saly Coastal Region",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=1374&auto=format&fit=crop"
  }
];

const LocationsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  useCarouselAutoplay(api, 3000);

  return (
    <section className="py-16 px-4 bg-[#f8f6f2] relative">
      {/* Subtle textured background overlay */}
      <div 
        className="absolute inset-0 opacity-20 z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d1cdc2' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {locations.map((location, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5 min-w-[300px]">
                <LocationCard
                  time={location.time}
                  unit={location.unit}
                  label={location.label}
                  image={location.image}
                />
              </CarouselItem>
            ))}
            {/* Duplicate items for continuous flow appearance */}
            {locations.map((location, index) => (
              <CarouselItem key={`duplicate-${index}`} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5 min-w-[300px]">
                <LocationCard
                  time={location.time}
                  unit={location.unit}
                  label={location.label}
                  image={location.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LocationsSection;
