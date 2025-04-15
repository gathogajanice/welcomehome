
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
    title: "Property Selection",
    description: "We help you identify prime investment opportunities in high-growth areas, ensuring the best potential returns on your investment."
  },
  {
    number: "2",
    title: "Investment Planning",
    description: "Our expert team guides you through the investment process, from financial planning to property acquisition strategies."
  },
  {
    number: "3",
    title: "Documentation",
    description: "We handle all the paperwork and legal requirements, making the investment process seamless and hassle-free."
  },
  {
    number: "4",
    title: "Property Management",
    description: "Our comprehensive property management services ensure your investment is well-maintained and generates optimal returns."
  },
  {
    number: "5",
    title: "After-Sales Support",
    description: "Our commitment to your satisfaction extends beyond the final transaction. We conduct a thorough final walkthrough to ensure your satisfaction, and also offer comprehensive after-sales support for warranty claims, maintenance, and care instructions."
  }
];

const WhyInvestInUs = () => {
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
                          src="/lovable-uploads/192f0284-ce72-4c13-aa31-90b6a71b8152.png"
                          alt="Luxury interior"
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

export default WhyInvestInUs;
