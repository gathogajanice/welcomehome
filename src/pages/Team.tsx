
import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sharufa Walker",
      role: "CEO & Co-founder",
      image: "/lovable-uploads/f07d7f91-c94c-43b8-85b4-25f9d3f4b04c.png",
      quote: "Building the future of finance",
      social: {
        x: "#",
        linkedin: "#",
        behance: "#"
      }
    },
    {
      name: "Mamadou Ka",
      role: "Co-founder",
      image: "/lovable-uploads/91c0dd1d-dbf3-48d6-904c-21dcf5c1f23c.png",
      quote: "Innovation through collaboration",
      social: {
        x: "#",
        linkedin: "#",
        behance: "#"
      }
    }
  ];

  // Preload images
  useEffect(() => {
    teamMembers.forEach(member => {
      const img = new Image();
      img.src = member.image;
    });
  }, []);

  return (
    <div className="bg-[#f8f6f2] py-16">
      <div className="container mx-auto px-4">
        {/* Title Section - No underline */}
        <div className="text-center mb-16">
          <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-light mb-4">
            Meet the <span className="font-bold">Incredible</span> Team
          </h1>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative">
              {/* Background Box */}
              <div className="absolute inset-0 bg-[#1E5987] rounded-2xl -skew-y-2 transform"></div>
              
              {/* Content */}
              <div className="relative p-6 flex flex-col items-center">
                {/* Profile Image - Reduced size */}
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 border-4 border-white shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Role */}
                <h2 className="font-bricolage text-2xl font-bold text-white mb-1">
                  {member.name}
                </h2>
                <p className="font-bricolage text-lg text-white/90 mb-3">
                  {member.role}
                </p>

                {/* Quote */}
                <p className="text-white/80 italic mb-4 text-sm">
                  "{member.quote}"
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href={member.social.x} className="text-white hover:text-[#6dd6db] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.2 0h3.9l-8.5 9.8 9.9 14.2h-7.8l-6.1-8.7-6.9 8.7H-4.2l9.1-10.5L-4.5 0h8l5.5 7.9L15.2 0zm-1.4 21.5h2.1L5.1 2.4H2.9l10.9 19.1z"/>
                    </svg>
                  </a>
                  <a href={member.social.linkedin} className="text-white hover:text-[#6dd6db] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.behance} className="text-white hover:text-[#6dd6db] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.5 18.5h-6v-2h6v2zm-9-7.5c0-1.657-1.343-3-3-3H6v12h4.5c1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3 1.657 0 3-1.343 3-3zM6 10.5h4.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H6v-3zm4.5 3c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H6v-3h4.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

