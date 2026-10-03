import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, Card, List, Faq, CtaBand } from "@/components/ui";
export const metadata: Metadata = { title: "Learn Lacrosse: A Beginner's Guide", description: "How lacrosse works, in plain English: scoring, rules, positions, and terms for new Roy, Utah families." };
export default function Page() {
  const l = s.learn;
  return <><PageHeader title="Learn Lacrosse" sub="Everything a beginner needs, in about two minutes." />
    <Section className="grid gap-6 md:grid-cols-2"><Card title="What is it?"><p>{l.what}</p></Card><Card title="How a game works"><p>{l.game}</p></Card><Card title="How teams score"><p>{l.scoring}</p></Card><Card title="How long are games?"><p>{l.length}</p></Card></Section>
    <Section dark><h2 className="mb-6 text-3xl text-gold md:text-5xl">The Four Positions</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{l.positions.map(p => <Card key={p.name} icon={p.icon} title={p.name}><p>{p.text}</p></Card>)}</div></Section>
    <Section className="grid gap-8 md:grid-cols-2"><div><h2 className="mb-4 text-3xl">Basic Rules</h2><List items={l.rules} /></div><div><h2 className="mb-4 text-3xl">Common Terms</h2><Faq items={l.terms.map(t => ({ q: t.term, a: t.def }))} /></div></Section><CtaBand /></>;
}
