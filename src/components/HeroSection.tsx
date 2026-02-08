"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import ShinyText from "@/components/ShinyText";

const DarkVeil = dynamic(() => import("@/components/DarkVeil"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black/20" />,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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
      <div className="absolute inset-0 z-1 bg-black/45" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center md:px-10">
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

        <a
          href="https://nuro-fi.gitbook.io/nuro-fi-docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          View Docs
        </a>

        <div className="relative mx-auto mt-16 h-[280px] w-full max-w-5xl md:h-[320px]">
          <div className="pointer-events-none absolute left-[5%] top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="animate-coin-left">
              <Image
                src="/logos/eurc-logos/eurc-logo-left.avif"
                alt="EURC"
                width={300}
                height={300}
                className="opacity-70 drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-coin-center">
              <Image
                src="/logos/usyc-logos/nurofi-usyc-logo.png"
                alt="USYC"
                width={240}
                height={240}
                className="drop-shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/25 blur-[100px]" />
          </div>
          <div className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="animate-coin-right">
              <Image
                src="/logos/usdc-logos/nurofi-usdc-logo.png"
                alt="USDC"
                width={200}
                height={200}
                className="opacity-70 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-2 h-32 w-full bg-linear-to-t from-[#050505] to-transparent" />
    </section>
  );
}
