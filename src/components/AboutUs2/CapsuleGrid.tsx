
import React from 'react';
import CapsuleCard from '@/components/CapsuleCard';
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from 'framer-motion';

const capsuleData = [
  {
    image: "/lovable-uploads/66440ac5-5495-4bb4-91dc-4cab23d58a39.png",
    title: "Investment",
    subtitle: "Property ownership in Senegal should be accessible to everyone, everywhere. We make it easy.",
    icon: "briefcase" as const
  },
  {
    image: "/lovable-uploads/3dd69448-a250-42f4-88cb-5d10d79cbc89.png",
    title: "Technology",
    subtitle: "Our platform leverages blockchain technology to ensure secure and transparent property transactions.",
    icon: "lightbulb" as const
  },
  {
    image: "/lovable-uploads/da203d86-4789-4fba-81b5-6bc2f17e4cb5.png",
    title: "Community",
    subtitle: "Join a growing community of investors who believe in the future of African real estate.",
    icon: "target" as const
  },
  {
    image: "/lovable-uploads/fc9b9fc7-b84e-4db1-86f0-804ae74f3278.png",
    title: "Growth",
    subtitle: "Be part of Senegal's economic growth story through strategic property investments.",
    icon: "rocket" as const
  }
];

const CapsuleGrid = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <motion.div 
        id="about-us-capsules"
        className="flex overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4 hide-scrollbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {capsuleData.map((card, index) => (
          <motion.div 
            key={index}
            className="flex-shrink-0 w-[85%] snap-start mr-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <CapsuleCard
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  }
  
  // Desktop view
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-[1200px] mx-auto px-8">
      {capsuleData.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <CapsuleCard
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CapsuleGrid;
