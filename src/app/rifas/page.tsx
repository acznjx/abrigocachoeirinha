import type { Metadata } from "next";
import Image from "next/image";
import { atraso, rotulo } from "@/lib/ui";
import { RifaCard } from "@/components/RifaCard";
import { TituloSecao } from "@/components/Secao";
import { rifasAtivas, rifasEncerradas } from "@/data/rifas";

export const metadata: Metadata = {
  title: "Rifas solidárias",
  description: "Participe das rifas do Abrigo Cachoeirinha: concorra a prêmios e ajude cães e gatos resgatados.",
};

const passos = [
  { titulo: "Escolha seus números", texto: "Acesse a rifa e escolha quantos números quiser. Cada um custa só R$ 5,00." },
  { titulo: "Garanta pela plataforma", texto: "A compra é feita direto no site Rifa Personalizada, onde a rifa está hospedada." },
  { titulo: "Acompanhe o sorteio", texto: "O sorteio acontece na plataforma, na data definida, e os ganhadores são divulgados na página da rifa. As regras de cada rifa estão lá." },
]

function Passos({ className = "" }: { className?: string }) {
  return (
    <ol className={`gap-3 md:grid-cols-3 md:gap-4 ${className}`}>
      {passos.map((p, i) => (
        <li key={p.titulo} data-revelar style={atraso(i * 90)} className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-1 rounded-md bg-fundo p-4 md:flex md:flex-col md:gap-2 md:p-5">
          <span className="row-span-2 flex h-10 w-10 items-center justify-center rounded-full bg-abobora font-display text-lg font-bold">
            {i + 1}
          </span>
          <h3 className="font-display text-xl font-semibold">{p.titulo}</h3>
          <p className="text-sm text-texto-corpo">{p.texto}</p>
        </li>
      ))}
    </ol>
  );
}

export default function RifasPage() {
  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-20">
          <div data-revelar>
          <TituloSecao rotulo="Rifas" titulo="Concorra a prêmios e ajude o abrigo">
            Cada número comprado vira cuidado para os nossos cães e gatos. O valor arrecadado é usado nas despesas veterinárias do abrigo.
          </TituloSecao>
          </div>
          <Passos className="mt-10 hidden md:grid" />
        </div>
      </section>

      {/* No celular a rifa aberta vem antes de "Quem a rifa ajuda". */}
      <div className="flex flex-col">
      <section className="order-2 mx-auto w-full max-w-6xl px-5 pb-12 md:order-none md:pb-0 md:pt-16">
        <div data-revelar className="grid items-center gap-6 rounded-lg bg-chocolate p-5 text-areia md:grid-cols-[1fr_1.2fr] md:gap-8 md:p-10">
          <div className="relative aspect-[7/6] w-full overflow-hidden rounded-md">
            <Image
              src="/fotos/gatinho-rifa.jpg"
              alt="Gatinho preto e branco resgatado, com ferimentos no rosto e um dos olhos machucado"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className={`${rotulo} text-abobora`}>Quem a rifa ajuda</span>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">Cada número vira tratamento veterinário</h2>
            <p className="text-areia/90 md:text-lg">
              Bichinhos como este gatinho chegam ao abrigo machucados e precisam de consultas, exames e remédios. O valor
              da rifa custeia essas despesas veterinárias.
            </p>
          </div>
        </div>
      </section>

      <section className="order-1 mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-10 md:order-none md:gap-6 md:py-16">
        <h2 className="font-display text-2xl font-bold md:text-3xl">Rifas abertas</h2>
        {rifasAtivas.length > 0 ? (
          rifasAtivas.map((r) => <RifaCard key={r.slug} rifa={r} />)
        ) : (
          <p className="rounded-md bg-areia p-6 font-semibold">Nenhuma rifa aberta no momento. Acompanhe nosso Instagram para saber da próxima!</p>
        )}
      </section>

      <section className="order-3 mx-auto w-full max-w-6xl px-5 pb-12 md:hidden">
        <h2 className="font-display text-2xl font-bold">Como funciona</h2>
        <div className="mt-4 rounded-lg bg-areia p-3">
          <Passos className="grid" />
        </div>
      </section>
      </div>

      {rifasEncerradas.length > 0 && (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-20">
          <h2 className="font-display text-3xl font-bold">Sorteios anteriores</h2>
          {rifasEncerradas.map((r) => (
            <RifaCard key={r.slug} rifa={r} />
          ))}
        </section>
      )}
    </>
  );
}
