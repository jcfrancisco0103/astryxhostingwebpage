import { LogoMark } from "@/components/logo";
import { PANEL_URL } from "@/lib/plans";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="size-10" />
            <div>
              <p className="font-heading text-sm font-extrabold tracking-[0.16em] text-white">
                ASTRYXHOSTING
              </p>
              <p className="text-xs tracking-[0.12em] text-[#9eb4d0]">YOUR WORLD. OUR PRIORITY.</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-[#9eb4d0]">
            Fast. Reliable. Affordable. Minecraft servers for players in the Philippines.
          </p>
        </div>
        <div className="text-sm text-[#c5d4ea]">
          <a href={PANEL_URL} className="font-semibold text-[#7ad7ff] hover:text-white">
            panel.astryxhosting.fun
          </a>
          <p className="mt-2 text-xs tracking-[0.14em] text-[#8eabc8] uppercase">
            Fast / Reliable / Affordable
          </p>
        </div>
      </div>
    </footer>
  );
}
