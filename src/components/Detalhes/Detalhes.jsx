import "./detalhes.css";

const Detalhes = ({ open, onClose, title, text }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Detalhes;
