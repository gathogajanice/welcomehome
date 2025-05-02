import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <div className="bg-white px-4 py-8 sm:py-16 relative overflow-hidden">
        {/* Green background with image covering bottom half */}
        <div className="absolute left-0 bottom-0 w-full" style={{height: '50%', zIndex: 0}}>
          <div className="w-full h-full bg-[#387f79]"></div>
        </div>
        <div className="container mx-auto border border-[#387f79] rounded-2xl p-4 sm:p-6 md:p-8 bg-white relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="text-left">
                <div className="backdrop-blur-sm bg-white/30 border border-[#387f79] shadow-lg rounded-xl p-4 inline-block">
                  <h2 className="font-troye-sans text-lg text-[#387f79]">
                    Welcome Home<br />
                    <span className="font-troye-sans text-2xl text-[#387f79]">Africa's Real Estate Revolution</span>
                  </h2>
                </div>
                <div className="flex flex-col items-start mt-4">
                  <h2 className="font-cormorant text-lg text-[#032b22]">
                    Own a piece of the future.
                  </h2>
                  <p className="text-xs font-cormorant uppercase text-[#387f79] mt-2">Empowering the diaspora, building legacy.</p>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-troye-sans text-lg text-[#387f79] text-left">Contact Us</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#387f79]" />
                    <span className="font-cormorant text-sm text-[#032b22]">info@welcomehomeintl.com</span>
                  </div>
                </div>
              </div>
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform, index) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="social-icon-container w-9 h-9 rounded-full bg-white flex items-center justify-center border border-[#387f79] relative overflow-hidden transition-all duration-300"
                  >
                    {platform === 'twitter' ? (
                      <svg 
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-[#387f79] z-10"
                        fill="currentColor"
                      >
                        <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.9A12 12 0 0 1 3 4.3a4.2 4.2 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1A4.2 4.2 0 0 0 7.8 17 8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.5A8.5 8.5 0 0 0 22 5.8z"/>
                      </svg>
                    ) : platform === 'facebook' ? (
                      <Facebook size={18} className="social-icon text-[#387f79]" />
                    ) : platform === 'linkedin' ? (
                      <Linkedin size={18} className="social-icon text-[#387f79]" />
                    ) : (
                      <Instagram size={18} className="social-icon text-[#387f79]" />
                    )}
                    <div className="absolute inset-0 bg-[#387f79] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
            {/* Navigation Links */}
            <div className="text-left space-y-3">
              <h3 className="font-troye-sans text-lg text-[#387f79] mb-4">Quick Links</h3>
              <Link to="/" className="block text-[#032b22] hover:text-[#387f79] transition-colors font-cormorant text-sm">Home</Link>
              <Link to="/about" className="block text-[#032b22] hover:text-[#387f79] transition-colors font-cormorant text-sm">About Us</Link>
              <Link to="/why-invest" className="block text-[#032b22] hover:text-[#387f79] transition-colors font-cormorant text-sm">Why Invest</Link>
              <Link to="/communities" className="block text-[#032b22] hover:text-[#387f79] transition-colors font-cormorant text-sm">Communities</Link>
              <Link to="/team" className="block text-[#032b22] hover:text-[#387f79] transition-colors font-cormorant text-sm">The Team</Link>
            </div>
            {/* Office Locations */}
            <div className="text-left space-y-6">
              <div className="space-y-2">
                <h3 className="font-troye-sans text-lg text-[#387f79]">New York Office</h3>
                <div className="flex items-start gap-2 mt-2">
                  <MapPin className="h-4 w-4 text-[#387f79] mt-1" />
                  <p className="font-cormorant text-sm text-[#032b22]">
                    123 Business Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-troye-sans text-lg text-[#387f79]">Senegal Office</h3>
                <div className="flex items-start gap-2 mt-2">
                  <MapPin className="h-4 w-4 text-[#387f79] mt-1" />
                  <p className="font-cormorant text-sm text-[#032b22]">
                    456 Main Street<br />
                    Dakar, Senegal
                  </p>
                </div>
              </div>
            </div>
            {/* Subscribe Section */}
            <div className="text-left space-y-6">
              <div className="space-y-4">
                <h3 className="font-troye-sans text-lg text-[#387f79]">Subscribe Today</h3>
                <div className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#387f79]" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 pl-10 border border-[#387f79] rounded-lg font-cormorant font-normal text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#387f79] focus:border-transparent text-[#032b22] placeholder-[#387f79]"
                    />
                  </div>
                  <Button 
                    className="w-full rounded-full bg-[#387f79] hover:bg-[#387f79]/90 border border-[#387f79] text-white font-bd-sans text-sm px-8 py-2 transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome Home Banner as the very last section */}
      <div className="bg-[#387f79] relative w-full flex flex-col items-center justify-center" style={{paddingTop: '1.5rem', paddingBottom: '3rem', marginBottom: 0, overflow: 'hidden'}}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.13,
            mixBlendMode: 'overlay',
            zIndex: 0
          }}
        ></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="font-troye-sans text-4xl md:text-7xl lg:text-8xl text-[#cbe9e9] text-center leading-none mb-2">WELCOME HOME</h1>
          <p className="font-cormorant italic text-white text-xs md:text-sm text-center max-w-2xl mx-auto">
            "OUR COMMUNITY IS BUILDING NEW PATHWAYS TO WEALTH, TRAVEL, AND CULTURAL RECONNECTION—ONE INVESTMENT AT A TIME"
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
