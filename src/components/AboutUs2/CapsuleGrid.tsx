
import React from 'react';
import CapsuleCard from '@/components/CapsuleCard';

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-[1200px] mx-auto px-8">
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
