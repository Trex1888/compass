import { useEffect, useState } from "react";
import "../styles/Shuttle.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Shuttle = ({ scrollToSection, openPopup }) => {
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
    <div className="about-contendt">
      <div className="about-header">
        <h1>Shuttle Tracking</h1>
        <p>
          Convenient shuttle tracking helps keep you moving. Grey-Blue shuttles
          will stop at the Grey Lot followed by the Blue Lot. The Red shuttles
          will stop at the Employee Lot and then will stop at the Red Lot before
          returning to the terminal. Click the buttons below to track each live
          route below.
        </p>
      </div>
      <div className="shuttle-buttons">
        <button className="shuttle-button grey-blue-route">
          Grey-Blue Route
        </button>
        <button className="shuttle-button red-route">Red Route</button>
      </div>
      <div className="shuttle-map">
        <img
          src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/ShuttleMapPhase2.png"
          alt="Shuttle Map"
        />
      </div>

      <div className="section-links-container3">
        <div className="section-links3">
          <div
            className="link-item3"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Flight Status</p>
          </div>
          <div
            className="link-item3"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="link-item3"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="link-item3"
            onClick={() => handleButtonClick("Parking")}
          >
            <CiParking1 className="icon" />
            <p>Parking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shuttle;
