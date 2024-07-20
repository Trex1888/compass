import { useEffect } from "react";
import "../styles/Modal1.css";

const Modal1 = ({ show, handleClose, flight }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="modal1-overlay" onClick={handleOverlayClick}>
      <div className="modal1-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal1-close" onClick={handleClose}>
          &times;
        </span>
        <h1>{`${flight.airline} Flight #${flight.flight} `}</h1>
        <div>
          <h3>Departure</h3>
          <p>
            <strong>Airport:</strong> <span>{flight.departure.airport}</span>
          </p>
          <p>
            <strong>Updated Time:</strong>{" "}
            <span>{flight.departure.updatedTime}</span>
          </p>
          <p>
            <strong>Terminal - Gate:</strong>{" "}
            <span>{flight.departure.terminalGate}</span>
          </p>
          <h3>Arrival</h3>
          <p>
            <strong>Status:</strong> <span>{flight.arrival.status}</span>
          </p>
          <p>
            <strong>Airport:</strong> <span>{flight.arrival.airport}</span>
          </p>
          <p>
            <strong>Updated Time:</strong>{" "}
            <span>{flight.arrival.updatedTime}</span>
          </p>
          <p>
            <strong>Terminal - Gate:</strong>{" "}
            <span>{flight.arrival.terminalGate}</span>
          </p>
          <p>
            <strong>Baggage Claim:</strong>{" "}
            <span>{flight.arrival.baggageClaim}</span>
          </p>
        </div>
        <div>
          <h3>Flight Details</h3>
          <p>
            <strong>Aircraft:</strong>{" "}
            <span>{flight.flightDetails.aircraft}</span>
          </p>
          <p>
            <strong>Ground Speed:</strong> <span></span>
          </p>
          <p>
            <strong>Altitude:</strong> <span></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
