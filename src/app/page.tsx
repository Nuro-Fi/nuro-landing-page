import Image from "next/image";
import DarkVeil from "@/components/DarkVeil";
import ShinyText from "@/components/ShinyText";
import FaqSection from "@/components/FaqSection";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerCards from "@/components/StaggerCards";

export default function Home() {
  return (
    <div className="w-full bg-[#050505]">
      {/* ===== Navbar ===== */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-8 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logos/nurologo-tg.png"
              alt="Nurofi"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-base font-bold tracking-tight text-white">
              NuroFi
            </span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#how-it-works" className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white">
              How It Works
            </a>
            <a href="#ecosystem" className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white">
              Integrations
            </a>
            <a href="#faq" className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white">
              FAQ
            </a>
          </div>
          <a
            href="#"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-white/90"
          >
            Launch App
          </a>
        </div>
      </nav>

      {/* ===== SECTION 1: Hero — DarkVeil Background ===== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* DarkVeil fills only this section */}
        <div className="absolute inset-0 z-0">
          <DarkVeil
            hueShift={45}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={3}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-black/45" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center md:px-10">
          {/* Powered by Arc badge */}
          <div className="mt-8 mb-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm text-white/60">Powered by</span>
            <Image
              src="/logos/Arc_Logo_WhiteGradient.svg"
              alt="Arc logo"
              width={60}
              height={20}
            />
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            <ShinyText
              text="Collateral That"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
            />
            <br />
            <ShinyText
              text="Earns While You Borrow"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
            />
          </h1>

          {/* Coin Visuals */}
          <div className="relative mx-auto mt-16 h-[280px] w-full max-w-5xl md:h-[320px]">
            {/* Left - EURC */}
            <div className="pointer-events-none absolute left-[5%] top-1/2 hidden -translate-y-1/2 lg:block">
              <div className="animate-coin-left">
                <Image src="/logos/eurc-logos/eurc-logo-left.avif" alt="EURC" width={300} height={300} className="opacity-70 drop-shadow-2xl" />
              </div>
            </div>
            {/* Center - USYC */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="animate-coin-center">
                <Image src="/logos/usyc-logos/nurofi-usyc-logo-tg.png" alt="USYC" width={240} height={240} className="drop-shadow-2xl" />
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/25 blur-[100px]" />
            </div>
            {/* Right - USDC */}
            <div className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 lg:block">
              <div className="animate-coin-right">
                <Image src="/logos/usdc-logos/nurofi-usdc-logo-tg.png" alt="USDC" width={200} height={200} className="opacity-70 drop-shadow-2xl" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 z-[2] h-32 w-full bg-gradient-to-t from-[#050505] to-transparent" />
      </section>


      {/* ===== SECTION 3: How It Works ===== */}
      <section id="how-it-works" className="relative overflow-hidden bg-[#050505]">
        {/* Heading */}
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

        {/* Lend USYC */}
        <div className="relative flex min-h-screen items-center px-6 md:px-10">
          <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[400px] rounded-full bg-amber-800/10 blur-[150px]" />
          <ScrollReveal variant="scale" className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-14 lg:flex-row lg:gap-20">
            <div className="flex shrink-0 justify-center lg:w-5/12">
              <div className="relative">
                <div className="animate-float">
                  <Image src="/logos/usyc-logos/nurofi-usyc-logo-tg.png" alt="USYC" width={340} height={340} className="drop-shadow-2xl" />
                </div>
                <div className="absolute inset-0 -z-10 rounded-full bg-amber-500/20 blur-[100px]" />
              </div>
            </div>
            <div className="lg:w-7/12">
              <span className="mb-4 inline-block rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                Lend
              </span>
              <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">USYC</h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-white/45">
                Deposit USYC as yield-bearing collateral. Your assets continue generating yield through short-duration US Treasuries while securing your loan on Arc.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">Yield-Bearing</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">Treasury-Backed</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">Collateral</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Borrow USDC */}
        <div className="relative flex min-h-screen items-center px-6 md:px-10">
          <div className="pointer-events-none absolute bottom-1/4 right-0 h-[500px] w-[400px] rounded-full bg-blue-800/10 blur-[150px]" />
          <ScrollReveal variant="scale" className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-14 lg:flex-row lg:gap-20">
            <div className="lg:w-7/12">
              <span className="mb-4 inline-block rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                Borrow
              </span>
              <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">USDC</h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-white/45">
                Borrow the most widely adopted digital dollar stablecoin against your USYC collateral. USDC is fully backed, transparent, and trusted by institutions and DeFi protocols across the ecosystem.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">Fully Backed</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">Institutional Grade</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">Multi-chain</span>
              </div>
            </div>
            <div className="flex shrink-0 justify-center lg:w-5/12">
              <div className="relative">
                <div className="animate-float-delayed">
                  <Image src="/logos/usdc-logos/nurofi-usdc-logo-tg.png" alt="USDC" width={340} height={340} className="drop-shadow-2xl" />
                </div>
                <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-[100px]" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* EURC */}
        <div className="relative flex min-h-screen items-center px-6 md:px-10">
          <div className="pointer-events-none absolute left-1/3 top-1/3 h-[500px] w-[400px] rounded-full bg-purple-800/10 blur-[150px]" />
          <ScrollReveal variant="scale" className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-14 lg:flex-row lg:gap-20">
            <div className="flex shrink-0 justify-center lg:w-5/12">
              <div className="relative">
                <div className="animate-float-slow">
                  <Image src="/logos/eurc-logos/eurc-logo-3.avif" alt="EURC" width={380} height={380} className="drop-shadow-2xl" />
                </div>
                <div className="absolute inset-0 -z-10 rounded-full bg-purple-500/20 blur-[100px]" />
              </div>
            </div>
            <div className="lg:w-7/12">
              <span className="mb-4 inline-block rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                Stablecoin
              </span>
              <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">EURC</h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-white/45">
                The leading euro stablecoin for crypto capital markets. EURC is MiCA-compliant
                and redeemable 1:1 for euro, bringing European financial rails on-chain.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">MiCA Compliant</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">1:1 Redeemable</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">Euro-backed</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 5: Ecosystem — Dark with emerald accent ===== */}
      <section id="ecosystem" className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#060d0a] to-[#050505] px-6 py-28 md:px-10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-emerald-900/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-5xl">
              Built on the Best
            </h2>
            <p className="mx-auto mb-16 max-w-lg text-center text-lg text-white/40">
              Powered by industry-leading protocols for security, interoperability, and performance.
            </p>
          </ScrollReveal>

          <StaggerCards className="grid grid-cols-1 gap-5 sm:grid-cols-3" stagger={0.2}>
            <a href="https://www.arc.network/" target="_blank" rel="noopener noreferrer" className="stagger-card flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-12 transition-all hover:border-white/20 hover:bg-white/[0.06]">
              <Image src="/logos/Arc_Logo_WhiteGradient.svg" alt="Arc" width={120} height={40} />
            </a>

            <a href="https://layerzero.network/" target="_blank" rel="noopener noreferrer" className="stagger-card flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-12 transition-all hover:border-white/20 hover:bg-white/[0.06]">
              <Image src="/logos/LayerZero_logo.svg" alt="LayerZero" width={160} height={40} />
            </a>

            <a href="https://www.circle.com/" target="_blank" rel="noopener noreferrer" className="stagger-card flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-12 transition-all hover:border-white/20 hover:bg-white/[0.06]">
              <Image src="/logos/circle-logo.avif" alt="Circle" width={160} height={40} className="h-10 w-auto" />
            </a>
          </StaggerCards>
        </div>
      </section>

      {/* ===== SECTION 6: FAQ ===== */}
      <FaqSection />

      {/* ===== SECTION 7: CTA — Fullscreen ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#050505] via-[#080a14] to-[#050505] px-6 md:px-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-blue-900/15 blur-[180px]" />

        <ScrollReveal variant="scale" className="relative mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold leading-snug text-white md:text-5xl">
            A lending where your collateral never stops working.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/40">
            Yield-bearing collateral. Borrow USDC across multiple chains.<br />All on NuroFi.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
          >
            Launch App
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </ScrollReveal>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#050505] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:flex-row">
          <div className="flex flex-1 items-center gap-2.5 sm:justify-start">
            <Image src="/logos/nurologo-tg.png" alt="Nurofi" width={24} height={24} className="rounded-md" />
            <span className="text-sm font-semibold text-white/50">NuroFi</span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-8">
            <a href="#" className="text-xs uppercase tracking-wider text-white/30 transition-colors hover:text-white/60">Docs</a>
            <a href="#faq" className="text-xs uppercase tracking-wider text-white/30 transition-colors hover:text-white/60">FAQ</a>
            <a href="https://x.com/NuroFiLend" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-white/30 transition-colors hover:text-white/60">Twitter</a>
            <a href="https://github.com/Nuro-Fi" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-white/30 transition-colors hover:text-white/60">GitHub</a>
          </div>
          <div className="flex flex-1 items-center justify-end gap-5">
            <Image src="/logos/Arc_Logo_WhiteGradient.svg" alt="Arc" width={45} height={14} className="opacity-30" />
            <Image src="/logos/LayerZero_logo.svg" alt="LayerZero" width={70} height={18} className="opacity-30" />
            <Image src="/logos/circle-logo.avif" alt="Circle" width={70} height={18} className="h-[18px] w-auto opacity-30" />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl text-center">
          <p className="text-xs text-white/20">&copy; 2026 Nurofi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
