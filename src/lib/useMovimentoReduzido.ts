"use client";

import { useSyncExternalStore } from "react";

const consulta = "(prefers-reduced-motion: reduce)";

function assinar(aoMudar: () => void) {
  const mq = window.matchMedia(consulta);
  mq.addEventListener("change", aoMudar);
  return () => mq.removeEventListener("change", aoMudar);
}

export function useMovimentoReduzido() {
  return useSyncExternalStore(
    assinar,
    () => window.matchMedia(consulta).matches,
    () => false,
  );
}
