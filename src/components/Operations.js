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
        {isMainPage && (
          <div className="operations-container">
            <h1>Airport Operations</h1>
            <p>
              DSM is committed to ensuring safe and convenient travel to and
              from Iowa. The Des Moines International Airport Operations team is
              responsible for safety throughout the terminal and on the airport
              campus. The operations team offers public tours when time allows.
              If you are interested in requesting a tour, please fill out a{" "}
              <a
                href="https://flydsm.formstack.com/forms/tour_request_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                tour request form
              </a>
              .
            </p>
            <h2>Operations Team</h2>
            <p>
              The airport operations team is onsite and available 24 hours a
              day, every day throughout the year.
            </p>
            <p>Airport Operations Center - (515) 256-5000</p>
            <h2>Safety Management System (SMS)</h2>
            <p>
              To report a non-emergency safety concern identified at Des Moines
              International Airport (DSM), please use the Confidential Report
              Form at www.safety.dsmairport.com. This form is not intended for
              reporting emergencies. If the safety concern is an emergency, call
              911 immediately.
            </p>
            <h2>Work Order Requests</h2>
            <p>
              Airport employees and tenants in need of assistance can submit a
              work request through the Work Order Request Portal. Use the video
              request form to request video footage
            </p>
            <div className="operations-buttons">
              <button
                className="work-button"
                onClick={() =>
                  window.open(
                    "https://flydsm.formstack.com/forms/tour_request_form",
                    "_blank"
                  )
                }
              >
                Work Order Request Portal
              </button>
              <button
                className="video-button"
                onClick={() =>
                  window.open(
                    "https://flydsm.formstack.com/workflows/security_cctv_request",
                    "_blank"
                  )
                }
              >
                Video Request Form
              </button>{" "}
            </div>
            <p style={{ marginBottom: "-25px" }}>
              Des Moines Airport Authority Rules, Regulations, Policies and
              Procedures can be found{" "}
              <a
                href="https://www.flydsm.com/filesimages/AIRPORT%20BUSINESS/Airport%20Rules%20and%20Regulations-compressed.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>
              .
            </p>
          </div>
        )}
        <Outlet />
      </div>
      <div className="operations-links-container">
        <div className="operations-links">
          <div
            className="operations-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="operations-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="operations-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="operations-item"
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
