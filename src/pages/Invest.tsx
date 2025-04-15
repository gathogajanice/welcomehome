
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
    title: "Home Selection",
    description: "Our expert team helps you find the perfect home that matches your lifestyle and investment goals."
  },
  {
    number: "2",
    title: "Property Inspection",
    description: "Thorough evaluation of every property ensuring you make an informed decision for your new home."
  },
  {
    number: "3",
    title: "Documentation",
    description: "We handle all the paperwork and legal requirements, making your home-buying journey stress-free."
  },
  {
    number: "4",
    title: "Move-In Support",
    description: "Complete assistance with the moving process and initial setup of your new home."
  },
  {
    number: "5",
    title: "After-Sales Care",
    description: "Ongoing support and maintenance services to ensure your home remains perfect for years to come."
  }
];

const Invest = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplay = useCarouselAutoplay(api, 5000);

  return (
    <section className="min-h-screen bg-[#f8f6f2] py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-clash mb-16">
          How We Make Your <span className="text-[#6DD6DB]">Dream Home</span><br />
          A Reality
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
