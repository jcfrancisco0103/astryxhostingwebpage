"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-heading text-3xl font-extrabold text-white">The page hit a snag.</p>
      <p className="max-w-md text-sm text-[#b7c8de]">
        Refresh and try again. If it keeps happening, open the panel and message support.
      </p>
      <Button className="h-10 px-4" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
