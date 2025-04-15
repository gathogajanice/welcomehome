
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DollarSign, Globe, Home, LineChart } from "lucide-react";

// Define data for the hotspots
const hotspots = [
  {
    id: 1,
    position: { top: '25%', left: '45%' },
    title: 'Fractional Ownership',
    description: 'Own a piece of prime real estate with minimal investment',
    icon: <Home className="h-5 w-5 text-[#33C3F0]" />
  },
  {
    id: 2,
    position: { top: '40%', left: '60%' },
    title: 'Generational Wealth',
    description: 'Build lasting financial security for your family',
    icon: <LineChart className="h-5 w-5 text-[#33C3F0]" />
  },
  {
    id: 3,
    position: { top: '55%', left: '40%' },
    title: 'Invest in Any Currency',
    description: 'Flexible investment options across multiple currencies',
    icon: <DollarSign className="h-5 w-5 text-[#33C3F0]" />
  },
  {
    id: 4,
    position: { top: '70%', left: '55%' },
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
            <HoverCard key={hotspot.id}>
              <HoverCardTrigger asChild>
                <button 
                  className="absolute h-6 w-6 rounded-full bg-[#33C3F0] hover:bg-[#1f1f2e] transition-all 
                             hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33C3F0]"
                  style={{ 
                    top: hotspot.position.top, 
                    left: hotspot.position.left 
                  }}
                >
                  <span className="sr-only">{hotspot.title}</span>
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="backdrop-blur-md bg-white/80 border-none shadow-lg p-4 w-64">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-[#f8f6f2] p-2">
                    {hotspot.icon}
                  </div>
                  <h4 className="font-bricolage text-lg text-[#1f1f2e]">{hotspot.title}</h4>
                </div>
                <p className="text-sm text-gray-600 mt-2">{hotspot.description}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Right column - Content */}
        <div className="space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bricolage">
              <span className="text-[#1f1f2e]">Why </span>
              <span className="text-[#33C3F0] relative inline-block">
                Invest
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
            className="bg-[#1E5987] text-white font-bricolage px-10 py-3 rounded-full text-lg 
                     border-2 border-dashed border-white/60 transition-all hover:bg-[#1E5987]"
            style={{ 
              backgroundImage: `url('/lovable-uploads/b8954deb-dd19-4087-8329-72a90b45e6bc.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            START INVESTING TODAY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
