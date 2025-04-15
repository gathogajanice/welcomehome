
import React from 'react';
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

const features = [
  {
    number: "1",
    title: "Space Planning",
    description: "Our expert designers create personalized layouts that maximize your living space and enhance functionality."
  },
  {
    number: "2",
    title: "Style Consultation",
    description: "Work with our design team to discover your unique style and create a cohesive look for your home."
  },
  {
    number: "3",
    title: "Quality Selection",
    description: "Choose from our curated collection of premium furniture and decor pieces from trusted manufacturers."
  },
  {
    number: "4",
    title: "Professional Installation",
    description: "Our skilled team ensures proper assembly and placement of all furniture pieces for a perfect finish."
  },
  {
    number: "5",
    title: "After-Care Service",
    description: "Enjoy peace of mind with our comprehensive warranty and maintenance support for all furnished spaces."
  }
];

const Invest = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplay = useCarouselAutoplay(api, 5000);

  return (
    <section className="min-h-screen bg-[#f8f6f2] py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-clash mb-16">
          How We <span className="text-[#6DD6DB]">Simplify</span> Your<br />
          Furnishing Experience
        </h1>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-8 flex flex-col justify-center items-start text-left">
                        <span className="text-7xl font-light text-[#6DD6DB] mb-4">
                          {feature.number}
                        </span>
                        <h3 className="text-2xl font-clash mb-4">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                      <div className="bg-gray-100 min-h-[300px] md:min-h-[400px]">
                        <img 
                          src={`https://source.unsplash.com/random/800x600?furniture,${feature.title.toLowerCase()}`}
                          alt={feature.title}
                          className="w-full h-full object-cover"
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
