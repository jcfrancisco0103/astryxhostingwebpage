"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { PANEL_URL } from "@/lib/plans";

const links = [
  { href: "#plans", label: "Plans" },
  { href: "#features", label: "Included" },
  { href: "#start", label: "Get started" },
  { href: "#questions", label: "Questions" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#070b18]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoMark className="size-9" />
          <span className="font-heading text-sm font-extrabold tracking-[0.14em] text-white">
            ASTRYX
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-[#c5d4ea] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<a href={PANEL_URL} />}
            className="hidden h-9 px-3.5 md:inline-flex"
          >
            Open panel
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-2.5 text-sm text-[#d7e4f5] hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PANEL_URL}
                className="mt-1 rounded-lg bg-[#7ad7ff] px-3 py-2.5 text-center text-sm font-semibold text-[#061018]"
              >
                Open panel
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
