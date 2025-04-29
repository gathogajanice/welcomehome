import React from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DollarSign, Globe, Home, LineChart, ArrowRight } from "lucide-react";
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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                    <h4 className="font-bd-sans text-lg text-[#387f79] font-bold">{hotspot.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 font-cormorant">{hotspot.description}</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>

        <motion.div 
          className="space-y-6 text-left"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-[2.5rem] font-bd-sans leading-tight font-bold">
            <span className="text-[#1f1f2e] relative inline-block">WHY INVEST IN</span>{" "}
            <span className="text-[#387f79]">AFRICA?</span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-gray-700 font-cormorant max-w-[90%] text-lg">
              Africa is the world's next real estate frontier, with its population projected to double to 2.5 billion by 2050 and urbanization rates accelerating faster than any other region.
            </p>

            <p className="text-gray-700 font-cormorant max-w-[90%] text-lg">
              The continent holds 60% of the world's undeveloped arable land and is seeing a $1.2 trillion projected real estate market growth by 2030. Yet despite this opportunity, land ownership remains difficult for diaspora communities due to systemic barriers and lack of transparency.
            </p>

            <p className="text-gray-700 font-cormorant max-w-[90%] text-lg">
              Welcome Home bridges that gap—giving investors direct access to secure, blockchain-verified land ownership and a stake in the future of Africa's wealth, development, and prosperity.
            </p>
          </div>

          <Button className="bg-white/10 hover:bg-white/20 rounded-full text-[#387f79] font-bd-sans font-bold px-8 py-2 text-base 
                     border border-[#387f79]/20 transition-all hover:scale-105 hover:shadow-lg group">
            UNLOCK OWNERSHIP OPPORTUNITIES
            <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyInvest;
