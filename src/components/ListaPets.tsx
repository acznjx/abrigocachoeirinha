"use client";

import { useState } from "react";
import type { Pet } from "@/data/pets";
import { PetCard } from "@/components/PetCard";
import { atraso } from "@/lib/ui";

type Filtro = "todos" | "cachorro" | "gato";

export function ListaPets({ pets }: { pets: Pet[] }) {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const conta = (f: Filtro) => (f === "todos" ? pets.length : pets.filter((p) => p.especie === f).length);
  const opcoes: { valor: Filtro; texto: string }[] = [
    { valor: "todos", texto: "Todos" },
    { valor: "cachorro", texto: "Cachorros" },
    { valor: "gato", texto: "Gatos" },
  ];
  const visiveis = filtro === "todos" ? pets : pets.filter((p) => p.especie === filtro);

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-2xl font-bold md:text-3xl">Disponíveis para adoção</h2>
        <div role="group" aria-label="Filtrar por espécie" className="flex flex-wrap gap-2">
          {opcoes.map((o) => {
            const ativo = filtro === o.valor;
            return (
              <button
                key={o.valor}
                type="button"
                aria-pressed={ativo}
                onClick={() => setFiltro(o.valor)}
                className={`inline-flex min-h-10 items-center gap-2 rounded-full border-2 px-4 text-sm font-extrabold transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-chocolate ${
                  ativo
                    ? "border-chocolate bg-chocolate text-areia"
                    : "border-chocolate/20 bg-transparent text-chocolate hover:border-chocolate"
                }`}
              >
                {o.texto}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${ativo ? "bg-abobora text-chocolate" : "bg-areia text-texto-suave"}`}
                >
                  {conta(o.valor)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {visiveis.length} {visiveis.length === 1 ? "bichinho" : "bichinhos"} na lista
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 md:mt-8 lg:grid-cols-3">
        {visiveis.map((pet, i) => (
          <div key={pet.slug} data-revelar style={atraso((i % 3) * 90)} className="h-full">
            <PetCard pet={pet} />
          </div>
        ))}
      </div>
    </>
  );
}
