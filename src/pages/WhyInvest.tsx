
import React from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DollarSign, Globe, Home, LineChart } from "lucide-react";
import { motion } from 'framer-motion';

// Define data for the hotspots
const hotspots = [{
  id: 1,
  position: {
    top: '25%',
    left: '40%'
  },
  title: 'Fractional Ownership',
  description: 'Own a piece of prime real estate with minimal investment',
  icon: <Home className="h-5 w-5 text-black" />
}, {
  id: 2,
  position: {
    top: '45%',
    left: '55%'
  },
  title: 'Generational Wealth',
  description: 'Build lasting financial security for your family',
  icon: <LineChart className="h-5 w-5 text-black" />
}, {
  id: 3,
  position: {
    top: '65%',
    left: '35%'
  },
  title: 'Invest in Any Currency',
  description: 'Flexible investment options across multiple currencies',
  icon: <DollarSign className="h-5 w-5 text-black" />
}, {
  id: 4,
  position: {
    top: '70%',
    left: '60%'
  },
  title: 'Simple & Transparent',
  description: 'Clear processes with no hidden fees',
  icon: <Globe className="h-5 w-5 text-black" />
}];

const WhyInvest = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#eaf6ff] px-4 py-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - Interactive Africa map with hotspots */}
        <div className="relative">
          <img src="/lovable-uploads/1572c4f2-eb33-483a-a261-ad6032ac617d.png" alt="Africa Outline" className="w-full h-auto max-w-[500px] mx-auto" />
          
          {/* Interactive hotspots with enhanced pulse */}
          {hotspots.map(hotspot => (
            <div 
              key={hotspot.id} 
              className="absolute h-7 w-7 rounded-full bg-black opacity-80 
                         hover:scale-125 transition-transform duration-300
                         animate-[pulse_2s_ease-in-out_infinite]" 
              style={{
                top: hotspot.position.top,
                left: hotspot.position.left,
                transform: 'translate(-50%, -50%)', // Center the hotspot
              }}
            >
              <HoverCard openDelay={50} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <button className="w-full h-full flex items-center justify-center">
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
            </div>
          ))}
        </div>

        {/* Right column - Content */}
        <div className="space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-[2.5rem] font-bold font-clash">
              <span className="text-[#1f1f2e] relative inline-block text-motion">Why Invest in Real Estate in </span>
              <span className="text-[#6DD6DB]">Africa</span>
            </h1>
            
            <p className="text-gray-700 font-apercu max-w-[90%] text-base">
              Real estate is often considered a non-depreciating asset because
              it typically maintains or increases in value over time.
            </p>

            <p className="text-gray-700 font-apercu max-w-[90%] text-base">
              Unlike other assets such as vehicles or equipment, real estate
              generally appreciates in value due to factors such as location,
              improvements, and demand.
            </p>
          </div>

          <Button className="bg-[#1E5987] text-white font-bricolage px-8 py-2 rounded-full text-base 
                     border-2 border-dashed border-white/60 transition-all hover:bg-[#1E5987]" style={{
            backgroundImage: `url('/lovable-uploads/b8954deb-dd19-4087-8329-72a90b45e6bc.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            START INVESTING TODAY
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyInvest;
