"use client";

import { useState } from "react";

export function CopiarPix({ chave }: { chave: string }) {
  const [copiado, setCopiado] = useState(false);
  const [antes, depois] = chave.split("@");

  async function copiar() {
    try {
      await navigator.clipboard.writeText(chave);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 rounded-sm bg-areia px-5 py-4 text-chocolate sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <span className="block text-xs font-extrabold uppercase tracking-wider text-texto-suave">Chave Pix (e-mail)</span>
        <span className="block font-display text-base font-semibold [overflow-wrap:anywhere] sm:text-lg">
          {antes}
          {depois !== undefined && (
            <>
              @<wbr />
              {depois}
            </>
          )}
        </span>
      </div>
      <button
        type="button"
        onClick={copiar}
        className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-chocolate px-5 py-2 font-bold sm:min-h-11 sm:w-auto text-areia transition-colors hover:bg-caramelo hover:text-white"
      >
        <span aria-live="polite">{copiado ? "Copiado!" : "Copiar chave"}</span>
      </button>
    </div>
  );
}
