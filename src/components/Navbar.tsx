
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <header className="w-full h-16 px-8 md:px-12 flex items-center justify-between bg-transparent absolute top-0 left-0 z-50">
      {/* Left Side Content */}
      <div className="flex items-center space-x-8">
        {/* Menu Icon and Text */}
        <div className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1">
            <div className="w-5 h-[1px] bg-white"></div>
            <div className="w-4 h-[1px] bg-white"></div>
          </div>
          <span className="text-white text-xs tracking-[0.15em] font-light uppercase">Menu</span>
        </div>
        
        {/* Select an Object Button */}
        <div className="bg-white/80 rounded-none px-4 py-1.5">
          <span className="text-black text-[11px] tracking-[0.075em] font-medium uppercase">Select an Object</span>
        </div>
        
        {/* General Plan Text */}
        <span className="text-white text-xs tracking-[0.15em] font-light uppercase hidden md:block">General Plan</span>
      </div>

      {/* Right Side Content */}
      <div className="flex items-center space-x-6">
        {/* Phone Number */}
        <span className="hidden md:block text-white text-xs font-light">+34 (951) 870-700</span>
        
        {/* Language Selector */}
        <span className="hidden md:block text-white text-xs font-light">ES</span>
        
        {/* Agent Portal */}
        <span className="hidden md:block text-white text-xs tracking-[0.075em] font-light uppercase">Agent Portal</span>
      </div>
    </header>
  );
};

export default Navbar;
