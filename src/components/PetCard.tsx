"use client";

import Image from "next/image";
import { useState } from "react";
import type { Pet } from "@/data/pets";
import { AdocaoDialog } from "./AdocaoDialog";
import { botao } from "@/lib/ui";
import { Patinha } from "./Patinha";

export function FotoPet({ pet, sizes }: { pet: Pet; sizes: string }) {
  if (pet.foto) {
    return <Image src={pet.foto} alt={pet.nome === "Ainda sem nome" ? `Foto de ${pet.especie === "gato" ? "gato" : "cachorro"} para adoção, ainda sem nome` : `Foto de ${pet.nome}`} fill sizes={sizes} className="object-cover" />;
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-texto-suave">
      <Patinha className="h-12 w-auto text-abobora/50" />
      <span className="text-sm font-bold">[foto do pet]</span>
    </div>
  );
}

function Virar({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5" />
    </svg>
  );
}

export function PetCard({ pet }: { pet: Pet }) {
  const [virado, setVirado] = useState(false);
  const [passos, setPassos] = useState(false);
  const especie = pet.especie === "gato" ? "Gato" : "Cachorro";
  const fatos = [
    { rotulo: "Espécie", valor: especie },
    { rotulo: "Idade", valor: pet.idade },
    { rotulo: "Porte", valor: pet.porte },
    { rotulo: "Sexo", valor: pet.sexo },
  ].filter((f): f is { rotulo: string; valor: string } => Boolean(f.valor));

  return (
    <div className="@container [perspective:1200px]">
      <div
        className={`relative grid transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none ${
          virado ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Frente */}
        <button
          type="button"
          onClick={() => setVirado(true)}
          aria-label={`Ver informações de ${pet.nome}`}
          aria-hidden={virado}
          tabIndex={virado ? -1 : 0}
          className="group col-start-1 row-start-1 flex flex-col gap-2 rounded-md bg-areia p-2.5 text-left [backface-visibility:hidden] @min-[260px]:gap-3 @min-[260px]:p-4"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-fundo">
            <FotoPet pet={pet} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            <span className="absolute left-2 top-2 rounded-full bg-chocolate px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-areia @min-[260px]:left-3 @min-[260px]:top-3 @min-[260px]:px-3 @min-[260px]:py-1 @min-[260px]:text-xs">
              {especie}
            </span>
            <span className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-abobora text-chocolate transition-transform duration-300 group-hover:rotate-180 @min-[260px]:bottom-3 @min-[260px]:right-3 @min-[260px]:h-10 @min-[260px]:w-10">
              <Virar />
            </span>
          </div>
          <div className="flex w-full flex-col px-1 @min-[260px]:flex-row @min-[260px]:items-baseline @min-[260px]:justify-between @min-[260px]:gap-3">
            <span className="font-display text-lg font-semibold leading-tight group-hover:text-caramelo @min-[260px]:text-2xl">{pet.nome}</span>
            <span className="text-sm font-bold text-texto-suave">{pet.idade}</span>
          </div>
          <span className="hidden px-1 text-sm font-semibold text-texto-suave @min-[260px]:inline">Toque para conhecer</span>
        </button>

        {/* Verso */}
        <div
          aria-hidden={!virado}
          className="col-start-1 row-start-1 flex flex-col gap-2.5 rounded-md bg-chocolate p-3 text-areia [backface-visibility:hidden] [transform:rotateY(180deg)] @min-[260px]:gap-4 @min-[260px]:p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-abobora @min-[260px]:text-xs">Me adota?</span>
              <h3 className="font-display text-xl font-bold leading-tight @min-[260px]:text-3xl">{pet.nome}</h3>
            </div>
            <button
              type="button"
              onClick={() => setVirado(false)}
              tabIndex={virado ? 0 : -1}
              aria-label="Voltar para a foto"
              className="-mr-1 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-areia/10 text-areia hover:bg-areia/20 @min-[260px]:m-0 @min-[260px]:h-11 @min-[260px]:w-11"
            >
              <Virar />
            </button>
          </div>
          <dl className="grid grid-cols-2 gap-1.5 @min-[260px]:gap-2">
            {fatos.map((f) => (
              <div key={f.rotulo} className="rounded-sm bg-areia/10 px-2 py-1.5 @min-[260px]:px-3 @min-[260px]:py-2">
                <dt className="text-[9px] font-extrabold uppercase tracking-wider text-areia/70 @min-[260px]:text-[11px]">{f.rotulo}</dt>
                <dd className="font-display text-sm font-semibold capitalize leading-tight @min-[260px]:text-lg">{f.valor}</dd>
              </div>
            ))}
          </dl>
          <p className="hidden flex-1 text-sm text-areia/90 @min-[260px]:line-clamp-4">{pet.descricao}</p>
          <button
            type="button"
            onClick={() => setPassos(true)}
            tabIndex={virado ? 0 : -1}
            className={`${botao.destaque} mt-auto w-full px-3 text-sm @min-[260px]:px-6 @min-[260px]:text-base`}
          >
            Quero adotar
          </button>
        </div>
      </div>
      <AdocaoDialog nome={pet.nome} aberto={passos} aoFechar={() => setPassos(false)} />
    </div>
  );
}
