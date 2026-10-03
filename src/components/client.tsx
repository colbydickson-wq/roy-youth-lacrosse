"use client";
import { useState } from "react";
import Link from "next/link";
import { siteData as s } from "@/data/siteData";
const reg = s.registration.url !== "#" ? s.registration.url : "/registration";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const R = <a href={reg} className="rounded-full bg-gold px-5 py-2 font-bold text-ink">REGISTER NOW</a>;
  return (
    <header className="sticky top-0 z-50 bg-ink text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-display text-lg uppercase tracking-wider text-gold">{s.org.name}</Link>
        <nav className="hidden items-center gap-4 text-sm font-semibold xl:flex">
          {s.nav.map(([h, l]) => <Link key={h} href={h} className="hover:text-gold">{l}</Link>)}{R}
        </nav>
        <div className="flex items-center gap-3 xl:hidden">{R}<button aria-label="Menu" onClick={() => setOpen(!open)} className="text-3xl">{open ? "✕" : "☰"}</button></div>
      </div>
      {open && <div className="flex flex-col border-t border-white/10 px-4 pb-4 xl:hidden">
        {s.nav.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-lg font-semibold">{l}</Link>)}
      </div>}
    </header>
  );
}
