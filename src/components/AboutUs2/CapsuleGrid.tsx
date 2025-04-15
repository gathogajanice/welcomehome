
import React from 'react';
import CapsuleCard from '@/components/CapsuleCard';
import { Target, Users, Plane, Database } from 'lucide-react';

const capsuleData = [
  {
    image: "/lovable-uploads/66440ac5-5495-4bb4-91dc-4cab23d58a39.png",
    title: "Our Mission",
    subtitle: "To increase the accessibility for property ownership in Senegal, Africa. Through our platform anyone can own property with a push of a button.",
    icon: "target" as const
  },
  {
    image: "/lovable-uploads/3dd69448-a250-42f4-88cb-5d10d79cbc89.png",
    title: "Who We Are",
    subtitle: "We are a team of innovators dedicated to revolutionizing property ownership in Africa through technology and accessibility.",
    icon: "users" as const
  },
  {
    image: "/lovable-uploads/da203d86-4789-4fba-81b5-6bc2f17e4cb5.png",
    title: "Travel Feature",
    subtitle: "Experience virtual property tours and seamless travel integration for international investors.",
    icon: "plane" as const
  },
  {
    image: "/lovable-uploads/fc9b9fc7-b84e-4db1-86f0-804ae74f3278.png",
    title: "Blockchain Innovation",
    subtitle: "Leveraging blockchain technology for secure, transparent, and efficient property transactions.",
    icon: "database" as const
  }
];

const CapsuleGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center max-w-[1200px] mx-auto px-4">
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
