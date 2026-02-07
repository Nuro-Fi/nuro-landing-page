'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'slide' | 'scale';
}

export default function ScrollReveal({ children, className = '', variant = 'slide' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const isScale = variant === 'scale';

    if (isScale) {
      gsap.set(ref.current, { opacity: 0, scale: 0.5 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 2,
        },
      });

      tl.to(ref.current, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
      tl.to(ref.current, { duration: 0.35 });
      tl.to(ref.current, { opacity: 0, scale: 0.85, duration: 0.25, ease: 'power2.in' });
    } else {
      gsap.set(ref.current, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 1.5,
        },
      });

      tl.to(ref.current, { opacity: 1, y: 0, duration: 0.3 });
      tl.to(ref.current, { duration: 0.4 });
      tl.to(ref.current, { opacity: 0, y: -40, duration: 0.3 });
    }
  }, { scope: ref });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
