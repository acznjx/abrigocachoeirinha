"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { rotulo } from "@/lib/ui";
import { useMovimentoReduzido } from "@/lib/useMovimentoReduzido";

export type Momento = {
  quando: string;
  titulo: string;
  texto: string;
  foto: string;
  largura: number;
  altura: number;
  alt: string;
};

export function LinhaDoTempo({ momentos }: { momentos: Momento[] }) {
  const listaRef = useRef<HTMLOListElement>(null);
  const itensRef = useRef<(HTMLLIElement | null)[]>([]);
  const [progresso, setProgresso] = useState(0); // 0..1, quanto da linha está preenchida
  const [visiveis, setVisiveis] = useState<boolean[]>(() => momentos.map(() => false));
  const [ativos, setAtivos] = useState<boolean[]>(() => momentos.map(() => false));
  const semMovimento = useMovimentoReduzido();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => {
        setVisiveis((atual) => {
          const novo = [...atual];
          for (const e of entradas) {
            const i = Number((e.target as HTMLElement).dataset.indice);
            novo[i] = e.isIntersecting;
          }
          return novo;
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    itensRef.current.forEach((el) => el && obs.observe(el));

    let quadro = 0;
    const medir = () => {
      quadro = 0;
      const lista = listaRef.current;
      if (!lista) return;
      const r = lista.getBoundingClientRect();
      const meio = window.innerHeight * 0.55;
      const p = Math.min(1, Math.max(0, (meio - r.top) / r.height));
      setProgresso(p);
      setAtivos(
        itensRef.current.map((el) => {
          if (!el) return false;
          const b = el.getBoundingClientRect();
          return b.top + Math.min(b.height / 2, 120) <= meio;
        }),
      );
    };
    const agendar = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };
    agendar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [momentos.length]);

  const mostrar = (i: number) => semMovimento || visiveis[i];
  const transicao = semMovimento ? "" : "transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.8,.2,1)]";

  return (
    <ol ref={listaRef} className="relative mt-8 flex flex-col gap-12 md:mt-12 md:gap-20">
      <span className="absolute bottom-2 left-[11px] top-2 w-0.5 bg-abobora/25 md:left-1/2 md:-translate-x-1/2" aria-hidden="true">
        <span
          className="absolute inset-x-0 top-0 h-full origin-top bg-abobora will-change-transform"
          style={{ transform: `scaleY(${semMovimento ? 1 : progresso})` }}
        />
      </span>

      {momentos.map((h, i) => {
        const par = i % 2 === 1;
        const ativo = semMovimento || ativos[i];
        return (
          <li
            key={h.titulo}
            ref={(el) => {
              itensRef.current[i] = el;
            }}
            data-indice={i}
            className="relative grid gap-6 pl-10 md:grid-cols-2 md:gap-16 md:pl-0"
          >
            <span
              className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-fundo transition-[background-color,transform] duration-500 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ${
                ativo ? "scale-110 bg-abobora" : "scale-75 bg-areia"
              }`}
              aria-hidden="true"
            >
              <span className={`h-2 w-2 rounded-full transition-colors duration-500 ${ativo ? "bg-chocolate" : "bg-abobora/50"}`} />
            </span>

            <div
              className={`flex items-center ${par ? "md:order-2" : ""} ${transicao}`}
              style={
                mostrar(i)
                  ? { opacity: 1, transform: "none" }
                  : { opacity: 0, transform: `translate3d(${par ? "32px" : "-32px"}, 24px, 0) scale(0.97)` }
              }
            >
              <Image src={h.foto} alt={h.alt} width={h.largura} height={h.altura} sizes="(min-width: 768px) 45vw, 100vw" className="h-auto w-full rounded-lg" />
            </div>

            <div
              className={`flex flex-col justify-center gap-3 ${par ? "md:order-1 md:items-end md:text-right" : ""} ${transicao}`}
              style={
                mostrar(i)
                  ? { opacity: 1, transform: "none", transitionDelay: semMovimento ? undefined : "120ms" }
                  : { opacity: 0, transform: "translate3d(0, 28px, 0)" }
              }
            >
              <span className={`${rotulo} text-caramelo`}>{h.quando}</span>
              <h3 className="font-display text-2xl font-bold leading-tight md:text-4xl">{h.titulo}</h3>
              <p className="max-w-md text-texto-corpo md:text-lg">{h.texto}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
