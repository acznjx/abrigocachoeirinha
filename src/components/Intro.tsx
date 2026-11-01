"use client";

import { useEffect, useState } from "react";
import { CHAVE_INTRO } from "@/lib/site";
import { Patinha } from "./Patinha";


// Abertura com o logo, uma vez por dia. Quem decide é o script no <head> do layout.
export function Intro() {
  const [saindo, setSaindo] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.hasAttribute("data-intro")) return;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = setTimeout(() => setSaindo(true), reduzir ? 600 : 1900);
    const t2 = setTimeout(() => {
      html.removeAttribute("data-intro");
      try {
        localStorage.setItem(CHAVE_INTRO, new Date().toDateString());
      } catch {}
    }, reduzir ? 900 : 2550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className={`intro ${saindo ? "intro-saindo" : ""}`} aria-hidden="true">
      <div className="flex flex-col items-center gap-4">
        <Patinha className="intro-patinha h-28 w-auto text-abobora md:h-36" />
        <div className="intro-texto flex flex-col items-center">
          <span className="font-display text-6xl font-bold leading-[0.88] tracking-tight text-chocolate md:text-7xl">abrigo</span>
          <span className="font-display text-3xl font-semibold text-caramelo md:text-4xl">cachoeirinha</span>
        </div>
      </div>
    </div>
  );
}
