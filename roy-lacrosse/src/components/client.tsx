"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { siteData as s } from "@/data/siteData";
const links = s.nav;
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-ink text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-display text-xl uppercase tracking-wider text-gold">{s.org.name}</Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex">
          {links.map(([h, l]) => <Link key={h} href={h} className="hover:text-gold">{l}</Link>)}
          <Link href="/try-lacrosse" className="rounded-full bg-gold px-5 py-2 font-bold text-ink transition hover:scale-105">TRY LACROSSE</Link>
        </nav>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="text-3xl lg:hidden">{open ? "✕" : "☰"}</button>
      </div>
      {open && <div className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 lg:hidden">
        {links.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-lg font-semibold">{l}</Link>)}
        <Link href="/try-lacrosse" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gold py-3 text-center font-bold text-ink">TRY LACROSSE</Link>
      </div>}
    </header>
  );
}
export function Countdown() {
  const target = new Date(`${s.event.date} ${s.event.startTime}`).getTime();
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  if (now === null || isNaN(target) || target < now) return null;
  const d = target - now, parts = [["Days", Math.floor(d / 864e5)], ["Hours", Math.floor(d / 36e5) % 24], ["Min", Math.floor(d / 6e4) % 60], ["Sec", Math.floor(d / 1e3) % 60]];
  return <div className="mt-6 flex gap-3">{parts.map(([l, v]) => <div key={l as string} className="w-16 rounded-2xl bg-white/10 py-2 text-center backdrop-blur"><div className="font-display text-3xl text-gold">{v}</div><div className="text-xs uppercase">{l}</div></div>)}</div>;
}
