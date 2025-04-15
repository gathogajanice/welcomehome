
import React from 'react';
import CapsuleCard from '@/components/CapsuleCard';

const capsuleData = [
  {
    image: "/lovable-uploads/e1b40968-92f2-43da-9c58-0421ededaeed.png",
    title: "Investment",
    subtitle: "Property ownership in Senegal should be accessible to everyone, everywhere. We make it easy."
  },
  {
    image: "/lovable-uploads/63427f01-4ea6-496d-9b20-f3eccdda8757.png",
    title: "Technology",
    subtitle: "Our platform leverages blockchain technology to ensure secure and transparent property transactions."
  },
  {
    image: "/lovable-uploads/fc99c9e7-80a3-4106-9a9f-1502fa6ca251.png",
    title: "Community",
    subtitle: "Join a growing community of investors who believe in the future of African real estate."
  },
  {
    image: "/lovable-uploads/e2fd9bc5-9787-406b-963d-2a0b8f8515a1.png",
    title: "Growth",
    subtitle: "Be part of Senegal's economic growth story through strategic property investments."
  }
];

const CapsuleGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
      {capsuleData.map((card, index) => (
        <CapsuleCard
          key={index}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};

export default CapsuleGrid;
