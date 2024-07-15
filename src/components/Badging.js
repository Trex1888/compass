import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import "../styles/Badging.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Badging = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/badging";
  const [openSections, setOpenSections] = useState([]);

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

  const toggleSection = (section) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const badgingSections = [
    "Badge Application Process",
    "Badge Renewal",
    "Authorized Signatory Badging Portals",
  ];

  return (
    <div>
      <div className="about-header">
        {isMainPage && (
          <div className="badging-container">
            <h1>Airport Badging Office</h1>
            <p>
              The Des Moines Airport Authority is responsible for the safety of
              all operations at the Des Moines International Airport. Badging
              approval is an essential process to fulfilling our mission to
              provide safe and convenient travel and working conditions for all
              individuals at the Airport.
            </p>
            <div className="button-links">
              {badgingSections.map((section, index) => (
                <div key={index} className="section">
                  <button
                    className={openSections.includes(section) ? "active" : ""}
                    onClick={() => toggleSection(section)}
                  >
                    {section}
                    <span className="plus-sign">
                      {openSections.includes(section) ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`section-content ${
                      openSections.includes(section) ? "open" : ""
                    }`}
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <Outlet />
      </div>
      <div className="badging-links-container">
        <div className="badging-links">
          <div
            className="badging-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="badging-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="badging-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="badging-item"
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

export default Badging;
