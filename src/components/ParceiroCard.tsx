import Image from "next/image";
import { type Parceiro, whatsappParceiro } from "@/data/parceiros";
import { botao } from "@/lib/ui";

export function ParceiroCard({ parceiro }: { parceiro: Parceiro }) {
  const link = whatsappParceiro(parceiro);
  return (
    <article className="grid items-center gap-6 rounded-md bg-areia p-6 sm:grid-cols-[180px_1fr] md:p-8">
      <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-sm bg-white sm:w-[180px]">
        <Image src={parceiro.logo} alt={`Logo ${parceiro.nome}`} fill sizes="220px" className="object-contain p-2" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-display text-2xl font-bold">{parceiro.nome}</h3>
        <p className="text-texto-corpo">{parceiro.descricao}</p>
        <div className="flex flex-wrap gap-3">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className={botao.primario}>
              Doar ração · {parceiro.whatsappExibicao}
            </a>
          )}
          {parceiro.instagram && (
            <a href={parceiro.instagram} target="_blank" rel="noreferrer" className={botao.contorno}>
              Instagram {parceiro.instagramUsuario}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
