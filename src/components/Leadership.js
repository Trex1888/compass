import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Leadership.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Leadership = ({ scrollToSection, openPopup }) => {
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
    <div className="authority-leadership-container">
      <div className="authority-leadership-sidebar">
        <ul>
          <li>
            <Link to="/about-us/news">News & Statistics</Link>
          </li>
          <li>
            <Link to="/about-us/careers">Careers</Link>
          </li>
          <li>
            <Link to="/about-us/authority-leadership" className="active">
              Authority Leadership
            </Link>
            <ul>
              <li>
                <Link to="/about-us/authority-leadership/board-agendas-minutes">
                  Board Agendas & Minutes
                </Link>
              </li>
              <li>
                <Link to="/about-us/authority-leadership/staff">Staff</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="authority-leadership-content">
        <div className="authority-leadership-header">
          <h1>Des Moines Airport Authority Leadership</h1>
          <p>
            The Des Moines Airport Authority is composed of five citizens
            appointed by the Mayor of Des Moines and approved by the Des Moines
            City Council. The Authority Board works to improve the quality of
            air service and make air travel to and from Des Moines more
            convenient and pleasurable.
          </p>
          <button className="authority-leadership-button">
            2024 Regular Board Meeting Schedule
          </button>
        </div>

        <div className="authority-leadership-section">
          <h2>Authority Board Members</h2>
          <p>Jake Christensen, Board Chair</p>
          <p>Christine Lauridsen Sand, Board Vice Chair</p>
          <p>Ross Dickinson, Secretary/Treasurer</p>
          <p>Mark Feldmann, Member</p>
          <p>Jessica Feeney, Member</p>
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
  );
};

export default Leadership;
