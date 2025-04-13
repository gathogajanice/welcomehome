
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const NavLink = ({ 
  children, 
  className,
  to,
  onClick 
}: { 
  children: React.ReactNode;
  className?: string;
  to: string;
  onClick?: () => void;
}) => {
  return (
    <Link to={to} className={cn("nav-link px-3 py-1", className)} onClick={onClick}>
      <span className="text-black text-[11px] tracking-[0.075em] font-medium uppercase font-apercu-mono">
        {children}
      </span>
    </Link>
  );
};

const MobileMenuLink = ({ 
  children, 
  delay,
  to,
  onClick
}: { 
  children: React.ReactNode;
  delay: number;
  to: string;
  onClick?: () => void;
}) => {
  return (
    <div 
      className="overflow-hidden py-4"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link
        to={to}
        className="mobile-nav-link text-white text-2xl md:text-3xl tracking-wide uppercase font-canela"
        onClick={onClick}
      >
        {children}
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Set a small timeout to trigger the animation after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "w-full h-16 px-8 md:px-12 flex items-center justify-between fixed top-0 left-0 z-50 rounded-lg font-canela",
          "bg-white/30 backdrop-blur-[10px] border border-white/20",
          "transition-all duration-600 ease-out will-change-transform will-change-opacity",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[10px]"
        )}
      >
        {/* Left Side Content */}
        <div className="flex items-center space-x-8">
          {/* Menu Icon and Text */}
          <div 
            className="flex items-center space-x-2 glassmorphic-hover px-3 py-1 cursor-pointer"
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle menu"
          >
            <div className={cn("flex flex-col space-y-1 hamburger-icon relative", isMenuOpen && "active")}>
              <div className="w-6 h-[1.5px] bg-black transition-all duration-300 origin-center hamburger-line-1"></div>
              <div className="w-5 h-[1.5px] bg-black transition-all duration-300 origin-center hamburger-line-2"></div>
            </div>
            <span className="text-black text-xs tracking-[0.15em] font-light uppercase">Menu</span>
          </div>
          
          {/* Navigation Links Container */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex items-center space-x-6">
          {/* Phone Number */}
          <div className="hidden md:flex items-center sleek-hover-container px-3 py-1 rounded-md relative">
            <span className="text-black text-xs font-light relative z-10">+254 710293233</span>
            <span className="text-black mx-2 font-light separator-line relative z-10">/</span>
            <span className="text-black text-xs font-light relative z-10">SE</span>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#" 
              className="sleek-hover-container bg-cream text-black text-xs tracking-[0.075em] font-light uppercase px-4 py-1.5 rounded-md relative"
            >
              <span className="relative z-10">Start Investing</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-sm z-40 menu-overlay transition-opacity duration-500",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
      >
        <div 
          className={cn(
            "flex flex-col items-center justify-center h-full transition-transform duration-500",
            isMenuOpen ? "translate-y-0" : "-translate-y-20"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="text-center">
            <MobileMenuLink to="/" delay={100} onClick={closeMenu}>Home</MobileMenuLink>
            <MobileMenuLink to="/features" delay={200} onClick={closeMenu}>Features</MobileMenuLink>
            <MobileMenuLink to="/about" delay={300} onClick={closeMenu}>About</MobileMenuLink>
            <MobileMenuLink to="/contact" delay={400} onClick={closeMenu}>Contact</MobileMenuLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
