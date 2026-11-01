import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLegal } from "@/components/PaginaLegal";
import { FUNDADORA, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o Abrigo Cachoeirinha trata dados pessoais, de acordo com a LGPD (Lei 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <PaginaLegal
      titulo="Política de Privacidade"
      atualizado="1º de novembro de 2026"
      resumo={
        <p>
          <strong>Em resumo:</strong> este site não tem formulários, não pede cadastro, não usa cookies de rastreamento nem
          ferramentas de análise ou anúncios. Os dados pessoais só chegam até nós quando você mesmo entra em contato
          (WhatsApp, Instagram, e-mail) ou faz uma doação, e são usados apenas para isso.
        </p>
      }
    >
      <h2>1. Quem é o responsável pelos dados</h2>
      <p>
        O responsável (controlador, nos termos da Lei Geral de Proteção de Dados, Lei 13.709/2018) é o {SITE.nome},
        coordenado por {FUNDADORA.nome}, em {SITE.cidade}. Para qualquer assunto sobre privacidade, fale com a gente pelo
        e-mail <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2>2. Quais dados tratamos e para quê</h2>
      <ul>
        <li>
          <strong>Navegação no site:</strong> não coletamos dados pessoais. A empresa de hospedagem pode registrar dados
          técnicos de acesso (como endereço IP, data e hora e tipo de navegador) por segurança e para o site funcionar.
          Esses registros não são usados para identificar você nem para publicidade.
        </li>
        <li>
          <strong>Adoção:</strong> quando você chama a gente no WhatsApp para adotar, pedimos só o necessário para avaliar e
          acompanhar a adoção com responsabilidade: nome, telefone, cidade/endereço e informações sobre o lar onde o
          animal vai viver. Esses dados servem apenas para a adoção e para acompanhar o bem-estar do animal depois.
        </li>
        <li>
          <strong>Doações por Pix:</strong> o banco nos mostra o nome de quem doou e o valor. Usamos essa informação só para
          controle das doações e, se for o caso, para devolver um valor enviado por engano.
        </li>
        <li>
          <strong>Contato e voluntariado:</strong> o que você nos enviar por WhatsApp, Instagram, TikTok, Facebook ou e-mail
          é usado apenas para responder e organizar a ajuda combinada.
        </li>
      </ul>
      <p>
        As bases legais são o seu consentimento ao entrar em contato, a execução do que você pediu (como a adoção) e o
        nosso legítimo interesse em proteger os animais, sempre com o mínimo de dados possível.
      </p>

      <h2>3. Cookies e armazenamento no navegador</h2>
      <p>
        Não usamos cookies de rastreamento, de análise ou de publicidade. O site guarda no seu próprio navegador só uma
        informação técnica (no armazenamento local): a data em que a animação de abertura já foi mostrada, para ela não
        aparecer de novo no mesmo dia. Esse dado não sai do seu aparelho, não identifica você e pode ser apagado a qualquer
        momento limpando os dados do site no navegador. Por ser estritamente necessário ao funcionamento, ele não depende
        de consentimento.
      </p>

      <h2>4. Com quem os dados são compartilhados</h2>
      <p>
        Não vendemos nem repassamos seus dados. Os canais que você usar para falar com a gente (WhatsApp, Instagram,
        TikTok, Facebook, e-mail) e a plataforma das rifas têm políticas de privacidade próprias, que valem quando você
        está neles. Ao clicar em links para esses serviços, você sai do nosso site.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Guardamos os dados só pelo tempo necessário: as conversas de adoção, enquanto durar o acompanhamento do animal; os
        registros de doação, pelo tempo exigido para prestação de contas. Depois disso, eles são apagados.
      </p>

      <h2>6. Fotos e imagens</h2>
      <p>
        As fotos publicadas são dos animais do abrigo e de pessoas que autorizaram o uso da imagem. Se você aparece em
        alguma foto e quer que ela seja retirada, escreva para <a href={`mailto:${SITE.email}`}>{SITE.email}</a> e
        retiramos.
      </p>

      <h2>7. Seus direitos</h2>
      <p>Pela LGPD (art. 18), você pode, a qualquer momento e sem custo:</p>
      <ul>
        <li>confirmar se tratamos dados seus e ter acesso a eles;</li>
        <li>corrigir dados incompletos ou desatualizados;</li>
        <li>pedir que sejam apagados ou anonimizados;</li>
        <li>revogar o consentimento;</li>
        <li>saber com quem eles foram compartilhados.</li>
      </ul>
      <p>
        Basta pedir pelo e-mail <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Você também pode reclamar à Autoridade
        Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>8. Segurança</h2>
      <p>
        O site funciona só com conexão segura (HTTPS), não carrega scripts de terceiros e não armazena dados pessoais. Os
        dados recebidos pelos canais de contato ficam restritos a quem cuida do abrigo.
      </p>

      <h2>9. Mudanças nesta política</h2>
      <p>
        Se algo mudar (por exemplo, se o site passar a ter formulário ou cadastro), esta página será atualizada antes. Veja
        também os <Link href="/termos">Termos de Uso</Link>.
      </p>
    </PaginaLegal>
  );
}
