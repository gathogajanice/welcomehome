
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Navbar = () => {
  return (
    <header className="w-full h-[80px] px-6 md:px-12 flex items-center justify-between bg-transparent absolute top-0 left-0 z-50">
      {/* Left Side Content */}
      <div className="flex items-center space-x-6">
        {/* Hamburger Menu and Text */}
        <div className="flex items-center">
          <div className="flex flex-col space-y-1.5 mr-3">
            <div className="w-6 h-[1px] bg-white"></div>
            <div className="w-5 h-[1px] bg-white"></div>
          </div>
          <span className="text-white text-sm tracking-wider">MENU</span>
        </div>
        
        {/* Select an Object Button */}
        <button className="bg-white/90 text-black text-sm px-5 py-2.5 rounded-sm hover:bg-white/100 transition-all">
          SELECT AN OBJECT
        </button>
        
        {/* General Plan Text */}
        <span className="text-white text-sm tracking-wider hidden md:block">GENERAL PLAN</span>
      </div>

      {/* Right Side Content */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Phone Number */}
        <div className="hidden md:block text-white text-sm">+34 (951) 870-700</div>
        
        {/* Language Selector */}
        <div className="hidden md:block text-white text-sm">ES</div>
        
        {/* Agent Portal */}
        <div className="hidden md:block text-white text-sm">AGENT PORTAL</div>
      </div>
    </header>
  );
};

export default Navbar;
