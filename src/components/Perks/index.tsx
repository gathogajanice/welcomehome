import React from 'react';
import { motion } from 'framer-motion';
import PerkCard from './PerkCard';
import type { PerkCardProps } from './types';

const PERKS_DATA: PerkCardProps[] = [
  {
    id: 1,
    title: "Fractional Land Meets Luxury Mobility",
    subtitle: "INVEST IN VERIFIED PROPERTIES ACROSS AFRICA",
    description: "Senegal: Starting at $1000 investments. Explore the beauty of West Africa and invest in your future",
    imageUrl: "/lovable-uploads/26ef1349-80ee-413e-9de4-565b3cfefb56.png",
    alt: "African Monument at Sunset"
  },
  {
    id: 2,
    title: "Unlock Luxury Travel Perks",
    subtitle: "YOUR INVESTMENT UNLOCKS UNFORGETTABLE TRAVEL EXPERIENCES",
    imageUrl: "/lovable-uploads/911a6f88-6adf-4bb8-8d32-35ed7b3163f3.png",
    alt: "Safari Experience with Elephant"
  },
  {
    id: 3,
    title: "Welcome to the New Village",
    subtitle: "WE ARE CONNECTED BY CODE & UNITED BY CULTURE",
    description: "Where ownership, community, and innovation come together to build the future",
    imageUrl: "/lovable-uploads/happyafrican.png",
    alt: "Happy African Man with a Bright Smile"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const Perks = () => {
  return (
    <section className="bg-[#efede7] px-4 py-16">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-[#032b22] font-bd-sans text-5xl text-center mb-16 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OWN A SHARE. STAY ANYWHERE.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
          {PERKS_DATA.map((perk, index) => (
            <motion.div
              key={perk.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <PerkCard {...perk} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Perks;
