import Link from "next/link";
import { siteData as s } from "@/data/siteData";
import { Countdown } from "./client";
export { Navbar } from "./client";
const cx = (...a: (string | false)[]) => a.filter(Boolean).join(" ");
export function Button({ href, children, variant = "gold" }: { href: string; children: React.ReactNode; variant?: "gold" | "dark" | "outline" }) {
  const ext = href.startsWith("http") || href === "#";
  const c = cx("inline-block rounded-full px-7 py-3.5 text-center font-bold transition hover:scale-105", variant === "gold" && "bg-gold text-ink", variant === "dark" && "bg-ink text-gold", variant === "outline" && "border-2 border-white text-white");
  return ext ? <a href={href} className={c} target={href === "#" ? undefined : "_blank"} rel="noopener">{children}</a> : <Link href={href} className={c}>{children}</Link>;
}
export const RegisterButton = ({ variant }: { variant?: "gold" | "dark" }) => <Button href={s.event.registrationUrl} variant={variant}>Register for {s.event.name}</Button>;
export function Banner() {
  if (!s.announcements.length) return null;
  return <div className="bg-gold px-4 py-2 text-center text-sm font-bold">{s.announcements[0]}</div>;
}
export const Section = ({ children, dark, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) =>
  <section className={cx(dark ? "bg-ink text-white" : "", "px-4 py-16 md:py-20")}><div className={cx("mx-auto max-w-6xl", className)}>{children}</div></section>;
export const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) =>
  <div className="mb-10"><h2 className="text-4xl md:text-5xl">{children}</h2>{sub && <p className="mt-3 max-w-2xl text-lg opacity-80">{sub}</p>}</div>;
export const Card = ({ icon, title, children }: { icon?: string; title: string; children: React.ReactNode }) =>
  <div className="rounded-3xl bg-white p-6 text-ink shadow-md transition hover:-translate-y-1 hover:shadow-xl">{icon && <div className="mb-3 text-4xl">{icon}</div>}<h3 className="mb-2 text-2xl">{title}</h3><p className="opacity-80">{children}</p></div>;
export const List = ({ items }: { items: string[] }) => <ul className="space-y-2">{items.map(i => <li key={i} className="flex gap-2"><span className="text-gold">●</span>{i}</li>)}</ul>;
export function EventInfo() {
  const e = s.event;
  return <div className="grid gap-3 text-lg sm:grid-cols-3">{[["📅", e.date], ["🕕", e.time], ["📍", e.location]].map(([i, t]) => <div key={t} className="rounded-2xl bg-white/10 px-4 py-3">{i} {t}</div>)}</div>;
}
export function Hero() {
  const img = s.images.hero;
  return <section className="relative overflow-hidden bg-ink text-white" style={img ? { backgroundImage: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.8)),url(${img})`, backgroundSize: "cover", backgroundPosition: "center" } : { backgroundImage: "radial-gradient(circle at 80% 20%,#F5B70055,transparent 50%)" }}>
    <div className="up mx-auto max-w-6xl px-4 py-20 md:py-28">
      <p className="mb-3 font-bold uppercase tracking-widest text-gold">{s.org.city} · {s.event.name}</p>
      <h1 className="text-6xl leading-none md:text-8xl">Try <span className="text-gold">Lacrosse</span></h1>
      <p className="mt-5 max-w-2xl text-xl md:text-2xl">{s.org.tagline}</p>
      <div className="mt-6 max-w-2xl"><EventInfo /></div>
      <Countdown />
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><RegisterButton /><Button href="/about-lacrosse" variant="outline">Learn About Lacrosse</Button></div>
    </div></section>;
}
export function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return <section className="bg-ink px-4 py-16 text-white"><div className="mx-auto max-w-6xl"><h1 className="text-5xl text-gold md:text-7xl">{title}</h1>{sub && <p className="mt-3 max-w-2xl text-xl">{sub}</p>}</div></section>;
}
export function Timeline() {
  return <ol className="space-y-4 border-l-4 border-gold pl-6">{s.timeline.map(t => <li key={t.time} className="relative"><span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-gold ring-4 ring-cream" /><div className="font-display text-2xl text-gold">{t.time}</div><div className="font-bold">{t.title}</div><div className="opacity-75">{t.text}</div></li>)}</ol>;
}
export function Faq({ limit }: { limit?: number }) {
  return <div className="space-y-3">{s.faq.slice(0, limit).map(f => <details key={f.q} className="group rounded-2xl bg-white p-5 shadow"><summary className="flex cursor-pointer list-none justify-between text-lg font-bold">{f.q}<span className="text-gold transition group-open:rotate-45">＋</span></summary><p className="mt-3 opacity-80">{f.a}</p></details>)}</div>;
}
export function CtaBand() {
  return <section className="bg-gold px-4 py-16 text-center"><h2 className="text-4xl md:text-6xl">Ready to Give Lacrosse a Try?</h2><p className="mx-auto mt-3 max-w-xl text-lg">{s.event.name} · {s.event.date} · {s.event.location}</p><div className="mt-6"><RegisterButton variant="dark" /></div></section>;
}
export function Footer() {
  return <footer className="bg-ink px-4 py-12 text-white"><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
    <div><div className="font-display text-2xl text-gold">{s.org.name}</div><p className="mt-2 opacity-70">Introducing {s.org.city} kids to lacrosse.</p></div>
    <div className="flex flex-col gap-1">{s.nav.map(([h, l]) => <Link key={h} href={h} className="hover:text-gold">{l}</Link>)}</div>
    <div className="space-y-1"><p>{s.org.email}</p><p>{s.org.phone}</p>{s.org.social.map(x => <a key={x.label} href={x.url} className="mr-3 text-gold">{x.label}</a>)}</div>
  </div><p className="mt-8 text-center text-sm opacity-50">© {new Date().getFullYear()} {s.org.name}</p></footer>;
}
