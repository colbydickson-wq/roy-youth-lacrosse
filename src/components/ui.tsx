import Link from "next/link";
import { siteData as s } from "@/data/siteData";
export { Navbar } from "./client";
const cx = (...a: (string | false)[]) => a.filter(Boolean).join(" ");
export const regHref = s.registration.url !== "#" ? s.registration.url : "/registration";
export function Button({ href, children, variant = "gold", big }: { href: string; children: React.ReactNode; variant?: "gold" | "dark" | "outline"; big?: boolean }) {
  const ext = href.startsWith("http");
  const c = cx("block rounded-2xl px-7 text-center font-bold", big ? "py-5 text-xl" : "py-3.5 sm:inline-block", variant === "gold" && "bg-gold text-ink", variant === "dark" && "bg-ink text-gold", variant === "outline" && "border-2 border-white text-white");
  return ext ? <a href={href} className={c} target="_blank" rel="noopener">{children}</a> : <Link href={href} className={c}>{children}</Link>;
}
export const RegisterButton = ({ variant, big }: { variant?: "gold" | "dark"; big?: boolean }) => <Button href={regHref} variant={variant} big={big}>REGISTER NOW</Button>;
export function Banner() {
  if (!s.announcements.length) return null;
  return <div className="bg-gold px-4 py-2 text-center text-sm font-bold">{s.announcements[0]}</div>;
}
export const Section = ({ children, dark, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) =>
  <section className={cx(dark ? "bg-ink text-white" : "", "px-4 py-12 md:py-16")}><div className={cx("mx-auto max-w-6xl", className)}>{children}</div></section>;
export const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) =>
  <div className="mb-8"><h2 className="text-3xl md:text-5xl">{children}</h2>{sub && <p className="mt-3 max-w-2xl text-lg opacity-80">{sub}</p>}</div>;
export const Card = ({ icon, title, children, tag }: { icon?: string; title: string; children: React.ReactNode; tag?: string }) =>
  <div className="rounded-3xl bg-white p-6 text-ink shadow-md">{icon && <div className="mb-2 text-4xl">{icon}</div>}{tag && <span className="mb-2 inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase text-gold">{tag}</span>}<h3 className="mb-2 text-2xl">{title}</h3><div className="space-y-1 opacity-85">{children}</div></div>;
export const List = ({ items }: { items: string[] }) => <ul className="space-y-2">{items.map(i => <li key={i} className="flex gap-2"><span className="text-gold">●</span>{i}</li>)}</ul>;
export function Hero() {
  const img = s.images.hero;
  return <section className="bg-ink text-white" style={img ? { backgroundImage: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.85)),url(${img})`, backgroundSize: "cover", backgroundPosition: "center" } : { backgroundImage: "radial-gradient(circle at 85% 10%,#F5B70055,transparent 55%)" }}>
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-20">
      <p className="mb-2 font-bold uppercase tracking-widest text-gold">{s.org.city}</p>
      <h1 className="text-5xl leading-none md:text-7xl">Welcome to <span className="text-gold">{s.org.name}</span></h1>
      <p className="mt-4 text-xl md:text-2xl">{s.org.tagline}</p>
      <div className="mt-7 space-y-3"><Button href="/why-lacrosse" big>WHY LACROSSE?</Button><Button href="/equipment" big variant="outline">WHAT DO I NEED?</Button><Button href={regHref} big variant="outline">HOW DO I SIGN UP?</Button></div>
    </div></section>;
}
export const PageHeader = ({ title, sub }: { title: string; sub?: string }) =>
  <section className="bg-ink px-4 py-10 text-white md:py-14"><div className="mx-auto max-w-6xl"><h1 className="text-4xl text-gold md:text-6xl">{title}</h1>{sub && <p className="mt-3 max-w-2xl text-lg md:text-xl">{sub}</p>}</div></section>;
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return <div className="space-y-3">{items.map(f => <details key={f.q} className="group rounded-2xl bg-white p-5 shadow"><summary className="flex cursor-pointer list-none justify-between gap-3 text-lg font-bold">{f.q}<span className="text-gold transition group-open:rotate-45">＋</span></summary><p className="mt-3 opacity-80">{f.a}</p></details>)}</div>;
}
export const CtaBand = () => <section className="bg-gold px-4 py-12 text-center"><h2 className="text-3xl md:text-5xl">Ready to Get Your Child Playing?</h2><div className="mx-auto mt-5 max-w-sm"><RegisterButton variant="dark" big /></div></section>;
export function Footer() {
  return <footer className="bg-ink px-4 py-10 text-white"><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
    <div><div className="font-display text-2xl text-gold">{s.org.name}</div><p className="mt-2 opacity-70">Introducing {s.org.city} kids to lacrosse.</p></div>
    <div className="flex flex-col gap-1">{s.nav.map(([h, l]) => <Link key={h} href={h} className="hover:text-gold">{l}</Link>)}<Link href="/try-lacrosse" className="hover:text-gold">{s.event.name}</Link></div>
    <div className="space-y-1"><p>{s.org.email}</p><p>{s.org.phone}</p>{s.org.social.map(x => <a key={x.label} href={x.url} className="mr-3 text-gold">{x.label}</a>)}</div>
  </div><p className="mt-8 text-center text-sm opacity-50">© {new Date().getFullYear()} {s.org.name}</p></footer>;
}
