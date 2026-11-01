import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLegal } from "@/components/PaginaLegal";
import { FUNDADORA, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Regras de uso do site do Abrigo Cachoeirinha, adoção responsável, doações, reembolso e rifas.",
};

export default function TermosPage() {
  return (
    <PaginaLegal
      titulo="Termos de Uso"
      atualizado="1º de novembro de 2026"
      resumo={
        <p>
          <strong>Em resumo:</strong> o site é informativo e não vende nada. A adoção depende de conversa e avaliação, as
          doações são voluntárias e, se você enviar um valor por engano, devolvemos. As rifas seguem as regras da plataforma
          onde estão hospedadas.
        </p>
      }
    >
      <h2>1. Sobre o site</h2>
      <p>
        Este site é do {SITE.nome}, lar temporário de cães e gatos em {SITE.cidade}, coordenado por {FUNDADORA.nome}. Ele
        serve para apresentar os animais para adoção, mostrar formas de ajudar e reunir nossos contatos. Ao usar o site,
        você concorda com estes termos e com a <Link href="/privacidade">Política de Privacidade</Link>.
      </p>

      <h2>2. Informações sobre os animais</h2>
      <p>
        As informações dos animais (idade, porte, temperamento, castração) são aproximadas e baseadas no que observamos no
        dia a dia do abrigo. Elas podem mudar, e um animal pode já ter sido adotado quando você entrar em contato.
        Confirme sempre pelo WhatsApp antes de se deslocar.
      </p>

      <h2>3. Adoção responsável</h2>
      <ul>
        <li>Demonstrar interesse pelo site não garante a adoção.</li>
        <li>
          Toda adoção passa por conversa e avaliação, e o abrigo pode recusar um pedido se entender que não é o melhor para
          o animal.
        </li>
        <li>Quem adota precisa ser maior de 18 anos e assumir o compromisso de cuidar do animal pela vida toda.</li>
        <li>O abrigo pode acompanhar o animal depois da adoção, combinado com quem adotou.</li>
      </ul>

      <h2 id="doacoes">4. Doações e reembolso</h2>
      <p>
        As doações (Pix, ração, itens) são voluntárias e usadas nos cuidados com os animais: alimentação, despesas
        veterinárias, remédios e manutenção do abrigo. Doar não dá direito a contrapartida.
      </p>
      <ul>
        <li>
          <strong>Valor enviado por engano</strong> (valor errado, Pix duplicado ou para a chave errada): escreva para{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ou chame no WhatsApp em até 30 dias, com o comprovante, e
          devolvemos o valor pelo mesmo meio.
        </li>
        <li>Fora desses casos, por serem voluntárias, as doações não são reembolsáveis.</li>
        <li>
          Não há venda de produtos nem cobrança de assinatura pelo site. Se alguém pedir dinheiro em nome do abrigo por outra
          chave Pix, desconfie: a única chave oficial é <strong>{SITE.pix}</strong>.
        </li>
      </ul>

      <h2 id="rifas">5. Rifas</h2>
      <p>
        As rifas divulgadas no site são feitas em uma plataforma externa. A compra dos números, o pagamento, o sorteio, a
        entrega dos prêmios e eventuais cancelamentos ou reembolsos seguem as regras publicadas na página de cada rifa
        nessa plataforma. Em caso de dúvida, fale com a gente antes de comprar.
      </p>

      <h2>6. Conteúdo e imagens</h2>
      <p>
        Textos, fotos, vídeos e a marca do abrigo pertencem ao {SITE.nome} ou foram usados com autorização. Você pode
        compartilhar os conteúdos para ajudar na adoção e nas campanhas, desde que não altere as informações nem use para
        fins comerciais.
      </p>

      <h2>7. Links externos</h2>
      <p>
        O site tem links para WhatsApp, Instagram, TikTok, Facebook, parceiros e a plataforma das rifas. Esses serviços têm
        termos próprios, e não respondemos pelo conteúdo deles.
      </p>

      <h2>8. Contato e foro</h2>
      <p>
        Dúvidas sobre estes termos: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ou WhatsApp{" "}
        {SITE.whatsappExibicao}. Estes termos seguem a lei brasileira, e fica eleito o foro da comarca de Cachoeirinha, RS,
        respeitados os direitos do consumidor.
      </p>
    </PaginaLegal>
  );
}
