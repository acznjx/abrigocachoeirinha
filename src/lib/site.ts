export const SITE = {
  nome: "Abrigo Cachoeirinha",
  cidade: "Cachoeirinha, RS",
  slogan: "Cada patinha merece um lar.",
  instagram: "https://www.instagram.com/abrigocachoeirinha/",
  instagramUsuario: "@abrigocachoeirinha",
  whatsapp: "5551986397526",
  whatsappExibicao: "(51) 98639-7526",
  grupoVoluntarios: "https://chat.whatsapp.com/Ey6PeRAbuYQIfNvP0zCyX3",
  tiktok: "https://www.tiktok.com/@abrigocachoeirinh",
  tiktokUsuario: "@abrigocachoeirinh",
  facebook: "https://www.facebook.com/share/1EjTKawhcy",
  email: "abrigocachoeirinha2024@gmail.com",
  pix: "abrigocachoeirinha2024@gmail.com", // chave Pix (e-mail)
};

export const FUNDADORA = {
  nome: "Rita Benites",
  papel: "Protetora · Coordenadora do Abrigo Cachoeirinha",
  selo: "Quem cuida",
  instagram: "https://www.instagram.com/rita.macedo.benites/",
  instagramUsuario: "@rita.macedo.benites",
  foto: "/fotos/rita-benites.jpg", // já recortada em 4:5 e com o tratamento de cor da marca
  fotoAlt: "Rita Benites sorrindo e fazendo carinho em uma ovelha no terreno do abrigo",
  fotoPosicao: "center",
  citacao: "Não compre, adote!",
  bio: "Com mais de 35 anos dedicados à causa animal, Rita deixou a própria casa na tragédia para acolher quem precisava. Hoje, ela cuida sozinha de mais de 100 animais.",
};

export function whatsappLink(mensagem: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const NAV = [
  { href: "/adote", label: "Adote" },
  { href: "/como-ajudar", label: "Como ajudar" },
  { href: "/rifas", label: "Rifas" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/contato", label: "Contato" },
];

// Chave do localStorage com o dia em que a abertura já foi mostrada.
export const CHAVE_INTRO = "abrigo-intro";
