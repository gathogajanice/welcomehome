import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useCarouselAutoplay } from '@/hooks/useCarouselAutoplay';
import { type CarouselApi } from "@/components/ui/carousel";
import { Home, Wallet, Plane } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Browse & Invest",
    description: "Purchase fractional land ownership with ease through our intuitive platform.",
    image: "/lovable-uploads/293a4382-83c2-4670-bd8e-d9931606822b.png",
    icon: <Home className="h-6 w-6 text-[#6DD6DB]" />
  },
  {
    number: "02",
    title: "Secure Transactions",
    description: "All transactions are verified via blockchain & smart contracts for maximum security.",
    image: "/lovable-uploads/c8f858fb-5926-49f2-b059-2d25cc0e4187.png",
    icon: <Wallet className="h-6 w-6 text-[#6DD6DB]" />
  },
  {
    number: "03",
    title: "Earn & Travel",
    description: "Membership unlocks luxury stays in Africa, combining investment with unforgettable experiences.",
    image: "/lovable-uploads/4566365b-edc6-4515-b315-d227161fd149.png",
    icon: <Plane className="h-6 w-6 text-[#6DD6DB]" />
  }
];

const Invest = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplay = useCarouselAutoplay(api, 5000);

  // Preload images
  useEffect(() => {
    features.forEach(feature => {
      const img = new Image();
      img.src = feature.image;
    });
  }, []);

  return (
    <section className="min-h-screen bg-[#f8faff] py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bricolage font-bold mb-16">
          Simple, <span className="text-[#6DD6DB]">Secure</span>, Smart<br />
          Transactions
        </h1>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 flex flex-col justify-center items-start text-left">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-6xl font-light text-[#6DD6DB] font-bricolage">
                            {feature.number}
                          </span>
                          {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bricolage font-bold mb-4">{feature.title}</h3>
                        <p className="text-gray-600 font-bricolage text-sm">{feature.description}</p>
                      </div>
                      <div className="bg-gray-100 min-h-[250px] md:min-h-[300px]">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-12 top-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Invest;
