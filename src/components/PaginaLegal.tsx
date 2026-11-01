import type { ReactNode } from "react";
import { rotulo } from "@/lib/ui";

export function PaginaLegal({ titulo, atualizado, resumo, children }: { titulo: string; atualizado: string; resumo: ReactNode; children: ReactNode }) {
  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-10 md:py-16">
          <span className={`${rotulo} text-caramelo`}>Transparência</span>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">{titulo}</h1>
          <p className="text-sm font-semibold text-texto-suave">Atualizada em {atualizado}</p>
          <div className="mt-2 rounded-md bg-fundo p-4 text-texto-corpo md:p-5">{resumo}</div>
        </div>
      </section>
      <article className="legal mx-auto w-full max-w-3xl px-5 py-10 text-texto-corpo md:py-14">{children}</article>
    </>
  );
}
