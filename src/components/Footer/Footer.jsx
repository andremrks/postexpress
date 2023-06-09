import "./footer.css";

import logo from "../../assets/logoFullBlue.png";

import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="footer" className="postexpress__footer">
      <div className="postexpress__footer-container">
        <div className="postexpress__footer-image">
          <img src={logo} alt="PostExpress logo" />
        </div>
        <div className="postexpress__footer-social">
          <a
            href="https://www.instagram.com/postexpress_/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://wa.me/+5511974920125"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
      <div className="postexpress__copy">
        <p>©2023 PostExpress</p>
      </div>
    </section>
  );
};

export default Footer;
