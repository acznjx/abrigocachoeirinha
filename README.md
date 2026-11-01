# Abrigo Cachoeirinha

Site do Abrigo Cachoeirinha, lar temporário de cães e gatos em Cachoeirinha, RS: animais para adoção, formas de ajudar, rifas, história do abrigo e contato.

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router, Cache Components)
- React 19 e TypeScript
- Tailwind CSS 4
- Fontes Fredoka e Nunito via `next/font`

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

| Comando         | O que faz                     |
| --------------- | ----------------------------- |
| `npm run dev`   | Servidor de desenvolvimento   |
| `npm run build` | Build de produção             |
| `npm run start` | Roda o build de produção      |
| `npm run lint`  | Verifica o código com ESLint  |

## Estrutura

```
src/
  app/          páginas (adote, como-ajudar, rifas, sobre, contato, privacidade, termos)
  components/   componentes de interface
  data/         pets, rifas, parceiros e passos da adoção
  lib/          dados do abrigo (contatos, Pix) e classes de UI compartilhadas
public/
  fotos/  pets/  videos/  rifas/  parceiros/
```

## Atualizando o conteúdo

- **Pets para adoção:** foto quadrada em `public/pets/` e um item em `src/data/pets.ts`.
- **Rifas:** `src/data/rifas.ts` (mude `status` para `"encerrada"` ao fim do sorteio).
- **Parceiros:** logo em `public/parceiros/` e um item em `src/data/parceiros.ts`.
- **Contatos e chave Pix:** `src/lib/site.ts`.

## Segurança e privacidade

Cabeçalhos de segurança (CSP, HSTS etc.) ficam em `next.config.ts`. O site não usa cookies de rastreamento nem coleta dados por formulário; veja `/privacidade` e o [SECURITY.md](SECURITY.md).

---

Feito por [acznjx](https://github.com/acznjx).
