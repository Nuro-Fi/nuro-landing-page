'use client';

import { useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    title: 'What is NuroFi?',
    content:
      'NuroFi is the first yield-bearing collateral lending protocol built on Arc. It allows you to use USYC as collateral to borrow USDC on any chain. Your collateral continues to earn yield while you access liquidity across multiple chains seamlessly via LayerZero.',
  },
  {
    title: 'How does NuroFi use Arc as a Liquidity Hub?',
    content:
      'NuroFi treats multiple chains as one unified liquidity surface, using Arc to move USDC wherever it is needed. Capital is sourced, routed, and settled across chains without fragmenting the user experience. Whether you are borrowing, repaying, or managing collateral, NuroFi ensures seamless crosschain liquidity so you are never locked to a single chain.',
  },
  {
    title: 'What is USYC?',
    content:
      'USYC is a yield-bearing stablecoin that earns yield through short-duration US Treasuries and other high-quality assets. When used as collateral on NuroFi, it continues to earn yield.',
  },
  {
    title: 'How does cross-chain borrowing work?',
    content:
      "NuroFi uses LayerZero's omnichain messaging protocol to deliver your borrowed USDC to any supported chain. You deposit collateral on one chain and receive liquidity wherever you need it.",
  },
  {
    title: 'What happens if my collateral value drops?',
    content:
      'USYC is a stablecoin-type asset, so significant price drops are unlikely. However, if the collateral ratio falls below the required threshold, the position may be liquidated to protect lenders.',
  },
  {
    title: 'Which chains are supported?',
    content:
      'Currently, NuroFi is available on Arc testnet and Base testnet. More EVM chains will be supported in the near future.',
  },
];

function FaqItem({ title, content, index }: { title: string; content: string; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  const toggle = useCallback(() => {
    if (!contentRef.current || !iconRef.current) return;

    if (!open) {
      gsap.set(contentRef.current, { height: 'auto', opacity: 1 });
      const h = contentRef.current.scrollHeight;
      gsap.from(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
      gsap.to(contentRef.current, {
        height: h,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
      gsap.to(iconRef.current, { rotation: 45, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.inOut',
      });
      gsap.to(iconRef.current, { rotation: 0, duration: 0.3, ease: 'power2.out' });
    }

    setOpen(!open);
  }, [open]);

  return (
    <div
      className="faq-item group cursor-pointer rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/15 hover:bg-white/[0.04]"
      onClick={toggle}
      data-index={index}
    >
      <div className="flex items-center justify-between px-7 py-6">
        <h3 className="text-base font-medium text-white pr-4">{title}</h3>
        <svg
          ref={iconRef}
          className="h-5 w-5 shrink-0 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p className="px-7 pb-6 text-sm leading-relaxed text-white/40">{content}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const heading = containerRef.current.querySelector('.faq-heading');
    const items = containerRef.current.querySelectorAll('.faq-item');

    if (heading) {
      gsap.set(heading, { opacity: 0, y: 30 });
      gsap.to(heading, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    if (items.length) {
      gsap.set(items, { opacity: 0, y: 40, scale: 0.97 });
      items.forEach((item, i) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }
  }, { scope: containerRef });

  return (
    <section id="faq" className="bg-[#050505] px-6 py-28 md:px-10">
      <div ref={containerRef} className="mx-auto max-w-3xl">
        <div className="faq-heading mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">FAQ</h2>
        </div>

        <div className="space-y-3">
          {ITEMS.map((item, index) => (
            <FaqItem key={index} title={item.title} content={item.content} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
