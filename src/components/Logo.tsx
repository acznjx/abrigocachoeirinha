import { Patinha } from "./Patinha";

type Props = { negativo?: boolean; className?: string };

export function Logo({ negativo = false, className = "" }: Props) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <Patinha className="h-10 w-auto text-abobora" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[26px] font-bold leading-[0.88] tracking-tight ${negativo ? "text-areia" : "text-chocolate"}`}>
          abrigo
        </span>
        <span className={`font-display text-[13px] font-semibold ${negativo ? "text-areia" : "text-caramelo"}`}>
          cachoeirinha
        </span>
      </span>
    </span>
  );
}
