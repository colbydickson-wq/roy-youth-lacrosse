import Link from "next/link";
import { siteData as s } from "@/data/siteData";
import { Hero, Section, Title, CtaBand } from "@/components/ui";
export default function Home() {
  return <>
    <Hero />
    <Section><Title sub="Six simple steps from first try to first game.">Start Here</Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{s.startHere.map((x, i) => <Link key={x.title} href={x.href} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md"><span className="font-display text-5xl text-gold">{i + 1}</span><span><b className="block text-xl">{x.title}</b><span className="opacity-75">{x.text}</span></span></Link>)}</div></Section>
    <CtaBand />
  </>;
}
