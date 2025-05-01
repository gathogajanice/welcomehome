import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="bg-[#eaf6ff] px-4 py-8 sm:py-16 relative" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundBlendMode: "overlay",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="container mx-auto border border-[#387f79] rounded-2xl p-4 sm:p-6 md:p-8 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-left">
              <div className="backdrop-blur-sm bg-white/30 border border-[#387f79] shadow-lg rounded-xl p-4 inline-block">
                <h2 className="font-cormorant font-normal text-lg font-bold">
                  The Future of<br />
                  <span className="text-[#387f79] text-2xl font-medium">Real Estate</span><br />
                  Investment <span className="text-xs align-top">®</span>
                </h2>
              </div>
              <div className="flex flex-col items-start mt-4">
                <h2 className="font-cormorant font-normal text-lg">
                  Welcome Home
                </h2>
                <p className="text-xs font-cormorant font-normal uppercase text-gray-600 mt-2">Own a piece of the world</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-black font-cormorant font-normal text-lg text-left">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span className="font-cormorant font-normal text-sm">info@welcomehomeintl.com</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform, index) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="social-icon-container w-9 h-9 rounded-full bg-white flex items-center justify-center 
                           border border-[#387f79] relative overflow-hidden transition-all duration-300"
                >
                  {platform === 'twitter' ? (
                    <svg 
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-gray-600 z-10"
                      fill="currentColor"
                    >
                      <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.9A12 12 0 0 1 3 4.3a4.2 4.2 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1A4.2 4.2 0 0 0 7.8 17 8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.5A8.5 8.5 0 0 0 22 5.8z"/>
                    </svg>
                  ) : platform === 'facebook' ? (
                    <Facebook size={18} className="social-icon text-gray-600" />
                  ) : platform === 'linkedin' ? (
                    <Linkedin size={18} className="social-icon text-gray-600" />
                  ) : (
                    <Instagram size={18} className="social-icon text-gray-600" />
                  )}
                  <div className="absolute inset-0 bg-[#387f79] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-left space-y-3">
            <h3 className="font-cormorant font-normal text-lg font-bold text-black mb-4">Quick Links</h3>
            <Link to="/" className="block text-gray-600 hover:text-black transition-colors font-cormorant font-normal text-sm">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-black transition-colors font-cormorant font-normal text-sm">About Us</Link>
            <Link to="/why-invest" className="block text-gray-600 hover:text-black transition-colors font-cormorant font-normal text-sm">Why Invest</Link>
            <Link to="/communities" className="block text-gray-600 hover:text-black transition-colors font-cormorant font-normal text-sm">Communities</Link>
            <Link to="/team" className="block text-gray-600 hover:text-black transition-colors font-cormorant font-normal text-sm">The Team</Link>
          </div>

          {/* Office Locations */}
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <h3 className="font-cormorant font-normal text-lg font-bold text-black">New York Office</h3>
              <div className="flex items-start gap-2 mt-2">
                <MapPin className="h-4 w-4 text-gray-600 mt-1" />
                <p className="font-cormorant font-normal text-sm text-gray-600">
                  123 Business Avenue<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-cormorant font-normal text-lg font-bold text-black">Senegal Office</h3>
              <div className="flex items-start gap-2 mt-2">
                <MapPin className="h-4 w-4 text-gray-600 mt-1" />
                <p className="font-cormorant font-normal text-sm text-gray-600">
                  456 Main Street<br />
                  Dakar, Senegal
                </p>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-black font-cormorant font-normal text-lg font-bold">Subscribe Today</h3>
              <div className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg font-cormorant font-normal text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#387f79] focus:border-transparent"
                  />
                </div>
                <Button 
                  className="w-full rounded-full bg-white/10 hover:bg-white/20 border border-[#387f79] text-[#387f79] font-cormorant font-normal text-sm px-8 py-2 transition-all hover:scale-105 hover:shadow-lg"
                >
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
