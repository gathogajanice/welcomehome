
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  TrendingUp,
  Coins,
  Users,
  LineChart,
  ShieldCheck 
} from "lucide-react";

const WhyInvest = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f2] px-4 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-[2.5rem] font-bold font-bricolage">
            <span className="text-[#1f1f2e] relative inline-block">
              Why
              <svg className="absolute left-0 right-0 -bottom-1 w-full" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 C20,2 30,8 50,5 C70,2 80,8 100,5" fill="none" stroke="#6DD6DB" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
              </svg>
            </span>
            <span className="text-[#6DD6DB]"> Invest</span>
          </h1>
          <p className="font-apercu text-[#13517b] mt-4 text-center text-sm">
            Explore the potential of strategic real estate investments
          </p>
        </div>

        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-clash mb-6">
            Why Invest in{' '}
            <span className="text-[#6DD6DB] relative">
              Real Estate
              <span className="absolute bottom-1 left-0 w-full border-b-2 border-[#6DD6DB] border-wavy"></span>
            </span>
          </h1>

          <p className="text-lg mb-6 text-gray-700">
            Real estate is often considered a non-depreciating asset because
            it typically maintains or increases in value over time.
          </p>

          <p className="text-lg mb-8 text-gray-700">
            Unlike other assets such as vehicles or equipment, real estate
            generally appreciates in value due to factors such as location,
            improvements, and demand.
          </p>

          <Button 
            className="bg-[#1f1f2e] hover:bg-[#1f1f2e]/90 text-white font-medium px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
          >
            START INVESTING TODAY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;

