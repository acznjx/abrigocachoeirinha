import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Patinha } from "@/components/Patinha";
import { TituloSecao } from "@/components/Secao";
import { ParceiroCard } from "@/components/ParceiroCard";
import { LinhaDoTempo } from "@/components/LinhaDoTempo";
import { parceiros } from "@/data/parceiros";
import { FUNDADORA } from "@/lib/site";
import { atraso, botao, rotulo } from "@/lib/ui";
import { Contador } from "@/components/Contador";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "O Abrigo Cachoeirinha nasceu nas enchentes de maio de 2024 no Rio Grande do Sul. Hoje, a protetora Rita cuida sozinha de mais de 100 animais.",
};

const historia = [
  {
    quando: "Maio de 2024",
    titulo: "Tudo começou",
    texto:
      "Enquanto o Rio Grande do Sul enfrentava enchentes devastadoras, milhares de animais ficaram perdidos, assustados e sem lar. Diante da dor, não conseguimos fechar os olhos.",
    foto: "/fotos/cobertor.jpg",
    largura: 651,
    altura: 650,
    alt: "Dois cachorrinhos resgatados enrolados em cobertores coloridos",
  },
  {
    quando: "Depois da água",
    titulo: "De uma emergência a uma luta diária",
    texto:
      "Começamos em um pavilhão emprestado. Com a demanda crescendo, fomos para um sítio. O que era uma ajuda temporária virou um compromisso diário com a vida.",
    foto: "/fotos/cuidados-noite.jpg",
    largura: 600,
    altura: 455,
    alt: "Vários cães dormindo juntos em colchões e cobertores, alguns de roupinha",
  },
  {
    quando: "Hoje",
    titulo: "Mais de 100 vidas",
    texto:
      "A protetora Rita cuida sozinha de mais de 100 animais que dependem exclusivamente da solidariedade de pessoas como você. Com pouco, mas com muito amor, seguimos em frente por cada um deles.",
    foto: "/fotos/rita-abraco.jpg",
    largura: 652,
    altura: 554,
    alt: "Rita sorrindo e abraçando um cachorro de roupinha no abrigo",
  },
];

const numeros = [
  { valor: "+100", conta: 100, legenda: "animais sob os cuidados da Rita" },
  { valor: "+35", conta: 35, legenda: "anos da Rita dedicados à causa animal" },
  { valor: "2024", conta: 0, legenda: "ano em que tudo começou" },
];

const valores = [
  { titulo: "Resgatar", texto: "Acolhemos quem ficou perdido, assustado e sem lar." },
  { titulo: "Cuidar", texto: "Alimentação, cuidados veterinários e muito carinho, todos os dias." },
  { titulo: "Encontrar um lar", texto: "Buscamos famílias responsáveis para uma nova chance de verdade." },
];

export default function SobrePage() {
  return (
    <>
      {/* Abertura */}
      <section className="bg-areia">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:gap-10 md:py-20">
          <div data-revelar className="flex flex-col gap-3">
            <span className={`${rotulo} text-caramelo`}>Sobre nós</span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">Nascemos nas enchentes. Ficamos pelo amor.</h1>
            <p className="text-lg text-texto-corpo">
              O Abrigo Cachoeirinha nasceu no momento mais difícil do nosso estado, mas a nossa missão não terminou com o fim da água.
            </p>
          </div>
          <figure data-revelar style={atraso(120)} className="flex flex-col gap-2">
            <Image
              src="/fotos/cachorro-sitio.jpg"
              alt="Cachorro resgatado de pelo marrom tigrado, em pé na varanda do abrigo"
              width={586}
              height={506}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="text-sm font-semibold text-texto-suave">Um dos nossos resgatados, no abrigo.</figcaption>
          </figure>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="mx-auto w-full max-w-6xl px-5 py-12 md:py-24">
        <TituloSecao rotulo="Nossa história" titulo="De uma emergência a um compromisso com a vida" />
        <LinhaDoTempo momentos={historia} />
      </section>

      {/* Números */}
      <section className="bg-abobora">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-5 py-10 md:gap-8 md:py-14">
          {numeros.map((n, i) => (
            <div key={n.legenda} data-revelar style={atraso(i * 90)} className="flex flex-col gap-1">
              <span className="font-display text-4xl font-bold leading-none md:text-7xl">
                {n.conta ? <Contador ate={n.conta} prefixo="+" /> : n.valor}
              </span>
              <span className="text-xs font-bold leading-snug md:text-lg">{n.legenda}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quem está à frente */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
        <div data-revelar className="grid items-center gap-8 rounded-lg bg-areia p-6 md:grid-cols-[320px_1fr] md:gap-12 md:p-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-fundo md:aspect-[4/5]">
            <Image src={FUNDADORA.foto} alt={FUNDADORA.fotoAlt} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover" style={{ objectPosition: FUNDADORA.fotoPosicao }} />
            <span className="absolute bottom-3 left-3 rounded-full bg-abobora px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-chocolate">
              {FUNDADORA.selo}
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <span className={`${rotulo} text-caramelo`}>{FUNDADORA.papel}</span>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">Conheça a {FUNDADORA.nome.split(" ")[0]}</h2>
            <blockquote className="border-0 font-display text-2xl font-semibold leading-snug text-caramelo">“{FUNDADORA.citacao}”</blockquote>
            <p className="text-lg text-texto-corpo">{FUNDADORA.bio}</p>
            <a href={FUNDADORA.instagram} target="_blank" rel="noreferrer" className={`${botao.contorno} w-full sm:w-auto sm:self-start`}>
              Seguir {FUNDADORA.instagramUsuario}
            </a>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="bg-chocolate text-areia">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <span className={`${rotulo} text-abobora`}>O que fazemos</span>
          <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-3 md:gap-8">
            {valores.map((v, i) => (
              <div key={v.titulo} data-revelar style={atraso(i * 90)} className="flex flex-col gap-3">
                <Patinha className="h-8 w-auto self-start text-abobora" />
                <h3 className="font-display text-3xl font-bold">{v.titulo}</h3>
                <p className="text-areia/85">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <TituloSecao rotulo="Parceiros" titulo="Quem caminha com a gente" />
        <div className="mt-8 grid gap-5">
          {parceiros.map((p) => (
            <div key={p.nome} data-revelar>
              <ParceiroCard parceiro={p} />
            </div>
          ))}
        </div>
        <Link href="/contato" className={`${botao.contorno} mt-8`}>
          Quero ser parceiro
        </Link>
      </section>

      {/* Chamada final */}
      <section className="px-5 pb-20">
        <div data-revelar className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-lg bg-abobora p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-4xl font-bold leading-tight">Toda ajuda importa.</h2>
            <p className="text-lg font-semibold">Caminhe conosco!</p>
          </div>
          <Link href="/como-ajudar" className={`${botao.primario} w-full shrink-0 md:w-auto`}>
            Como ajudar
          </Link>
        </div>
      </section>
    </>
  );
}
