import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, Title, Timeline, List, Faq, RegisterButton, EventInfo, Button } from "@/components/ui";
export const metadata: Metadata = { title: "Try Lacrosse Night in Roy, Utah", description: `Join ${s.event.name} on ${s.event.date} in Roy, Utah. No lacrosse experience required.` };
export default function Page() {
  return <>
    <PageHeader title={s.event.name} sub="NO LACROSSE EXPERIENCE REQUIRED." />
    <Section><div className="rounded-3xl bg-ink p-6 text-white"><EventInfo /><p className="mt-3 opacity-80">{s.event.address}</p><div className="mt-5 flex flex-col gap-3 sm:flex-row"><RegisterButton /><Button href={s.event.mapUrl} variant="outline">Open Map</Button></div></div></Section>
    <Section className="grid gap-12 md:grid-cols-2"><div><Title>The Night</Title><Timeline /></div>
      <div className="space-y-10"><div><h3 className="mb-3 text-3xl">What to Expect</h3><List items={s.expect} /></div><div><h3 className="mb-3 text-3xl">What to Bring</h3><List items={s.toBring} /></div><div><h3 className="mb-3 text-3xl">Who Should Attend</h3><p>{s.whoShouldAttend}</p></div></div></Section>
    <Section><Title>Questions?</Title><Faq limit={6} /></Section>
  </>;
}
