
import React from 'react';

const Welcome = () => {
  return (
    <section 
      className="w-full bg-[#0e517d] py-10 relative z-10 overflow-hidden min-h-screen flex items-center" 
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center max-w-[220px] mx-auto border border-[#4bbfe2]/30 rounded-lg bg-[#0e517d]/50 p-8 md:p-12">
          <p className="font-clash text-[#4bbfe2] text-xs md:text-sm mb-1 text-center">
            Invest like never before, Senegal is the Future.
          </p>
          
          <div className="mb-4">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-clash font-light mb-2 text-center">
              Invest with
            </h1>
            <div className="text-white text-3xl md:text-4xl lg:text-5xl font-clash font-bold leading-tight text-center">
              WELCOME<br />HOME
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
