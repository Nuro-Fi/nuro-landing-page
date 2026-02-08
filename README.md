# NuroFi Landing Page

The official landing page for **NuroFi** — the first yield-bearing collateral lending protocol built on [Arc](https://www.arc.network/).

## About NuroFi

NuroFi allows you to use USYC (a yield-bearing stablecoin backed by short-duration US Treasuries) as collateral to borrow USDC on any supported chain. Your collateral continues to earn yield while you access liquidity across multiple chains seamlessly via [LayerZero](https://layerzero.network/).

### Key Features

- **Yield-Bearing Collateral** — Deposit USYC and keep earning yield while borrowing
- **Cross-Chain Borrowing** — Borrow USDC on any supported chain via LayerZero
- **Built on Arc** — Leverage Arc's unified liquidity surface across multiple chains
- **USDC & EURC Support** — Borrow the most widely adopted stablecoins

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — Styling
- [GSAP](https://gsap.com/) — Animations
- [Framer Motion](https://www.framer.com/motion/) — Motion library
- [Radix UI](https://www.radix-ui.com/) — Accessible components
- [Lenis](https://lenis.darkroom.engineering/) — Smooth scrolling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- [pnpm](https://pnpm.io/) (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Nuro-Fi/nuro-landing-page.git
cd nuro-landing-page

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build

```bash
# Create a production build
pnpm build

# Start the production server
pnpm start
```

### Lint

```bash
pnpm lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── Navbar.tsx          # Navigation bar
│   ├── HeroSection.tsx     # Hero section
│   ├── HowItWorksSection.tsx   # How it works section
│   ├── EcosystemSection.tsx    # Ecosystem partners
│   ├── FaqSection.tsx      # FAQ accordion
│   ├── CtaSection.tsx      # Call to action
│   ├── Footer.tsx          # Footer
│   └── ...                 # UI components & animations
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions
```

## Links

- [NuroFi Documentation](https://nuro-fi.gitbook.io/nuro-fi-docs/)
- [Twitter](https://x.com/NuroFiLend)
- [GitHub](https://github.com/Nuro-Fi)

## Ecosystem Partners

- [Arc](https://www.arc.network/) — Liquidity hub
- [LayerZero](https://layerzero.network/) — Omnichain messaging
- [Circle](https://www.circle.com/) — USDC & EURC stablecoins

## License

© 2026 NuroFi. All rights reserved.
