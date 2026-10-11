"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPeso, PANEL_URL, series, type Series } from "@/lib/plans";

export function Plans() {
  const [active, setActive] = useState<Series["id"]>("xeon");
  const reduce = useReducedMotion();
  const current = series.find((item) => item.id === active) ?? series[0];

  return (
    <section id="plans" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.18em] text-[#7ad7ff] uppercase">Plans</p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Two series. Prices that stay affordable.
          </h2>
          <p className="mt-4 text-lg text-[#c5d4ea]">
            Monthly, in Philippine pesos. Pick the hardware line, then the size of the world you
            actually run.
          </p>
        </div>

        <div
          className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1"
          role="tablist"
          aria-label="Hardware series"
        >
          {series.map((item) => {
            const selected = item.id === active;
            return (
              <Button
                key={item.id}
                role="tab"
                aria-selected={selected}
                variant={selected ? "default" : "ghost"}
                className={
                  selected
                    ? "h-10 rounded-full px-4"
                    : "h-10 rounded-full px-4 text-[#d5e4f6] hover:bg-white/10 hover:text-white"
                }
                onClick={() => setActive(item.id)}
              >
                {item.name}
              </Button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-6 max-w-2xl text-[#b7c8de]">
              <span className="font-semibold text-white">{current.kicker}. </span>
              {current.summary}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {current.plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : index * 0.05, duration: 0.4 }}
                >
                  <Card
                    className={
                      plan.balanced
                        ? "h-full overflow-visible border-[#7ad7ff]/40 bg-[#10203c] shadow-[0_0_40px_rgba(62,180,255,0.12)] ring-[#7ad7ff]/40"
                        : "h-full overflow-visible border-white/10 bg-[#0d1830]/90"
                    }
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="font-heading text-[clamp(0.95rem,2.2vw,1.15rem)] leading-tight font-extrabold tracking-wide text-balance text-white uppercase xl:text-[clamp(0.72rem,0.85vw,0.95rem)] xl:tracking-normal">
                          {plan.name}
                        </CardTitle>
                        {plan.balanced ? (
                          <Badge className="bg-[#7ad7ff] text-[#061018]">Balanced</Badge>
                        ) : null}
                      </div>
                      <CardDescription className="text-[#9eb4d0]">{plan.fit}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-heading text-4xl font-extrabold text-white">
                        <span className="font-peso">₱</span>
                        {formatPeso(plan.price)}
                        <span className="ml-1 font-sans text-sm font-semibold text-[#9eb4d0]">/mo</span>
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-[#d5e4f6]">
                        <li>{plan.ram} RAM</li>
                        <li>{plan.cpu}</li>
                        <li>{plan.storage}</li>
                      </ul>
                    </CardContent>
                    <CardFooter className="border-white/10 bg-transparent">
                      <Button
                        nativeButton={false}
                        render={<a href={PANEL_URL} />}
                        className="h-9 w-full"
                        variant={plan.balanced ? "default" : "outline"}
                      >
                        Get this plan
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
