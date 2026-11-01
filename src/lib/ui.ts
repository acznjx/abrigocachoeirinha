const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-chocolate";

export const botao = {
  primario: `${base} bg-chocolate text-areia hover:bg-caramelo hover:text-white`,
  destaque: `${base} bg-abobora text-chocolate hover:bg-areia`,
  contorno: `${base} border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-areia`,
  contornoClaro: `${base} border-2 border-areia text-areia hover:bg-areia hover:text-chocolate`,
};

export const rotulo = "text-xs font-extrabold uppercase tracking-[0.2em]";

export const atraso = (ms: number) => ({ "--atraso": `${ms}ms` }) as React.CSSProperties;
