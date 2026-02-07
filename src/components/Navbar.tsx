import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-8 rounded-full border border-white/15 bg-white/6 py-3 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
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
          <a
            href="#how-it-works"
            className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white"
          >
            How It Works
          </a>
          <a
            href="#ecosystem"
            className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white"
          >
            Integrations
          </a>
          <a
            href="#faq"
            className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white"
          >
            FAQ
          </a>
        </div>
        <a
          href="https://app.nurofi.xyz/"
          target="_blank"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-white/90"
        >
          Launch App
        </a>
      </div>
    </nav>
  );
}
