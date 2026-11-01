"use client";

import { useEffect, useRef } from "react";
import { passosAdocao } from "@/data/adocao";
import { whatsappLink } from "@/lib/site";
import Link from "next/link";
import { botao } from "@/lib/ui";

type Props = { nome: string; aberto: boolean; aoFechar: () => void };

export function AdocaoDialog({ nome, aberto, aoFechar }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (aberto && !d.open) d.showModal();
    if (!aberto && d.open) d.close();
  }, [aberto]);

  return (
    <dialog
      ref={ref}
      onClose={aoFechar}
      onClick={(e) => {
        if (e.target === ref.current) aoFechar();
      }}
      aria-labelledby={`adotar-${nome}`}
      className="m-0 mt-auto max-h-[90svh] w-full max-w-none rounded-t-lg bg-fundo p-0 text-chocolate backdrop:bg-chocolate/60 md:m-auto md:max-w-lg md:rounded-lg"
    >
      <div className="flex flex-col gap-5 p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:p-8">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-chocolate/15 md:hidden" aria-hidden="true" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-caramelo">Como adotar</span>
            <h2 id={`adotar-${nome}`} className="font-display text-3xl font-bold leading-tight">
              Que bom que você escolheu {nome}!
            </h2>
          </div>
          <button
            type="button"
            onClick={aoFechar}
            aria-label="Fechar"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-areia hover:bg-abobora"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ol className="flex flex-col gap-3">
          {passosAdocao.map((p, i) => (
            <li key={p.titulo} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-abobora font-display font-bold">{i + 1}</span>
              <div>
                <h3 className="font-display text-lg font-semibold leading-tight">{p.titulo}</h3>
                <p className="text-sm text-texto-corpo">{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href={whatsappLink(`Oi! Tenho interesse em adotar o(a) ${nome}. Pode me contar mais?`)}
          target="_blank"
          rel="noreferrer"
          className={`${botao.primario} w-full`}
        >
          Chamar no WhatsApp
        </a>
        <p className="text-center text-xs text-texto-suave">
          Na conversa pedimos só o necessário para a adoção.{" "}
          <Link href="/privacidade" className="font-bold underline underline-offset-2">Como cuidamos dos seus dados</Link>
        </p>
      </div>
    </dialog>
  );
}
