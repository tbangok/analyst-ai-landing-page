"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

// import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-gray-900 fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b border-gray-400 shadow-sm"
      )}
    >
      <a href="/">
        <div className="text-gray-200 text-2xl font-bold font-mono leading-tight tracking-tighter">
          AnalystAI
        </div>
      </a>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button variant="outline">Join waiting list</Button>
      </div>
    </div>
  );
};
