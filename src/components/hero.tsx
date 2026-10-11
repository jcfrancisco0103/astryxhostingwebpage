"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { PANEL_URL } from "@/lib/plans";

const promises = ["Fast", "Reliable", "Affordable"];

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            {...rise(0.05)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7ad7ff]/30 bg-[#7ad7ff]/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[#b7e9ff] uppercase"
          >
            Philippines Minecraft hosting
          </motion.p>
          <motion.h1
            {...rise(0.12)}
            className="font-heading text-5xl leading-[0.95] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Your world.
            <br />
            Our priority.
          </motion.h1>
          <motion.p {...rise(0.2)} className="mt-5 max-w-xl text-lg leading-relaxed text-[#c5d4ea]">
            Astryx Hosting gives you a Minecraft server that keeps up when your friends show up.
            DDoS protection, NVMe storage, free backups, and a panel that is ready when you are.
          </motion.p>
          <motion.ul {...rise(0.28)} className="mt-6 flex flex-wrap gap-2">
            {promises.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold tracking-wide text-white"
              >
                {item}
              </li>
            ))}
          </motion.ul>
          <motion.div {...rise(0.36)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#plans" />}
              className="h-11 px-5 text-sm"
            >
              See the plans
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href={PANEL_URL} />}
              className="h-11 border-white/15 bg-white/5 px-5 text-sm text-white hover:bg-white/10"
            >
              Open the panel
            </Button>
          </motion.div>
        </div>

        <motion.div {...rise(0.22)} className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(122,215,255,0.28),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(160,90,220,0.28),transparent_50%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1730]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LogoMark className="size-12" />
                <div>
                  <p className="font-heading text-sm font-extrabold tracking-[0.16em] text-white">
                    ASTRYXHOSTING
                  </p>
                  <p className="text-xs tracking-[0.14em] text-[#9eb4d0]">BUILD BIGGER. PLAY BETTER.</p>
                </div>
              </div>
              <span className="rounded-full bg-[#7ad7ff]/15 px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#9be4ff] uppercase">
                Wolf
              </span>
            </div>
            <p className="mt-8 font-heading text-5xl font-extrabold text-white">
              <span className="font-peso">₱</span>349
              <span className="ml-1 text-base font-semibold text-[#9eb4d0]">/mo</span>
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
              {[
                ["RAM", "6 GB"],
                ["CPU", "2.5 vCores"],
                ["Disk", "20 GB"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                  <dt className="text-[11px] tracking-[0.14em] text-[#8eabc8] uppercase">{label}</dt>
                  <dd className="mt-1 font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm text-[#b7c8de]">
              Intel Xeon Gold. A regular group that stays online.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
