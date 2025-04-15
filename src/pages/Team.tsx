
import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';
import Footer from '@/components/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: "Sharufa Walker",
      role: "CEO & Co-founder",
      image: "/lovable-uploads/f07d7f91-c94c-43b8-85b4-25f9d3f4b04c.png",
      social: {
        twitter: "#",
        linkedin: "#",
        behance: "#"
      }
    },
    {
      name: "Mamadou Ka",
      role: "Co-founder",
      image: "/lovable-uploads/91c0dd1d-dbf3-48d6-904c-21dcf5c1f23c.png",
      social: {
        twitter: "#",
        linkedin: "#",
        behance: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f2]">
      <div className="container mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl mb-4 relative inline-block">
            Meet the <span className="font-bold">Incredible</span>Team
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6dd6db]"></div>
          </h1>
        </div>

        {/* Team Members Grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#1E5987] rounded-3xl -skew-y-3 transform"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="mb-6 rounded-full overflow-hidden w-64 h-64 border-4 border-white shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Role */}
                <h2 className="font-bricolage text-3xl font-bold text-white mb-2">
                  {member.name}
                </h2>
                <p className="font-bricolage text-xl text-white/90 mb-4">
                  {member.role}
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href={member.social.twitter} className="text-white hover:text-[#6dd6db] transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href={member.social.linkedin} className="text-white hover:text-[#6dd6db] transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href={member.social.behance} className="text-white hover:text-[#6dd6db] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:text-[#6dd6db] transition-colors">
                      <path d="M22.5 18.5h-6v-2h6v2zm-9-7.5c0-1.657-1.343-3-3-3H6v12h4.5c1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3 1.657 0 3-1.343 3-3zM6 10.5h4.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H6v-3zm4.5 3c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H6v-3h4.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
