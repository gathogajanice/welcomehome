
import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Coins, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Invest = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image with background circle */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#222222] rounded-full transform -translate-x-1/4"></div>
            <img 
              src="/lovable-uploads/4adba4f6-3c3b-490b-9311-4b48e7a1a4a0.png" 
              alt="Modern black house" 
              className="relative z-10 w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col space-y-6">
            {/* Title with wavy underline */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#222222] mb-2">
                Why Invest in 
                <span className="text-[#e86a33] block mt-2">
                  Real Estate?
                </span>
              </h1>
              {/* Animated wavy underline */}
              <motion.div
                className="h-1 w-48 bg-[#e86a33] mt-2"
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{
                  duration: 1,
                  ease: "easeOut"
                }}
              />
            </div>

            {/* Description paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-700 text-lg">
                Real estate is often considered a non-depreciating asset because 
                it typically maintains or increases in value over time.
              </p>
              <p className="text-gray-700 text-lg">
                Unlike other assets such as vehicles or equipment, real estate 
                generally appreciates in value due to factors such as location, 
                improvements, and demand.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-[#e86a33] hover:bg-[#d05a28] text-white font-bold py-4 px-8 rounded-md w-fit text-lg"
            >
              START INVESTING TODAY
            </Button>
          </div>
        </div>

        {/* Features section with icons */}
        <div className="mt-16 bg-[#555555] text-white p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-4 border-r border-white/20 last:border-r-0">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Puzzle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-2">Fractional Ownership</h3>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-4 border-r border-white/20 last:border-r-0">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Coins size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-2">Generational wealth</h3>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <DollarSign size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-2">Invest in any currency</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
