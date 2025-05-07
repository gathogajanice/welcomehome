import React from 'react';
import { motion } from 'framer-motion';

const bgStyle = {
  backgroundColor: '#387f79',
  backgroundImage: 'url("/lovable-uploads/bg-img.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 1,
  minHeight: '100vh',
};

const FormPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center" style={bgStyle}>
      {/* Overlay for background text */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: 0.15, mixBlendMode: 'overlay' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-troye-sans text-[10vw] text-[#fffbf0] uppercase tracking-widest text-center select-none whitespace-nowrap opacity-30">
            WELCOME HOME
          </h1>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-lg mx-auto bg-[#387f79]/90 rounded-2xl shadow-2xl p-6 sm:p-10 flex flex-col items-center mt-10 mb-10">
        <h2 className="font-troye-sans text-3xl md:text-4xl text-[#fffbf0] mb-6 text-center">Get in Touch</h2>
        <form className="w-full flex flex-col gap-5">
          <div>
            <label className="block font-cormorant text-[#fffbf0] mb-1">Full Name (First & Last)</label>
            <input type="text" name="fullname" className="w-full rounded-lg border border-[#fffbf0] bg-transparent px-4 py-2 text-[#fffbf0] font-cormorant placeholder-[#fffbf0]/70 focus:outline-none focus:ring-2 focus:ring-[#fffbf0]" placeholder="Your full name" required />
          </div>
          <div>
            <label className="block font-cormorant text-[#fffbf0] mb-1">Email Address <span className="text-red-400">*</span></label>
            <input type="email" name="email" className="w-full rounded-lg border border-[#fffbf0] bg-transparent px-4 py-2 text-[#fffbf0] font-cormorant placeholder-[#fffbf0]/70 focus:outline-none focus:ring-2 focus:ring-[#fffbf0]" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="block font-cormorant text-[#fffbf0] mb-1">Phone Number (Optional)</label>
            <input type="tel" name="phone" className="w-full rounded-lg border border-[#fffbf0] bg-transparent px-4 py-2 text-[#fffbf0] font-cormorant placeholder-[#fffbf0]/70 focus:outline-none focus:ring-2 focus:ring-[#fffbf0]" placeholder="+1 234 567 8901" />
          </div>
          <div>
            <label className="block font-cormorant text-[#fffbf0] mb-1">Location (City, Country) <span className="text-red-400">*</span></label>
            <input type="text" name="location" className="w-full rounded-lg border border-[#fffbf0] bg-transparent px-4 py-2 text-[#fffbf0] font-cormorant placeholder-[#fffbf0]/70 focus:outline-none focus:ring-2 focus:ring-[#fffbf0]" placeholder="City, Country" required />
          </div>
          <div>
            <label className="block font-cormorant text-[#fffbf0] mb-1">Interest Level</label>
            <select name="interest" className="w-full rounded-lg border border-[#fffbf0] bg-transparent px-4 py-2 text-[#387f79] font-cormorant focus:outline-none focus:ring-2 focus:ring-[#fffbf0]">
              <option className="text-[#387f79]" value="ready">I'm ready to invest</option>
              <option className="text-[#387f79]" value="curious">I'm curious and want to learn more</option>
              <option className="text-[#387f79]" value="travel">I'm interested in the travel membership</option>
              <option className="text-[#387f79]" value="community">I'm here for community + updates</option>
            </select>
          </div>
          <div>
            <label className="block font-cormorant text-[#fffbf0] mb-1">Would you like early access to our first property offering in Senegal?</label>
            <div className="flex gap-6 mt-1">
              <label className="font-cormorant text-[#fffbf0] flex items-center gap-2">
                <input type="radio" name="earlyaccess" value="yes" className="accent-[#387f79]" /> Yes
              </label>
              <label className="font-cormorant text-[#fffbf0] flex items-center gap-2">
                <input type="radio" name="earlyaccess" value="no" className="accent-[#387f79]" /> No
              </label>
            </div>
          </div>
          <div>
            <label className="block font-cormorant text-[#fffbf0] mb-1">How did you hear about us?</label>
            <input type="text" name="referral" className="w-full rounded-lg border border-[#fffbf0] bg-transparent px-4 py-2 text-[#fffbf0] font-cormorant placeholder-[#fffbf0]/70 focus:outline-none focus:ring-2 focus:ring-[#fffbf0]" placeholder="Social media, friend, event, etc." />
          </div>
          <button type="submit" className="w-full mt-4 rounded-full bg-[#fffbf0] text-[#387f79] font-bd-sans text-lg py-2 shadow-md hover:bg-white/90 transition-all tracking-wider uppercase">Submit</button>
        </form>
        <p className="font-cormorant text-xs text-[#fffbf0] text-center mt-6 opacity-80">We respect your privacy and promise to never share your information. You'll receive updates, invites, and early access opportunities.</p>
      </div>
    </div>
  );
};

export default FormPage; 