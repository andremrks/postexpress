import "./depoimentos.css";

import Fade from "react-reveal/Fade";

import depoimento1 from "../../assets/depoimento1.png";
import depoimento2 from "../../assets/depoimento2.png";
import depoimento3 from "../../assets/depoimento3.png";
import depoimento4 from "../../assets/depoimento4.png";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Depoimentos = () => {
  return (
    <section className="postexpress__depoimentos">
      <div className="postexpress__depoimentos-container">
        <h1>Ainda não está convencido?</h1>
        <p>
          Veja o que nossos clientes estão dizendo sobre os serviços do
          PostExpress
        </p>
        <div className="postexpress__depoimentos-clientes">
          <Fade left>
            <div className="postexpress__depoimento">
              <div className="postexpress__depoimento-image">
                <img src={depoimento1} alt="" />
              </div>
              <div className="postexpress__depoimento-content">
                <div className="postexpress__depoimento-content_text">
                  <i>
                    <FaQuoteLeft />
                  </i>
                  <p>
                    Sou uma estudante de jornalismo apaixonada por compartilhar
                    minhas ideias e pensamentos na internet. Gostaria de dizer
                    que a Postexpress é incrível e tem me ajudado muito a criar
                    posts criativos e envolventes para o meu público no
                    Instagram.<br/><br/> Com a Postexpress, tenho posts visualmente
                    atraentes e com conteúdo relevante, ajudando a aumentar meu
                    engajamento com meu público e a atrair novos seguidores.
                    Além disso, a ferramenta é super fácil de usar e me permite
                    economizar tempo na criação dos meus posts.<br/><br/> Por isso,
                    recomendo a Postexpress para todos os estudantes de
                    jornalismo e criadores de conteúdo que desejam criar posts
                    profissionais e de alta qualidade no Instagram. Experimente
                    agora mesmo e veja como a ferramenta pode ajudar você a se
                    destacar na rede social e a conquistar seu público!
                  </p>
                  <i>
                    <FaQuoteRight />
                  </i>
                </div>
                <div className="postexpress__depoimento-content_name">
                  <h3>Giovanna Machado</h3>
                  <p>Estudante de Jornalismo</p>
                  <p>Instagram @papodefilhaemae</p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="postexpress__depoimento">
              <div className="postexpress__depoimento-image">
                <img src={depoimento2} alt="" />
              </div>
              <div className="postexpress__depoimento-content">
                <div className="postexpress__depoimento-content_text">
                  <i>
                    <FaQuoteLeft />
                  </i>
                  <p>
                    Com a Postexpress, consigo criar posts envolventes que
                    inspiram e motivam minhas seguidoras a seguir em frente em
                    suas jornadas pessoais e profissionais. Além disso, a
                    ferramenta me ajuda a alcançar um público maior e a aumentar
                    meu engajamento no Instagram.<br/><br/> Por isso, eu recomendo a
                    Postexpress para todas as pessoas que desejam criar posts
                    incríveis e envolventes no Instagram. Se você ainda não
                    conhece a ferramenta, experimente agora mesmo e veja como
                    ela pode ajudar você a alcançar seus objetivos e a se
                    destacar na rede social!
                  </p>
                  <i>
                    <FaQuoteRight />
                  </i>
                </div>
                <div className="postexpress__depoimento-content_name">
                  <h3>Vanessa Machado</h3>
                  <p>Jornalista e Mentora</p>
                  <p>Instagram vanessa_machado.oficial</p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="postexpress__depoimento">
              <div className="postexpress__depoimento-image">
                <img src={depoimento3} alt="" />
              </div>
              <div className="postexpress__depoimento-content">
                <div className="postexpress__depoimento-content_text">
                  <i>
                    <FaQuoteLeft />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, cumque. Ipsam delectus aut quis! Totam fugit
                    cumque unde explicabo error tenetur aspernatur, blanditiis
                    voluptatem velit laborum, facere cupiditate dolor quae?
                  </p>
                  <i>
                    <FaQuoteRight />
                  </i>
                </div>
                <div className="postexpress__depoimento-content_name">
                  <h3>Person Name</h3>
                  <p>Cargo</p>
                  <p>Nome da Empresa</p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="postexpress__depoimento">
              <div className="postexpress__depoimento-image">
                <img src={depoimento4} alt="" />
              </div>
              <div className="postexpress__depoimento-content">
                <div className="postexpress__depoimento-content_text">
                  <i>
                    <FaQuoteLeft />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, cumque. Ipsam delectus aut quis! Totam fugit
                    cumque unde explicabo error tenetur aspernatur, blanditiis
                    voluptatem velit laborum, facere cupiditate dolor quae?
                  </p>
                  <i>
                    <FaQuoteRight />
                  </i>
                </div>
                <div className="postexpress__depoimento-content_name">
                  <h3>Person Name</h3>
                  <p>Cargo</p>
                  <p>Nome da Empresa</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
