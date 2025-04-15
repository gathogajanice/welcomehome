
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white px-4 py-16 mt-20 relative">
      <div className="container mx-auto border border-gray-200 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-left space-y-2">
              <h2 className="font-bricolage text-base">
                The Future of<br />
                <span className="text-[#6dd6db]">Real Estate</span><br />
                Investment <span className="text-xs align-top">®</span>
              </h2>
              <p className="text-sm font-bricolage uppercase text-gray-600">Own a piece of the world</p>
            </div>
            
            <div className="space-y-4 pt-4">
              <h3 className="text-[#ea384c] font-bricolage text-xl text-left">Contact Us</h3>
              <div className="space-y-2">
                <a href="tel:+16315335450" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                  <Phone size={16} className="text-[#6dd6db]" />
                  <span className="font-bricolage">+1 631 533 5450</span>
                </a>
                <a href="mailto:info@welcomehomeintl.com" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                  <Mail size={16} className="text-[#6dd6db]" />
                  <span className="font-bricolage">info@welcomehomeintl.com</span>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-[#6dd6db] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#6dd6db] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#6dd6db] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#6dd6db] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-left space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-black transition-colors font-bricolage">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-black transition-colors font-bricolage">About Us</Link>
            <Link to="/why-invest" className="block text-gray-600 hover:text-black transition-colors font-bricolage">Why Invest</Link>
            <Link to="/communities" className="block text-gray-600 hover:text-black transition-colors font-bricolage">Communities</Link>
            <Link to="/team" className="block text-gray-600 hover:text-black transition-colors font-bricolage">The Team</Link>
          </div>

          {/* Office Locations */}
          <div className="text-left space-y-8">
            <div className="space-y-2">
              <h3 className="font-bricolage text-lg">New York Office</h3>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#6dd6db] mt-1 flex-shrink-0" />
                <p className="font-bricolage text-gray-600">
                  PO Box 386<br />
                  NY, NY 10276
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bricolage text-lg">Senegal Office</h3>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#6dd6db] mt-1 flex-shrink-0" />
                <p className="font-bricolage text-gray-600">
                  1453 Malicounda<br />
                  Peage Malicounda<br />
                  Mbour Thies,<br />
                  Senegal.
                </p>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-[#ea384c] font-bricolage text-xl">Subscribe Today</h3>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg font-bricolage bg-white focus:outline-none focus:ring-2 focus:ring-[#6dd6db] focus:border-transparent" 
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            <Button className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90 text-white font-bricolage">
              START INVESTING TODAY
            </Button>
          </div>
        </div>

        {/* Scroll to Top Button - Now inside the footer container */}
        <button 
          onClick={scrollToTop} 
          className="absolute bottom-8 right-8 p-3 bg-[#6dd6db] text-white rounded-full shadow-lg hover:bg-[#6dd6db]/90 transition-colors" 
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
