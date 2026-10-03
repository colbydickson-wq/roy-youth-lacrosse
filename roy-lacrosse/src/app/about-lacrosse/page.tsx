import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, Title, Card, List, CtaBand } from "@/components/ui";
export const metadata: Metadata = { title: "What Is Lacrosse? A Beginner's Guide", description: "A simple, beginner-friendly guide to lacrosse for Roy, Utah families." };
export default function Page() {
  const a = s.about;
  return <>
    <PageHeader title="About Lacrosse" sub="Everything a beginner needs, in plain English." />
    <Section className="grid gap-10 md:grid-cols-2"><div><h2 className="mb-3 text-3xl">What Is Lacrosse?</h2><p className="text-lg">{a.what}</p><h3 className="mb-2 mt-6 text-2xl">How Scoring Works</h3><p>{a.scoring}</p></div><div><h3 className="mb-3 text-2xl">Basic Rules</h3><List items={a.rules} /></div></Section>
    <Section dark><Title>Positions</Title><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{a.positions.map(p => <Card key={p.name} title={p.name}>{p.text}</Card>)}</div></Section>
    <Section className="grid gap-10 md:grid-cols-2"><div><h3 className="mb-3 text-3xl">What Players Do</h3><p className="text-lg">{a.doing}</p><p className="mt-4">{a.why}</p></div><div><h3 className="mb-3 text-3xl">Compared to Other Sports</h3><div className="space-y-3">{a.compare.map(c => <div key={c.sport} className="rounded-2xl bg-white p-4"><b>{c.sport}:</b> {c.text}</div>)}</div></div></Section>
    <CtaBand />
  </>;
}
