
import React from 'react';
import CapsuleGrid from './CapsuleGrid';
import { motion } from 'framer-motion';

const AboutUs2 = () => {
  return (
    <section 
      className="bg-[#eaf6ff] min-h-screen px-4 py-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="text-center mb-16">
        <h1 className="text-[2.5rem] font-bricolage font-medium">
          About <span className="text-[#6DD6DB]">Welcome Home</span>
        </h1>
      </div>
      <CapsuleGrid />
    </section>
  );
};

export default AboutUs2;
