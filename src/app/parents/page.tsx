import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, Faq, CtaBand } from "@/components/ui";
export const metadata: Metadata = { title: "New Lacrosse Parent Guide", description: "Answers for new lacrosse parents in Roy, Utah: safety, cost, practices, games, and what to expect." };
export default function Page() {
  return <><PageHeader title="New Lacrosse Parent Guide" sub="Straight answers to what new lacrosse parents ask most." /><Section className="max-w-3xl"><Faq items={s.parents} /></Section><CtaBand /></>;
}
