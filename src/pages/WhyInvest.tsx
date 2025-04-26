import React from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DollarSign, Globe, Home, LineChart } from "lucide-react";
import { motion } from 'framer-motion';

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
        backgroundImage: "url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1974&auto=format&fit=crop')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <img src="/lovable-uploads/1572c4f2-eb33-483a-a261-ad6032ac617d.png" alt="Africa Outline" className="w-full h-auto max-w-[500px] mx-auto" />
          
          {hotspots.map(hotspot => (
            <div 
              key={hotspot.id} 
              className="absolute h-8 w-8 rounded-full bg-black/80
                         hover:scale-[1.5] transition-all duration-500 cursor-pointer
                         hover:bg-[#387f79] z-20"
              style={{
                top: hotspot.position.top,
                left: hotspot.position.left,
                transform: 'translate(-50%, -50%)',
                animation: 'pulse 3s ease-in-out infinite',
              }}
            >
              <HoverCard openDelay={50} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <button className="w-full h-full flex items-center justify-center">
                    <span className="sr-only">{hotspot.title}</span>
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-[#387f79] bg-opacity-10 p-2">
                      {hotspot.icon}
                    </div>
                    <h4 className="font-cormorant font-normal text-lg text-[#387f79]">{hotspot.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{hotspot.description}</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-left">
          <motion.div 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-[2.5rem] font-cormorant">
              <span className="text-[#1f1f2e] relative inline-block">Why Invest in Real Estate in </span>
              <span className="text-[#387f79]">Africa</span>
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
          </motion.div>

          <Button className="bg-white/10 hover:bg-white/20 rounded-full text-[#387f79] font-cormorant font-normal px-8 py-2 text-base 
                     border border-[#387f79]/20 transition-all hover:scale-105 hover:shadow-lg">
            START INVESTING TODAY
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyInvest;
