
import React from 'react';
import { motion } from 'framer-motion';
import PerkCard from './PerkCard';
import type { PerkCardProps } from './types';

const PERKS_DATA: PerkCardProps[] = [
  {
    id: 1,
    title: "Fractional Land Meets Luxury Mobility",
    subtitle: "INVEST IN VERIFIED PROPERTIES ACROSS AFRICA",
    imageUrl: "/lovable-uploads/26ef1349-80ee-413e-9de4-565b3cfefb56.png",
    alt: "African Monument at Sunset"
  },
  {
    id: 2,
    title: "Unlock Luxury Travel Perks",
    subtitle: "2 ADULTS | 1 CHILD BELOW 7",
    imageUrl: "/lovable-uploads/911a6f88-6adf-4bb8-8d32-35ed7b3163f3.png",
    alt: "Safari Experience with Elephant"
  },
  {
    id: 3,
    title: "The Wellhall Family Suite",
    subtitle: "4 ADULTS | 2 CHILDREN BELOW 7",
    imageUrl: "/lovable-uploads/5d4cd7c9-c5fd-474b-a17c-86fe7e76d7df.png",
    alt: "Luxury Travel Experience"
  }
];

const Perks = () => {
  return (
    <section className="min-h-screen bg-[#efede7] px-4 py-24">
      <div className="container mx-auto">
        <motion.h1 
          className="text-[#032b22] font-cormorant text-5xl text-center mb-16 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OWN A SHARE. STAY ANYWHERE.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {PERKS_DATA.map((perk, index) => (
            <motion.div
              key={perk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <PerkCard {...perk} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
