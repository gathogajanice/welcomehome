
import React from 'react';
import { ArrowUp, HelpCircle, Target, Briefcase, Lightbulb, TrendingUp, Rocket } from 'lucide-react';

interface CapsuleCardProps {
  image: string;
  title: string;
  subtitle?: string;
  icon: "question" | "target" | "briefcase" | "lightbulb" | "chart" | "rocket";
}

const CapsuleCard = ({ image, title, subtitle, icon }: CapsuleCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "question": return <HelpCircle className="w-6 h-6 text-white" />;
      case "target": return <Target className="w-6 h-6 text-white" />;
      case "briefcase": return <Briefcase className="w-6 h-6 text-white" />;
      case "lightbulb": return <Lightbulb className="w-6 h-6 text-white" />;
      case "chart": return <TrendingUp className="w-6 h-6 text-white" />;
      case "rocket": return <Rocket className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="relative w-[220px] h-[360px] rounded-[56px] overflow-hidden shadow-lg border-3 border-[#6DD6DB]/30 group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="mb-4">
          {getIcon()}
        </div>
        <h3 className="font-bricolage text-xl font-bold text-white mb-2">{title}</h3>
        {subtitle && (
          <p className="font-bricolage text-sm font-light text-white px-6 text-center">{subtitle}</p>
        )}
      </div>
      <button 
        aria-label="Learn more"
        className="absolute bottom-4 right-4 w-8 h-8 bg-[#6DD6DB] rounded-full flex items-center justify-center hover:bg-[#1f1f2e] transition-all duration-300 animate-bounce"
      >
        <ArrowUp className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default CapsuleCard;
