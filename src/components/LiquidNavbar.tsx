"use client";

import { Share, ChevronLeft, ChevronRight, Lock, RotateCcw } from "lucide-react";

export function LiquidNavbar() {
  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-3 md:gap-6 px-4 md:px-6 py-2.5 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] text-[#f2ede4] text-xs font-serif transition-all duration-300 hover:border-amber-400/40">
        
        {/* Navigation arrows */}
        <div className="flex items-center gap-1 text-white/70">
          <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
            <ChevronLeft size={15} />
          </button>
          <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
            <ChevronRight size={15} />
          </button>
        </div>

        {/* Central Address Capsule */}
        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-black/40 border border-white/15 text-[11px] font-mono tracking-wider text-amber-200/90 shadow-inner">
          <Lock size={10} className="text-amber-400" />
          <span>joanna.gallery/exhibition</span>
          <RotateCcw size={10} className="ml-1 text-white/50 cursor-pointer hover:text-white" />
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2 text-white/80">
          <a
            href="#projects"
            className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/10 hover:bg-amber-400/20 hover:text-amber-200 text-[11px] tracking-widest uppercase transition-all"
          >
            Exhibits
          </a>
          <a
            href="#provenance"
            className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/10 hover:bg-amber-400/20 hover:text-amber-200 text-[11px] tracking-widest uppercase transition-all"
          >
            Archives
          </a>
          <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
            <Share size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}