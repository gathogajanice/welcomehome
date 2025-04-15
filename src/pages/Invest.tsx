
import React from 'react';
import { Button } from "@/components/ui/button";
import { Puzzle, Coins, CircleDollarSign } from "lucide-react";

const Invest = () => {
  return (
    <section className="bg-[#f8f6f2] min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full aspect-[4/3]">
            <img 
              src="/lovable-uploads/048f4686-4894-46dd-8007-643db0f1550d.png"
              alt="Modern house"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bricolage leading-tight mb-6">
            Why Invest in{" "}
            <span className="text-[#e67b46] relative">
              Real Estate?
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#e67b46]"></div>
            </span>
          </h1>
          
          <p className="text-gray-700 mb-4 text-lg">
            Real estate is often considered a non-depreciating asset because it typically maintains or increases in value over time.
          </p>
          
          <p className="text-gray-700 mb-8 text-lg">
            Unlike other assets such as vehicles or equipment, real estate generally appreciates in value due to factors such as location, improvements, and demand.
          </p>

          <Button 
            className="bg-[#e67b46] hover:bg-[#d16b3d] text-white px-8 py-6 rounded-lg text-lg font-medium mb-12"
          >
            START INVESTING TODAY
          </Button>

          {/* Features section */}
          <div className="bg-[#13517b] rounded-2xl p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Puzzle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Fractional Ownership</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Generational wealth</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <CircleDollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Invest in any currency</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
