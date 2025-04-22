
import React from 'react';

const PatternSection = () => {
  return (
    <div className="relative min-h-screen bg-[#387f79]">
      {/* Solid background color with pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("/lovable-uploads/703a5d24-33a7-4c96-b342-78cea49ca921.png")',
        backgroundSize: '300px auto', // Reduced size for more subtle effect
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        opacity: 0.15, // Slightly reduced opacity
        mixBlendMode: 'overlay' // Blend mode to maintain base color
      }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 py-24 flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Text Content - left aligned with proper line breaks and spacing */}
        <div className="max-w-xl pl-4 md:pl-8 text-left">
          <h2 className="font-cormorant text-4xl lg:text-6xl leading-tight font-bold md:text-5xl text-slate-50">
            YOUR<br />
            INVESTMENT IS<br />
            YOUR PASSPORT<br />
            TO PREMIUM<br />
            STAYS AND<br />
            GLOBAL IMPACT
          </h2>
          <p className="font-bricolage text-sm text-white/90 leading-relaxed mt-8 max-w-md my-[40px] md:text-sm">
            Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition.
          </p>
        </div>

        {/* Image - smaller and more proportionate */}
        <div className="w-full md:w-1/3 overflow-hidden">
          <div className="aspect-[3/4] relative">
            <img 
              src="/lovable-uploads/b0216d6c-bcc4-4652-ada8-97c20f039f68.png" 
              alt="Scenic property view" 
              className="w-full h-full object-cover rounded-3xl shadow-lg" 
              style={{
                objectPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternSection;
