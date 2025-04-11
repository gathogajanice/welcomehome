
import React from 'react';
import { cn } from '@/lib/utils';

type NavLinkProps = {
  children: React.ReactNode;
  active?: boolean;
};

const NavLink = ({ children, active = false }: NavLinkProps) => {
  return (
    <div className="relative font-bold">
      {children}
      {active && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-[3px] bg-[#41CBDD]"></div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="w-full bg-[#898684] h-[82px] px-6 md:px-12 flex items-center">
      <div className="flex-1 flex items-center">
        {/* Hamburger Menu and Text */}
        <div className="flex items-center mr-12">
          <div className="flex flex-col space-y-1.5 mr-3">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
          <span className="text-white text-sm tracking-wider">MENU</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex bg-[#F9F0E7] rounded-lg px-6 py-2.5">
          <div className="flex space-x-8">
            <NavLink active={true}>HOME</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>EXPLORE</NavLink>
            <NavLink>TEAM</NavLink>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex items-center space-x-6">
        {/* Phone Number */}
        <div className="hidden md:block text-white">+254 710293233</div>
        
        {/* Separator */}
        <div className="hidden md:block text-white">/</div>
        
        {/* Language Indicator */}
        <div className="hidden md:block text-white">SE</div>
        
        {/* CTA Button */}
        <button className="bg-[#F9F0E7] text-black font-bold rounded-lg px-6 py-2.5 hover:brightness-95 transition-all">
          START INVESTING
        </button>
      </div>
    </header>
  );
};

export default Navbar;
