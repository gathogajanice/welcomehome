import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DollarSign, Globe, Home, LineChart, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const hotspots = [
  {
    id: 1,
    position: { top: '25%', left: '40%' },
    title: 'Fractional Ownership',
    description: 'Own a piece of prime real estate with minimal investment',
    icon: <Home className="h-5 w-5 text-black" />
  },
  {
    id: 2,
    position: { top: '40%', left: '75%' },
    title: 'Generational Wealth',
    description: 'Build lasting financial security for your family',
    icon: <LineChart className="h-5 w-5 text-black" />
  },
  {
    id: 3,
    position: { top: '65%', left: '35%' },
    title: 'Invest in Any Currency',
    description: 'Flexible investment options across multiple currencies',
    icon: <DollarSign className="h-5 w-5 text-black" />
  },
  {
    id: 4,
    position: { top: '70%', left: '60%' },
    title: 'Simple & Transparent',
    description: 'Clear processes with no hidden fees',
    icon: <Globe className="h-5 w-5 text-black" />
  }
];

const WhyInvest = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  // Dismiss hotspot on outside click (mobile)
  useEffect(() => {
    if (!isMobile) return;
    const handle = (e: any) => {
      if (!e.target.closest('.africa-hotspot')) setActiveHotspot(null);
    };
    document.addEventListener('touchstart', handle);
    return () => document.removeEventListener('touchstart', handle);
  }, [isMobile]);

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
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(0, 99, 77, 0.7); }
            70% { box-shadow: 0 0 0 20px rgba(0, 99, 77, 0); }
            100% { box-shadow: 0 0 0 0 rgba(0, 99, 77, 0); }
          }
        `}
      </style>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Image + Hotspots */}
        <div className="relative max-w-[500px] mx-auto">
          <img src="/images/1572c4f2-eb33-483a-a261-ad6032ac617d.png" alt="Africa Outline" className="w-full h-auto" />
          {hotspots.map(h => {
            const isActive = activeHotspot === h.id;
            return (
              <div
                key={h.id}
                className={`africa-hotspot absolute rounded-full bg-[#00634d] transition-all duration-500 cursor-pointer z-20 ${isActive ? 'scale-[1.5] bg-[#00634d]' : ''}`}
                style={{
                  top: h.position.top,
                  left: h.position.left,
                  transform: 'translate(-50%, -50%)',
                  animation: 'pulse 1.5s ease-in-out infinite',
                  boxShadow: '0 0 0 0 rgba(0, 99, 77, 0.7)',
                  height: isMobile ? '1.25rem' : '2rem',
                  width: isMobile ? '1.25rem' : '2rem',
                }}
                onClick={() => setActiveHotspot(isActive ? null : h.id)}
                onTouchEnd={e => {
                  e.preventDefault();
                  setActiveHotspot(isActive ? null : h.id);
                }}
                onMouseEnter={() => setActiveHotspot(h.id)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <HoverCard openDelay={50} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <span className="w-full h-full flex items-center justify-center">
                      <span className="sr-only">{h.title}</span>
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-white/20">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-[#387f79] bg-opacity-10 p-2">
                        {h.icon}
                      </div>
                      <h4 className="font-bd-sans text-lg text-[#387f79] font-bold">{h.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 font-cormorant">{h.description}</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            );
          })}
        </div>

        {/* Text Content */}
        <motion.div 
          className="space-y-6 text-left md:text-left flex flex-col justify-center items-center md:items-start md:justify-start px-2 sm:px-0"
          style={{ maxWidth: isMobile ? '100%' : 'none', textAlign: isMobile ? 'center' : 'left' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-troye leading-tight w-full" style={{textAlign: isMobile ? 'center' : 'left'}}>
            <span className="font-troye text-2xl sm:text-3xl md:text-4xl text-[#00634d] relative inline-block">WHY INVEST IN AFRICA?</span>
          </h1>

          <div className="space-y-4 w-full max-w-xl mx-auto" style={{textAlign: isMobile ? 'center' : 'left'}}>
            <p className="text-gray-700 font-cormorant text-base sm:text-lg leading-relaxed">
              Africa is the world's next real estate frontier, with its population projected to double to 2.5 billion by 2050 and urbanization rates accelerating faster than any other region.
            </p>
            <p className="text-gray-700 font-cormorant text-base sm:text-lg leading-relaxed">
              The continent holds 60% of the world's undeveloped arable land and is seeing a $1.2 trillion projected real estate market growth by 2030. Yet despite this opportunity, land ownership remains difficult for diaspora communities due to systemic barriers and lack of transparency.
            </p>
            <p className="text-gray-700 font-cormorant text-base sm:text-lg leading-relaxed">
              Welcome Home bridges that gap—giving investors direct access to secure, blockchain-verified land ownership and a stake in the future of Africa's wealth, development, and prosperity.
            </p>
          </div>

          {/* ✅ Fixed Responsive Button */}
          <Link to="/form" className="block w-full sm:w-fit mt-4">
            <Button
              className="w-full sm:w-fit text-center bg-white/10 hover:bg-white/20 
                         rounded-full text-[#387f79] font-bd-sans font-bold 
                         px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base 
                         border border-[#387f79]/20 
                         transition-all hover:scale-105 hover:shadow-lg group 
                         whitespace-normal sm:whitespace-nowrap"
            >
              <span className="inline-block leading-snug text-center">
                UNLOCK OWNERSHIP OPPORTUNITIES
              </span>
              <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyInvest;
