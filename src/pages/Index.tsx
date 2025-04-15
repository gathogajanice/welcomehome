
import React from 'react';
import AboutUs2 from "@/components/AboutUs2";
import StatsSection from "@/components/StatsSection";
import Invest from "@/pages/Invest";
import WhyInvest from "@/pages/WhyInvest";
import Team from "@/pages/Team";
// Removed Welcome import
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faff]">
      {/* Hero section is loaded in App.tsx */}
      
      {/* Main content */}
      <div className="relative z-10 mt-[100vh]">
        <AboutUs2 />
        <WhyInvest />
        <StatsSection />
        <Invest />
        <Team />
        {/* Removed Welcome component */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
