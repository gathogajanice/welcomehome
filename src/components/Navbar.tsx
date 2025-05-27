import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import IframeModal from './IframeModal';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeUrl, setIframeUrl] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // Already on homepage, scroll to hero
      const el = document.getElementById('hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage, wait a moment, scroll to hero
      navigate('/');
      setTimeout(() => {
        const checkHero = () => {
          const el = document.getElementById('hero');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else setTimeout(checkHero, 100);
        };
        checkHero();
      }, 300);
    }
  };

  const handleIframeOpen = (url: string) => {
    setIframeUrl(url);
    setShowIframe(true);
  };

  const navLinkClasses = "font-bd-sans text-white uppercase tracking-wider text-sm cursor-pointer";

  return (
    <>
      <header
        className={cn(
          "w-full h-16 px-4 sm:px-12 flex items-center justify-between fixed top-0 left-0 z-[100]",
          "bg-transparent",
          "transition-all duration-600 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[10px]"
        )}
      >
        <nav className="hidden md:flex items-center space-x-12">
          <span onClick={handleHomeClick} className={navLinkClasses}>Home</span>
          {location.pathname === '/' && (
            <>
              <ScrollLink to="welcome" smooth duration={600} offset={-60} className={navLinkClasses}>About</ScrollLink>
              <ScrollLink to="promos" smooth duration={600} offset={-60} className={navLinkClasses}>Membership</ScrollLink>
            </>
          )}
          <ScrollLink to="footer" smooth duration={600} offset={-60} className={navLinkClasses}>Contact</ScrollLink>
        </nav>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/form" className="hidden md:block font-bd-sans text-white uppercase tracking-wider text-sm bg-[#00634dcc] px-6 py-2 rounded-md hover:bg-[#00634dbb] transition-all duration-300">
          Reserve Your Spot
        </Link>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#032b22]/95 backdrop-blur-sm p-4 md:hidden">
            <nav className="flex flex-col space-y-4 items-center">
              <span onClick={() => { handleHomeClick(); setIsMobileMenuOpen(false); }} className={navLinkClasses}>Home</span>
              {location.pathname === '/' && (
                <>
                  <ScrollLink to="welcome" smooth duration={600} offset={-60} className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>About</ScrollLink>
                  <ScrollLink to="promos" smooth duration={600} offset={-60} className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Membership</ScrollLink>
                </>
              )}
              <ScrollLink to="footer" smooth duration={600} offset={-60} className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Contact</ScrollLink>
              <Link to="/form" className="font-bd-sans text-white uppercase tracking-wider text-sm bg-[#00634dcc] px-6 py-2 rounded-md hover:bg-[#00634dbb] transition-all duration-300 text-center">
                Reserve Your Spot
              </Link>
            </nav>
          </div>
        )}
      </header>

      <IframeModal
        isOpen={showIframe}
        onClose={() => setShowIframe(false)}
        url={iframeUrl}
        title="Modal Content"
      />
    </>
  );
};

export default Navbar;
