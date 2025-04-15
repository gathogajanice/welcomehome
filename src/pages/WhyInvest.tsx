
import React from 'react';
import { Button } from "@/components/ui/button";

const WhyInvest = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f2] py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side with image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/8b524258-7d61-46ba-8526-06d6943f2364.png"
              alt="Modern house"
              className="w-full rounded-2xl"
            />
          </div>

          {/* Right side with content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-clash mb-6">
              Why Invest in{' '}
              <span className="text-[#E97451]">Real Estate?</span>
            </h1>

            <p className="text-lg mb-6">
              Real estate is often considered a non-depreciating asset because
              it typically maintains or increases in value over time.
            </p>

            <p className="text-lg mb-8">
              Unlike other assets such as vehicles or equipment, real estate
              generally appreciates in value due to factors such as location,
              improvements, and demand.
            </p>

            <Button 
              className="bg-[#E97451] hover:bg-[#E97451]/90 text-white font-medium px-8 py-6 text-lg"
            >
              START INVESTING TODAY
            </Button>

            {/* Benefits icons */}
            <div className="mt-16 bg-gray-700/90 rounded-3xl p-8">
              <div className="grid grid-cols-3 gap-8 text-white text-center">
                <div>
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 12H17L12 4L7 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium">Fractional<br />Ownership</h3>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium">Generational<br />wealth</h3>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium">Invest in any<br />currency</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
