import Image from "next/image";
import type { Rifa } from "@/data/rifas";
import { botao, rotulo } from "@/lib/ui";
import { Patinha } from "./Patinha";

export function RifaCard({ rifa }: { rifa: Rifa }) {
  const ativa = rifa.status === "ativa";
  const fatos = [
    { rotulo: "Prêmio", valor: rifa.premio },
    { rotulo: "Número", valor: rifa.valorNumero },
    { rotulo: ativa ? "Sorteio" : "Sorteada em", valor: rifa.dataSorteio },
  ];

  return (
    <article data-revelar className={`flex flex-col gap-5 rounded-lg p-4 md:flex-row md:gap-6 md:p-9 ${ativa ? "bg-abobora text-chocolate" : "bg-areia text-chocolate"}`}>
      <div className="relative flex aspect-[16/10] w-full shrink-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-md bg-white text-texto-suave md:aspect-square md:w-64">
        {rifa.foto ? (
          <Image src={rifa.foto} alt={`Prêmio: ${rifa.premio}`} fill sizes="(min-width: 768px) 256px, 100vw" className="object-contain p-4" />
        ) : (
          <>
            <Patinha className="h-12 w-auto text-abobora/50" />
            <span className="text-sm font-bold">[foto do prêmio]</span>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <span className={`${rotulo} self-start rounded-full px-3 py-1 ${ativa ? "bg-chocolate text-areia" : "bg-oliva text-white"}`}>
            {ativa ? "Rifa ativa" : "Encerrada"}
          </span>
          <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">{rifa.titulo}</h3>
          <p className="font-semibold">{rifa.objetivo}</p>
        </div>
        <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {fatos.map((f) => (
            <div key={f.rotulo} className="rounded-sm bg-fundo px-3 py-2.5 last:col-span-2 sm:px-4 sm:py-3 sm:last:col-span-1">
              <dt className="text-xs font-extrabold uppercase tracking-wider text-texto-suave">{f.rotulo}</dt>
              <dd className="font-display text-lg font-semibold">{f.valor}</dd>
            </div>
          ))}
        </dl>
        {ativa ? (
          rifa.link ? (
            <a href={rifa.link} target="_blank" rel="noreferrer" className={`${botao.primario} w-full sm:w-auto sm:self-start`}>
              Comprar números
            </a>
          ) : (
            <span className={`${botao.primario} self-start opacity-80`}>[link de compra]</span>
          )
        ) : (
          rifa.ganhador && (
            <p className="font-bold">
              Ganhador(a): <span className="font-display text-xl">{rifa.ganhador}</span>
            </p>
          )
        )}
      </div>
    </article>
  );
}
