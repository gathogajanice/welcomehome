
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";

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

const StatsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  useCarouselAutoplay(api, 3000);

  return (
    <section className="py-16 px-4 bg-[#387f79] relative">
      <div className="container mx-auto">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {stats.map((stat, index) => (
              <CarouselItem key={index} className="md:basis-1/1 pl-4">
                <div className="relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-8 rounded-lg text-white">
                  <h2 className="text-4xl font-bold mb-2">{stat.number}</h2>
                  <h3 className="text-xl mb-1 font-medium">{stat.title}</h3>
                  <p className="text-sm text-white/80">{stat.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default StatsSection;
