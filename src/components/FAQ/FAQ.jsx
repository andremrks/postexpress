import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./faq.css";
import "react-accessible-accordion/dist/fancy-example.css";

const data = [
  {
    heading: "Como funciona nosso serviço?",
    content:
      "Após a escolha do plano que melhor atenda às suas necessidades, você receberá uma mensagem de boas-vindas contendo algumas perguntas para serem respondidas. Essas perguntas nos ajudarão a entender melhor o seu perfil e os temas que mais se adequam ao seu negócio, para que possamos realizar as postagens de forma estratégica e efetiva. Após o recebimento de suas respostas, iniciaremos o processo de criação do conteúdo para as suas postagens. Nosso prazo médio para início da entrega é de 7 dias úteis, pois investimos um tempo considerável em pesquisas e na criação de conteúdo de qualidade, de acordo com o perfil e os objetivos do seu negócio",
  },
  {
    heading: "Como funciona a assinatura de contrato e pagamento?",
    content:
      "Após escolher o plano que melhor atenda às suas necessidades, você será direcionado(a) para a página de pagamento. Lá, você poderá escolher o formato de pagamento que mais se adequa a sua preferência e conveniência, com a possibilidade de descontos ou benefícios exclusivos de acordo com a opção selecionada.É importante ressaltar que caso haja a necessidade de cancelamento, você poderá fazê-lo a qualquer momento, bastando apenas um aviso prévio de 30 dias. Dessa forma, oferecemos a flexibilidade necessária para que você possa gerenciar seu plano de acordo com as necessidades do seu negócio.",
  },
  {
    heading: "Como funciona o atendimento?",
    content:
      "Nosso atendimento é realizado por meio de email e WhatsApp, garantindo agilidade e praticidade na comunicação com nossos clientes. Nosso compromisso é responder suas solicitações em até 1 dia útil. É importante lembrar que, devido à proposta do nosso produto, não realizamos alterações de artes e textos já aprovados. No entanto, podemos coletar informações para realizar as adaptações necessárias dentro do padrão do mês seguinte, garantindo assim a continuidade da sua estratégia de marketing digital.",
  },
];

const FAQ = () => {
  return (
    <div id="perguntas" className="postexpress__faq">
        <h1>Perguntas Frequentes</h1>
      <div className="postexpress__faq-container">
        <Accordion>
          {data.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
