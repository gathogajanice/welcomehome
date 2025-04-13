
import { useEffect } from 'react';

export const useIconAnimation = (controls: { 
  scope: React.RefObject<HTMLDivElement>; 
  animate: (element: Element | null, keyframes: any, options?: any) => Promise<any>; 
}[]) => {
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
