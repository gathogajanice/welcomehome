
import React from 'react';
import AboutUs from "@/components/AboutUs";
import StatsSection from "@/components/StatsSection";
import Features from "@/pages/Features";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f2]">
      {/* Hero section is loaded in App.tsx */}
      
      {/* Main content */}
      <div className="relative z-10 mt-[100vh]">
        <AboutUs />
        <StatsSection />
        <Features />
      </div>
    </div>
  );
};

export default Index;
