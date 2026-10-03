import type { Metadata } from "next";
import { PageHeader, Section, Faq } from "@/components/ui";
export const metadata: Metadata = { title: "FAQ: Roy Youth Lacrosse", description: "Common questions about youth lacrosse in Roy, Utah." };
export default function Page() { return <><PageHeader title="FAQ" /><Section className="max-w-3xl"><Faq /></Section></>; }
