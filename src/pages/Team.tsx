import React, { useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "SHARUFA R. WALKER",
    role: "CEO | Co-Founder",
    image: "/lovable-uploads/f07d7f91-c94c-43b8-85b4-25f9d3f4b04c.png",
    quote: "Building the future of finance",
    social: {
      twitter: "https://x.com/SharufaRWalker",
      linkedin: "https://www.linkedin.com/in/sharufawalker",
      instagram: "https://www.instagram.com/sharufawalker/?hl=en"
    }
  },
  {
    name: "MAMADOU KA",
    role: "COO | Co-Founder",
    image: "/lovable-uploads/Mamadou.png",
    quote: "Innovation through collaboration",
    social: {
      twitter: "https://x.com/welcomehomeintl",
      linkedin: "https://www.linkedin.com/company/welcome-home-international-realty-group/?viewAsMember=true",
      instagram: "https://www.instagram.com/welcomehomeinternational/"
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
          <h1 className="text-[2.5rem] font-troye text-[#00634d] uppercase">
            MEET THE INCREDIBLE TEAM
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
              <div className="team-card overflow-hidden transition-all duration-500 ease-in-out">
                {/* Background with grid pattern */}
                <div 
                  className="absolute inset-0 bg-[#387f79]"
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
                      className={`w-full h-full object-cover scale-125 ${member.name === 'MAMADOU KA' ? 'object-[50%_15%]' : 'object-center'}`}
                      loading="eager"
                    />
                  </div>
                  
                  {/* Name and Role */}
                  <div className="text-center">
                    <h2 className="font-troye font-normal text-xl text-white mb-1">
                      {member.name}
                    </h2>
                    <p className="font-bd-sans font-normal text-sm text-white/90 mb-3">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Social Links with enhanced hover effects */}
                  <div className="flex space-x-4">
                    <a href={member.social.twitter} className="social-icon-container" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white z-10" fill="currentColor">
                        <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.9A12 12 0 0 1 3 4.3a4.2 4.2 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1A4.2 4.2 0 0 0 7.8 17 8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.5A8.5 8.5 0 0 0 22 5.8z"/>
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="social-icon-container" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} className="social-icon text-white" />
                    </a>
                    <a href={member.social.instagram} className="social-icon-container" target="_blank" rel="noopener noreferrer">
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
