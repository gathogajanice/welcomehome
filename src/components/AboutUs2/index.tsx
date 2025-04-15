import React from 'react';
import CapsuleGrid from './CapsuleGrid';
const AboutUs2 = () => {
  return <section className="bg-[#f8f6f2] min-h-screen px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-[2.5rem] font-bold font-bricolage">
          <span className="text-[#1f1f2e] relative inline-block">
            About
            <svg className="absolute left-0 right-0 -bottom-1 w-full" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,5 C20,2 30,8 50,5 C70,2 80,8 100,5" fill="none" stroke="#6DD6DB" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
            </svg>
          </span>
          <span className="text-[#6DD6DB]"> Us</span>
        </h1>
        <p className="font-apercu text-[#13517b] mt-4 text-center text-sm"></p>
      </div>
      <CapsuleGrid />
    </section>;
};
export default AboutUs2;