import React from 'react';
import Perks from "@/components/Perks";
import StatsSection from "@/components/StatsSection";
import WhyInvest from "@/pages/WhyInvest";
import Team from "@/pages/Team";
import WelcomeHome from "@/pages/WelcomeHome";
import Promos from "@/pages/Promos";
import Vision from "@/pages/Vision";
import CommunityPartners from "@/pages/CommunityPartners";

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
        <Vision />
        <Promos />
        <CommunityPartners />
        <Team />
      </div>
    </div>
  );
};

export default Index;
