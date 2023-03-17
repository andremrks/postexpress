import "./button.css";

const Button = ({ text }) => {
  return (
    <a href="#contato">
      <button className="postexpress__button">{text}</button>
    </a>
  );
};

export default Button;
