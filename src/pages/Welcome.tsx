
import React from 'react';

const Welcome = () => {
  return (
    <div className="relative min-h-screen bg-[#f8faff] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/e99df11d-5f07-4e06-9c6e-31c0d22efe57.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-12 md:p-16 max-w-7xl mx-auto">
          <p className="text-white/90 text-xl md:text-2xl mb-6">
            Invest like never before, Senegal is the Future.
          </p>
          
          <div className="mb-12">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bricolage font-light mb-4">
              Invest with
            </h1>
            <div className="text-[#33C3F0] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bricolage font-bold leading-tight">
              WELCOME<br />HOME
            </div>
          </div>
          
          <div className="space-y-8 max-w-2xl">
            <p className="text-white/90 text-lg md:text-xl">
              Marginalized communities may be more likely to face discrimination in housing and lending practices, which can make it difficult to secure loans or purchase property.
            </p>
            
            <p className="text-white/90 text-lg md:text-xl">
              Additionally, economic disparities can make it challenging for individuals to save for a down payment or maintain the financial stability necessary to invest in real estate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
