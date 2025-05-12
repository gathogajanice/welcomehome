import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Mail, MapPin, Instagram, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div id="footer" className="bg-[#387f79] relative overflow-hidden flex flex-col justify-end">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("/images/bg-img.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          mixBlendMode: 'overlay'
        }}
      />

      <div className="px-4 pt-6 pb-2 relative z-10">
        <div className="container mx-auto border border-[#fffbf0] rounded-2xl p-4 sm:p-6 md:p-8 bg-[#387f79]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Brand */}
            <div className="flex justify-center sm:justify-start">
              <div className="backdrop-blur-lg bg-white/10 border border-[#fffbf0] shadow-2xl rounded-xl px-6 py-4 md:px-8 md:py-6 text-center min-h-[80px] max-w-[400px] w-full">
                <h2 className="font-troye-sans text-2xl md:text-3xl text-[#fffbf0] leading-tight whitespace-nowrap">
                  WELCOME<br />HOME
                </h2>
                <span className="font-cormorant text-[8px] sm:text-[10px] md:text-xs text-[#fffbf0] uppercase tracking-widest block mt-1">
                  WHERE OWNERSHIP MEETS ADVENTURE
                </span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bd-sans text-base text-[#fffbf0] mb-3">Quick Links</h3>
              <span className="block font-cormorant text-sm text-[#fffbf0] hover:text-[#fffbf0]/80 transition cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</span>
              <ScrollLink to="welcome" smooth duration={600} offset={-60} className="block font-cormorant text-sm text-[#fffbf0] hover:text-[#fffbf0]/80 transition cursor-pointer">About</ScrollLink>
              <Link to="/why-invest" className="block font-cormorant text-sm text-[#fffbf0] hover:text-[#fffbf0]/80 transition">Why Invest</Link>
              <ScrollLink to="promos" smooth duration={600} offset={-60} className="block font-cormorant text-sm text-[#fffbf0] hover:text-[#fffbf0]/80 transition cursor-pointer">Membership</ScrollLink>
              <Link to="/team" className="block font-cormorant text-sm text-[#fffbf0] hover:text-[#fffbf0]/80 transition">The Team</Link>
            </div>

            {/* Offices */}
            <div className="space-y-4">
              <div>
                <h4 className="font-bd-sans text-sm text-[#fffbf0] mb-1">New York Office</h4>
                <div className="flex items-start gap-2 text-sm text-[#fffbf0] font-cormorant">
                  <MapPin className="h-4 w-4 mt-1" />
                  <p>PO Box 386 NY, NY 10276</p>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <Phone className="h-4 w-4 text-[#fffbf0]" />
                  <a href="tel:+16315335450" className="text-[#fffbf0] hover:underline font-cormorant">
                    +1 631 533 5450
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bd-sans text-sm text-[#fffbf0] mb-1">Senegal Office</h4>
                <div className="flex items-start gap-2 text-sm text-[#fffbf0] font-cormorant">
                  <MapPin className="h-4 w-4 mt-1" />
                  <p>1453 Malicounda Peage Malicounda, Mbour Thies, Senegal</p>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <Phone className="h-4 w-4 text-[#fffbf0]" />
                  <a href="tel:+221784245655" className="text-[#fffbf0] hover:underline font-cormorant">
                    +(221) 78 424 56 55
                  </a>
                </div>
              </div>
            </div>

            {/* Socials + Email */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bd-sans text-base text-[#fffbf0] mb-2">Our Socials</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Instagram size={16} />, url: 'https://www.instagram.com/welcomehomeinternational/' },
                    { icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/company/welcome-home-international-realty-group/?viewAsMember=true' },
                    { icon: (
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.9A12 12 0 0 1 3 4.3a4.2 4.2 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1A4.2 4.2 0 0 0 7.8 17 8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.5A8.5 8.5 0 0 0 22 5.8z" />
                      </svg>
                    ), url: 'https://x.com/welcomehomeintl' },
                    { icon: <Mail className="w-4 h-4" />, url: 'mailto:info@welcomehomeintl.com' }
                  ].map(({ icon, url }, i) => (
                    <motion.a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-[#fffbf0] text-[#fffbf0] hover:scale-105 transition"
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-troye text-xs text-[#fffbf0] mb-2 tracking-wide">STAY CONNECTED</h4>
                <form className="flex flex-col gap-2 w-full max-w-xs">
                  <div className="flex items-center border border-[#fffbf0] rounded px-2 py-1">
                    <Mail className="w-4 h-4 mr-2 text-[#fffbf0]" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="bg-transparent outline-none border-none text-sm text-[#fffbf0] placeholder-[#fffbf0] font-cormorant flex-1"
                    />
                  </div>
                  <Link to="/form">
                    <button
                      type="button"
                      className="bg-[#fffbf0] text-[#387f79] text-xs font-bd-sans py-1.5 px-4 rounded-full shadow-md uppercase hover:bg-white"
                    >
                      SIGN UP
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Statement */}
          <div className="text-center mt-12 space-y-2">
            <h1 className="font-troye-sans text-4xl text-[#fffbf0]">WELCOME HOME</h1>
            <p className="font-cormorant italic text-xs text-[#fffbf0]">
              "Our community is building new pathways to wealth, travel, and cultural reconnection—one investment at a time."
            </p>
            <p className="font-cormorant text-[10px] text-[#fffbf0] opacity-80">
              Privacy | Terms & Conditions | © Welcome Home Intl 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
