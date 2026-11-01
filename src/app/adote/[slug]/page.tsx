import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPet, pets } from "@/data/pets";
import { FotoPet } from "@/components/PetCard";
import { whatsappLink } from "@/lib/site";
import { atraso, botao, rotulo } from "@/lib/ui";

export function generateStaticParams() {
  return pets.map((pet) => ({ slug: pet.slug }));
}

export async function generateMetadata({ params }: PageProps<"/adote/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pet = getPet(slug);
  if (!pet) return { title: "Pet não encontrado" };
  const titulo = `${pet.nome} procura um lar`;
  const descricao = `${[pet.especie === "gato" ? "Gato" : "Cachorro", pet.idade, pet.porte && `porte ${pet.porte}`].filter(Boolean).join(", ")}. Conheça e adote no Abrigo Cachoeirinha.`;
  return {
    title: titulo,
    description: descricao,
    openGraph: { title: titulo, description: descricao, images: pet.foto ? [pet.foto] : undefined },
  };
}

async function DetalhesPet({ params }: Pick<PageProps<"/adote/[slug]">, "params">) {
  const { slug } = await params;
  const pet = getPet(slug);
  if (!pet) notFound();

  const fatos = [
    { rotulo: "Espécie", valor: pet.especie === "gato" ? "Gato" : "Cachorro" },
    { rotulo: "Idade", valor: pet.idade },
    { rotulo: "Porte", valor: pet.porte },
    { rotulo: "Sexo", valor: pet.sexo },
  ].filter((f): f is { rotulo: string; valor: string } => Boolean(f.valor));

  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-10">
      <div data-revelar className="relative aspect-square overflow-hidden rounded-lg bg-areia">
        <FotoPet pet={pet} sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div data-revelar style={atraso(120)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className={`${rotulo} text-caramelo`}>Para adoção</span>
          <h1 className="font-display text-4xl font-bold leading-none md:text-5xl">{pet.nome}</h1>
        </div>
        <dl className="grid grid-cols-2 gap-3">
          {fatos.map((f) => (
            <div key={f.rotulo} className="rounded-sm bg-areia px-4 py-3">
              <dt className="text-xs font-extrabold uppercase tracking-wider text-texto-suave">{f.rotulo}</dt>
              <dd className="font-display text-xl font-semibold capitalize">{f.valor}</dd>
            </div>
          ))}
        </dl>
        <p className="text-lg text-texto-corpo">{pet.descricao}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink(`Oi! Tenho interesse em adotar o(a) ${pet.nome}. Pode me contar mais?`)}
            target="_blank"
            rel="noreferrer"
            className={`${botao.primario} w-full sm:w-auto`}
          >
            Quero adotar {pet.nome}
          </a>
          <Link href="/adote" className={`${botao.contorno} w-full sm:w-auto`}>
            Ver outros pets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PetPage(props: PageProps<"/adote/[slug]">) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-6 md:py-16">
      <Suspense fallback={<div className="aspect-square max-w-xl rounded-lg bg-areia" />}>
        <DetalhesPet params={props.params} />
      </Suspense>
    </section>
  );
}
