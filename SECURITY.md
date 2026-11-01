# Segurança do site do Abrigo Cachoeirinha

## O que já está aplicado
- **Cabeçalhos de segurança** em todas as rotas (`next.config.ts`): CSP restrita ao próprio domínio,
  HSTS (HTTPS obrigatório), proteção contra iframe (clickjacking), `nosniff`, Referrer-Policy,
  Permissions-Policy desligando câmera/microfone/localização etc. e COOP.
- **Sem conteúdo de terceiros**: fontes, imagens, vídeo e scripts são servidos pelo próprio site.
  Nenhum script de rastreamento, nenhum iframe, nenhum CDN externo.
- **Sem dados de usuário**: o site não tem formulários, login nem banco de dados. Contato e adoção
  vão para o WhatsApp oficial. Não há dados pessoais armazenados.
- **Links externos** abrem com `rel="noreferrer"` (impede que a página aberta controle a nossa).
- `X-Powered-By` desligado e source maps fora de produção.
- `/.well-known/security.txt` com o contato para avisos de falhas.
- Dependabot verificando dependências toda semana.
- Arquivos `.env*` fora do Git.

## Rotina recomendada
- Rodar `npm audit` antes de cada publicação e corrigir alertas *high*/*critical*.
- Aceitar os PRs do Dependabot depois de rodar `npm run build`.
- Ativar autenticação em dois fatores (2FA) no GitHub, na Vercel, no registro do domínio
  e no Instagram/e-mail do abrigo.
- Renovar a data `Expires` do `security.txt` todo ano.
- Testar os cabeçalhos em https://securityheaders.com depois de publicar.

## Quando o painel do abrigo (login + Supabase) for criado
- Ativar **Row Level Security (RLS)** em todas as tabelas; a chave `anon` só lê o que for público.
- A `service_role` key **nunca** vai para o navegador nem para variáveis `NEXT_PUBLIC_*`.
- Toda alteração passa por Server Actions/rotas do servidor que conferem a sessão do usuário.
- Upload de fotos: limitar tipo (jpg/png/webp) e tamanho no bucket do Supabase Storage.
- Migrar a CSP para **nonce** com `proxy.ts` (as páginas do painel já serão dinâmicas).
- Login com e-mail + senha forte ou link mágico; nada de contas compartilhadas.
