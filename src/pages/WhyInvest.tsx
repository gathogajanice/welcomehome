
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Building2,
  TrendingUp,
  Coins,
  Users,
  LineChart,
  ShieldCheck 
} from "lucide-react";

const WhyInvest = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f2] py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side with content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-clash mb-6">
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
              className="bg-[#6DD6DB] hover:bg-[#6DD6DB]/90 text-white font-medium px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
            >
              START INVESTING TODAY
            </Button>
          </div>

          {/* Right side with icons grid */}
          <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0">
            {[
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Fractional Ownership",
                description: "Own a piece of premium properties"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Value Growth",
                description: "Benefit from property appreciation"
              },
              {
                icon: <Coins className="w-8 h-8" />,
                title: "Multiple Currencies",
                description: "Invest in any currency"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description: "Join our investor network"
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Performance",
                description: "Track your investments"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Security",
                description: "Safe & verified transactions"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="text-[#6DD6DB] group-hover:text-[#5BC0C5] transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mt-3 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
