
import React from 'react';
import CapsuleGrid from './CapsuleGrid';
import { motion } from 'framer-motion';

const AboutUs2 = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#eaf6ff] min-h-screen px-4 py-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-[2.5rem] font-bold font-clash">
          <span className="text-[#1f1f2e] relative inline-block text-motion">About</span>
          <span className="text-[#6DD6DB]"> Us</span>
        </h1>
        <p className="font-apercu text-[#13517b] mt-4 text-center text-sm"></p>
      </motion.div>
      <CapsuleGrid />
    </motion.section>
  );
};

export default AboutUs2;
