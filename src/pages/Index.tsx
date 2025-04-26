import React from 'react';
import Perks from "@/components/Perks";
import StatsSection from "@/components/StatsSection";
import WhyInvest from "@/pages/WhyInvest";
import Team from "@/pages/Team";
import Footer from "@/components/Footer";
import WelcomeHome from "@/pages/WelcomeHome";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faff]">
      {/* Hero section is loaded in App.tsx */}
      
      {/* Main content */}
      <div className="relative z-10">
        <WelcomeHome />
        <Perks />
        <WhyInvest />
        <StatsSection />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
