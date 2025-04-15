
import React from 'react';
import { Button } from "@/components/ui/button";

const WhyInvest = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f2] py-24">
      <div className="container mx-auto px-4">
        <div className="text-left max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-clash mb-6">
            Why Invest in{' '}
            <span className="text-[#1A1F2C] relative">
              Real Estate
              <span className="absolute bottom-1 left-0 w-full border-b-2 border-[#1A1F2C] border-wavy"></span>
            </span>
          </h1>

          <p className="text-lg mb-6 text-gray-700">
            Real estate is often considered a non-depreciating asset because
            it typically maintains or increases in value over time.
          </p>

          <p className="text-lg mb-8 text-gray-700">
            Unlike other assets such as vehicles or equipment, real estate
            generally appreciates in value due to factors such as location,
            improvements, and demand.
          </p>

          <Button 
            className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90 text-white font-clash px-12 py-6 text-xl relative border-2 border-dashed border-[#1A1F2C] rounded-full shadow-lg transition-all duration-300 hover:translate-y-[-2px] uppercase tracking-wider"
          >
            Start Investing Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
