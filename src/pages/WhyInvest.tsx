
import React from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DollarSign, Globe, Home, LineChart } from "lucide-react";

const hotspots = [
  {
    id: 1,
    position: { top: '30%', left: '48%' },
    title: 'Fractional Ownership',
    description: 'Own a piece of prime real estate with minimal investment',
    icon: <Home className="h-5 w-5 text-[#33C3F0]" />
  },
  {
    id: 2,
    position: { top: '45%', left: '55%' },
    title: 'Generational Wealth',
    description: 'Build lasting financial security for your family',
    icon: <LineChart className="h-5 w-5 text-[#33C3F0]" />
  },
  {
    id: 3,
    position: { top: '52%', left: '42%' },
    title: 'Invest in Any Currency',
    description: 'Flexible investment options across multiple currencies',
    icon: <DollarSign className="h-5 w-5 text-[#33C3F0]" />
  },
  {
    id: 4,
    position: { top: '60%', left: '50%' },
    title: 'Simple & Transparent',
    description: 'Clear processes with no hidden fees',
    icon: <Globe className="h-5 w-5 text-[#33C3F0]" />
  }
];

const WhyInvest = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f2] px-4 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - Interactive Africa map with hotspots */}
        <div className="relative">
          <img 
            src="/lovable-uploads/1572c4f2-eb33-483a-a261-ad6032ac617d.png" 
            alt="Africa Outline"
            className="w-full h-auto max-w-[500px] mx-auto"
          />
          
          {/* Interactive hotspots */}
          {hotspots.map((hotspot) => (
            <HoverCard key={hotspot.id} openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <button 
                  className="absolute h-6 w-6 rounded-full bg-[#33C3F0]/80 hover:bg-[#33C3F0] transition-colors
                           animate-pulse hover:animate-none"
                  style={{ 
                    top: hotspot.position.top, 
                    left: hotspot.position.left,
                    boxShadow: '0 0 0 rgba(51, 195, 240, 0.4)',
                    animation: 'pulse 2s infinite'
                  }}
                >
                  <span className="sr-only">{hotspot.title}</span>
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="rounded-full backdrop-blur-md bg-white/80 border-none shadow-lg p-4 w-48">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-[#f8f6f2] p-2">
                    {hotspot.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bricolage text-sm font-medium text-[#1f1f2e]">{hotspot.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{hotspot.description}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Right column - Content */}
        <div className="space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bricolage">
              <span className="text-[#1f1f2e]">Why Invest in </span>
              <span className="text-[#33C3F0] relative inline-block">
                Real Estate
                <span className="absolute -bottom-3 left-0 w-full">
                  <img 
                    src="/lovable-uploads/b1b73eff-f480-4f2c-993d-ba570ba41bf9.png" 
                    alt="Wavy underline" 
                    className="w-full"
                  />
                </span>
              </span>
            </h1>
            
            <p className="text-sm text-gray-700 font-apercu max-w-[90%]">
              Real estate is often considered a non-depreciating asset because
              it typically maintains or increases in value over time.
            </p>

            <p className="text-sm text-gray-700 font-apercu max-w-[90%]">
              Unlike other assets such as vehicles or equipment, real estate
              generally appreciates in value due to factors such as location,
              improvements, and demand.
            </p>
          </div>

          <Button 
            className="bg-[#1E5987] text-white font-bricolage px-10 py-3 rounded-none text-lg 
                     border-2 border-dashed border-white/60 transition-all duration-300 
                     hover:bg-[#1E5987]/90 hover:scale-105"
          >
            START INVESTING TODAY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
