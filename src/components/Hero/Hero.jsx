import "./hero.css";

import Button from "../Button/Button";

import chart from "../../assets/chart2.png";

const Hero = () => {
  return (
    <section id="home" className="postexpress__hero">
      <div className="postexpress__hero-container">
        <div className="postexpress__hero-content">
          <div className="postexpress__hero-content_text">
            <h1>Crie posts incríveis sem gastar tempo ou dinheiro.</h1>
            <h1>Conheça o PostExpress e transforme sua presença digital!</h1>
            <p>
              Não deixe a falta de tempo e recursos prejudicar sua presença nas
              redes sociais. Com o PostExpress, você terá posts de qualidade
              profissional todos os dias, sem precisar gastar horas criando
              conteúdo ou investir uma fortuna em designers.
            </p>
          </div>
          <div className="postexpress__hero-content_button">
            <Button text="Começe Agora!" />
          </div>
        </div>
        <div className="postexpress__hero-image">
          <img src={chart} alt="Gráfico Redes Sociais" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
