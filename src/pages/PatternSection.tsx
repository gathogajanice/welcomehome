
import React from 'react';

const PatternSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background with subtle overlay */}
      <div 
        className="absolute inset-0 bg-[#387f79]"
        style={{
          backgroundImage: 'url("/lovable-uploads/b0216d6c-bcc4-4652-ada8-97c20f039f68.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
            YOUR INVESTMENT IS YOUR PASSPORT TO PREMIUM STAYS AND GLOBAL IMPACT
          </h2>
          <p className="font-bricolage text-lg md:text-xl text-white/90">
            Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 rounded-full overflow-hidden">
          <img 
            src="/lovable-uploads/b0216d6c-bcc4-4652-ada8-97c20f039f68.png" 
            alt="Scenic property view" 
            className="w-full h-full object-cover rounded-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PatternSection;

