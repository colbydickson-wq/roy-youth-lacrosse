import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, Card, RegisterButton } from "@/components/ui";
export const metadata: Metadata = { title: "Register for Roy Youth Lacrosse", description: "Registration dates, fees, age groups, practice schedule, and sign-up link for Roy Youth Lacrosse in Roy, Utah." };
export default function Page() {
  const r = s.registration;
  const info = [["Registration Dates", r.dates], ["Season Dates", r.seasonDates], ["Practice Schedule", r.practiceSchedule], ["Practice Location", r.practiceLocation], ["Game Schedule", r.gameSchedule]];
  return <><PageHeader title="Registration" sub="When and where to sign your child up." />
    <Section><div className="mx-auto max-w-md"><RegisterButton big /></div></Section>
    <Section className="grid gap-5 md:grid-cols-2">{info.map(([t, v]) => <Card key={t} title={t}><p>{v}</p></Card>)}
      <Card title="Fees">{r.fees.map(f => <p key={f.item} className="flex justify-between border-b pb-1"><span>{f.item}</span><b>{f.price}</b></p>)}</Card>
      <Card title="Contact"><p>{s.org.contactPerson}</p><p>{s.org.email}</p><p>{s.org.phone}</p></Card></Section>
    <Section dark><h2 className="mb-6 text-3xl text-gold md:text-5xl">Age Groups</h2><div className="grid gap-4 sm:grid-cols-3">{s.ageGroups.map(a => <Card key={a.name} title={a.name}><p className="font-bold">{a.ages}</p><p>{a.note}</p></Card>)}</div></Section>
    <Section><p>{r.notes}</p></Section></>;
}
