import "./beneficios.css";

import Fade from "react-reveal/Fade";

import beneficios from "../../assets/beneficios.png";

const Beneficios = () => {
  return (
    <section className="postexpress__beneficios">
      <div className="postexpress__beneficios-container">
        <div className="postexpress__beneficios-image">
          <img src={beneficios} alt="Social Media Imagem" />
        </div>
        <div className="postexpress__beneficios-text">
          <Fade top>
            <h1>Crie posts profissionais em minutos com o PostExpress</h1>
          </Fade>
          <Fade left cascade>
            <ul className="postexpress__beneficios-text_list">
              <li className="postexpress__beneficios-text_listItem">
                Esqueça a falta de tempo, deixe o PostExpress cuidar disso!
              </li>
              <li className="postexpress__beneficios-text_listItem">
                Destaque-se nas redes sociais sem esforço.
              </li>
              <li className="postexpress__beneficios-text_listItem">
                Transforme sua presença digital e alcance mais pessoas com o
                PostExpress.
              </li>
              <li className="postexpress__beneficios-text_listItem">
                Não perca mais oportunidades de crescer nas redes sociais.
              </li>
              <li className="postexpress__beneficios-text_listItem">
                Criar posts incríveis é fácil e acessível.
              </li>
              <li className="postexpress__beneficios-text_listItem">
                Mantenha sua presença nas redes sociais forte e consistente.
              </li>
              <li className="postexpress__beneficios-text_listItem">
                Não deixe seus concorrentes superarem você nas redes sociais, se
                destaque!
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
