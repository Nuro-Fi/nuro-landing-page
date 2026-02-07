import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#050505]"
    >
      <div className="relative px-6 py-28 md:px-10">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] rounded-full bg-cyan-900/15 blur-[150px]" />
        <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[300px] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-lg text-center text-lg text-white/40">
              Yield-bearing collateral. Borrow USDC across multiple chains.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="relative flex min-h-screen items-center px-6 md:px-10">
        <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[400px] rounded-full bg-amber-800/10 blur-[150px]" />
        <ScrollReveal
          variant="scale"
          className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-14 lg:flex-row lg:gap-20"
        >
          <div className="flex shrink-0 justify-center lg:w-5/12">
            <div className="relative">
              <div className="animate-float">
                <Image
                  src="/logos/usyc-logos/nurofi-usyc-logo.png"
                  alt="USYC"
                  width={340}
                  height={340}
                  className="drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-amber-500/20 blur-[100px]" />
            </div>
          </div>
          <div className="lg:w-7/12">
            <span className="mb-4 inline-block rounded-full bg-white/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Lend
            </span>
            <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
              USYC
            </h2>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-white/45">
              Deposit USYC as yield-bearing collateral. Your assets continue
              generating yield through short-duration US Treasuries while
              securing your loan on Arc.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                Yield-Bearing
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                Treasury-Backed
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                Collateral
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative flex min-h-screen items-center px-6 md:px-10">
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-[500px] w-[400px] rounded-full bg-blue-800/10 blur-[150px]" />
        <ScrollReveal
          variant="scale"
          className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-14 lg:flex-row lg:gap-20"
        >
          <div className="lg:w-7/12">
            <span className="mb-4 inline-block rounded-full bg-white/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Borrow
            </span>
            <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
              USDC
            </h2>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-white/45">
              Borrow the most widely adopted digital dollar stablecoin against
              your USYC collateral. USDC is fully backed, transparent, and
              trusted by institutions and DeFi protocols across the ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                Fully Backed
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                Institutional Grade
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                Multi-chain
              </span>
            </div>
          </div>
          <div className="flex shrink-0 justify-center lg:w-5/12">
            <div className="relative">
              <div className="animate-float-delayed">
                <Image
                  src="/logos/usdc-logos/nurofi-usdc-logo.png"
                  alt="USDC"
                  width={340}
                  height={340}
                  className="drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-[100px]" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* EURC */}
      <div className="relative flex min-h-screen items-center px-6 md:px-10">
        <div className="pointer-events-none absolute left-1/3 top-1/3 h-[500px] w-[400px] rounded-full bg-purple-800/10 blur-[150px]" />
        <ScrollReveal
          variant="scale"
          className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-14 lg:flex-row lg:gap-20"
        >
          <div className="flex shrink-0 justify-center lg:w-5/12">
            <div className="relative">
              <div className="animate-float-slow">
                <Image
                  src="/logos/eurc-logos/eurc-logo-3.avif"
                  alt="EURC"
                  width={380}
                  height={380}
                  className="drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-purple-500/20 blur-[100px]" />
            </div>
          </div>
          <div className="lg:w-7/12">
            <span className="mb-4 inline-block rounded-full bg-white/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Stablecoin
            </span>
            <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
              EURC
            </h2>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-white/45">
              The leading euro stablecoin for crypto capital markets. EURC is
              MiCA-compliant and redeemable 1:1 for euro, bringing European
              financial rails on-chain.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                MiCA Compliant
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                1:1 Redeemable
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                Euro-backed
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
