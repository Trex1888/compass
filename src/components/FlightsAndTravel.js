import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "../styles/FlightsAndTravel.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import AirlineInfo from "./AirlineInfo";
import FlightStatus from "./FlightStatus";
import NonStop from "./NonStop";

const FlightsAndTravel = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();

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

  const showSidebar =
    location.pathname === "/flights-and-travel" ||
    location.pathname === "/flights-and-travel/airline-information";

  return (
    <div className="about-container">
      {showSidebar && (
        <div className="about-sidebar">
          <ul>
            <li>
              <Link
                to="/flights-and-travel/airline-information"
                className={
                  location.pathname ===
                  "/flights-and-travel/airline-information"
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Airline Information
              </Link>
            </li>
            <li>
              <Link
                to="/flights-and-travel/flight-status"
                className={
                  location.pathname === "/flights-and-travel/flight-status"
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Flight Status
              </Link>
            </li>
            <li>
              <Link
                to="/flights-and-travel/nonstop-destinations"
                className={
                  location.pathname ===
                  "/flights-and-travel/nonstop-destinations"
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Nonstop Destinations
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="about-content">
        <div className="about-header">
          <h1>Flights & Travel</h1>
          <p>
            Des Moines International Airport's six airlines offer more than 30
            nonstop destinations throughout the year, serving more destinations
            than any other airport in the state. <br /> <br /> Check the status
            of a flight, contact an airline, or plan your next trip to a
            thrilling destination.
          </p>
        </div>

        <div className="flights-content">
          <div className="flights-section purple">
            <img
              src="https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/Engine%20Spiral%20I.jpg"
              alt="Airline engine spiral"
              className="flights-image"
            />
            <div className="flights-section-content">
              <p>Contact an airline or book a flight.</p>
              <Link
                to="/flights-and-travel/airline-information"
                className="flights-button"
              >
                View Airline Information
              </Link>
            </div>
          </div>

          <div className="flights-section orange">
            <div className="flights-section-content">
              <p>Check the status of an arriving or departing flight.</p>
              <Link
                to="/flights-and-travel/flight-status"
                className="flights-button"
              >
                View Arrivals & Departures
              </Link>
            </div>
            <img
              src="https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/departure%20screen%20I.jpg"
              alt="Departure screen"
              className="flights-image"
            />
          </div>

          <div className="flights-section blue">
            <img
              src="https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/Family%20-%20rock%20logo%20II.jpg"
              alt="Family at airport"
              className="flights-image"
            />
            <div className="flights-section-content">
              <p>Choose your next nonstop getaway!</p>
              <Link
                to="/flights-and-travel/nonstop-destinations"
                className="flights-button"
              >
                View Nonstop Destinations
              </Link>
            </div>
          </div>
        </div>
        <div className="section-links-container-flights">
          <div className="section-links-flights">
            <div
              className="link-item-flights"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Flight Status</p>
            </div>
            <div
              className="link-item-flights"
              onClick={() => handleButtonClick("Departures")}
            >
              <GiAirplaneDeparture className="icon" />
              <p>Departures</p>
            </div>
            <div
              className="link-item-flights"
              onClick={() => handleButtonClick("Arrivals")}
            >
              <GiAirplaneArrival className="icon" />
              <p>Arrivals</p>
            </div>
            <div
              className="link-item-flights"
              onClick={() => handleButtonClick("Parking")}
            >
              <CiParking1 className="icon" />
              <p>Parking</p>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path="airline-information"
            element={
              <AirlineInfo
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="flight-status"
            element={
              <FlightStatus
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="nonstop-destinations"
            element={
              <NonStop
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default FlightsAndTravel;
