"use client";

import { useEffect, useRef } from 'react';

export const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Determine the animation type from the HTML class
    const isScale = currentRef.classList.contains('reveal-scale');
    const readyClass = isScale ? 'reveal-scale-ready' : 'reveal-ready';

    // JS adds the hidden state — if JS never runs, section stays visible
    currentRef.classList.add(readyClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return ref;
};
