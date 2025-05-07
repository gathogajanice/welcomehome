import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  if (location.pathname !== '/') {
    return null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinkClasses = "font-bd-sans text-white uppercase tracking-wider text-sm cursor-pointer";

  return (
    <header
      className={cn(
        "w-full h-16 px-4 sm:px-12 flex items-center justify-between fixed top-0 left-0 z-[100]",
        "bg-transparent",
        "transition-all duration-600 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[10px]"
      )}
    >
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-12">
        <ScrollLink to="hero" smooth={true} duration={600} offset={-60} className={navLinkClasses}>Home</ScrollLink>
        <ScrollLink to="welcome" smooth={true} duration={600} offset={-60} className={navLinkClasses}>About</ScrollLink>
        <ScrollLink to="promos" smooth={true} duration={600} offset={-60} className={navLinkClasses}>Membership</ScrollLink>
        <ScrollLink to="footer" smooth={true} duration={600} offset={-60} className={navLinkClasses}>Contact</ScrollLink>
      </nav>

      {/* Mobile menu button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop CTA */}
      <Link to="/invest" className="hidden md:block font-bd-sans text-white uppercase tracking-wider text-sm bg-[#00634dcc] px-6 py-2 rounded-md hover:bg-[#00634dbb] transition-all duration-300">
        Reserve Your Spot
      </Link>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#032b22]/95 backdrop-blur-sm p-4 md:hidden">
          <nav className="flex flex-col space-y-4 items-center">
            {['hero', 'welcome', 'promos', 'footer'].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={600}
                offset={-60}
                className={navLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
            <Link to="/invest" className="font-bd-sans text-white uppercase tracking-wider text-sm bg-[#00634dcc] px-6 py-2 rounded-md hover:bg-[#00634dbb] transition-all duration-300 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Reserve Your Spot
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
