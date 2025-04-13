
import { useEffect, useMemo } from 'react';
import { UseAnimateReturn } from 'framer-motion';

export const useCardAnimation = (
  controls: { scope: React.RefObject<HTMLDivElement>, animate: UseAnimateReturn[1] }[]
) => {
  useEffect(() => {
    const animateIcons = async () => {
      for (let i = 0; i < controls.length; i++) {
        const { scope, animate } = controls[i];
        
        await animate(scope.current, 
          { 
            scale: [1, 1.15, 1],
            rotate: [0, 180, 0],
          }, 
          { 
            duration: 2,
            delay: 0.3,
          }
        );
      }

      setTimeout(animateIcons, 1500);
    };

    animateIcons();
    return () => {};
  }, [controls]);
};

export const useCardAutoRotation = (setActiveCard: React.Dispatch<React.SetStateAction<number>>) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, [setActiveCard]);
};
