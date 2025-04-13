
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  
  // Navigation links array for easy management
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    // Add more links as needed
  ];

  // Use a different className for mobile menu links
  const linkClassName = isMobile ? 'mobile-nav-link' : 'nav-link';

  return (
    <>
      {/* Main navbar */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md
          ${isScrolled ? 'bg-white/90 shadow-sm' : 'bg-transparent'}
        `}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-black">
                LOGO
              </Link>
            </div>
            
            {/* Desktop navigation links */}
            {!isMobile && (
              <nav className="flex gap-8 items-center">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    to={link.path} 
                    className={`${linkClassName} text-sm font-medium text-black hover:text-gray-600 transition-colors`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            )}

            {/* CTA Button (desktop) or Menu Button (mobile) */}
            {isMobile ? (
              <button 
                className="hamburger-icon p-2" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div 
                  className={`hamburger-line-1 w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}
                ></div>
                <div 
                  className={`hamburger-line-2 w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45' : ''}`}
                ></div>
              </button>
            ) : (
              <Link 
                to="/" 
                className="bg-cream text-black py-2.5 px-6 font-medium rounded-sm hover:bg-cream/90 transition-colors text-sm"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div 
          className={`menu-overlay fixed inset-0 bg-black bg-opacity-95 z-40 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMenu}
        >
          <div 
            className={`flex flex-col items-center justify-center h-full transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : 'translate-y-20'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.path} 
                  className={`${linkClassName} text-xl font-medium text-white hover:text-gray-300 transition-colors`}
                  onClick={toggleMenu}
                >
                  <div className="overflow-hidden">
                    {link.name}
                  </div>
                </Link>
              ))}
              
              <div className="mt-8">
                <Link
                  to="/"
                  className="bg-white text-black py-3 px-8 font-medium rounded-sm"
                  onClick={toggleMenu}
                >
                  <div className="overflow-hidden">
                    Get Started
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
