import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:flex-row">
        <div className="flex flex-1 items-center gap-2.5 sm:justify-start">
          <Image
            src="/logos/nurologo-tg.png"
            alt="Nurofi"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="text-sm font-semibold text-white/50">NuroFi</span>
        </div>
        <div className="flex flex-1 items-center justify-center gap-8">
          <a
            href="https://nuro-fi.gitbook.io/nuro-fi-docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-white/30 transition-colors hover:text-white/60"
          >
            Docs
          </a>
          <a
            href="#faq"
            className="text-xs uppercase tracking-wider text-white/30 transition-colors hover:text-white/60"
          >
            FAQ
          </a>
          <a
            href="https://x.com/NuroFiLend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-white/30 transition-colors hover:text-white/60"
          >
            Twitter
          </a>
          <a
            href="https://github.com/Nuro-Fi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-white/30 transition-colors hover:text-white/60"
          >
            GitHub
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end gap-5">
          <Image
            src="/logos/Arc_Logo_WhiteGradient.svg"
            alt="Arc"
            width={45}
            height={14}
            className="opacity-30"
          />
          <Image
            src="/logos/LayerZero_logo.svg"
            alt="LayerZero"
            width={70}
            height={18}
            className="opacity-30"
          />
          <Image
            src="/logos/circle-logo.avif"
            alt="Circle"
            width={70}
            height={18}
            className="h-[18px] w-auto opacity-30"
          />
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-center">
        <p className="text-xs text-white/20">
          &copy; 2026 Nurofi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
