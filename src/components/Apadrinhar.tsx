"use client";

import { useState } from "react";
import { CopiarPix } from "@/components/CopiarPix";
import { SITE, whatsappLink } from "@/lib/site";
import { botao, rotulo } from "@/lib/ui";

const VALORES = [10, 20, 30, 40, 50];

const passos = [
  "Escolha quanto quer doar por mês.",
  "Avise a gente pelo WhatsApp, para sabermos quem são nossos padrinhos.",
  "No app do seu banco, agende um Pix mensal para a chave do abrigo.",
];

export function Apadrinhar() {
  const [valor, setValor] = useState(30);
  const mensagem = `Oi! Quero ser padrinho/madrinha do abrigo e doar R$ ${valor} por mês.`;

  return (
    <div className="grid gap-6 rounded-lg bg-areia p-6 md:grid-cols-[1fr_1.1fr] md:gap-10 md:p-10">
      <div className="flex flex-col gap-4">
        <span className={`${rotulo} text-caramelo`}>Padrinho ou madrinha</span>
        <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">Ajude todo mês, do seu jeito</h2>
        <p className="text-lg text-texto-corpo">
          Uma doação fixa, mesmo pequena, ajuda o abrigo a planejar a ração e as consultas de cada mês.
        </p>
        <ol className="flex flex-col gap-3">
          {passos.map((p, i) => (
            <li key={p} className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-abobora font-display font-bold">{i + 1}</span>
              <span className="pt-1 font-semibold text-texto-corpo">{p}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-5 rounded-md bg-fundo p-5 md:p-7">
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 font-display text-xl font-semibold">Quanto por mês?</legend>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {VALORES.map((v) => (
              <label key={v} className="cursor-pointer">
                <input
                  type="radio"
                  name="valor-mensal"
                  value={v}
                  checked={valor === v}
                  onChange={() => setValor(v)}
                  className="peer sr-only"
                />
                <span className="flex min-h-14 items-center justify-center rounded-full border-2 border-chocolate/20 font-display text-xl font-bold transition-colors peer-checked:border-chocolate peer-checked:bg-chocolate peer-checked:text-areia peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-chocolate hover:border-chocolate">
                  R$ {v}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <a href={whatsappLink(mensagem)} target="_blank" rel="noreferrer" className={`${botao.primario} w-full`}>
          Quero apadrinhar com R$ {valor}/mês
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-texto-suave">Chave para o Pix mensal:</span>
          <CopiarPix chave={SITE.pix} />
        </div>
        <p className="text-xs text-texto-suave">Você pode mudar o valor ou parar quando quiser, direto no seu banco.</p>
      </div>
    </div>
  );
}
