import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CopiarPix } from "@/components/CopiarPix";
import { Patinha } from "@/components/Patinha";
import { parceiros, whatsappParceiro } from "@/data/parceiros";
import { SITE, whatsappLink } from "@/lib/site";
import { atraso, botao, rotulo } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Como ajudar",
  description: "Doe pelo Pix, doe ração, seja lar temporário, voluntário ou participe das rifas do Abrigo Cachoeirinha.",
};

const card =
  "group relative flex flex-col justify-between gap-5 overflow-hidden rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 md:gap-6 md:p-9";
const patinhaFundo =
  "pointer-events-none absolute -bottom-8 -right-6 h-40 w-auto rotate-[-18deg] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110";

export default function ComoAjudarPage() {
  const parceira = parceiros[0];

  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-20">
          <div data-revelar className="flex max-w-2xl flex-col gap-3">
            <span className={`${rotulo} text-caramelo`}>Como ajudar</span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">Mais gente cuidando, mais patinhas com lar</h1>
            <p className="text-lg text-texto-corpo">Além de adotar, tem vários jeitos de fazer parte. Escolha o que cabe na sua vida.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-3 px-5 py-8 md:grid-cols-12 md:gap-5 md:py-20">
        {/* Pix */}
        <article id="pix" data-revelar style={atraso(0)} className={`${card} scroll-mt-24 bg-chocolate text-areia md:col-span-7 md:row-span-2 md:min-h-[440px]`}>
          <Patinha className={`${patinhaFundo} text-abobora/15`} />
          <div className="relative flex flex-col gap-4">
            <span className={`${rotulo} text-abobora`}>Doação pelo Pix</span>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl">Toda ajuda vira ração, remédio e carinho.</h2>
            <p className="max-w-md text-lg text-areia/85">Qualquer valor ajuda a manter os cuidados com os bichinhos do abrigo.</p>
          </div>
          <div className="relative">
            <CopiarPix chave={SITE.pix} />
          </div>
        </article>

        {/* Lar temporário */}
        <article id="lar-temporario" data-revelar style={atraso(90)} className={`${card} scroll-mt-24 bg-abobora text-chocolate md:col-span-5`}>
          <Patinha className={`${patinhaFundo} text-chocolate/10`} />
          <div className="relative flex flex-col gap-3">
            <span className={rotulo}>Lar temporário</span>
            <h2 className="font-display text-3xl font-bold leading-tight">Abra sua casa por um tempo</h2>
            <p className="font-semibold">Você cuida de um pet enquanto ele se recupera ou espera a adoção.</p>
          </div>
          <a href={whatsappLink("Oi! Quero ser lar temporário. Como funciona?")} target="_blank" rel="noreferrer" className={`${botao.primario} relative w-full md:w-auto md:self-start`}>
            Quero ser lar temporário
          </a>
        </article>

        {/* Rifas */}
        <Link href="/rifas" data-revelar style={atraso(180)} className={`${card} bg-caramelo text-white md:col-span-5`}>
          <Patinha className={`${patinhaFundo} text-white/10`} />
          <div className="relative flex flex-col gap-3">
            <span className={`${rotulo} text-areia`}>Rifas solidárias</span>
            <h2 className="font-display text-3xl font-bold leading-tight">Concorra e ajude</h2>
            <p className="font-semibold text-white/90">Prêmios a partir de R$ 5,00 que pagam as despesas veterinárias.</p>
          </div>
          <span className="relative flex items-center gap-2 font-display text-xl font-semibold">
            Ver rifas abertas
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>

        {/* Ração */}
        {parceira && (
          <article id="racao" data-revelar style={atraso(270)} className={`${card} scroll-mt-24 bg-areia md:col-span-7`}>
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <Image src={parceira.logo} alt={`Logo ${parceira.nome}`} width={120} height={120} className="h-20 w-20 shrink-0 rounded-full bg-white sm:h-[120px] sm:w-[120px]" />
              <div className="flex flex-col gap-2">
                <span className={`${rotulo} text-caramelo`}>Doação de ração · parceira</span>
                <h2 className="font-display text-3xl font-bold leading-tight">Doe ração pela {parceira.nome}</h2>
                <p className="text-texto-corpo">Ração de cães e gatos, granulados e vitaminas para os nossos resgatados.</p>
              </div>
            </div>
            <div className="relative flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href={whatsappParceiro(parceira)} target="_blank" rel="noreferrer" className={`${botao.primario} w-full sm:w-auto`}>
                Doar ração · {parceira.whatsappExibicao}
              </a>
              {parceira.instagram && (
                <a href={parceira.instagram} target="_blank" rel="noreferrer" className="font-bold underline decoration-abobora decoration-2 underline-offset-4 hover:text-caramelo">
                  {parceira.instagramUsuario}
                </a>
              )}
            </div>
          </article>
        )}

        {/* Voluntariado */}
        <article id="voluntario" data-revelar style={atraso(360)} className={`${card} scroll-mt-24 bg-oliva text-white md:col-span-5`}>
          <Patinha className={`${patinhaFundo} text-white/10`} />
          <div className="relative flex flex-col gap-3">
            <span className={`${rotulo} text-areia`}>Voluntariado</span>
            <h2 className="font-display text-3xl font-bold leading-tight">Doe seu tempo</h2>
            <p className="font-semibold text-white/90">Passeios, banhos, transporte, feirinhas de adoção, fotos e redes sociais.</p>
          </div>
          <a href={SITE.grupoVoluntarios} target="_blank" rel="noreferrer" className={`${botao.destaque} relative w-full md:w-auto md:self-start`}>
            Entrar no grupo
          </a>
        </article>
      </section>
    </>
  );
}
