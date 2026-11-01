// TODO: mover para o Supabase quando o painel do abrigo existir.
export type Pet = {
  slug: string;
  nome: string;
  especie: "cachorro" | "gato";
  idade?: string;
  porte?: string;
  sexo?: "macho" | "fêmea";
  descricao: string;
  foto?: string;
};

export const pets: Pet[] = [
  {
    slug: "talia",
    nome: "Talia",
    especie: "cachorro",
    idade: "6 meses",
    sexo: "fêmea",
    descricao: "Castrada, dócil e carinhosa. Brinca e se dá bem com outros cães. Está à espera de uma família que a ame e cuide para sempre!",
    foto: "/pets/talia.jpg",
  },
  {
    slug: "clara",
    nome: "Clara",
    especie: "cachorro",
    idade: "9 meses",
    sexo: "fêmea",
    descricao: "Castrada, chipada, dócil e carinhosa. Pronta para fazer parte de uma família!",
    foto: "/pets/clara.jpg",
  },
  {
    slug: "auriana",
    nome: "Auriana",
    especie: "cachorro",
    idade: "6 meses",
    sexo: "fêmea",
    descricao: "Ela é só um bebê, mas já sabe o que é sofrer. Mesmo assim, continua doce e carinhosa. Brinca e se dá bem com outros cães: uma companheira para todas as horas, pronta para ganhar um lar cheio de amor!",
    foto: "/pets/auriana.jpg",
  },
  {
    slug: "melissa",
    nome: "Melissa",
    especie: "cachorro",
    idade: "cerca de 1 ano",
    sexo: "fêmea",
    descricao: "Castrada e dócil. Está esperando alguém que se apaixone por ela!",
    foto: "/pets/melissa.jpg",
  },
  {
    slug: "barth",
    nome: "Barth",
    especie: "cachorro",
    idade: "2 anos",
    porte: "pequeno/médio",
    sexo: "macho",
    descricao: "Castrado, dócil, carinhoso e companheiro. Não precisa de muito: só de amor, carinho e uma família para sempre!",
    foto: "/pets/barth.jpg",
  },
  {
    slug: "amadeus",
    nome: "Amadeus",
    especie: "cachorro",
    sexo: "macho",
    descricao: "Já foi esquecido, mas o coração dele ainda acredita em você. Dócil, carinhoso, castrado e cheio de amor pra dar. Tudo que ele quer é uma chance de ser feliz!",
    foto: "/pets/amadeus.jpg",
  },
  {
    slug: "belinha",
    nome: "Belinha",
    especie: "cachorro",
    sexo: "fêmea",
    descricao: "Carinhosa e castrada. A Belinha precisa de espaço: ela ama correr e brincar!",
    foto: "/pets/belinha.jpg",
  },
  {
    slug: "filhote-laco-rosa",
    nome: "Ainda sem nome",
    especie: "cachorro",
    idade: "5 meses",
    sexo: "fêmea",
    descricao: "Muito dócil. Ela só precisa de um lar, amor e uma chance para ser muito feliz!",
    foto: "/pets/filhote-laco-rosa.jpg",
  },
  {
    slug: "filhote-pretinha",
    nome: "Ainda sem nome",
    especie: "cachorro",
    idade: "5 meses",
    sexo: "fêmea",
    descricao: "Dócil e muito brincalhona. Ela só precisa de um lar, amor e uma chance para ser muito feliz!",
    foto: "/pets/filhote-pretinha.jpg",
  },
  {
    slug: "filhotes-pitbull-akita",
    nome: "Filhotes Pitbull com Akita",
    especie: "cachorro",
    idade: "filhotes",
    descricao: "Filhotes, mistura de Pitbull com Akita, esperando por uma adoção responsável.",
    foto: "/pets/filhotes-pitbull-akita.jpg",
  },
  {
    slug: "vovozinha",
    nome: "Vovózinha",
    especie: "cachorro",
    sexo: "fêmea",
    descricao: "Uma vovózinha simpática e tranquila, à espera de um cantinho quentinho para aproveitar a melhor idade com carinho.",
    foto: "/pets/vovozinha.jpg",
  },
  {
    slug: "minhoca",
    nome: "Minhoca",
    especie: "cachorro",
    sexo: "macho",
    descricao: "Um guerreiro! O Minhoca usa cadeirinha de rodas e fraldas, e não deixa de ser alegre e carinhoso. Procura uma família especial, que dê a ele todo o cuidado que merece.",
    foto: "/pets/minhoca.jpg",
  },
  {
    slug: "malhado",
    nome: "Ainda sem nome",
    especie: "cachorro",
    descricao: "Malhado de preto e branco, de olhar atento. Está esperando uma família para chamar de sua.",
    foto: "/pets/malhado.jpg",
  },
  {
    slug: "caramelo",
    nome: "Ainda sem nome",
    especie: "cachorro",
    descricao: "Caramelo sorridente e cheio de energia. Está esperando uma família para chamar de sua.",
    foto: "/pets/caramelo.jpg",
  },
  {
    slug: "pirata-malhado",
    nome: "Ainda sem nome",
    especie: "cachorro",
    descricao: "Branco com manchas marrons, curioso e companheiro. Está esperando uma família para chamar de sua.",
    foto: "/pets/pirata-malhado.jpg",
  },
  {
    slug: "branquinha",
    nome: "Ainda sem nome",
    especie: "cachorro",
    descricao: "Branquinha de pelo cacheado e carinha doce. Está esperando uma família para chamar de sua.",
    foto: "/pets/branquinha.jpg",
  },
  {
    slug: "pretinho",
    nome: "Ainda sem nome",
    especie: "cachorro",
    descricao: "Pretinho de olhar meigo. Está esperando uma família para chamar de sua.",
    foto: "/pets/pretinho.jpg",
  },
  {
    slug: "gato-rajado",
    nome: "Ainda sem nome",
    especie: "gato",
    descricao: "Gato rajado de olhos cor de mel, curioso e tranquilo. Está esperando uma família para chamar de sua.",
    foto: "/pets/gato-rajado.jpg",
  },
  {
    slug: "gata-rajadinha",
    nome: "Ainda sem nome",
    especie: "gato",
    descricao: "Rajadinha de patinhas brancas, esperta e cheia de personalidade. Está esperando uma família para chamar de sua.",
    foto: "/pets/gata-rajadinha.jpg",
  },
  {
    slug: "dupla-rajada",
    nome: "Dupla rajada",
    especie: "cachorro",
    descricao: "Dois cães tigrados que vivem juntinhos. Podem ser adotados juntos ou separados: pergunte ao abrigo.",
    foto: "/pets/dupla-rajada.jpg",
  },
  {
    slug: "trio-caramelo",
    nome: "Trio caramelo",
    especie: "cachorro",
    descricao: "Três caramelos alegres e brincalhões, cada um esperando sua família.",
    foto: "/pets/trio-caramelo.jpg",
  },
  {
    slug: "filhotes-clinica",
    nome: "Filhotes",
    especie: "cachorro",
    idade: "filhotes",
    descricao: "Uma ninhada de filhotes cheios de energia, prontos para crescer em um lar com muito amor.",
    foto: "/pets/filhotes-clinica.jpg",
  },
  {
    slug: "trio-no-colo",
    nome: "Trio de filhotes",
    especie: "cachorro",
    idade: "filhotes",
    descricao: "Três filhotes que adoram colo e carinho, esperando por uma adoção responsável.",
    foto: "/pets/trio-no-colo.jpg",
  },
];

export function getPet(slug: string) {
  return pets.find((p) => p.slug === slug);
}
