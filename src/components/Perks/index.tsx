import React from 'react';
import { motion } from 'framer-motion';
import PerkCard from './PerkCard';
import type { PerkCardProps } from './types';

const PERKS_DATA: PerkCardProps[] = [
  {
    id: 1,
    title: "Fractional Land x Luxury Mobility",
    subtitle: "Welcome Home makes it possible to co-own property on the African continent.",
    description:
      "With our blockchain-secured platform, you can invest fractionally in verified properties. Starting with our flagship opportunities in Senegal, with as little as $1000.",
    imageUrl: "/lovable-uploads/Senegal.png",
    alt: "African Monument at Sunset"
  },
  {
    id: 2,
    title: "Unlock Luxury Travel Perks",
    subtitle: "When you invest in African real estate through Welcome Home, you unlock more than ownership — you unlock access.",
    description:
      "As a member, you'll enjoy curated travel perks that connect you to the land you've invested in, the culture that shaped it, and the communities building its future.",
    imageUrl: "/lovable-uploads/Elephant.png",
    alt: "Safari Experience with Elephant"
  },
  {
    id: 3,
    title: "Welcome to the New Village",
    subtitle: "Welcome Home is more than a platform — it's a reimagined village for the modern era.",
    description:
      "Rooted in the spirit of community and powered by blockchain technology. We've created a space for you to belong and build legacy.",
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
          className="text-[#00634d] font-bd-sans text-3xl sm:text-4xl lg:text-5xl text-center mb-12 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OWN A SHARE. STAY ANYWHERE.
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
          {PERKS_DATA.map((perk, index) => (
            <motion.div
              key={perk.id}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <PerkCard {...perk} />
              <div className="mt-4 p-2 flex flex-col text-left">
                <div className="font-bd-sans text-base sm:text-lg font-bold text-[#032b22] mb-2">
                  {perk.title}
                </div>
                <p className="font-cormorant text-sm text-[#032b22] mb-1">{perk.subtitle}</p>
                <p className="font-cormorant text-sm text-[#032b22]">{perk.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Perks;
