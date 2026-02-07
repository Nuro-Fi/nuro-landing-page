import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerCards from "@/components/StaggerCards";

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-linear-to-b from-[#050505] via-[#060d0a] to-[#050505] px-6 py-28 md:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-emerald-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-5xl">
            Built on the Best
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center text-lg text-white/40">
            Powered by industry-leading protocols for security,
            interoperability, and performance.
          </p>
        </ScrollReveal>

        <StaggerCards
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
          stagger={0.2}
        >
          <a
            href="https://www.arc.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="stagger-card flex items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-8 py-12 transition-all hover:border-white/20 hover:bg-white/6"
          >
            <Image
              src="/logos/Arc_Logo_WhiteGradient.svg"
              alt="Arc"
              width={120}
              height={40}
            />
          </a>

          <a
            href="https://layerzero.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="stagger-card flex items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-8 py-12 transition-all hover:border-white/20 hover:bg-white/6"
          >
            <Image
              src="/logos/LayerZero_logo.svg"
              alt="LayerZero"
              width={160}
              height={40}
            />
          </a>

          <a
            href="https://www.circle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="stagger-card flex items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-8 py-12 transition-all hover:border-white/20 hover:bg-white/6"
          >
            <Image
              src="/logos/circle-logo.avif"
              alt="Circle"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </StaggerCards>
      </div>
    </section>
  );
}
