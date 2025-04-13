
import React, { useState, useMemo } from 'react';
import { useAnimate } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedTitle from './AnimatedTitle';
import AboutUsCard from './AboutUsCard';
import { aboutUsCards } from './aboutUsData';
import { useCardAnimation, useCardAutoRotation } from './useCardAnimation';

const AboutUs = () => {
  const [activeCard, setActiveCard] = useState(0);
  const isMobile = useIsMobile();

  // Create individual hooks for each control
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const [scope4, animate4] = useAnimate();
  const [scope5, animate5] = useAnimate();
  const [scope6, animate6] = useAnimate();

  // Memoize the controls array
  const controls = useMemo(() => [
    { scope: scope1, animate: animate1 },
    { scope: scope2, animate: animate2 },
    { scope: scope3, animate: animate3 },
    { scope: scope4, animate: animate4 },
    { scope: scope5, animate: animate5 },
    { scope: scope6, animate: animate6 },
  ], [
    scope1, animate1,
    scope2, animate2,
    scope3, animate3,
    scope4, animate4,
    scope5, animate5,
    scope6, animate6,
  ]);

  // Set up animation effects
  useCardAnimation(controls);
  useCardAutoRotation(setActiveCard);

  return (
    <section 
      className="relative min-h-screen w-full py-16 overflow-hidden bg-[#f8f6f2]" 
      id="about-us"
      style={{ 
        backgroundImage: "url('/textures/fiber-light.png')", 
        backgroundRepeat: "repeat" 
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section with animated scribble underline */}
        <AnimatedTitle />

        {/* Cards grid - reduced spacing between cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-6 px-2 md:px-4">
          {aboutUsCards.map((card, index) => (
            <AboutUsCard
              key={index}
              card={card}
              index={index}
              activeCard={activeCard}
              iconRef={controls[index].scope}
            />
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
