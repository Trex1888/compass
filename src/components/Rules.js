import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Rules.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Rules = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/operations";

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
    <div>
      <div className="about-header">
        <h1>Rules, Regulations, Policies & Procedures</h1>{" "}
        <div className="documents-list">
          <h2>Airport Documents</h2>
          <p>
            <a
              href="https://www.flydsm.com/filesimages/AIRPORT%20BUSINESS/Airport%20Rules%20and%20Regulations-compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airport Authority Rules and Regulations
            </a>
          </p>
          <p>
            <a
              href="https://www.flydsm.com/filesimages/AIRPORT%20BUSINESS/Minimum%20Standards.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airport Minimum Standards
            </a>
          </p>
          <p>
            <a
              href="https://www.flydsm.com/filesimages/AIRPORT%20BUSINESS/Tarmac%20Delay%20Contingency%20Plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tarmac Delay Contingency Plan
            </a>
          </p>
        </div>
      </div>
      {isMainPage && (
        <div className="section-links-container3">
          <div className="section-links3">
            <div
              className="link-item3"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Status</p>
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
      )}
    </div>
  );
};

export default Rules;
