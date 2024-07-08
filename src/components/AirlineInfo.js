import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/AirlineInfo.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const AirlineInfo = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 2;
      if (window.scrollY > scrollThreshold) {
        setShowAirplane(true);
      } else {
        setShowAirplane(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAirplane]);

  const handleButtonClick = (sectionId) => {
    scrollToSection(sectionId);
    openPopup();
  };

  return (
    <div className="flights-travel-container">
      <div className="flights-sidebar">
        <ul>
          <li>
            <Link
              to="/flights-and-travel/airline-information"
              className={
                location.pathname === "/flights-and-travel/airline-information"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Airline Information
            </Link>
          </li>
          <li>
            <Link
              to="/flights-and-travel/flight-status"
              className={
                location.pathname === "/flights-and-travel/flight-status"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Flight Status
            </Link>
          </li>
          <li>
            <Link
              to="/flights-and-travel/nonstop-destinations"
              className={
                location.pathname === "/flights-and-travel/nonstop-destinations"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Nonstop Destinations
            </Link>
          </li>
        </ul>
      </div>

      <div className="flights-content">
        <div className="flights-header">
          <h1>Airline Contact Information</h1>
          <p>
            DSM is proud to partner with the airlines operating over 20 nonstop
            routes with limitless connections to exciting destinations for
            Iowans and visitors alike. To book a flight or for information on an
            existing reservation, please find airline contact information below.
          </p>

          <p>
            For information on charter flight operations, visit{" "}
            <strong>our DSM Airport Business page</strong>.
          </p>
        </div>
        <div className="airline-cards">
          <div className="airline-card">
            <h2>American Airlines</h2>
            <p>
              <strong>Reservations:</strong> 1.800.433.7300
            </p>
            <p>
              <strong>Baggage Claim:</strong> aa.com/baggage
            </p>
            <p>
              <a href="https://www.aa.com/">www.aa.com</a>
            </p>
          </div>
          <div className="airline-card">
            <h2>Delta Air Lines</h2>
            <p>
              <strong>Reservations:</strong> 1.800.221.1212
            </p>
            <p>
              <strong>Baggage Claim:</strong> 1.800.325.8224
            </p>
            <p>
              <a href="https://www.delta.com/">www.delta.com</a>
            </p>
          </div>
          <div className="airline-card">
            <h2>United Airlines</h2>
            <p>
              <strong>Reservations:</strong> 1.800.864.8331
            </p>
            <p>
              <strong>Baggage Claim:</strong> 1.800.335.2247
            </p>
            <p>
              <a href="https://www.united.com/">www.united.com</a>
            </p>
          </div>
          <div className="airline-card">
            <h2>Southwest Airlines</h2>
            <p>
              <strong>Reservations:</strong> 1.800.435.9792
            </p>
            <p>
              <strong>Baggage Claim:</strong> 1.888.202.1024
            </p>
            <p>
              <a href="https://www.southwest.com/">www.southwest.com</a>
            </p>
          </div>
          <div className="airline-card">
            <h2>Frontier Airlines</h2>
            <p>
              <strong>Reservations:</strong> 1.801.401.9000
            </p>
            <p>
              <strong>Baggage Claim:</strong> 1.801.401.9000
            </p>
            <p>
              <a href="https://www.flyfrontier.com/">www.flyfrontier.com</a>
            </p>
          </div>
          <div className="airline-card">
            <h2>Allegiant Air</h2>
            <p>
              <strong>Reservations:</strong> 1.702.505.8888
            </p>
            <p>
              <strong>Baggage Claim:</strong> 1.866.719.3910
            </p>
            <p>
              <a href="https://www.allegiantair.com/">www.allegiantair.com</a>
            </p>
          </div>
          <div className="section-links-container1">
            <div className="section-links1">
              <div
                className="link-item1"
                onClick={() => handleButtonClick("Flight-Status")}
              >
                <AiOutlineFolderOpen className="icon" />
                <p>Flight Status</p>
              </div>
              <div
                className="link-item1"
                onClick={() => handleButtonClick("Departures")}
              >
                <GiAirplaneDeparture className="icon" />
                <p>Departures</p>
              </div>
              <div
                className="link-item1"
                onClick={() => handleButtonClick("Arrivals")}
              >
                <GiAirplaneArrival className="icon" />
                <p>Arrivals</p>
              </div>
              <div
                className="link-item1"
                onClick={() => handleButtonClick("Parking")}
              >
                <CiParking1 className="icon" />
                <p>Parking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineInfo;
