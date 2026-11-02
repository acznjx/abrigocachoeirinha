import Image from "next/image";
import Link from "next/link";
import { pets } from "@/data/pets";
import { rifasAtivas } from "@/data/rifas";
import { PetCard } from "@/components/PetCard";
import { Patinha } from "@/components/Patinha";
import { HeroVideo } from "@/components/HeroVideo";
import { Revelar } from "@/components/Revelar";
import { Contador } from "@/components/Contador";
import { CopiarPix } from "@/components/CopiarPix";
import { TituloSecao } from "@/components/Secao";
import { SITE } from "@/lib/site";
import { botao, rotulo } from "@/lib/ui";

const formasDeAjudar = [
  {
    titulo: "Adote",
    texto: "Dê um lar para quem está esperando. Conheça os cães e gatos disponíveis.",
    href: "/adote",
    cor: "bg-abobora text-chocolate",
  },
  {
    titulo: "Participe das rifas",
    texto: "Concorra a prêmios e ajude a manter os cuidados com os animais.",
    href: "/rifas",
    cor: "bg-chocolate text-areia",
  },
  {
    titulo: "Seja lar temporário",
    texto: "Abra sua casa por um tempo e ajude um pet a se recuperar até a adoção.",
    href: "/como-ajudar#lar-temporario",
    cor: "bg-areia text-chocolate",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-4rem)] overflow-hidden bg-chocolate md:h-[calc(100svh-5rem)] md:min-h-[540px] md:items-center">
        <HeroVideo src="/videos/hero-largo.mp4" srcCelular="/videos/hero-vertical.mp4" poster="/videos/hero-capa-largo.jpg" />
        <div className="absolute inset-0 hidden bg-chocolate/45 md:block" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgb(138_66_32/0.97)_0%,rgb(158_78_38/0.9)_35%,rgb(224_122_47/0.4)_62%,transparent_80%)] md:bg-[linear-gradient(to_right,rgb(46_31_23/0.9)_0%,rgb(46_31_23/0.6)_45%,rgb(46_31_23/0.1)_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-end px-5 pb-8 pt-16 sm:px-6 md:justify-center md:px-8 md:py-10">
          <div className="flex max-w-2xl flex-col gap-3 text-areia [text-shadow:0_2px_16px_rgb(46_31_23/0.6)] sm:gap-4 md:gap-6">
            <span className={`entrar entrar-1 ${rotulo} self-start rounded-full bg-abobora px-3 py-1.5 text-[11px] text-chocolate [text-shadow:none] sm:px-4 sm:text-xs`}>
              Resgate e adoção<span className="hidden sm:inline"> · {SITE.cidade}</span>
            </span>
            <h1 className="entrar entrar-2 font-display text-[clamp(2.4rem,11vw,3.6rem)] font-bold leading-[0.95] md:text-[clamp(3rem,min(7vw,10svh),6rem)]">
              Cada patinha merece um lar.
            </h1>
            <p className="entrar entrar-3 max-w-lg text-base font-semibold text-fundo md:text-[clamp(1.05rem,2.3svh,1.35rem)]">
              Resgatamos, cuidamos e damos uma nova chance para quem mais precisa de amor.
            </p>
            <div className="entrar entrar-4 mt-2 grid gap-3 [text-shadow:none] sm:flex sm:flex-wrap md:mt-0">
              <Link href="/adote" className={`${botao.destaque} w-full max-md:bg-chocolate max-md:text-areia max-md:hover:bg-caramelo sm:w-auto`}>
                Quero adotar
              </Link>
              <Link href="/como-ajudar" className={`${botao.contornoClaro} w-full sm:w-auto`}>
                Como ajudar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rifa em destaque */}
      {rifasAtivas[0] && (
        <section className="bg-abobora text-chocolate">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 md:px-8">
            <div className="flex items-center gap-4">
              {rifasAtivas[0].foto && (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-white md:h-20 md:w-20">
                  <Image src={rifasAtivas[0].foto} alt="" fill sizes="80px" className="object-contain p-1.5" />
                </div>
              )}
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em]">Rifa aberta</span>
                <p className="font-display text-xl font-bold leading-tight md:text-2xl">
                  Concorra a uma {rifasAtivas[0].premio}
                </p>
                <p className="text-sm font-semibold">{rifasAtivas[0].valorNumero} o número · ajuda nos custos veterinários</p>
              </div>
            </div>
            <Link href="/rifas" className={`${botao.primario} w-full sm:w-auto`}>
              Quero participar
            </Link>
          </div>
        </section>
      )}

      {/* Formas de ajudar */}
      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:py-20">
        <Revelar>
          <TituloSecao rotulo="Faça parte" titulo="Quatro jeitos de mudar uma história" />
        </Revelar>
        <div className="mt-6 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-5">
          {formasDeAjudar.map((f, i) => (
            <Revelar key={f.titulo} atraso={i * 120} className="h-full">
            <Link
              href={f.href}
              className={`group flex h-full items-center gap-4 rounded-md p-5 transition-transform hover:-translate-y-1 md:min-h-56 md:flex-col md:items-stretch md:justify-between md:gap-6 md:p-7 ${f.cor}`}
            >
              <Patinha className="h-9 w-auto shrink-0 opacity-90 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125 md:self-start" />
              <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="font-display text-2xl font-bold md:text-3xl">{f.titulo}</h3>
                <p className="text-sm font-semibold opacity-90 md:text-base">{f.texto}</p>
              </div>
            </Link>
            </Revelar>
          ))}
        </div>
        <Revelar atraso={200}>
          <div className="mt-3 grid items-center gap-4 rounded-md bg-chocolate p-5 text-areia md:mt-5 md:grid-cols-[1fr_1.1fr] md:gap-8 md:p-7">
            <div className="flex flex-col gap-1">
              <span className={`${rotulo} text-abobora`}>Doe pelo Pix</span>
              <h3 className="font-display text-2xl font-bold md:text-3xl">Qualquer valor ajuda</h3>
              <p className="text-sm font-semibold text-areia/85 md:text-base">Vira ração, remédio e cuidados para os bichinhos do abrigo.</p>
            </div>
            <CopiarPix chave={SITE.pix} />
          </div>
        </Revelar>
      </section>

      {/* Pets em destaque */}
      <section className="bg-areia/50">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 md:gap-6">
            <Revelar>
              <TituloSecao rotulo="Esperando por você" titulo="Conheça quem procura um lar" />
            </Revelar>
            <Link href="/adote" className={botao.contorno}>
              Ver todos
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {pets.slice(0, 4).map((pet, i) => (
              <Revelar key={pet.slug} de="zoom" atraso={(i % 3) * 120} className={i === 3 ? "lg:hidden" : undefined}>
                <PetCard pet={pet} />
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa história */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:gap-10 md:py-20">
        <Revelar de="esquerda">
        <figure className="flex flex-col gap-2">
          <Image
            src="/fotos/resgatados-caixa.jpg"
            alt="Três cachorros resgatados abraçados dentro de uma caixa amarela no pátio do abrigo"
            width={960}
            height={720}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto w-full rounded-lg"
          />
          <figcaption className="text-xs font-semibold text-texto-suave">Resgatados do abrigo, juntinhos no pátio.</figcaption>
        </figure>
        </Revelar>
        <Revelar de="direita" atraso={150} className="flex flex-col gap-6">
          <TituloSecao rotulo="Nossa história" titulo="Nascemos nas enchentes do RS">
            O abrigo nasceu em maio de 2024, no momento mais difícil do nosso estado. Hoje, a protetora Rita cuida sozinha de
            mais de 100 animais, com a ajuda de quem acredita nesse trabalho.
          </TituloSecao>
          <Link href="/sobre" className={`${botao.contorno} self-start`}>
            Conheça o abrigo
          </Link>
        </Revelar>
      </section>

      {/* Números */}
      <section className="bg-abobora">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-5 py-10 md:gap-8 md:py-16">
          {[
            { n: <Contador ate={100} prefixo="+" />, t: "animais sob os cuidados da Rita" },
            { n: <Contador ate={35} prefixo="+" />, t: "anos dedicados à causa animal" },
            { n: <Contador ate={pets.length} />, t: "bichinhos esperando por um lar" },
          ].map((item, i) => (
            <Revelar key={item.t} atraso={i * 120} className="flex flex-col gap-1">
              <span className="font-display text-4xl font-bold leading-none md:text-7xl">{item.n}</span>
              <span className="text-xs font-bold leading-snug md:text-lg">{item.t}</span>
            </Revelar>
          ))}
        </div>
      </section>

      {/* Chamada final */}
      <section className="px-5 py-14 md:py-20">
        <Revelar de="zoom">
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 overflow-hidden rounded-lg bg-chocolate p-6 text-areia md:flex-row md:items-center md:justify-between md:p-12">
          <Patinha className="balancar pointer-events-none absolute -bottom-6 right-4 h-32 w-auto text-abobora/15 md:right-1/3 md:h-44" />
          <div className="relative flex flex-col gap-3">
            <span className={`${rotulo} text-abobora`}>Adote, não compre</span>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">Tem um focinho esperando por você.</h2>
            <p className="text-areia/85">Todos os nossos pets são doados com carinho para famílias responsáveis.</p>
          </div>
          <Link href="/adote" className={`${botao.destaque} relative w-full shrink-0 md:w-auto`}>
            Quero adotar
          </Link>
        </div>
        </Revelar>
      </section>
    </>
  );
}
