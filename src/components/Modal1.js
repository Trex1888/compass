import "../styles/Modal1.css";

const Modal1 = ({ flight, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{`${flight.airline} Flight #${flight.flight}`}</h2>
        <div>
          <h3>Departure</h3>
          <p>
            <strong>To:</strong> {flight.to}
          </p>
          <p>
            <strong>Scheduled Time:</strong> {flight.scheduled}
          </p>
          <p>
            <strong>Updated Time:</strong> {flight.updated}
          </p>
          <p>
            <strong>Status:</strong> {flight.status}
          </p>
          <p>
            <strong>Gate:</strong> {flight.gate}
          </p>
        </div>
        {flight.status === "In Air" && (
          <div>
            <h3>Flight Details</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal1;
