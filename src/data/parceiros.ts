// Para adicionar um parceiro: logo em public/parceiros/ e um item nesta lista.
export type Parceiro = {
  nome: string;
  logo: string;
  descricao: string;
  instagram?: string;
  instagramUsuario?: string;
  whatsapp?: string; // só dígitos, com DDI e DDD
  whatsappExibicao?: string;
  mensagem?: string;
};

export const parceiros: Parceiro[] = [
  {
    nome: "Agro Amigo Bicho",
    logo: "/parceiros/agro-amigo-bicho-logo.jpg",
    descricao:
      "Quer doar ração de cães e gatos, granulados e vitaminas para os nossos resgatados? Fale com a Agro Amigo Bicho, nossa parceira. Juntos podemos fazer a diferença!",
    instagram: "https://www.instagram.com/agroamigobicho/",
    instagramUsuario: "@agroamigobicho",
    whatsapp: "5551997731386",
    whatsappExibicao: "(51) 99773-1386",
    mensagem: "Oi! Quero doar ração para o Abrigo Cachoeirinha.",
  },
];

export function whatsappParceiro(p: Parceiro) {
  return p.whatsapp ? `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(p.mensagem ?? "")}` : undefined;
}
