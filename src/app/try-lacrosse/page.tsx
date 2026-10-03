import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { PageHeader, Section, Button } from "@/components/ui";
export const metadata: Metadata = { title: "Try Lacrosse Night", description: "Just tried lacrosse in Roy, Utah? Here's what to do next." };
export default function Page() {
  return <><PageHeader title={s.event.blurb} sub={`${s.event.name}: next steps for new families.`} /><Section><div className="mx-auto grid max-w-md gap-3"><Button href="/why-lacrosse" big>Why Lacrosse</Button><Button href="/equipment" big variant="dark">Equipment</Button><Button href="/registration" big>Registration</Button><Button href="/parents" big variant="dark">Parents</Button></div></Section></>;
}
