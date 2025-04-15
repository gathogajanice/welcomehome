import React, { useEffect, useState } from 'react';
import { Skeleton } from "./ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";

const StatsSection = () => {
  const isMobile = useIsMobile();
  
  // Stats data array with two additional stats
  const stats = [
    {
      number: "62%",
      title: "Reduction in Transaction Costs",
      description: "(Compared to traditional real estate channels)"
    },
    {
      number: "11B+",
      title: "Market Opportunity",
      description: "(Africa's real estate by 2030 is within reach)"
    },
    {
      number: "88+",
      title: "Investors Showing Interest",
      description: "(From the U.S., Europe, and Senegal)"
    },
    {
      number: "24/7",
      title: "Service Availability",
      description: "(Supporting global time zones and inquiries)"
    },
    {
      number: "42%",
      title: "Annual Growth Rate",
      description: "(Exceeding local market averages since launch)"
    }
  ];
  
  // State for animated numbers
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(["0%", "0B+", "0+", "0/0", "0%"]);
  const [api, setApi] = React.useState<any>();

  // Set up autoplay
  const autoplay = useCarouselAutoplay(api, 3000);

  return (
    <section 
      className="w-full bg-[#0e517d] py-10 relative z-10 overflow-hidden" 
      id="stats-section"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      <div className="container mx-auto px-4">
        <Carousel 
          setApi={setApi}
          className="max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {stats.map((stat, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <div className="relative flex flex-col items-center justify-center text-white py-4 px-2 max-w-[220px] mx-auto border border-[#4bbfe2]/30 rounded-lg bg-[#0e517d]/50">
                  <h2 className="font-clash text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-white">
                    {animatedNumbers[index] || <Skeleton className="h-10 w-14 bg-white/10" />}
                  </h2>
                  <h3 className="font-clash text-[#4bbfe2] text-xs md:text-xs lg:text-sm mb-1 text-center">
                    {stat.title}
                  </h3>
                  <p className="font-apercu text-white/70 text-[10px] md:text-[10px] lg:text-xs max-w-[170px] text-center">
                    {stat.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default StatsSection;
