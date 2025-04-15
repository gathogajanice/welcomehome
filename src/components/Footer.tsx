import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-[#f8f6f2] px-4 py-16 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="text-left space-y-2">
            <h2 className="font-bricolage text-base">
              The Future of<br />
              <span className="text-[#6dd6db]">Real Estate</span><br />
              Investment <span className="text-xs align-top">®</span>
            </h2>
            <p className="text-sm font-apercu uppercase text-gray-600">Own a piece of the world</p>
          </div>
          
          <div className="space-y-4 pt-4">
            <h3 className="text-[#ea384c] font-clash text-xl text-left">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+16315335450" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                <Phone size={16} />
                <span className="font-apercu">+1 631 533 5450</span>
              </a>
              <a href="mailto:info@welcomehomeintl.com" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                <Mail size={16} />
                <span className="font-apercu">info@welcomehomeintl.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-left space-y-4">
          <Link to="/" className="block text-gray-600 hover:text-black transition-colors font-apercu">Home</Link>
          <Link to="/about" className="block text-gray-600 hover:text-black transition-colors font-apercu">About Us</Link>
          <Link to="/why-invest" className="block text-gray-600 hover:text-black transition-colors font-apercu">Why Invest</Link>
          <Link to="/communities" className="block text-gray-600 hover:text-black transition-colors font-apercu">Communities</Link>
          <Link to="/team" className="block text-gray-600 hover:text-black transition-colors font-apercu">The Team</Link>
        </div>

        {/* Office Locations */}
        <div className="text-left space-y-8">
          <div className="space-y-2">
            <h3 className="font-clash text-lg">New York Office</h3>
            <p className="font-apercu text-gray-600">
              PO Box 386<br />
              NY, NY 10276
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-clash text-lg">Senegal Office</h3>
            <p className="font-apercu text-gray-600">
              1453 Malicounda<br />
              Peage Malicounda<br />
              Mbour Thies,<br />
              Senegal.
            </p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="text-left space-y-6 ">
          <div className="space-y-4">
            <h3 className="text-[#ea384c] font-clash text-xl">Subscribe Today</h3>
            <div className="relative">
              <input type="email" placeholder="Enter Your Email" className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg font-apercu bg-white" />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          <Button className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90 text-white font-bricolage">
            START INVESTING TODAY
          </Button>
        </div>

        {/* Scroll to Top Button */}
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 p-2 bg-[#ea384c] text-white rounded-full shadow-lg hover:bg-[#ea384c]/90 transition-colors" aria-label="Scroll to top">
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>;
};
export default Footer;