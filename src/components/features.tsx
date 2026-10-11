import { HardDrive, Headphones, LayoutGrid, RotateCcw, Shield, Zap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { features } from "@/lib/plans";

const icons = [Zap, Shield, HardDrive, RotateCcw, LayoutGrid, Headphones];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.18em] text-[#c9a6ff] uppercase">Included</p>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            The same care on every plan.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={feature.title} delay={index * 0.05}>
                <article className="group h-full rounded-2xl border border-white/10 bg-[#0d1830]/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#7ad7ff]/40 hover:shadow-[0_16px_40px_rgba(8,20,48,0.45)]">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[#7ad7ff]/10 text-[#7ad7ff] transition duration-300 group-hover:bg-[#7ad7ff] group-hover:text-[#061018]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#b7c8de]">{feature.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
