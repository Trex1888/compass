import React from "react";
import "../styles/Modal.css";

const Modal = ({ show, handleClose, member }) => {
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
