import { useState } from "react";

import Button from "../Button/Button";

import "./planos.css";

import image from "../../assets/logoImg.png";

const Planos = () => {
  const [activePlan, setActivePlan] = useState("#plan3");

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
            <div className="postexpress__plano">
              <h1>Basic</h1>
              <div className="postexpress__plano-image">
                <img src={image} alt="" />
              </div>
              <div className="postexpress__plano-valor">
                <p>R$</p>
                <p>99</p>
                <p>,90</p>
              </div>
              <div className="postexpress__plano-buttonBox">
                <Button text="Comece Agora!" />
              </div>
              <div className="postexpress__plano-text">
                <p>10 artes / posts mensais enviadas para clientes postar.</p>
              </div>
            </div>
          </a>
          <a
            href="#plan2"
            onClick={() => setActivePlan("#plan2")}
            className={activePlan === "#plan2" ? "active" : ""}
          >
            <div className="postexpress__plano">
              <h1>Pro</h1>
              <div className="postexpress__plano-image">
                <img src={image} alt="" />
              </div>
              <div className="postexpress__plano-valor">
                <p>R$</p>
                <p>349</p>
                <p>,00</p>
              </div>
              <div className="postexpress__plano-buttonBox">
                <Button text="Comece Agora!" />
              </div>
              <div className="postexpress__plano-text">
                <p>
                  Artes para todos os dias do úteis do mês com agendamento
                  automatico + bonus de template.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#plan3"
            onClick={() => setActivePlan("#plan3")}
            className={activePlan === "#plan3" ? "active" : ""}
          >
            <div className="postexpress__plano">
              <h1>Power</h1>
              <div className="postexpress__plano-image">
                <img src={image} alt="" />
              </div>
              <div className="postexpress__plano-valor">
                <p>R$</p>
                <p>600</p>
                <p>,00</p>
              </div>
              <div className="postexpress__plano-buttonBox">
                <Button text="Comece Agora!" />
              </div>
              <div className="postexpress__plano-text">
                <p>
                  Tudo do Plano Pró + Agenda de sugestões de posts de acordo com
                  o segmento que o cliente atua + bonus de template.
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
