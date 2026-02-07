'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/animate-ui/components/radix/accordion';

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

export default function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3"
    >
      {ITEMS.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="rounded-2xl border border-white/10 bg-white/3 px-6"
        >
          <AccordionTrigger className="py-6 text-base font-medium text-white hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-white/40">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
