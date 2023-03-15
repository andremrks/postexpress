import "./beneficios.css";

import Button from "../Button/Button";

import {AiFillStar} from 'react-icons/ai'

import logo from '../../assets/logoImg.png'

const Beneficios = () => {
  return (
    <section id="beneficios" className="postexpress__beneficios">
      <div className="postexpress__beneficios-container">
        <h1>Benefícios de Contratar o PostExpress</h1>
        <div className="postexpress__beneficios-cardsContainer">
          <div className="postexpress__beneficios-card">
            <div className="postexpress__beneficios-card_image">
              <img src={logo} style={{width:'150px'}} alt="" />
            </div>
            <div className="postexpress__beneficios-card_content">
              <div className="postexpress__beneficios-card_stars">
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
              </div>
              <div className="postexpress__beneficios-card_text">
                <h1>Economize Tempo</h1>
                <p>Deixe que nós cuidemos da sua presença nas redes sociais, enquanto você se concentra em gerenciar o seu negócio.</p>
              </div>
            </div>
          </div>
          <div className="postexpress__beneficios-card">
            <div className="postexpress__beneficios-card_image">
              <img src={logo} style={{width:'150px'}} alt="" />
            </div>
            <div className="postexpress__beneficios-card_content">
              <div className="postexpress__beneficios-card_stars">
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
              </div>
              <div className="postexpress__beneficios-card_text">
                <h1>Destaque-se</h1>
                <p>Destaque-se da concorrência com uma presença forte e consistente nas redes sociais.</p>
              </div>
            </div>
          </div>
          <div className="postexpress__beneficios-card">
            <div className="postexpress__beneficios-card_image">
              <img src={logo} style={{width:'150px'}} alt="" />
            </div>
            <div className="postexpress__beneficios-card_content">
              <div className="postexpress__beneficios-card_stars">
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
              </div>
              <div className="postexpress__beneficios-card_text">
                <h1>Aumento de Autoridade</h1>
                <p>Fortaleça a sua marca e ganhe mais autoridade online com um conteúdo de alta qualidade.</p>
              </div>
            </div>
          </div>
          <div className="postexpress__beneficios-card">
            <div className="postexpress__beneficios-card_image">
              <img src={logo} style={{width:'150px'}} alt="" />
            </div>
            <div className="postexpress__beneficios-card_content">
              <div className="postexpress__beneficios-card_stars">
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
                <AiFillStar style={{color:'var(--color-orange)'}} />
              </div>
              <div className="postexpress__beneficios-card_text">
                <h1>Aumento de Vendas</h1>
                <p>Aumente o engajamento e a conversão do seu público, gerando mais vendas e crescimento para o seu negócio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="postexpress__beneficios-card_button">
          <Button text='Comece Agora!' />
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
