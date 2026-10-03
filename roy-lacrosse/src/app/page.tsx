import { siteData as s } from "@/data/siteData";
import { Hero, Section, Title, Card, CtaBand, Button } from "@/components/ui";
export default function Home() {
  return <>
    <Hero />
    <Section><Title>Why Try Lacrosse?</Title><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{s.why.map(w => <Card key={w.title} icon={w.icon} title={w.title}>{w.text}</Card>)}</div>
      <p className="mt-10 max-w-3xl text-lg"><b>What is lacrosse?</b> {s.about.what}</p></Section>
    <Section dark><div className="text-center"><h2 className="text-4xl text-gold md:text-6xl">Never Played Before?</h2><p className="mx-auto mt-4 max-w-2xl text-xl">That&apos;s exactly who we&apos;re looking for. No experience necessary. Come learn the basics, meet other kids, and see if lacrosse is right for you.</p><div className="mt-6"><Button href="/try-lacrosse">See What to Expect</Button></div></div></Section>
    <Section><Title sub="Find your age group.">Who Can Play?</Title><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{s.ageGroups.map(a => <div key={a.name} className="rounded-3xl border-4 border-gold bg-white p-6 text-center"><div className="font-display text-3xl">{a.name}</div><div className="text-xl font-bold text-gold">{a.ages}</div><p className="mt-2 opacity-70">{a.note}</p></div>)}</div></Section>
    <CtaBand />
  </>;
}
