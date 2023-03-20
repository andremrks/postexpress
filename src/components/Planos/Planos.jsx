import { useState } from "react";
import Detalhes from "../Detalhes/Detalhes";

import Button from "../Button/Button";

import "./planos.css";

const Planos = () => {
  const [activePlan, setActivePlan] = useState("#plan3");

  const [opendModal, setOpenModal] = useState(false);
  const [opendModal2, setOpenModal2] = useState(false);
  const [opendModal3, setOpenModal3] = useState(false);
  const [opendModal4, setOpenModal4] = useState(false);

  return (
    <section id="planos" className="postexpress__planos">
      <div className="postexpress__planos-container">
        <h1>Conheça nossos Planos</h1>
        <div className="postexpress__planos-boxes">
          <a
            href="#plan1"
            onClick={() => setActivePlan("#plan1")}
            className={activePlan === "#plan1" ? "active" : ""}
          >
            <Detalhes
              open={opendModal}
              onClose={() => setOpenModal(false)}
              title="Basic"
              text="No plano Basic oferecido é o envio mensal de 10 artes/posts para serem publicados em suas redes sociais. Com esse serviço, você economiza tempo e recursos ao ter acesso a um material de qualidade e pronto para ser compartilhado com o seu público. As artes/posts são personalizadas de acordo com a sua marca e estilo de comunicação, tornando a sua presença online mais eficiente e atrativa para os seus clientes."
            />
            <div className="postexpress__plano">
              <h1>Basic</h1>
              <div className="postexpress__plano-valor">
                <p>R$</p>
                <p>97</p>
                <p>,00</p>
              </div>
              <div className="postexpress__plano-buttonBox">
                <Button text="Quero Contratar!" />
              </div>
              <div className="postexpress__plano-text">
                <p>
                  10 artes / posts mensais enviadas para <strong>VOCÊ</strong>{" "}
                  postar quando bem entender.
                </p>
              </div>
              <div className="postexpress_plano-detalhes-container">
                <p
                  className="postexpress__plano-detalhesBtn"
                  onClick={() => setOpenModal(true)}
                >
                  Ver Detalhes
                </p>
              </div>
            </div>
          </a>
          <a
            href="#plan2"
            onClick={() => setActivePlan("#plan2")}
            className={activePlan === "#plan2" ? "active" : ""}
          >
            <Detalhes
              open={opendModal2}
              onClose={() => setOpenModal2(false)}
              title="Pro"
              text="No plano Pró você terá artes exclusivas para todos os dias úteis do mês com agendamento automático para as suas redes sociais. Isso significa que você não precisará se preocupar em criar conteúdo diariamente, já que tudo será entregue pronto para postar e agendado automaticamente. Além disso, oferecemos um bônus de 3 template mensais customizáveis, que permite que você crie suas próprias artes de forma fácil e rápida. Com essa solução, você terá uma presença online profissional e impactante, sem perder tempo com tarefas repetitivas e cansativas."
            />
            <div className="postexpress__plano">
              <h1>Pro</h1>
              <div className="postexpress__plano-valor">
                <p>R$</p>
                <p>347</p>
                <p>,00</p>
              </div>
              <div className="postexpress__plano-buttonBox">
                <Button text="Quero Contratar!" />
              </div>
              <div className="postexpress__plano-text">
                <p>
                  Artes para todos os dias do úteis do mês com agendamento
                  automatico + bonus de template customizável.
                </p>
              </div>
              <div className="postexpress_plano-detalhes-container">
                <p
                  className="postexpress__plano-detalhesBtn"
                  onClick={() => setOpenModal2(true)}
                >
                  Ver Detalhes
                </p>
              </div>
            </div>
          </a>
          <a
            href="#plan3"
            onClick={() => setActivePlan("#plan3")}
            className={activePlan === "#plan3" ? "active" : ""}
          >
            <Detalhes
              open={opendModal3}
              onClose={() => setOpenModal3(false)}
              title="Power"
              text="O Plano Power oferece tudo que o plano Pró oferece + uma agenda de sugestões de posts ajuda o cliente a manter sua presença nas redes sociais atualizada e relevante para seu público-alvo. E para garantir uma aparência personalizada, o bônus de 5 templates  customizáveis que permite que você escolha que melhor se adequa às suas necessidades e preferências. Com esses recursos, você possui uma rede social profissional, com conteúdo atualizado e visualmente atraente, que ajuda a atrair e engajar seus seguidores."
            />
            <div className="postexpress__plano">
              <h1>Power</h1>
              <div className="postexpress__plano-valor">
                <p>R$</p>
                <p>574</p>
                <p>,00</p>
              </div>
              <div className="postexpress__plano-buttonBox">
                <Button text="Quero Contratar!" />
              </div>
              <div className="postexpress__plano-text">
                <p>
                  Tudo do Plano Pró + Agenda de sugestões de posts de acordo com
                  o segmento que o cliente atua + bonus de template
                  customizável.
                </p>
                <div className="postexpress_plano-detalhes-container">
                  <p
                    className="postexpress__plano-detalhesBtn"
                    onClick={() => setOpenModal3(true)}
                  >
                    Ver Detalhes
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="#plan4"
            onClick={() => setActivePlan("#plan4")}
            className={activePlan === "#plan4" ? "active" : ""}
          >
            <Detalhes
              open={opendModal4}
              onClose={() => setOpenModal4(false)}
              title="Power +"
              text="O Plano Power+ oferece tudo do plano Power, incluindo recursos avançados de customização e personalização de conteúdo, além de adequação de posts para atender às necessidades específicas do público-alvo. Além disso, o plano Power+ inclui a geração de leads através de tráfego pago, o que significa que a empresa pode alcançar um público ainda maior e mais qualificado, gerando mais oportunidades de negócios. ainda o plano Power+ inclui encontros quinzenais para ajustes e otimizações. Com esses recursos, o você pode ter uma rede social poderosa que gera leads qualificados e ajuda seu negócio a alcançar seus objetivos."
            />
            <div className="postexpress__plano">
              <h1>Power +</h1>
              <div className="postexpress__plano-valor">
                <p>R$</p>
                <p>1.437</p>
                <p>,00</p>
              </div>
              <div className="postexpress__plano-buttonBox">
                <Button text="Quero Contratar!" />
              </div>
              <div className="postexpress__plano-text">
                <p>
                  Tudo do Plano Pró + Agenda de sugestões de posts de acordo com
                  o segmento que o cliente atua + bonus de template
                  customizável.
                </p>
              </div>
              <div className="postexpress_plano-detalhes-container">
                <p
                  className="postexpress__plano-detalhesBtn"
                  onClick={() => setOpenModal4(true)}
                >
                  Ver Detalhes
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Planos;
