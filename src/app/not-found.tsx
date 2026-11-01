import Link from "next/link";
import { Patinha } from "@/components/Patinha";
import { botao } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-1 flex-col items-center justify-center gap-5 px-5 py-24 text-center">
      <Patinha className="h-16 w-auto text-abobora" />
      <h1 className="font-display text-5xl font-bold">Essa patinha se perdeu</h1>
      <p className="text-lg text-texto-corpo">A página que você procura não existe ou mudou de lugar.</p>
      <Link href="/" className={botao.primario}>
        Voltar para o início
      </Link>
    </section>
  );
}
