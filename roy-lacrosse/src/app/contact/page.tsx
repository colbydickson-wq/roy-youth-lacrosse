import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, RegisterButton } from "@/components/ui";
export const metadata: Metadata = { title: "Contact Roy Youth Lacrosse", description: "Questions about youth lacrosse in Roy, Utah? Get in touch." };
export default function Page() {
  const f = "w-full rounded-xl border-2 border-ink/10 p-3";
  return <>
    <PageHeader title="Contact" sub="We love questions from new families." />
    <Section className="grid gap-10 md:grid-cols-2">
      <div className="space-y-3 text-lg"><p><b>{s.org.contactPerson}</b></p><p>{s.org.email}</p><p>{s.org.phone}</p><p>{s.event.location}<br />{s.event.address}</p><p>{s.org.social.map(x => <a key={x.label} href={x.url} className="mr-4 font-bold underline">{x.label}</a>)}</p><RegisterButton variant="dark" /></div>
      {/* Simple form: opens the visitor's email app. Swap for Formspree etc. later. */}
      <form action={`mailto:${s.org.email.replace("[PLACEHOLDER] ", "")}`} method="post" encType="text/plain" className="space-y-3 rounded-3xl bg-white p-6 shadow">
        <input name="name" placeholder="Your name" className={f} required /><input name="email" type="email" placeholder="Your email" className={f} required /><textarea name="message" rows={4} placeholder="Your question" className={f} required />
        <button className="rounded-full bg-ink px-7 py-3 font-bold text-gold">Send</button>
      </form>
    </Section>
  </>;
}
