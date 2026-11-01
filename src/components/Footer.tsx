import Link from "next/link";
import { NAV, SITE, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto bg-chocolate text-areia">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 md:py-14">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <Logo negativo />
          <p className="max-w-sm text-areia/85">
            Criado nas enchentes do Rio Grande do Sul, hoje somos porto seguro de cães e gatos em {SITE.cidade}.
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col font-bold md:gap-2">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 hover:text-abobora md:py-0">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col md:gap-2">
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="py-2 font-bold hover:text-abobora md:py-0">
            Instagram<span className="hidden md:inline"> {SITE.instagramUsuario}</span>
          </a>
          <a href={SITE.tiktok} target="_blank" rel="noreferrer" className="py-2 font-bold hover:text-abobora md:py-0">TikTok</a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer" className="py-2 font-bold hover:text-abobora md:py-0">Facebook</a>
          <a href={whatsappLink("Oi! Vim pelo site do abrigo.")} target="_blank" rel="noreferrer" className="py-2 font-bold hover:text-abobora md:py-0">
            WhatsApp<span className="hidden md:inline"> {SITE.whatsappExibicao}</span>
          </a>
          <span className="mt-2 text-sm text-areia/85 [overflow-wrap:anywhere] md:text-base">Pix: {SITE.pix}</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-areia/15 px-5 pb-24 pt-5 text-sm text-areia/80 md:pb-5">
        <nav aria-label="Informações legais" className="flex flex-wrap gap-x-5 gap-y-1 font-bold text-areia">
          <Link href="/privacidade" className="py-1 hover:text-abobora">Política de Privacidade</Link>
          <Link href="/termos" className="py-1 hover:text-abobora">Termos de Uso</Link>
          <Link href="/termos#doacoes" className="py-1 hover:text-abobora">Doações e reembolso</Link>
        </nav>
        <div className="flex flex-col justify-between gap-1 sm:flex-row">
          <span>© {SITE.nome}</span>
          <span>
            Feito por{" "}
            <a href="https://www.instagram.com/acznjx/" target="_blank" rel="noreferrer" className="font-bold text-areia hover:text-abobora">
              acznjx
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
