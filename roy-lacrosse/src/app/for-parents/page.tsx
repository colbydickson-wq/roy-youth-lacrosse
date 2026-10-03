import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, List, CtaBand } from "@/components/ui";
export const metadata: Metadata = { title: "For Parents: Safety, Cost & Equipment", description: "Answers for Roy, Utah parents: is lacrosse safe, what does it cost, what gear is needed." };
const B = ({ t, children }: { t: string; children: React.ReactNode }) => <div className="rounded-3xl bg-white p-6 shadow"><h2 className="mb-3 text-3xl">{t}</h2>{children}</div>;
export default function Page() {
  const p = s.parents;
  return <>
    <PageHeader title="For Parents" sub="Honest answers to the questions you're probably asking." />
    <Section className="grid gap-6 md:grid-cols-2">
      <B t="Is lacrosse safe?"><p>{p.safety}</p></B>
      <B t="Does my child need experience?"><p className="font-display text-4xl text-gold">NO.</p><p>Everyone starts as a beginner.</p></B>
      <B t="Does my child need equipment?"><p className="mb-2">{p.equipmentProvided}</p><p className="mb-2 font-bold">For the season:</p><List items={p.equipmentRequired} /></B>
      <B t="How much does it cost?"><div className="space-y-2">{p.costs.map(c => <div key={c.item} className="flex justify-between border-b pb-1"><span>{c.item}</span><b>{c.price}</b></div>)}</div></B>
      <B t="What should my child wear?"><List items={p.wear} /></B>
      <B t="What happens after?"><List items={p.after} /></B>
    </Section>
    <CtaBand />
  </>;
}
