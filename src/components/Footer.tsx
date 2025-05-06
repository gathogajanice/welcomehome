import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="bg-[#387f79] relative overflow-hidden flex flex-col min-h-0 justify-end">
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
            <div className="text-left space-y-3">
              <Link to="/" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">Home</Link>
              <Link to="/about" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">About Us</Link>
              <Link to="/why-invest" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">Why Invest</Link>
              <Link to="/membership" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">Membership</Link>
              <Link to="/team" className="block text-[#fffbf0] hover:text-[#fffbf0]/80 transition-colors font-cormorant text-sm">The Team</Link>
            </div>
            {/* Office Locations */}
            <div className="text-left space-y-6">
              <div className="space-y-2">
                <h3 className="font-bd-sans text-sm text-[#fffbf0]">New York Office</h3>
                <div className="flex items-start gap-2 mt-2">
                  <MapPin className="h-4 w-4 text-[#fffbf0] mt-1" />
                  <p className="font-cormorant text-sm text-[#fffbf0]">
                    123 Business Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bd-sans text-sm text-[#fffbf0]">Senegal Office</h3>
                <div className="flex items-start gap-2 mt-2">
                  <MapPin className="h-4 w-4 text-[#fffbf0] mt-1" />
                  <p className="font-cormorant text-sm text-[#fffbf0]">
                    456 Main Street<br />
                    Dakar, Senegal
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div className="text-left space-y-6">
              <div className="space-y-4">
                <h3 className="font-bd-sans text-lg text-[#fffbf0]">Contact Us</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#fffbf0]" />
                    <span className="font-cormorant text-sm text-[#fffbf0]">info@welcomehomeintl.com</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform, index) => (
                    <motion.a 
                      key={platform} 
                      href="#" 
                      whileHover={{ scale: 1.15, rotate: -6 + index * 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="social-icon-container w-9 h-9 rounded-full bg-white/10 border border-[#fffbf0] flex items-center justify-center relative overflow-hidden backdrop-blur-lg shadow-xl transition-all duration-300"
                      style={{boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)'}}
                    >
                      {platform === 'twitter' ? (
                        <svg 
                          viewBox="0 0 24 24"
                          className="w-4 h-4 text-[#fffbf0] z-10"
                          fill="currentColor"
                        >
                          <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.9A12 12 0 0 1 3 4.3a4.2 4.2 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1A4.2 4.2 0 0 0 7.8 17 8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.5A8.5 8.5 0 0 0 22 5.8z"/>
                        </svg>
                      ) : platform === 'facebook' ? (
                        <Facebook size={16} className="social-icon text-[#fffbf0]" />
                      ) : platform === 'linkedin' ? (
                        <Linkedin size={16} className="social-icon text-[#fffbf0]" />
                      ) : (
                        <Instagram size={16} className="social-icon text-[#fffbf0]" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Welcome Home Banner inside the container */}
          <div className="mt-12">
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <h1 className="font-troye-sans text-3xl md:text-6xl lg:text-7xl text-[#fffbf0] text-center leading-none mb-2">WELCOME HOME</h1>
              <p className="font-cormorant italic text-[#fffbf0] text-xs md:text-sm text-center max-w-2xl mx-auto">
                "OUR COMMUNITY IS BUILDING NEW PATHWAYS TO WEALTH, TRAVEL, AND CULTURAL RECONNECTION—ONE INVESTMENT AT A TIME"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
