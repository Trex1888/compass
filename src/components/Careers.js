import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Careers.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Careers = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);

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
    <div className="about-container">
      <div className="about-sidebar">
        <ul>
          <li>
            <Link to="/about-us/news">News & Statistics</Link>
          </li>
          <li>
            <Link to="/about-us/careers" className="active">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/about-us/authority-leadership">
              Authority Leadership
            </Link>
          </li>
        </ul>
      </div>

      <div className="about-content">
        <div className="about-header">
          <h1>Airport Authority Careers</h1>
          <p>
            We pride ourselves in being performance-driven with each team member
            playing a role in the success of our airport operations. DSM offers
            competitive pay and benefits. View open positions to join our team
            and review the Airport Authority <strong>Benefit Summary</strong>.
          </p>
          <button className="careers-button">View Current Openings</button>
        </div>

        <div className="careers-section">
          <h2>Other Employment Opportunities at DSM</h2>
          <p style={{ fontWeight: "normal" }}>
            Airport partners and tenants are often hiring for various positions
            located at the DSM Airport campus. See below for contact information
            and how to apply for their job openings.
          </p>
        </div>

        <div className="careers-section">
          <h3>GOVERNMENTAL ENTITIES</h3>
          <p>City of Des Moines Police</p>
          <p>Transportation Security Administration (TSA)</p>
        </div>

        <div className="careers-section">
          <h3>AIRLINES</h3>
          <p>Allegiant Air</p>
          <p>American Airlines</p>
          <p>Delta Air Lines</p>
          <p>Frontier Airlines</p>
          <p>Southwest Airlines</p>
          <p>United Airlines</p>
          <p>FedEx</p>
          <p>United Parcel Service (UPS)</p>
        </div>

        <div className="careers-section">
          <h3>CAR RENTAL COMPANIES</h3>
          <p>American Rent-a-Car</p>
          <p>Avis/Budget Rent-A-Car</p>
          <p>Enterprise Rent-A-Car</p>
          <p>Hertz Rent-A-Car</p>
          <p style={{ fontWeight: "normal" }}>
            <strong> National/Alamo:</strong> Go to counter and pick up
            application.
          </p>
        </div>

        <div className="careers-section">
          <h3>FIXED BASE OPERATORS (FBOs)</h3>
          <p>Elliott Aviation</p>
          <p>Signature Flight Support</p>
        </div>

        <div className="careers-section">
          <h3>SUPPORT SERVICES</h3>
          <p style={{ fontWeight: "normal" }}>
            <strong>SP+ Parking: </strong>
            Call 515-256-5154 or 515-256-5038
          </p>
          <p style={{ fontWeight: "normal" }}>
            <strong>Aero Service Group </strong>(restaurants/bars for
            food/beverages)
          </p>
          <p style={{ fontWeight: "normal" }}>
            <strong>Executive Delivery Service: </strong> Stop by their office
            in baggage claim or call 515-256-5571
          </p>
          <p>G2 Secure Staff</p>
          <p style={{ fontWeight: "normal" }}>
            <strong>Heritage Building Maintenance: </strong> Call 515-868-0842
          </p>
          <p>Hudson News (gift shop): Send email to: Amy Beeghley</p>
        </div>

        <div className="careers-links-container">
          <div className="careers-links">
            <div
              className="careers-item"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Flight Status</p>
            </div>
            <div
              className="careers-item"
              onClick={() => handleButtonClick("Departures")}
            >
              <GiAirplaneDeparture className="icon" />
              <p>Departures</p>
            </div>
            <div
              className="careers-item"
              onClick={() => handleButtonClick("Arrivals")}
            >
              <GiAirplaneArrival className="icon" />
              <p>Arrivals</p>
            </div>
            <div
              className="careers-item"
              onClick={() => handleButtonClick("Parking")}
            >
              <CiParking1 className="icon" />
              <p>Parking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
