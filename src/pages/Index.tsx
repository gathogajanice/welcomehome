
import React from 'react';
import AboutUs2 from "@/components/AboutUs2";
import StatsSection from "@/components/StatsSection";
import Invest from "@/pages/Invest";
import WhyInvest from "@/pages/WhyInvest";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f2]">
      {/* Hero section is loaded in App.tsx */}
      
      {/* Main content */}
      <div className="relative z-10 mt-[100vh]">
        <AboutUs2 />
        <WhyInvest />
        <StatsSection />
        <Invest />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
