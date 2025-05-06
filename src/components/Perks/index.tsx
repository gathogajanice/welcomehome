import React from 'react';
import { motion } from 'framer-motion';
import PerkCard from './PerkCard';
import type { PerkCardProps } from './types';

const PERKS_DATA: PerkCardProps[] = [
  {
    id: 1,
    title: "FRACTIONAL LAND X LUXURY MOBILITY",
    subtitle: "WELCOME HOME MAKES IT POSSIBLE TO CO-OWN PROPERTY ON THE AFRICAN CONTINENT",
    description: "WITH OUR BLOCKCHAIN-SECURED PLATFORM, YOU CAN INVEST FRACTIONALLY IN VERIFIED PROPERTIES. STARTING WITH OUR FLAGSHIP OPPORTUNITIES IN SENEGAL, WITH AS LITTLE AS $1000",
    imageUrl: "/lovable-uploads/Senegal.png",
    alt: "African Monument at Sunset"
  },
  {
    id: 2,
    title: "UNLOCK LUXURY TRAVEL PERKS",
    subtitle: "WHEN YOU INVEST IN AFRICAN REAL ESTATE THROUGH WELCOME HOME, YOU UNLOCK MORE THAN OWNERSHIP —YOU UNLOCK ACCESS.",
    description: "AS A MEMBER, YOU'LL ENJOY CURATED TRAVEL PERKS THAT CONNECT YOU TO THE LAND YOU'VE INVESTED IN, THE CULTURE THAT SHAPED IT, AND THE COMMUNITIES BUILDING ITS FUTURE.",
    imageUrl: "/lovable-uploads/Elephant.png",
    alt: "Safari Experience with Elephant"
  },
  {
    id: 3,
    title: "WELCOME TO THE NEW VILLAGE",
    subtitle: "WELCOME HOME IS MORE THAN A PLATFORM — IT'S A REIMAGINED VILLAGE FOR THE MODERN ERA.",
    description: "ROOTED IN THE SPIRIT OF COMMUNITY AND POWERED BY BLOCKCHAIN TECHNOLOGY. WE'VE CREATED A SPACE",
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
          className="text-[#00634d] font-bd-sans text-5xl text-center mb-16 font-bold"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto mt-4">
          <div className="text-left flex flex-col h-full justify-start">
            <div className="font-bd-sans text-xl font-bold mb-2 uppercase text-[#032b22]">Fractional Land x Luxury Mobility</div>
            <div className="font-cormorant text-sm text-[#032b22] mb-2">
              Welcome Home makes it possible to co-own property on the African continent. Without the complexity, overhead, or uncertainty of traditional real estate. With our blockchain-secured platform, you can invest fractionally in verified properties. Starting with our flagship opportunities in Senegal, with as little as $1000.
            </div>
            <div className="flex-1" />
          </div>
          <div className="text-left flex flex-col h-full justify-start">
            <div className="font-bd-sans text-xl font-bold mb-2 uppercase text-[#032b22]">Unlock Luxury Travel Perks</div>
            <div className="font-cormorant text-sm text-[#032b22] mb-2">
              When you invest in African real estate through Welcome Home, you unlock more than ownership — you unlock access. As a member, you'll enjoy curated travel perks that connect you to the land you've invested in, the culture that shaped it, and the communities building its future.
            </div>
            <div className="flex-1" />
          </div>
          <div className="text-left flex flex-col h-full justify-start">
            <div className="font-bd-sans text-xl font-bold mb-2 uppercase text-[#032b22]">Welcome to the New Village</div>
            <div className="font-cormorant text-sm text-[#032b22] mb-2">
              Welcome Home is more than a platform — it's a reimagined village for the modern era. Rooted in the spirit of community and powered by blockchain technology. We've created a space for you to belong and build legacy.
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Perks;
