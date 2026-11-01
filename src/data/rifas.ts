// TODO: mover para o Supabase quando o painel do abrigo existir.
export type Rifa = {
  slug: string;
  titulo: string;
  premio: string;
  valorNumero: string;
  dataSorteio: string;
  status: "ativa" | "encerrada";
  link: string; // página de compra (ex.: rifapersonalizada.com.br/...)
  objetivo: string; // para onde vai o dinheiro
  ganhador?: string;
  foto?: string;
};

export const rifas: Rifa[] = [
  {
    slug: "rifa-solidaria",
    titulo: "Rifa solidária: ajude nossos cães e gatos",
    premio: "TV 43 polegadas",
    valorNumero: "R$ 5,00",
    dataSorteio: "Na data definida pelo abrigo, direto na plataforma",
    status: "ativa",
    link: "https://rifapersonalizada.com.br/rifa-solidaria-ajude-nossos-caes-e-gatos-hif11Z",
    foto: "/rifas/tv-43.jpg",
    objetivo: "O valor arrecadado custeia as despesas veterinárias dos nossos animaizinhos resgatados. Sua ajuda salva vidas!",
  },
];

export const rifasAtivas = rifas.filter((r) => r.status === "ativa");
export const rifasEncerradas = rifas.filter((r) => r.status === "encerrada");
