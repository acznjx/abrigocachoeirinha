import type { Metadata } from "next";
import { TituloSecao } from "@/components/Secao";
import { SITE, whatsappLink } from "@/lib/site";
import { atraso, botao, rotulo } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com o Abrigo Cachoeirinha pelo WhatsApp, Instagram ou e-mail.",
};

const traco = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

function IconeWhatsApp() {
  return (
    <svg {...traco} width={26} height={26}>
      <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.5z" />
      <path d="M9 9.5c.3 1.7 1.7 3.6 3.6 4.6l1.2-1.1 2 .9-.4 1.7c-3.3.2-6.9-3.2-6.9-6.5l1.7-.5.9 2z" />
    </svg>
  );
}

const redes = [
  {
    nome: "Instagram",
    detalhe: SITE.instagramUsuario,
    href: SITE.instagram,
    icone: (
      <svg {...traco}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    nome: "TikTok",
    detalhe: SITE.tiktokUsuario,
    href: SITE.tiktok,
    icone: (
      <svg {...traco}>
        <path d="M14 3.5v11.2a3.8 3.8 0 1 1-3.8-3.8" />
        <path d="M14 3.5c.4 2.6 2.3 4.4 5 4.6" />
      </svg>
    ),
  },
  {
    nome: "Facebook",
    detalhe: "Abrigo Cachoeirinha",
    href: SITE.facebook,
    icone: (
      <svg {...traco}>
        <path d="M14.5 8H16.5V4.5H14C11.8 4.5 10.5 6 10.5 8.2V10.5H8V14H10.5V20.5H14V14H16.3L16.8 10.5H14V8.6C14 8.2 14.2 8 14.5 8Z" />
      </svg>
    ),
  },
  {
    nome: "E-mail",
    detalhe: SITE.email,
    href: `mailto:${SITE.email}`,
    icone: (
      <svg {...traco}>
        <rect x="3" y="5.5" width="18" height="13" rx="2" />
        <path d="M3.5 7l8.5 6 8.5-6" />
      </svg>
    ),
  },
];

export default function ContatoPage() {
  const canais = [
    {
      rotulo: "WhatsApp",
      titulo: SITE.whatsappExibicao,
      texto: "O jeito mais rápido de tirar dúvidas sobre adoção, doações e lar temporário.",
      href: whatsappLink("Oi! Vim pelo site do abrigo."),
      acao: "Abrir WhatsApp",
      cor: "bg-abobora text-chocolate",
      botao: botao.primario,
    },
    {
      rotulo: "Instagram",
      titulo: SITE.instagramUsuario,
      texto: "Acompanhe resgates, rotina do abrigo e os pets que chegam.",
      href: SITE.instagram,
      acao: "Seguir no Instagram",
      cor: "bg-chocolate text-areia",
      botao: botao.destaque,
    },
    {
      rotulo: "E-mail",
      titulo: SITE.email,
      texto: "Para parcerias, imprensa e assuntos que pedem mais detalhes.",
      href: `mailto:${SITE.email}`,
      acao: "Enviar e-mail",
      cor: "bg-areia text-chocolate",
      botao: botao.primario,
    },
  ];

  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 py-8 md:py-20">
          <div data-revelar>
          <TituloSecao rotulo="Contato" titulo="Vamos conversar?">
            {/* TODO: informar se o abrigo recebe visitas e em quais horários */}
            Estamos em {SITE.cidade}. O jeito mais rápido de falar com a gente é pelo WhatsApp.
          </TituloSecao>
          </div>
        </div>
      </section>
      {/* Celular */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 md:hidden">
        <a
          href={whatsappLink("Oi! Vim pelo site do abrigo.")}
          target="_blank"
          rel="noreferrer"
          data-revelar
          className="flex items-center gap-4 rounded-lg bg-abobora p-5 text-chocolate active:scale-[0.99]"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-chocolate text-areia">
            <IconeWhatsApp />
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em]">WhatsApp</span>
            <span className="font-display text-2xl font-bold leading-tight">{SITE.whatsappExibicao}</span>
            <span className="text-sm font-semibold">Toque para conversar</span>
          </span>
        </a>

        <ul data-revelar style={atraso(100)} className="divide-y divide-chocolate/10 overflow-hidden rounded-lg bg-areia">
          {redes.map((r) => (
            <li key={r.nome}>
              <a href={r.href} target="_blank" rel="noreferrer" className="flex min-h-16 items-center gap-4 px-5 py-3 active:bg-abobora/20">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fundo text-caramelo">{r.icone}</span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="font-bold">{r.nome}</span>
                  <span className="truncate text-sm text-texto-suave">{r.detalhe}</span>
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-caramelo" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Tablet e desktop */}
      <section className="mx-auto hidden w-full max-w-6xl gap-5 px-5 py-16 md:grid md:grid-cols-3">
        {canais.map((c, i) => (
          <div key={c.rotulo} data-revelar style={atraso(i * 90)} className={`flex flex-col gap-4 rounded-md p-7 ${c.cor}`}>
            <span className={rotulo}>{c.rotulo}</span>
            <h2 className="font-display text-2xl font-bold break-words">{c.titulo}</h2>
            <p className="flex-1 font-semibold opacity-90">{c.texto}</p>
            <a href={c.href} target="_blank" rel="noreferrer" className={`${c.botao} self-start`}>
              {c.acao}
            </a>
          </div>
        ))}
      </section>
      <section className="mx-auto hidden w-full max-w-6xl px-5 pb-20 md:block">
        <div className="flex flex-col gap-4 rounded-md bg-areia p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-bold">Também estamos no TikTok e no Facebook</p>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.tiktok} target="_blank" rel="noreferrer" className={botao.contorno}>TikTok</a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className={botao.contorno}>Facebook</a>
          </div>
        </div>
      </section>
    </>
  );
}
