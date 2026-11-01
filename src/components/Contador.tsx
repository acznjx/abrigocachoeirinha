"use client";

import { useEffect, useRef, useState } from "react";

export function Contador({ ate, prefixo = "", duracao = 1600 }: { ate: number; prefixo?: string; duracao?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [valor, setValor] = useState(ate);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let quadro = 0;
    const obs = new IntersectionObserver(
      ([e]) => {
        cancelAnimationFrame(quadro);
        if (!e.isIntersecting) {
          setValor(0);
          return;
        }
        const inicio = performance.now();
        const passo = (agora: number) => {
          const t = Math.min(1, (agora - inicio) / duracao);
          const suave = 1 - Math.pow(1 - t, 3);
          setValor(Math.round(ate * suave));
          if (t < 1) quadro = requestAnimationFrame(passo);
        };
        quadro = requestAnimationFrame(passo);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(quadro);
    };
  }, [ate, duracao]);

  return (
    <span ref={ref} aria-label={`${prefixo}${ate}`} className="tabular-nums">
      <span aria-hidden="true">
        {prefixo}
        {valor}
      </span>
    </span>
  );
}
