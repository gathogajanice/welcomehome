
import React from 'react';
import CapsuleGrid from './CapsuleGrid';

const AboutUs2 = () => {
  return (
    <section className="bg-[#f8f6f2] min-h-screen px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-[2.5rem] font-bold font-bricolage">
          <span className="text-[#1f1f2e] relative inline-block">
            About
            <span className="absolute left-0 right-0 -bottom-1 h-[5px] bg-[#6DD6DB] w-10 mx-auto rounded-full mt-1"></span>
          </span>
          <span className="text-[#6DD6DB]"> Us</span>
        </h1>
      </div>
      <CapsuleGrid />
    </section>
  );
};

export default AboutUs2;
