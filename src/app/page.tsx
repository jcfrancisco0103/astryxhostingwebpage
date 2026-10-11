import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Plans } from "@/components/plans";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Steps } from "@/components/steps";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Plans />
        <Features />
        <Steps />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
