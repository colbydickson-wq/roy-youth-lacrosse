import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, Card, CtaBand } from "@/components/ui";
export const metadata: Metadata = { title: "Lacrosse Equipment Guide for Beginners", description: "What gear a new lacrosse player needs, what to look for, and where to buy it near Roy, Utah." };
export default function Page() {
  const e = s.equipment;
  return <><PageHeader title="Equipment" sub="What your child needs, what's nice to have, and where to get it." />
    <Section><p className="rounded-2xl bg-gold/30 p-4 font-semibold">{e.note}</p></Section>
    {["Required", "Recommended", "Optional"].map(lv => <Section key={lv} dark={lv === "Recommended"}><h2 className="mb-6 text-3xl text-gold md:text-5xl">{lv}</h2><div className="grid gap-5 md:grid-cols-2">{e.items.filter(i => i.level === lv).map(i => <Card key={i.name} title={i.name} tag={lv}><p><b>What it does:</b> {i.does}</p><p><b>Beginner needs it?</b> {i.beginner}</p><p><b>What to look for:</b> {i.lookFor}</p><p><b>Approx. price:</b> {i.price}</p></Card>)}</div></Section>)}
    <Section><h2 className="mb-6 text-3xl md:text-5xl">Where to Buy</h2><div className="grid gap-5 md:grid-cols-2">{e.where.map(w => <Card key={w.category} title={w.category}>{w.stores.map(st => <p key={st.name}><a href={st.url} className="font-bold underline">{st.name}</a> {st.note}</p>)}</Card>)}</div></Section><CtaBand /></>;
}
