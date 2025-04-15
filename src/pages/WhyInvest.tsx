
import React from 'react';
import { Button } from "@/components/ui/button";

const WhyInvest = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f2] px-4 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - 3D Africa image */}
        <div className="relative h-[400px] bg-[#222222] rounded-lg">
          {/* Placeholder for 3D Africa visualization */}
        </div>

        {/* Right column - Content */}
        <div className="text-right space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-clash">
              <span className="text-[#1f1f2e]">Why </span>
              <span className="text-[#33C3F0]">Invest in </span>
              <span className="text-[#33C3F0] relative">
                Real Estate
                <span className="absolute bottom-1 left-0 w-full border-b-2 border-[#33C3F0] border-wavy"></span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 font-apercu">
              Real estate is often considered a non-depreciating asset because
              it typically maintains or increases in value over time.
            </p>

            <p className="text-lg text-gray-700 font-apercu">
              Unlike other assets such as vehicles or equipment, real estate
              generally appreciates in value due to factors such as location,
              improvements, and demand.
            </p>
          </div>

          <Button 
            className="bg-[#1f1f2e] hover:bg-[#33C3F0] text-white font-clash px-6 py-2 rounded-none text-base transition-colors duration-300"
          >
            START INVESTING TODAY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
