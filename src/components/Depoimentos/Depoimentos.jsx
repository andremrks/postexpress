import "./depoimentos.css";

import depoimento1 from '../../assets/depoimento1.png'
import depoimento2 from '../../assets/depoimento2.png'
import depoimento3 from '../../assets/depoimento3.png'
import depoimento4 from '../../assets/depoimento4.png'

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, cumque. Ipsam delectus aut quis! Totam fugit cumque
                  unde explicabo error tenetur aspernatur, blanditiis voluptatem
                  velit laborum, facere cupiditate dolor quae?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, cumque. Ipsam delectus aut quis! Totam fugit cumque
                  unde explicabo error tenetur aspernatur, blanditiis voluptatem
                  velit laborum, facere cupiditate dolor quae?
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
                  Obcaecati, cumque. Ipsam delectus aut quis! Totam fugit cumque
                  unde explicabo error tenetur aspernatur, blanditiis voluptatem
                  velit laborum, facere cupiditate dolor quae?
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
                  Obcaecati, cumque. Ipsam delectus aut quis! Totam fugit cumque
                  unde explicabo error tenetur aspernatur, blanditiis voluptatem
                  velit laborum, facere cupiditate dolor quae?
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
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
