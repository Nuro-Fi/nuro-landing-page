import ScrollReveal from "@/components/ScrollReveal";

export default function CtaSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-b from-[#050505] via-[#080a14] to-[#050505] px-6 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-blue-900/15 blur-[180px]" />

      <ScrollReveal
        variant="scale"
        className="relative mx-auto max-w-4xl text-center"
      >
        <h2 className="mb-6 text-3xl font-bold leading-snug text-white md:text-5xl">
          A lending where your collateral never stops working.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-white/40">
          Yield-bearing collateral. Borrow USDC across multiple chains.
          <br />
          All on NuroFi.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
        >
          Launch App
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </ScrollReveal>
    </section>
  );
}
