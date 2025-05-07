import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div id="footer" className="bg-[#387f79] relative overflow-hidden flex flex-col min-h-0 justify-end">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("/lovable-uploads/bg-img.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          mixBlendMode: 'overlay'
        }}
      ></div>

      <div className="px-4 pt-2 pb-2 sm:pt-3 sm:pb-3 relative">
        <div className="container mx-auto border border-[#fffbf0] rounded-2xl p-4 sm:p-6 md:p-8 bg-[#387f79] relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="backdrop-blur-lg bg-white/10 border border-[#fffbf0] shadow-2xl rounded-xl px-6 py-4 md:px-8 md:py-6 inline-block min-h-[80px] w-full max-w-[420px] flex flex-col justify-center items-center text-center" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
                  <h2 className="font-troye-sans text-2xl md:text-3xl text-[#fffbf0] mb-2 leading-tight whitespace-nowrap">
                    WELCOME<br />
                    HOME
                  </h2>
                  <span className="font-cormorant text-[7px] sm:text-[9px] md:text-[11px] lg:text-xs text-[#fffbf0] tracking-wider uppercase leading-tight whitespace-nowrap">
                    WHERE OWNERSHIP MEETS ADVENTURE
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-left space-y-3 ml-8">
              <span className="font-bd-sans text-base text-[#fffbf0] mb-2 block">Quick Links</span>
              <Link to="/" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">Home</Link>
              <Link to="/about" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">About Us</Link>
              <Link to="/why-invest" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">Why Invest</Link>
              <Link to="/membership" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">Membership</Link>
              <Link to="/team" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">The Team</Link>
            </div>

            {/* Office Locations */}
            <div className="text-left space-y-3 mt-0">
              <div className="space-y-2">
                <h3 className="font-bd-sans text-sm text-[#fffbf0]">New York Office</h3>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#fffbf0]" />
                    <span className="font-cormorant text-sm text-[#fffbf0]">PO Box 386 NY, NY 10276</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#fffbf0]" />
                    <a
                      href="tel:+16315335450"
                      className="font-cormorant text-sm text-[#fffbf0] hover:underline cursor-pointer transition-all"
                      title="Copy number or click to call"
                    >
                      +1 631 533 5450
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bd-sans text-sm text-[#fffbf0]">Senegal Office</h3>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#fffbf0]" />
                    <span className="font-cormorant text-sm text-[#fffbf0]">1453 Malicounda Peage Malicounda<br/>Mbour Thies, Senegal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#fffbf0]" />
                    <a
                      href="tel:+221784245655"
                      className="font-cormorant text-sm text-[#fffbf0] hover:underline cursor-pointer transition-all"
                      title="Copy number or click to call"
                    >
                      +(221) 78 424 56 55
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-left space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col items-start mt-2">
                  <span className="font-bd-sans text-base text-[#fffbf0] mb-2">Our Socials</span>
                  <div className="flex space-x-4">
                    {[
                      { platform: 'twitter', url: 'https://x.com/welcomehomeintl', icon: (
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#fffbf0] z-10" fill="currentColor">
                          <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.9A12 12 0 0 1 3 4.3a4.2 4.2 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1A4.2 4.2 0 0 0 7.8 17 8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.5A8.5 8.5 0 0 0 22 5.8z"/>
                        </svg>
                      )},
                      { platform: 'linkedin', url: 'https://www.linkedin.com/company/welcome-home-international-realty-group/?viewAsMember=true', icon: <Linkedin size={16} className="social-icon text-[#fffbf0]" /> },
                      { platform: 'instagram', url: 'https://www.instagram.com/welcomehomeinternational/', icon: <Instagram size={16} className="social-icon text-[#fffbf0]" /> },
                      { platform: 'email', url: 'mailto:info@welcomehomeintl.com', icon: (
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#fffbf0] z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      )}
                    ].map(({ platform, url, icon }) => (
                      <motion.a 
                        key={platform} 
                        href={url}
                        target={platform === 'email' ? undefined : "_blank"}
                        rel={platform === 'email' ? undefined : "noopener noreferrer"}
                        whileHover={{ scale: 1.15, rotate: -6 }}
                        whileTap={{ scale: 0.95 }}
                        className="social-icon-container w-9 h-9 rounded-full bg-white/10 border border-[#fffbf0] flex items-center justify-center relative overflow-hidden backdrop-blur-lg shadow-xl transition-all duration-300"
                        style={{boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)'}}
                      >
                        {icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
                {/* Newsletter Signup */}
                <div className="mt-6 flex flex-col items-start">
                  <span className="font-troye text-xs md:text-sm text-[#fffbf0] mb-2 tracking-wide">STAY CONNECTED</span>
                  <form className="w-full max-w-xs flex flex-col gap-2">
                    <div className="flex items-center border border-[#fffbf0] rounded-lg px-2 py-1 bg-transparent w-full">
                      <Mail className="h-3 w-3 text-[#fffbf0] mr-2" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent outline-none border-none text-[#fffbf0] placeholder-[#fffbf0] font-cormorant flex-1 text-xs"
                        required
                      />
                    </div>
                    <Link to="/form">
                      <button
                        type="button"
                        className="w-full rounded-full bg-[#fffbf0] text-[#387f79] font-bd-sans text-xs py-1 mt-1 shadow-md hover:bg-white/90 transition-all tracking-wider uppercase"
                      >
                        SIGN UP
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Banner */}
          <div className="mt-12">
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <h1 className="font-troye-sans text-3xl md:text-6xl lg:text-7xl text-[#fffbf0] text-center leading-none mb-2">WELCOME HOME</h1>
            </div>
            <p className="font-cormorant italic text-[#fffbf0] text-[10px] md:text-xs text-center max-w-2xl mx-auto mt-3">
              "OUR COMMUNITY IS BUILDING NEW PATHWAYS TO WEALTH, TRAVEL, AND CULTURAL RECONNECTION—ONE INVESTMENT AT A TIME"
            </p>
            <p className="font-cormorant text-[#fffbf0] text-[8px] md:text-[10px] text-center max-w-2xl mx-auto mt-2 opacity-80">
              Privacy  | Terms & Conditions|  @ All Rights Reserved, Welcome Home Intl 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
