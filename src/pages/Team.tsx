import React, { useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Sharufa Walker",
    role: "CEO & Co-founder",
    image: "/lovable-uploads/f07d7f91-c94c-43b8-85b4-25f9d3f4b04c.png",
    quote: "Building the future of finance",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Mamadou Ka",
    role: "Co-founder",
    image: "/lovable-uploads/91c0dd1d-dbf3-48d6-904c-21dcf5c1f23c.png",
    quote: "Innovation through collaboration",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  }
];

const Team = () => {
  // Preload images
  useEffect(() => {
    teamMembers.forEach(member => {
      const img = new Image();
      img.src = member.image;
    });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#efede7] py-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#efede7"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-[2.5rem] font-bd-sans font-medium">
            Meet the <span className="text-[#387f79]">Incredible</span> Team
          </h1>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.7 }}
              className="card-container relative max-w-[300px] mx-auto w-full"
            >
              {/* Card with hover effects */}
              <div className="team-card overflow-hidden rounded-2xl transition-all duration-500 ease-in-out hover:transform hover:scale-105 hover:shadow-xl">
                {/* Background with grid pattern */}
                <div 
                  className="absolute inset-0 bg-[#387f79] rounded-2xl"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                ></div>
                
                {/* Content */}
                <div className="relative p-6 flex flex-col items-center">
                  {/* Profile Image - More zoomed in */}
                  <div className="mb-4 rounded-full overflow-hidden w-44 h-44 border-4 border-white shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center scale-125"
                      loading="eager"
                    />
                  </div>
                  
                  {/* Name and Role */}
                  <div className="text-center">
                    <h2 className="font-bd-sans font-normal text-xl text-white mb-1">
                      {member.name}
                    </h2>
                    <p className="font-bd-sans font-normal text-base text-white/90 mb-3">
                      {member.role}
                    </p>
                  </div>

                  {/* Quote */}
                  <p className="font-cormorant text-white/80 italic mb-4 text-xs">
                    "{member.quote}"
                  </p>
                  
                  {/* Social Links with enhanced hover effects */}
                  <div className="flex space-x-4">
                    <a href={member.social.twitter} className="social-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="social-icon text-white">
                        <path d="M15.2 0h3.9l-8.5 9.8 9.9 14.2h-7.8l-6.1-8.7-6.9 8.7H-4.2l9.1-10.5L-4.5 0h8l5.5 7.9L15.2 0zm-1.4 21.5h2.1L5.1 2.4H2.9l10.9 19.1z"/>
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="social-icon-container">
                      <Linkedin size={20} className="social-icon text-white" />
                    </a>
                    <a href={member.social.instagram} className="social-icon-container">
                      <Instagram size={20} className="social-icon text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
