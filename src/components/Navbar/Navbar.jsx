import { useState } from "react";
import "./navbar.css";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../../assets/logo.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#sobre">Sobre Nós</a>
    </p>
    <p>
      <a href="#servicos">Serviços</a>
    </p>
    <p>
      <a href="#beneficios">Benefícios</a>
    </p>
    <p>
      <a href="#planos">Planos</a>
    </p>
    <p>
      <a href="#contato">Fale Conosco</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToogleMenu] = useState(false);

  return (
    <nav className="postexpress__navbar">
      <div className="postexpress__navbar-menu">
        <div className="postexpress__navbar-menu_logo">
          <a href="#home">
            <img src={logo} alt="PostExpress Logo" />
          </a>
        </div>
        <div className="postexpress__navbar-menu_links">
          <Menu />
        </div>
      </div>
      <div className="postexpress__navbar-toggle">
        {toggleMenu ? (
          <AiOutlineClose
            className="postexpress__navbar-toggle_icon"
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <AiOutlineMenu
            className="postexpress__navbar-toggle_icon"
            onClick={() => setToogleMenu(true)}
          />
        )}{" "}
        {toggleMenu && (
          <div className="postexpress__navbar-container">
            <div className="postexpress__navbar-container_links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
