import "../styles/Home.css";
import Hero from "./Hero";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { AiOutlineFolderOpen } from "react-icons/ai";
import Hero1 from "./Hero1";

const Home = ({ scrollToSection, openPopup }) => {
  const handleButtonClick = (sectionId) => {
    if (typeof scrollToSection === "function") {
      scrollToSection(sectionId);
      openPopup();
    }
  };

  return (
    <div className="about-header">
      <div className="home-wrapper">
        <h1>DES MOINES INTERNATIONAL AIRPORT</h1>
      </div>

      <div className="home-links-container">
        <div className="home-section-links">
          <div
            className="home-link-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="home-link-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="home-link-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="home-link-item"
            onClick={() => handleButtonClick("Parking")}
          >
            <CiParking1 className="icon" />
            <p>Parking</p>
          </div>
        </div>
      </div>
      <Hero1 />
      <Hero />
    </div>
  );
};

export default Home;
