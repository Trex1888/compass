import { useEffect } from "react";
import "../styles/Modal.css";

const Modal = ({ show, handleClose, member }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={member.img} alt={member.name} className="modal-image" />
          </div>
          <div className="modal-text">
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
            <hr />
            <p>{member.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
