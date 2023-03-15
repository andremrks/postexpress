import "./porque.css";

import Fade from "react-reveal/Fade";

import porque from "../../assets/porque.png";

const Porque = () => {
  return (
    <section className="postexpress__porque">
      <div className="postexpress__porque-container">
        <div className="postexpress__porque-image">
          <img src={porque} alt="Social Media Imagem" />
        </div>
        <div className="postexpress__porque-text">
          <Fade top>
            <h1>Crie posts profissionais em minutos com o PostExpress</h1>
          </Fade>
          <Fade left cascade>
            <ul className="postexpress__porque-text_list">
              <li className="postexpress__porque-text_listItem">
                Esqueça a falta de tempo, deixe o PostExpress cuidar disso!
              </li>
              <li className="postexpress__porque-text_listItem">
                Destaque-se nas redes sociais sem esforço.
              </li>
              <li className="postexpress__porque-text_listItem">
                Transforme sua presença digital e alcance mais pessoas com o
                PostExpress.
              </li>
              <li className="postexpress__porque-text_listItem">
                Não perca mais oportunidades de crescer nas redes sociais.
              </li>
              <li className="postexpress__porque-text_listItem">
                Criar posts incríveis é fácil e acessível.
              </li>
              <li className="postexpress__porque-text_listItem">
                Mantenha sua presença nas redes sociais forte e consistente.
              </li>
              <li className="postexpress__porque-text_listItem">
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

export default Porque;
