
import { useEffect, useRef } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';

export function useCarouselAutoplay(
  api: CarouselApi | null,
  interval = 2500,
  autoplay = true
) {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!autoplay) return;

    if (api) {
      // Start autoplay
      intervalRef.current = window.setInterval(() => {
        api.scrollNext();
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, interval, autoplay]);

  return {
    setInterval: (newInterval: number) => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (api) {
        intervalRef.current = window.setInterval(() => {
          api.scrollNext();
        }, newInterval);
      }
    },
    stop: () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    },
    start: () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (api) {
        intervalRef.current = window.setInterval(() => {
          api.scrollNext();
        }, interval);
      }
    }
  };
}
