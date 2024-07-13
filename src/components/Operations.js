import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/Operations.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Operations = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/operations";
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

  const operationsSections = [
    "Operations Team",
    "Safety Management System (SMS)",
    "Work Order Requests",
  ];

  return (
    <div>
      <div className="about-header">
        {isMainPage && (
          <div className="operations-container">
            <h1>Airport Operations</h1>
            <p>
              DSM is committed to ensuring safe and convenient travel to and
              from Iowa. The Des Moines International Airport Operations team is
              responsible for safety throughout the terminal and on the airport
              campus. The operations team offers public tours when time allows.
              If you are interested in requesting a tour, please fill out a{" "}
              <a href="tour-request-form-url">tour request form</a>.
            </p>
            <div className="button-links">
              {operationsSections.map((section, index) => (
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

export default Operations;
