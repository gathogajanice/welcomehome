import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'SHARUFA RASHIED-WALKER',
    role: 'CEO | CO-FOUNDER',
    image: '/lovable-uploads/Sharufa.png',
  },
  {
    name: 'MAMADOU KA',
    role: 'COO | CO- FOUNDER',
    image: '/lovable-uploads/Mamadou.png',
  },
];

const Team = () => {
  return (
    <section className="bg-[#f5f3ee] min-h-screen py-8 px-2 flex flex-col items-center">
      <motion.h1
        className="text-[#032b22] text-3xl sm:text-4xl font-troye text-center mb-10 tracking-widest uppercase"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        MEET OUR TEAM
      </motion.h1>
      <div className="flex flex-row gap-8 sm:gap-12 md:gap-16 w-full max-w-3xl items-start justify-center flex-wrap">
        {teamMembers.map((member, idx) => (
          <div key={member.name} className="flex flex-col items-center w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px]">
            <div className="w-[120px] h-[130px] sm:w-[180px] sm:h-[190px] md:w-[260px] md:h-[270px] rounded-none overflow-hidden flex items-center justify-center bg-white">
              <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
            </div>
            <div className="mt-2 sm:mt-3 md:mt-4 text-center">
              <h2 className="text-[#1a3c34] text-xs sm:text-base md:text-lg font-troye tracking-wide mb-1 uppercase">{member.name}</h2>
              <p className="text-[#1a3c34] text-xs sm:text-sm md:text-base font-troye tracking-wide uppercase">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
