import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const isMobile = useMobile();

  // Handle scroll events to update navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/#about-us' },
    { label: 'About Us 2', path: '/about-us-2' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
        isTransparent ? 'bg-transparent' : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-black">
          Your Logo
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link text-black hover:text-gray-800 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="hamburger-icon relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group"
          >
            <span className="hamburger-line-1 block h-0.5 w-6 bg-black rounded-full transition-all duration-300"></span>
            <span className="hamburger-line-2 block h-0.5 w-6 bg-black rounded-full transition-all duration-300"></span>
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          className={`menu-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ display: isMenuOpen ? 'block' : 'none' }}
        >
          <div className="absolute top-0 left-0 w-3/4 h-full bg-gray-800 text-white p-6 flex flex-col space-y-4 overflow-hidden">
            {/* Close Button */}
            <button onClick={closeMenu} className="absolute top-4 right-4">
              <X className="h-6 w-6" />
            </button>

            {/* Mobile Navigation Links */}
            <nav className="mt-12 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="mobile-nav-link text-lg hover:text-gray-300 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
