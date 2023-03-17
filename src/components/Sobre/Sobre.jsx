import Button from "../Button/Button";
import "./sobre.css";

const Sobre = () => {
  return (
    <section id="sobre" className="postexpress__sobre">
      <div className="postexpress__sobre-container">
        <div className="postexpress__sobre-text">
          <h1>O que é a PostExpress?</h1>
          <p>
            Somos uma plataforma, onde você pode criar posts incríveis sem
            precisar de conhecimentos técnicos ou gastar uma fortuna com
            designers. Você terá acesso a uma ampla variedade de modelos e
            elementos gráficos para criar posts personalizados e profissionais.
          </p>
          <p>
            Com o PostExpress, você terá mais tempo e recursos para se
            concentrar em outras atividades importantes do seu negócio, enquanto
            mantém uma presença forte e consistente nas redes sociais. Não perca
            mais oportunidades de crescer - experimente o PostExpress hoje mesmo
            e transforme sua presença digital!
          </p>
        </div>
      </div>
      <section className="postexpress__cta">
        <div className="postexpress__cta-container">
          <div className="postexpress__cta-text">
            <div className="postexpress__cta-text_title">
              <h1>Planos a partir de</h1>
            </div>
            <div className="postexpress__cta-text_valor">
              <p>R$</p>
              <p>99</p>
              <p>,00</p>
            </div>
          </div>
          <div className="postexpress__cta-button">
            <Button text="Quero Contratar" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Sobre;
