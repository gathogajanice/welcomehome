
import React from 'react';

const StatsSection = () => {
  // Stats data array
  const stats = [
    {
      number: "70%",
      title: "Reduction in Transaction Costs",
      description: "(Compared to traditional real estate channels)"
    },
    {
      number: "12B+",
      title: "Market Opportunity",
      description: "(Africa's real estate by 2030 is within reach)"
    },
    {
      number: "100+",
      title: "Investors Showing Interest",
      description: "(From the U.S., Europe, and Senegal)"
    }
  ];

  return (
    <section className="w-full bg-[#0e517d] py-16 relative z-10" id="stats-section">
      <div className="container mx-auto px-4">
        {/* Stats container */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col items-center md:items-start text-white py-8 px-6 md:px-10 ${
                index === 1 ? "md:border-x border-white/20" : ""
              } ${index !== 0 ? "border-t md:border-t-0" : ""} flex-1`}
            >
              {/* Number */}
              <h2 className="font-clash text-6xl md:text-7xl lg:text-8xl font-bold mb-3 text-white">
                {stat.number}
              </h2>
              
              {/* Title */}
              <h3 className="font-apercu text-[#4bbfe2] text-xl md:text-2xl mb-1">
                {stat.title}
              </h3>
              
              {/* Description */}
              <p className="font-apercu text-white/80 text-base md:text-lg max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
