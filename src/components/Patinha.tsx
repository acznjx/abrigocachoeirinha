type Props = { className?: string; titulo?: string };

// Usa currentColor: a cor vem da classe de texto (ex.: text-abobora).
export function Patinha({ className, titulo }: Props) {
  return (
    <svg
      viewBox="30 22 140 150"
      className={className}
      fill="currentColor"
      role={titulo ? "img" : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
    >
      <ellipse cx="56" cy="80" rx="15" ry="20" transform="rotate(-25 56 80)" />
      <ellipse cx="84" cy="50" rx="15" ry="20" transform="rotate(-8 84 50)" />
      <ellipse cx="116" cy="50" rx="15" ry="20" transform="rotate(8 116 50)" />
      <ellipse cx="144" cy="80" rx="15" ry="20" transform="rotate(25 144 80)" />
      <path d="M100 166 C62 144 50 118 64 102 C76 89 94 92 100 106 C106 92 124 89 136 102 C150 118 138 144 100 166 Z" />
    </svg>
  );
}
