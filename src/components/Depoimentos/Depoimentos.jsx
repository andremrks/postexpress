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
                    Instagram.
                    <br />
                    <br /> Com a Postexpress, tenho posts visualmente atraentes
                    e com conteúdo relevante, ajudando a aumentar meu
                    engajamento com meu público e a atrair novos seguidores.
                    Além disso, a ferramenta é super fácil de usar e me permite
                    economizar tempo na criação dos meus posts.
                    <br />
                    <br /> Por isso, recomendo a Postexpress para todos os
                    estudantes de jornalismo e criadores de conteúdo que desejam
                    criar posts profissionais e de alta qualidade no Instagram.
                    Experimente agora mesmo e veja como a ferramenta pode ajudar
                    você a se destacar na rede social e a conquistar seu
                    público!
                  </p>
                  <i>
                    <FaQuoteRight />
                  </i>
                </div>
                <div className="postexpress__depoimento-content_name">
                  <h3>Giovanna</h3>
                  <p>Estudante de Jornalismo</p>
                  <p>
                    Instagram{" "}
                    <a
                      href="https://www.instagram.com/papodefilhaemae/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>@papodefilhaemae</span>
                    </a>
                  </p>
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
                    meu engajamento no Instagram.
                    <br />
                    <br /> Por isso, eu recomendo a Postexpress para todas as
                    pessoas que desejam criar posts incríveis e envolventes no
                    Instagram. Se você ainda não conhece a ferramenta,
                    experimente agora mesmo e veja como ela pode ajudar você a
                    alcançar seus objetivos e a se destacar na rede social!
                  </p>
                  <i>
                    <FaQuoteRight />
                  </i>
                </div>
                <div className="postexpress__depoimento-content_name">
                  <h3>Vanessa</h3>
                  <p>Jornalista e Mentora</p>
                  <p>
                    Instagram{" "}
                    <a
                      href="https://instagram.com/vanessa_machado.oficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>@vanessa_machado.oficial</span>
                    </a>
                  </p>
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
                    Eu fiquei impressionada com a qualidade dos serviços da
                    PostExpress na criação de artes para o meu Instagram. Elas
                    conseguiram capturar perfeitamente a minha visão e
                    transformá-la em uma arte visualmente atraente e
                    profissional.
                    <br />
                    <br /> Além disso, a equipe foi extremamente ágil em atender
                    às minhas demandas e garantir que a arte fosse entregue
                    dentro do prazo estabelecido.
                    <br />
                    <br /> Eu recomendo altamente a PostExpress para qualquer
                    pessoa que esteja procurando por um serviço de criação de
                    artes no Instagram de qualidade e confiável.
                  </p>
                  <i>
                    <FaQuoteRight />
                  </i>
                </div>
                <div className="postexpress__depoimento-content_name">
                  <h3>Aline</h3>
                  <p>Proprietária Sofá Clean</p>
                  <p>
                    Instagram{" "}
                    <a
                      href="https://www.instagram.com/sofaclean.santos/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>@sofaclean.santos</span>
                    </a>
                  </p>
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
                    Fiquei extremamente satisfeito com a profissionalidade e
                    eficiência da empresa em transformar nossas ideias em artes
                    criativas e atrativas para o público.<br/><br/> A proposta da
                    PostExpress ágil e eficiente, com soluções rápidas. A
                    empresa se destacou pelo comprometimento em entregar
                    trabalhos de alta qualidade e dentro do prazo estabelecido.<br/><br/>
                    Não hesito em recomendar a PostExpress para qualquer pessoa
                    ou empresa que esteja procurando por um serviço de criação
                    de artes profissional e confiável. Parabéns pela excelência
                    em seus serviços e pelo trabalho dedicado e competente.
                  </p>
                  <i>
                    <FaQuoteRight />
                  </i>
                </div>
                <div className="postexpress__depoimento-content_name">
                  <h3>Felipe</h3>
                  <p>Co-Fundador da Conta Escola</p>
                  <p>
                    Instagram{" "}
                    <a
                      href="https://instagram.com/contaescola_"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>@contaescola_</span>
                    </a>
                  </p>
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
