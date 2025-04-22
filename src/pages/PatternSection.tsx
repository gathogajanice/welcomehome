
import React from 'react';

const PatternSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background with subtle pattern overlay */}
      <div 
        className="absolute inset-0 bg-[#387f79]"
        style={{
          backgroundImage: 'url("/lovable-uploads/b68422c8-6928-491f-9658-6f650dc4b18d.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15 // Even more reduced opacity for subtle pattern effect
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Text Content - further reduced font size and improved alignment */}
        <div className="max-w-xl text-left">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 font-bold">
            YOUR INVESTMENT IS YOUR PASSPORT TO PREMIUM STAYS AND GLOBAL IMPACT
          </h2>
          <p className="font-bricolage text-sm md:text-base text-white/90 leading-relaxed">
            Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!
          </p>
        </div>

        {/* Image - properly sized with matching rounded design from AboutUs2 */}
        <div className="w-full md:w-2/5 overflow-hidden">
          <div className="aspect-square relative">
            <img 
              src="/lovable-uploads/b0216d6c-bcc4-4652-ada8-97c20f039f68.png" 
              alt="Scenic property view" 
              className="w-full h-full object-cover rounded-3xl shadow-lg"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternSection;
