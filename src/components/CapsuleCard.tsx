
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
      case "question": return <HelpCircle className="w-6 h-6 text-white animate-pulse" />;
      case "target": return <Target className="w-6 h-6 text-white animate-pulse" />;
      case "briefcase": return <Briefcase className="w-6 h-6 text-white animate-pulse" />;
      case "lightbulb": return <Lightbulb className="w-6 h-6 text-white animate-pulse" />;
      case "chart": return <TrendingUp className="w-6 h-6 text-white animate-pulse" />;
      case "rocket": return <Rocket className="w-6 h-6 text-white animate-pulse" />;
    }
  };

  return (
    <div className="relative w-[220px] h-[360px] rounded-[56px] overflow-hidden shadow-lg border-3 border-[#6DD6DB]/30">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div className="mb-4">
            {getIcon()}
          </div>
          <h3 className="font-bricolage text-xl font-bold text-white mb-2">{title}</h3>
          {subtitle && (
            <p className="font-bricolage text-sm font-light text-white text-center">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CapsuleCard;
