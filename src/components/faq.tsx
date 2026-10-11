import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/plans";

export function Faq() {
  return (
    <section id="questions" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.18em] text-[#c9a6ff] uppercase">Questions</p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-white">
            Before you spin one up.
          </h2>
          <p className="mt-4 text-[#b7c8de]">
            Built for players in the Philippines. If your world needs a closer look, message support
            from the panel.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion className="rounded-2xl border border-white/10 bg-[#0d1830]/80 px-4">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-white/10">
                <AccordionTrigger className="py-4 text-base text-white hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#b7c8de]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
