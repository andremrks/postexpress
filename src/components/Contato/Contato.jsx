import "./contato.css";

const Contato = () => {
  return (
    <section id="contato" className="postexpress__contato">
      <div className="postexpress__contato-container">
        <h1>Fale Conosco</h1>
        <div className="postexpress__contato-formContainer">
          <form className="postexpress__contato-form">
            <input type="text" placeholder="Nome" required />
            <input type="text" placeholder="Whatsapp" required />
            <input type="text" placeholder="Instagram" required />
            <textarea placeholder="Escreva sua mensagem" />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
