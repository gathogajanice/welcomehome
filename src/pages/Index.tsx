
import React from 'react';
import AboutUs2 from "@/components/AboutUs2";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f2]">
      {/* Hero section is loaded in App.tsx */}
      
      {/* Main content */}
      <div className="relative z-10 mt-[100vh]">
        <AboutUs2 />
        <StatsSection />
      </div>
    </div>
  );
};

export default Index;
