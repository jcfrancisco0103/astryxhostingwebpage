import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { PANEL_URL, steps } from "@/lib/plans";

export function Steps() {
  return (
    <section id="start" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.18em] text-[#7ad7ff] uppercase">Get started</p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            From a plan to a world.
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08}>
              <li className="h-full list-none rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-6">
                <p className="font-heading text-3xl font-extrabold text-[#7ad7ff]">{step.n}</p>
                <h3 className="mt-4 font-heading text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b7c8de]">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#7ad7ff]/25 bg-[#10203c] p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-heading text-2xl font-extrabold text-white">Build bigger. Play better.</p>
              <p className="mt-1 text-sm text-[#b7c8de]">
                The panel is at panel.astryxhosting.fun.
              </p>
            </div>
            <Button nativeButton={false} render={<a href={PANEL_URL} />} className="h-11 px-5">
              Visit the web panel
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
