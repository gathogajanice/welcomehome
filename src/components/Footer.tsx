import React from 'react';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-[#387f79] px-4 py-8 sm:py-16 relative overflow-hidden" style={{
      backgroundImage: "url('/lovable-uploads/ff9648d3-36eb-4d7a-ba6e-b8fe0ffb8d0f.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'overlay',
    }}>
      {/* Subtle overlay for extra subtlety */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "#387f79",
        opacity: 0.85,
        zIndex: 0
      }} />
      {/* Social Icons Top Right */}
      <div className="absolute top-8 right-8 flex space-x-4 z-10">
        {['facebook', 'twitter', 'instagram'].map((platform, index) => (
          <a
            key={platform}
            href="#"
            className="group social-icon-container w-10 h-10 rounded-full bg-[#387f79] flex items-center justify-center border border-white/30 relative overflow-hidden transition-all duration-300"
          >
            {/* Liquid motion effect */}
            <span className="absolute inset-0 bg-white scale-0 opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-transform transition-opacity duration-300 z-0" />
            {platform === 'twitter' ? (
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 z-10 transition-all duration-300 group-hover:text-[#387f79] text-white"
                fill="currentColor"
              >
                <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.9A12 12 0 0 1 3 4.3a4.2 4.2 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1A4.2 4.2 0 0 0 7.8 17 8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.5A8.5 8.5 0 0 0 22 5.8z" />
              </svg>
            ) : platform === 'facebook' ? (
              <Facebook size={20} className="social-icon z-10 transition-all duration-300 group-hover:text-[#387f79] text-white" />
            ) : (
              <Instagram size={20} className="social-icon z-10 transition-all duration-300 group-hover:text-[#387f79] text-white" />
            )}
          </a>
        ))}
      </div>
      {/* Main Content: Address and Office Hours */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-2">
        <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-8 md:gap-20 w-full max-w-4xl mx-auto">
          {/* Address */}
          <div className="text-center md:text-left">
            <h3 className="font-cormorant font-normal text-xl font-bold text-white mb-2">New York Office</h3>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="h-5 w-5 text-white" />
                <span className="font-cormorant font-normal text-base text-white/80">123 Anywhere St.</span>
              </div>
              <span className="font-cormorant font-normal text-base text-white/80">Any City ST 12345</span>
              <span className="font-cormorant font-normal text-base text-white/80">123-456-7890</span>
              <span className="font-cormorant font-normal text-base text-white/80">hello@reallygreatsite.com</span>
            </div>
          </div>
          {/* Office Hours */}
          <div className="text-center md:text-left">
            <h3 className="font-cormorant font-normal text-xl font-bold text-white mb-2">OFFICE HOURS</h3>
            <div className="font-cormorant font-normal text-base text-white/80">
              <div className="mb-1">
                <span className="block font-bold">MONDAY TO FRIDAY</span>
                <span>9:00 am to 6:00 pm</span>
              </div>
              <div>
                <span className="block font-bold">SATURDAY</span>
                <span>9:00 am to 12:00 noon</span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Title and Quote */}
        <div className="w-full flex flex-col items-center justify-center mt-20">
          <div className="text-center">
            <span className="block text-[#d6f3f0] font-troye text-5xl md:text-7xl tracking-widest uppercase mb-2">WELCOME HOME</span>
            <p className="text-center text-white/80 italic uppercase font-cormorant text-sm md:text-base max-w-4xl mt-2">
              “OUR COMMUNITY IS BUILDING NEW PATHWAYS TO WEALTH, TRAVEL, AND CULTURAL RECONNECTION—ONE INVESTMENT AT A TIME”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
