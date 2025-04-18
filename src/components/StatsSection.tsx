
import React from 'react';
import { Skeleton } from "./ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";
import { motion } from 'framer-motion';

const StatsSection = () => {
  const isMobile = useIsMobile();
  
  // Stats data array with actual numbers (added one more item)
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
    },
    {
      number: "93%",
      title: "Client Satisfaction",
      description: "(Based on post-investment surveys)"
    }
  ];

  const [api, setApi] = React.useState<any>();

  // Set up autoplay with slower speed (5 seconds)
  const autoplay = useCarouselAutoplay(api, 5000);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#0e517d] py-10 relative z-10 overflow-hidden" 
      id="stats-section"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center font-clash text-2xl md:text-3xl font-bold text-white mb-10"
        >
          Our Performance
        </motion.h2>
        
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
              <CarouselItem key={index} className={isMobile ? "basis-full sm:basis-1/2" : "md:basis-1/2 lg:basis-1/3 xl:basis-1/5"}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="relative flex flex-col items-center justify-center text-white py-4 px-2 max-w-[220px] mx-auto border border-[#4bbfe2]/30 rounded-lg bg-[#0e517d]/50"
                >
                  <h2 className="font-clash text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-white">
                    {stat.number}
                  </h2>
                  <h3 className="font-clash text-[#4bbfe2] text-xs md:text-xs lg:text-sm mb-1 text-center">
                    {stat.title}
                  </h3>
                  <p className="font-apercu text-white/70 text-[10px] md:text-[10px] lg:text-xs max-w-[170px] text-center">
                    {stat.description}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  );
};

export default StatsSection;
