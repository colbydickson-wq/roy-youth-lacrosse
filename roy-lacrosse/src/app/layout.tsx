import "./globals.css";
import type { Metadata } from "next";
import { siteData as s } from "@/data/siteData";
import { Navbar, Footer, Banner } from "@/components/ui";
export const metadata: Metadata = { title: { default: `${s.org.name} | Try Lacrosse in Roy, Utah`, template: `%s | ${s.org.name}` }, description: s.seo.description, keywords: s.seo.keywords };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Banner /><Navbar /><main>{children}</main><Footer /></body></html>;
}
