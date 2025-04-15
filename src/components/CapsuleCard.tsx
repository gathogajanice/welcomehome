
import React from 'react';
import { Target, Users, Plane, Database } from 'lucide-react';

interface CapsuleCardProps {
  image: string;
  title: string;
  subtitle?: string;
  icon: "target" | "users" | "plane" | "database";
}

const CapsuleCard = ({ image, title, subtitle, icon }: CapsuleCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "target": return <Target className="w-6 h-6 text-white animate-bounce" />;
      case "users": return <Users className="w-6 h-6 text-white animate-bounce" />;
      case "plane": return <Plane className="w-6 h-6 text-white animate-bounce" />;
      case "database": return <Database className="w-6 h-6 text-white animate-bounce" />;
    }
  };

  return (
    <div className="relative w-[200px] h-[340px] rounded-[40px] overflow-hidden shadow-lg border-[3px] border-[#6DD6DB]/30">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div className="mb-4">
            {getIcon()}
          </div>
          <h3 className="font-clash text-xl font-bold text-white mb-3">{title}</h3>
          {subtitle && (
            <p className="font-clash text-sm font-light text-white text-center leading-tight">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CapsuleCard;
