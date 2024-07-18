import { useEffect, useState } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import "../styles/Badging.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Badging = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/badging";

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
          <div className="badging-container">
            <h1>Airport Badging Office</h1>
            <p>
              The Des Moines Airport Authority is responsible for the safety of
              all operations at the Des Moines International Airport. Badging
              approval is an essential process to fulfilling our mission to
              provide safe and convenient travel and working conditions for all
              individuals at the Airport.
            </p>
            <p>
              The{" "}
              <Link
                style={{ textDecoration: "underline" }}
                to="/airport-business/badging/badge-applications-renewal"
              >
                Badge Application Process
              </Link>
              . has several steps. Please follow them carefully; resources can
              be found at the bottom of this page.
            </p>
            <div className="office-info">
              <h2>Des Moines International Airport Badging Office</h2>
              5800 Fleur Drive, Room 207, Des Moines, IA 50321
              <br />
              Office: (515) 256-5005 • Email:{" "}
              <a
                style={{ fontStyle: "normal" }}
                href="mailto:badging@dsmairport.com"
              >
                badging@dsmairport.com
              </a>
              <div className="office-hours">
                <p
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Office Hours
                </p>
                <ul>
                  <li>
                    <span className="day">Monday:</span>{" "}
                    <span className="time">8:30 AM to 3:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Tuesday:</span>{" "}
                    <span className="time">8:30 AM to 3:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Wednesday:</span>{" "}
                    <span className="time">9:30 AM to 3:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Thursday:</span>{" "}
                    <span className="time">8:30 AM to 3:00 PM</span>
                  </li>
                  <li>
                    <span className="day">Friday:</span>{" "}
                    <span className="time">CLOSED</span>
                  </li>
                </ul>
                <p>
                  *Please note the badging office is closed from 12:00 pm to
                  1:00 pm daily for lunch and will be closed on holidays.
                </p>
                <h3 style={{ color: "#be5a0e", marginBottom: "1px" }}>
                  Authorized Signatory Badging Portals
                </h3>
              </div>
              <table className="badge-table stacked">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>SAFE Badging Portal</td>
                  </tr>
                  <tr>
                    <td>Online Appointment Scheduler</td>
                  </tr>
                </tbody>
              </table>
              <h3 style={{ color: "#be5a0e", marginBottom: "2px" }}>
                Resources
              </h3>
              <table
                style={{ marginBottom: "-25px" }}
                className="badge1-table stacked"
              >
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Badge Application Process</td>
                  </tr>
                  <tr>
                    <td>Badging Fees</td>
                  </tr>
                  <tr>
                    <td>Rules and Regulations</td>
                  </tr>
                  <tr>
                    <td>Permits and Forms</td>
                  </tr>
                </tbody>
              </table>
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
