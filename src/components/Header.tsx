"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { botao } from "@/lib/ui";
import { Logo } from "./Logo";

const LINKS = NAV.filter((item) => item.href !== "/adote");

export function Header() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <header className="sticky top-0 z-30 bg-areia">
      {/* A altura (h-16 / md:h-20) é descontada no hero. */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Link href="/" onClick={fechar} aria-label="Abrigo Cachoeirinha, página inicial">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 font-bold md:flex">
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-caramelo">
              {item.label}
            </Link>
          ))}
          <Link href="/adote" className={botao.primario}>
            Quero adotar
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-chocolate text-areia md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            {aberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {aberto && (
        <nav id="menu-celular" aria-label="Principal" className="flex flex-col px-5 pb-5 font-bold md:hidden">
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} onClick={fechar} className="border-b border-chocolate/10 px-1 py-4 text-lg hover:text-caramelo">
              {item.label}
            </Link>
          ))}
          <Link href="/adote" onClick={fechar} className={`${botao.primario} mt-4 w-full`}>
            Quero adotar
          </Link>
        </nav>
      )}
    </header>
  );
}
