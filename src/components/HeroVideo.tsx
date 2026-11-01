"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ src, srcCelular, poster }: { src: string; srcCelular?: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.pause();
    }
  }, []);

  return (
    <video
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      {srcCelular && <source src={srcCelular} type="video/mp4" media="(max-width: 767px)" />}
      <source src={src} type="video/mp4" />
    </video>
  );
}
