
import React, { useState, useEffect, useMemo } from 'react';
import { useAnimate } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import AboutUsCard from './AboutUsCard';
import SectionTitle from './SectionTitle';
import { cards } from './cardData';
import { useIconAnimation } from './useIconAnimation';
import './styles.css';

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

  // Rotate through active cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Use custom hook for icon animation
  useIconAnimation(controls);

  return (
    <section 
      className="relative min-h-screen w-full py-20 overflow-hidden bg-white" 
      id="about-us"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <SectionTitle 
          label="About Us"
          title="About Us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        {/* Cards grid - responsive with narrower cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 px-4 md:px-8`}>
          {cards.map((card, index) => (
            <AboutUsCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              icon={card.icon}
              index={index}
              isActive={activeCard === index}
              scopeRef={controls[index].scope}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
