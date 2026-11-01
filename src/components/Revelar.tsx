"use client";

import { useEffect, useRef, useState } from "react";
import { useMovimentoReduzido } from "@/lib/useMovimentoReduzido";

type Props = {
  children: React.ReactNode;
  className?: string;
  atraso?: number; // ms
  de?: "baixo" | "esquerda" | "direita" | "zoom";
};

export function Revelar({ children, className = "", atraso = 0, de = "baixo" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);
  const semMovimento = useMovimentoReduzido();

  useEffect(() => {
    if (semMovimento) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisivel(true);
        obs.disconnect();
      }
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [semMovimento]);

  const escondido = {
    baixo: "translate3d(0, 20px, 0)",
    esquerda: "translate3d(-24px, 0, 0)",
    direita: "translate3d(24px, 0, 0)",
    zoom: "scale(0.97)",
  }[de];

  const mostrar = semMovimento || visivel;
  return (
    <div
      ref={ref}
      className={`${semMovimento ? "" : "transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)]"} ${className}`}
      style={{
        opacity: mostrar ? 1 : 0,
        transform: mostrar ? "none" : escondido,
        transitionDelay: mostrar && !semMovimento ? `${atraso}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
