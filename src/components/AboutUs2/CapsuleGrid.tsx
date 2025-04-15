
import React from 'react';
import CapsuleCard from '@/components/CapsuleCard';

const capsuleData = [
  {
    image: "/lovable-uploads/c7373483-88dd-4075-80df-6c286196403c.png",
    title: "Investment",
    subtitle: "Property ownership in Senegal should be accessible to everyone, everywhere. We make it easy.",
    icon: "briefcase" as const
  },
  {
    image: "/lovable-uploads/5ade9d3e-2754-45f8-9e0f-650dac779f8f.png",
    title: "Technology",
    subtitle: "Our platform leverages blockchain technology to ensure secure and transparent property transactions.",
    icon: "lightbulb" as const
  },
  {
    image: "/lovable-uploads/fc64bd38-b6ea-4a25-bfc7-cf75fb8d57e3.png",
    title: "Community",
    subtitle: "Join a growing community of investors who believe in the future of African real estate.",
    icon: "target" as const
  },
  {
    image: "/lovable-uploads/c292b100-57a4-4886-9fd8-d0954fccb729.png",
    title: "Growth",
    subtitle: "Be part of Senegal's economic growth story through strategic property investments.",
    icon: "rocket" as const
  }
];

const CapsuleGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center max-w-[1200px] mx-auto px-6">
      {capsuleData.map((card, index) => (
        <CapsuleCard
          key={index}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default CapsuleGrid;
