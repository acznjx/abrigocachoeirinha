"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { botao } from "@/lib/ui";

// Barra fixa só no celular; some quando o rodapé aparece.
export function BarraCelular() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => {
      const rodape = document.querySelector("footer");
      const rodapeNaTela = rodape ? rodape.getBoundingClientRect().top < window.innerHeight : false;
      setVisivel(window.scrollY > window.innerHeight * 0.6 && !rodapeNaTela);
    };
    const inicial = requestAnimationFrame(aoRolar);
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      cancelAnimationFrame(inicial);
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-chocolate/10 bg-fundo/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visivel ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visivel}
    >
      <div className="flex items-center gap-3">
        <Link href="/adote" tabIndex={visivel ? 0 : -1} className={`${botao.destaque} flex-1`}>
          Quero adotar
        </Link>
        <a
          href={whatsappLink("Oi! Vim pelo site do abrigo.")}
          target="_blank"
          rel="noreferrer"
          tabIndex={visivel ? 0 : -1}
          aria-label="Falar com o abrigo no WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-chocolate text-areia"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.5z" />
            <path d="M9 9.5c.3 1.7 1.7 3.6 3.6 4.6l1.2-1.1 2 .9-.4 1.7c-3.3.2-6.9-3.2-6.9-6.5l1.7-.5.9 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
