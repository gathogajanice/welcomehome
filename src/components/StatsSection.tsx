
import React from 'react';
import { Skeleton } from "./ui/skeleton";
import { motion } from 'framer-motion';

const StatsSection = () => {
  // Stats data array with actual numbers
  const stats = [
    {
      number: "62%",
      title: "Reduction in Transaction Costs",
      description: "(Compared to traditional real estate channels)"
    },
    {
      number: "11B+",
      title: "Market Opportunity",
      description: "(Africa's real estate by 2030 is within reach)"
    },
    {
      number: "88+",
      title: "Investors Showing Interest",
      description: "(From the U.S., Europe, and Senegal)"
    },
    {
      number: "24/7",
      title: "Service Availability",
      description: "(Supporting global time zones and inquiries)"
    },
    {
      number: "42%",
      title: "Annual Growth Rate",
      description: "(Exceeding local market averages since launch)"
    },
    {
      number: "93%",
      title: "Client Satisfaction",
      description: "(Based on post-investment surveys)"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#f9f8f3] py-10 relative z-10 overflow-hidden" 
      id="stats-section"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center text-[2.5rem] font-bold font-clash text-[#387f79] mb-10"
        >
          <span className="text-[#1f1f2e] relative inline-block">Our</span>
          <span className="text-[#387f79]"> Performance</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.slice(0, 3).map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="relative flex flex-col items-center justify-center text-[#1f1f2e] py-4 px-2 max-w-[320px] mx-auto border border-[#387f79]/30 rounded-lg bg-white shadow-sm"
            >
              <h2 className="font-clash text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-[#387f79]">
                {stat.number}
              </h2>
              <h3 className="font-clash text-[#1f1f2e] text-xs md:text-xs lg:text-sm mb-1 text-center">
                {stat.title}
              </h3>
              <p className="font-apercu text-gray-600 text-[10px] md:text-[10px] lg:text-xs max-w-[170px] text-center">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {stats.slice(3).map((stat, index) => (
            <motion.div 
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 3), duration: 0.5 }}
              className="relative flex flex-col items-center justify-center text-[#1f1f2e] py-4 px-2 max-w-[320px] mx-auto border border-[#387f79]/30 rounded-lg bg-white shadow-sm"
            >
              <h2 className="font-clash text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-[#387f79]">
                {stat.number}
              </h2>
              <h3 className="font-clash text-[#1f1f2e] text-xs md:text-xs lg:text-sm mb-1 text-center">
                {stat.title}
              </h3>
              <p className="font-apercu text-gray-600 text-[10px] md:text-[10px] lg:text-xs max-w-[170px] text-center">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
