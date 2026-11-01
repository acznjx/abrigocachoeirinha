import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BarraCelular } from "@/components/BarraCelular";
import { Intro } from "@/components/Intro";
import { RevelarAuto } from "@/components/RevelarAuto";
import { CHAVE_INTRO } from "@/lib/site";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Abrigo Cachoeirinha · Resgate e adoção de cães e gatos",
    template: "%s · Abrigo Cachoeirinha",
  },
  description:
    "Lar temporário de cães e gatos em Cachoeirinha, RS. Conheça os pets para adoção e saiba como ajudar.",
  openGraph: {
    siteName: "Abrigo Cachoeirinha",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Roda antes da primeira pintura para evitar que o site pisque antes da abertura. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("anima");if(localStorage.getItem("${CHAVE_INTRO}")!==new Date().toDateString())document.documentElement.setAttribute("data-intro","")}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-chocolate focus:px-5 focus:py-3 focus:font-bold focus:text-areia">
          Pular para o conteúdo
        </a>
        <Intro />
        <Header />
        <main id="conteudo" tabIndex={-1} className="flex flex-1 flex-col outline-none">{children}</main>
        <Footer />
        <BarraCelular />
        <RevelarAuto />
      </body>
    </html>
  );
}
