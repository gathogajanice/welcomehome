
import React from 'react';
import CapsuleGrid from './CapsuleGrid';

const AboutUs2 = () => {
  return (
    <section className="bg-[#fffaf3] min-h-screen px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-[2.5rem] font-bold font-bricolage">
          <span className="text-[#1f1f2e] relative inline-block">
            About
            <svg 
              className="absolute left-0 right-0 -bottom-1 w-full" 
              height="20" 
              viewBox="0 0 100 20"
            >
              <path
                d="M3,17 C15,3 30,3 40,17 C50,3 65,3 77,17 C85,3 95,3 97,17"
                fill="none"
                stroke="#6DD6DB"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>
          </span>
          <span className="text-[#6DD6DB]"> Us</span>
        </h1>
      </div>
      <CapsuleGrid />
    </section>
  );
};

export default AboutUs2;
