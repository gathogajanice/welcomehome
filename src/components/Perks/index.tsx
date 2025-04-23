
import React from 'react';
import { motion } from 'framer-motion';
import PerkCard from './PerkCard';
import type { PerkCardProps } from './types';

const PERKS_DATA: PerkCardProps[] = [
  {
    id: 1,
    title: "Fractional Land Meets Luxury Mobility",
    subtitle: "INVEST IN VERIFIED PROPERTIES ACROSS AFRICA",
    imageUrl: "/lovable-uploads/66440ac5-5495-4bb4-91dc-4cab23d58a39.png",
    alt: "Fractional Land"
  },
  {
    id: 2,
    title: "Unlock Luxury Travel Perks",
    subtitle: "2 ADULTS | 1 CHILD BELOW 7",
    imageUrl: "/lovable-uploads/3dd69448-a250-42f4-88cb-5d10d79cbc89.png",
    alt: "Luxury Travel"
  },
  {
    id: 3,
    title: "The Wellhall Family Suite",
    subtitle: "4 ADULTS | 2 CHILDREN BELOW 7",
    imageUrl: "/lovable-uploads/da203d86-4789-4fba-81b5-6bc2f17e4cb5.png",
    alt: "Wellhall Family Suite"
  }
];

const Perks = () => {
  return (
    <section className="min-h-screen bg-[#efede7] px-4 py-16">
      <div className="container mx-auto">
        <motion.h1 
          className="text-[#032b22] font-cormorant text-4xl text-center mb-12 font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OWN A SHARE. STAY ANYWHERE.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {PERKS_DATA.map((perk) => (
            <PerkCard 
              key={perk.id}
              {...perk}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
