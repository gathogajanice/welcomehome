
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/b8954deb-dd19-4087-8329-72a90b45e6bc.png';
  }, []);

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#eaf6ff] px-4 py-16 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto border border-[#1E5987] rounded-2xl p-4 sm:p-6 md:p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="backdrop-blur-sm bg-white/30 border border-[#1E5987] shadow-lg rounded-xl p-4 inline-block"
              >
                <h2 className="font-bricolage text-lg font-bold">
                  The Future of<br />
                  <span className="text-[#6dd6db] text-2xl font-medium">Real Estate</span><br />
                  Investment <span className="text-xs align-top">®</span>
                </h2>
              </motion.div>
              <p className="text-xs font-bricolage uppercase text-gray-600 mt-2">Own a piece of the world</p>
            </div>
            
            <div className="space-y-3 pt-4">
              <h3 className="text-black font-bricolage text-lg text-left font-bold">Contact Us</h3>
              <div className="space-y-2">
                <a href="tel:+16315335450" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                  <Phone size={16} className="text-[#6dd6db]" />
                  <span className="font-bricolage text-sm">+1 631 533 5450</span>
                </a>
                <a href="mailto:info@welcomehomeintl.com" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                  <Mail size={16} className="text-[#6dd6db]" />
                  <span className="font-bricolage text-sm">info@welcomehomeintl.com</span>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-[#6dd6db] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#6dd6db] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#6dd6db] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#6dd6db] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-left space-y-3">
            <Link to="/" className="block text-gray-600 hover:text-black transition-colors font-bricolage text-sm">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-black transition-colors font-bricolage text-sm">About Us</Link>
            <Link to="/why-invest" className="block text-gray-600 hover:text-black transition-colors font-bricolage text-sm">Why Invest</Link>
            <Link to="/communities" className="block text-gray-600 hover:text-black transition-colors font-bricolage text-sm">Communities</Link>
            <Link to="/team" className="block text-gray-600 hover:text-black transition-colors font-bricolage text-sm">The Team</Link>
          </div>

          {/* Office Locations */}
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <h3 className="font-bricolage text-base font-bold text-black">New York Office</h3>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#6dd6db] mt-1 flex-shrink-0" />
                <p className="font-bricolage text-sm text-gray-600">
                  PO Box 386<br />
                  NY, NY 10276
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bricolage text-base font-bold text-black">Senegal Office</h3>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#6dd6db] mt-1 flex-shrink-0" />
                <p className="font-bricolage text-sm text-gray-600">
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
              <h3 className="text-black font-bricolage text-lg font-bold">Subscribe Today</h3>
              <div className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg font-bricolage text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6dd6db] focus:border-transparent" 
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                </div>
                <Button 
                  className="w-full bg-[#1E5987] text-white font-bricolage text-sm px-8 py-2 rounded-full 
                    border-2 border-dashed border-white/60 transition-all hover:bg-[#1E5987]"
                  style={{
                    backgroundImage: `url('/lovable-uploads/b8954deb-dd19-4087-8329-72a90b45e6bc.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  JOIN US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
