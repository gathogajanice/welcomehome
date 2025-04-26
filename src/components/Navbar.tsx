import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * NavLink Component
 * Renders a navigation link with consistent styling
 */
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
      <span className="text-black text-[11px] tracking-[0.075em] font-medium uppercase font-bd-sans">
        {children}
      </span>
    </Link>
  );
};

/**
 * MobileMenuLink Component
 * Renders a mobile menu link with animation delay
 */
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
        className="mobile-nav-link text-white text-2xl md:text-3xl tracking-wide uppercase font-bd-sans"
        onClick={onClick}
      >
        {children}
      </Link>
    </div>
  );
};

/**
 * Navbar Component
 * Main navigation component with mobile responsiveness
 */
const Navbar = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  // Menu handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Main Navigation Bar */}
      <header 
        className={cn(
          "w-full h-16 px-8 md:px-12 flex items-center justify-between fixed top-0 left-0 z-50",
          "bg-white/30 backdrop-blur-[10px] border border-white/20",
          "transition-all duration-600 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[10px]"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Welcome Home Logo" className="h-8" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/why-invest">Why Invest</NavLink>
          <NavLink to="/team">Team</NavLink>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 md:hidden"
          >
            <span className="text-black text-xs tracking-[0.15em] font-normal uppercase font-bd-sans">Menu</span>
            <div className={cn("flex flex-col space-y-1 relative", isMenuOpen && "active")}>
              <div className="w-6 h-[1.5px] bg-black transition-all duration-300 origin-center"></div>
              <div className="w-5 h-[1.5px] bg-black transition-all duration-300 origin-center"></div>
            </div>
          </button>

          {/* Desktop CTA Button */}
          <Link
            to="/invest"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-black transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs tracking-[0.075em] font-bd-sans uppercase"
          >
            Reserve Your Spot
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-500",
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
          <nav className="text-center space-y-6">
            <MobileMenuLink to="/" delay={100} onClick={closeMenu}>Home</MobileMenuLink>
            <MobileMenuLink to="/about" delay={200} onClick={closeMenu}>About</MobileMenuLink>
            <MobileMenuLink to="/why-invest" delay={300} onClick={closeMenu}>Why Invest</MobileMenuLink>
            <MobileMenuLink to="/team" delay={400} onClick={closeMenu}>Team</MobileMenuLink>
            
            {/* Mobile CTA */}
            <div className="pt-8">
              <Link
                to="/invest"
                className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm tracking-[0.075em] font-bd-sans uppercase"
                onClick={closeMenu}
              >
                Reserve Your Spot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
