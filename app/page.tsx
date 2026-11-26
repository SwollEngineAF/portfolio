import { Capabilities } from "@/components/dossier/capabilities";
import { CareerDossier } from "@/components/dossier/career-dossier";
import { Hero } from "@/components/dossier/hero";
import { SiteFooter } from "@/components/dossier/site-footer";
import { SiteHeader } from "@/components/dossier/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <Hero />
        <Capabilities />
        <CareerDossier />
        <SiteFooter />
      </main>
    </>
  );
}
