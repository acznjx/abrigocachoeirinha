import type { Metadata } from "next";
import { pets } from "@/data/pets";
import { ListaPets } from "@/components/ListaPets";
import { TituloSecao } from "@/components/Secao";

export const metadata: Metadata = {
  title: "Adote um cão ou gato",
  description: "Conheça os cães e gatos do Abrigo Cachoeirinha que estão esperando por um lar.",
};


export default function AdotePage() {
  return (
    <>
      <section className="bg-areia">
        <div className="mx-auto max-w-6xl px-5 py-8 md:py-20">
          <div data-revelar>
          <TituloSecao rotulo="Adote" titulo="Eles estão esperando por você">
            Cada um deles foi resgatado e cuidado com muito carinho até aqui. Adotar é um compromisso para a vida toda:
            pense com carinho antes de decidir.
          </TituloSecao>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-6 md:py-16">
        <ListaPets pets={pets} />
      </section>
    </>
  );
}
