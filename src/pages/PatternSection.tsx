
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
          opacity: 0.2 // Reduced opacity to make background more transparent
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Text Content - left aligned with reduced font size */}
        <div className="max-w-2xl text-left">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 font-bold">
            YOUR INVESTMENT IS YOUR PASSPORT TO PREMIUM STAYS AND GLOBAL IMPACT
          </h2>
          <p className="font-bricolage text-base md:text-lg text-white/90">
            Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!
          </p>
        </div>

        {/* Image - with matching rounded design from AboutUs2 */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <img 
            src="/lovable-uploads/b0216d6c-bcc4-4652-ada8-97c20f039f68.png" 
            alt="Scenic property view" 
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PatternSection;
