"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { id: "how-it-works", label: "How It Works" },
  { id: "ecosystem", label: "Integrations" },
  { id: "faq", label: "FAQ" },
];

const allSections = ["hero", ...navItems.map((item) => item.id)];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      let currentSection = "";

      for (const sectionId of allSections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = sectionId === "hero" ? "" : sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-2 pt-4 pointer-events-none">
      <div className="px-2 pointer-events-auto flex items-center gap-8 rounded-full border border-white/15 bg-white/6 py-2 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logos/nurologo-tg.png"
            alt="Nurofi"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight text-white">
            NuroFi
          </span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-xs font-medium uppercase tracking-wider transition-colors hover:text-white ${
                activeSection === item.id ? "text-white" : "text-white/50"
              }`}
            >
              {item.label}
            </a>
          ))}
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
