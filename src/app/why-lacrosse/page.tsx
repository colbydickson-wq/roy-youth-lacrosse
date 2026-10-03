import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, Card, CtaBand } from "@/components/ui";
export const metadata: Metadata = { title: "Why Play Lacrosse?", description: "Why Roy, Utah kids play lacrosse: teamwork, fitness, coordination, confidence, and community." };
export default function Page() {
  return <><PageHeader title="Why Lacrosse?" sub="Here's why kids enjoy it, and what they can gain from it." />
    <Section><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{s.why.map(w => <Card key={w.title} icon={w.icon} title={w.title}><p>{w.text}</p></Card>)}</div></Section><CtaBand /></>;
}
