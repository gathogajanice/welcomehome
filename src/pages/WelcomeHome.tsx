
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const WelcomeHome: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleExpand = () => {
    setIsExpanded((val) => !val);
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#387f79" }}>
      {/* Background pattern overlay, subtle but visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/lovable-uploads/ff9648d3-36eb-4d7a-ba6e-b8fe0ffb8d0f.png")',
          backgroundSize: "340px auto",           // balance pattern subtlety and repetition
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          opacity: 0.34,                          // slightly increase: visible but not overpowering
          mixBlendMode: "overlay",                // keeps the #387f79 color strong everywhere
          zIndex: 2
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-24 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
        {/* Left: Title and subtext */}
        <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left">
          <h2 
            className={`font-cormorant text-4xl lg:text-6xl leading-tight font-bold text-slate-50 tracking-tight opacity-0 ${
              isLoaded ? 'animate-fade-in opacity-100' : ''
            }`}
          >
            YOUR<br />
            INVESTMENT IS<br />
            YOUR PASSPORT<br />
            TO PREMIUM<br />
            STAYS AND<br />
            GLOBAL IMPACT
          </h2>
          
          <div className="mt-8 mb-10">
            <p className="font-bricolage text-sm md:text-base text-white/90 leading-relaxed max-w-md">
              Welcome Home is a blockchain-powered real estate platform reimagining how the African Diaspora builds wealth, reclaims land, and experiences the world.
            </p>
            
            <button 
              onClick={toggleExpand}
              className="mt-6 inline-flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 ease-in-out group hover:scale-105 hover:shadow-lg"
            >
              {isExpanded ? 'Read less' : 'Read more'}
              {isExpanded ? 
                <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" /> : 
                <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              }
            </button>
            
            {isExpanded && (
              <div className="font-bricolage text-sm md:text-base text-white/90 leading-relaxed max-w-md mt-6 animate-fade-in">
                <p className="mb-4">
                  Through fractional ownership, we make it possible for anyone—anywhere—to invest in verified property across Africa and beyond. But we're more than just real estate. Every investment unlocks luxury travel perks, exclusive cultural experiences, and access to a global community committed to legacy, sustainability, and economic empowerment.
                </p>
                <p>
                  This is where technology meets tradition, and ownership becomes a lifestyle. Welcome Home transforms your capital into a deeper connection—with land, with culture, and with a movement rooted in reclaiming what's ours. From digital deeds secured by smart contracts to curated stays in vibrant destinations like Senegal, your investment isn't just an asset—it's a gateway to impact, identity, and generational wealth.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Main image with smooth load-in */}
        <div className="w-full md:w-2/5 xl:w-2/5 overflow-hidden transition-all duration-500 rounded-3xl">
          <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/lovable-uploads/ca87bf3e-2857-43b0-acdc-ea06e8785fe8.png"
              alt="Scenic property view"
              className={`w-full h-full object-cover rounded-3xl shadow-lg transition-transform duration-700 hover:scale-105 opacity-0 ${
                isLoaded ? 'animate-fade-in opacity-100' : ''
              }`}
              style={{ objectPosition: "center" }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHome;
