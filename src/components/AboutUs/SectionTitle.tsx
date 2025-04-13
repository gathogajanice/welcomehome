
import React from 'react';

type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

const SectionTitle = ({ label, title, description }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <div className="flex justify-center">
        <div className="inline-block px-4 py-1 text-sm font-medium bg-[#0e517d]/10 text-[#0e517d] border border-[#0e517d]/20 font-clash">
          {label}
        </div>
      </div>
      <h2 className="mt-5 text-4xl font-bold font-clash text-[#0e517d] mb-4">
        {title}
        {/* Scribble underline */}
        <div className="relative flex justify-center mt-2">
          <svg className="w-32 h-4" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0,5 C10,2 15,8 25,5 C35,2 40,8 50,5 C60,2 65,8 75,5 C85,2 90,8 100,5" 
              fill="none" 
              stroke="#0e517d" 
              strokeWidth="2"
            />
          </svg>
        </div>
      </h2>
      {description && (
        <p className="font-apercu text-lg text-gray-600 max-w-md mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
