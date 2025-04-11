
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Navbar = () => {
  return (
    <header className="w-full h-16 px-8 md:px-12 flex items-center justify-between bg-transparent absolute top-0 left-0 z-50">
      {/* Left Side Content */}
      <div className="flex items-center space-x-8">
        {/* Menu Icon and Text */}
        <div className="flex items-center">
          <div className="flex flex-col space-y-1 mr-2">
            <div className="w-5 h-[1px] bg-white"></div>
            <div className="w-4 h-[1px] bg-white"></div>
          </div>
          <span className="text-white text-xs tracking-wider font-light">MENU</span>
        </div>
        
        {/* Select an Object Button */}
        <div className="bg-white/80 rounded-none px-4 py-1.5">
          <span className="text-black text-[11px] font-medium tracking-wide">SELECT AN OBJECT</span>
        </div>
        
        {/* General Plan Text */}
        <span className="text-white text-xs tracking-wider font-light hidden md:block">GENERAL PLAN</span>
      </div>

      {/* Right Side Content */}
      <div className="flex items-center space-x-5 md:space-x-5">
        {/* Phone Number */}
        <span className="hidden md:block text-white text-xs font-light">+34 (951) 870-700</span>
        
        {/* Language Selector */}
        <span className="hidden md:block text-white text-xs font-light">ES</span>
        
        {/* Agent Portal */}
        <span className="hidden md:block text-white text-xs font-light">AGENT PORTAL</span>
      </div>
    </header>
  );
};

export default Navbar;
