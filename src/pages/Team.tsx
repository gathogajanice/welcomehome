
import React, { useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Team = () => {
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

  // Preload images
  useEffect(() => {
    teamMembers.forEach(member => {
      const img = new Image();
      img.src = member.image;
    });
  }, []);

  return (
    <div className="bg-[#f8faff] py-16">
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
            <div key={index} className="relative group">
              {/* Background Box */}
              <div className="absolute inset-0 bg-[#1E5987] rounded-2xl -skew-y-2 transform transition-transform duration-300 group-hover:skew-y-0"></div>
              
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
                  <a href={member.social.twitter} className="text-white hover:text-[#6dd6db] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.2 0h3.9l-8.5 9.8 9.9 14.2h-7.8l-6.1-8.7-6.9 8.7H-4.2l9.1-10.5L-4.5 0h8l5.5 7.9L15.2 0zm-1.4 21.5h2.1L5.1 2.4H2.9l10.9 19.1z"/>
                    </svg>
                  </a>
                  <a href={member.social.linkedin} className="text-white hover:text-[#6dd6db] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.instagram} className="text-white hover:text-[#6dd6db] transition-colors">
                    <Instagram size={20} />
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
