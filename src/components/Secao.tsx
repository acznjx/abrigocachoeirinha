import { rotulo } from "@/lib/ui";

type Props = { rotulo?: string; titulo: string; children?: React.ReactNode; className?: string };

export function TituloSecao({ rotulo: r, titulo, children, className = "" }: Props) {
  return (
    <div className={`flex max-w-2xl flex-col gap-2 md:gap-3 ${className}`}>
      {r && <span className={`${rotulo} text-caramelo`}>{r}</span>}
      <h2 className="font-display text-3xl font-bold leading-[1.05] md:text-5xl">{titulo}</h2>
      {children && <p className="text-base text-texto-corpo md:text-lg">{children}</p>}
    </div>
  );
}
