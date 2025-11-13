import { useState, useEffect, useRef, RefObject } from 'react';

type UseAnimateOnScroll = [RefObject<any>, boolean];

export function useAnimateOnScroll(options?: IntersectionObserverInit): UseAnimateOnScroll {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after the animation is triggered to prevent re-triggering
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        ...options,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
}
