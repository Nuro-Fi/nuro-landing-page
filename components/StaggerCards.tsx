'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface StaggerCardsProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  cardSelector?: string;
}

export default function StaggerCards({
  children,
  className = '',
  stagger = 0.15,
  cardSelector = '.stagger-card',
}: StaggerCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(cardSelector);
    if (!cards.length) return;

    gsap.set(cards, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1.5,
      },
    });

    // Animate in (fast)
    tl.to(cards, {
      opacity: 1,
      y: 0,
      stagger,
      duration: 0.3,
    });

    // Hold visible
    tl.to(cards, { duration: 0.4 });

    // Animate out
    tl.to(cards, {
      opacity: 0,
      y: -50,
      stagger,
      duration: 0.3,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
