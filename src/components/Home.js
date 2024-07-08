import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Hero from "./Hero";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { AiOutlineFolderOpen } from "react-icons/ai";

const Home = ({ scrollToSection, openPopup }) => {
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
  }, []);

  const handleButtonClick = (sectionId) => {
    scrollToSection(sectionId);
    openPopup();
  };

  return (
    <div className="home">
      <div className="home-content">
        <h3>DES MOINES INTERNATIONAL AIRPORT</h3>

        <div className="button-container">
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
      <Hero />
      {showAirplane && <div className="airplane-image"></div>}
      <Hero1 />
      <Hero2 />
    </div>
  );
};

export default Home;
