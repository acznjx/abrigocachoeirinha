"use client";

import { useEffect } from "react";

export function RevelarAuto() {
  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("anima")) return;

    // Começa só após a hidratação, senão o React acusa diferença entre servidor e cliente.
    let parar = () => {};
    const iniciar = () => {
      const ocioso = window.requestIdleCallback ?? ((f: () => void) => window.setTimeout(f, 120));
      ocioso(() => {
        parar = comecar();
      });
    };
    if (document.readyState === "complete") iniciar();
    else window.addEventListener("load", iniciar, { once: true });
    return () => {
      window.removeEventListener("load", iniciar);
      parar();
    };
  }, []);

  return null;
}

function comecar() {
  {
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("revelado");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.1 },
    );

    const observar = (raiz: ParentNode) =>
      raiz.querySelectorAll("[data-revelar]:not(.revelado)").forEach((el) => io.observe(el));
    observar(document);

    let quadro = 0;
    const conferir = () => {
      quadro = 0;
      const limite = window.innerHeight * 0.94;
      document.querySelectorAll("[data-revelar]:not(.revelado)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < limite && r.bottom > 0) {
          el.classList.add("revelado");
          io.unobserve(el);
        }
      });
    };
    const agendar = () => {
      if (!quadro) quadro = window.setTimeout(conferir, 60);
    };
    window.addEventListener("scroll", agendar, { passive: true });
    const primeira = window.setTimeout(conferir, 60);

    const mo = new MutationObserver((mudancas) => {
      for (const m of mudancas) m.addedNodes.forEach((n) => n instanceof Element && observar(n.parentNode ?? n));
      agendar();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", agendar);
      window.clearTimeout(primeira);
      if (quadro) window.clearTimeout(quadro);
    };
  }
}
