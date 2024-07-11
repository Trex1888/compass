import React, { useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "../styles/AtTheAirport.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const AtTheAirport = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/at-the-airport";

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
    <div className="about-container">
      <div className="about-sidebar">
        <ul>
          <li>
            <Link
              to="/at-the-airport/parking"
              className={
                location.pathname === "/at-the-airport/parking" ? "active" : ""
              }
            >
              Parking
            </Link>
          </li>
          <li>
            <Link
              to="/at-the-airport/shuttle-tracking"
              className={
                location.pathname === "/at-the-airport/shuttle-tracking"
                  ? "active"
                  : ""
              }
            >
              Shuttle Tracking
            </Link>
          </li>
          <li>
            <Link
              to="/at-the-airport/ground-transportation"
              className={
                location.pathname === "/at-the-airport/ground-transportation" ||
                location.pathname.startsWith(
                  "/at-the-airport/ground-transportation"
                )
                  ? "active"
                  : ""
              }
            >
              Ground Transportation
            </Link>
            {location.pathname.startsWith(
              "/at-the-airport/ground-transportation"
            ) && (
              <ul>
                <li>
                  <Link
                    to="/at-the-airport/ground-transportation/ride-share-taxis"
                    className={
                      location.pathname ===
                      "/at-the-airport/ground-transportation/ride-share-taxis"
                        ? "flights-link active-sub"
                        : "flights-link"
                    }
                  >
                    Ride Share, Taxis, Limos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/at-the-airport/ground-transportation/rental-cars"
                    className={
                      location.pathname ===
                      "/at-the-airport/ground-transportation/rental-cars"
                        ? "flights-link active-sub"
                        : "flights-link"
                    }
                  >
                    Rental Cars
                  </Link>
                </li>
                <li>
                  <Link
                    to="/at-the-airport/ground-transportation/hotel-shuttles"
                    className={
                      location.pathname ===
                      "/at-the-airport/ground-transportation/hotel-shuttles"
                        ? "flights-link active-sub"
                        : "flights-link"
                    }
                  >
                    Shuttles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/at-the-airport/ground-transportation/buses-paratransit"
                    className={
                      location.pathname ===
                      "/at-the-airport/ground-transportation/buses-paratransit"
                        ? "flights-link active-sub"
                        : "flights-link"
                    }
                  >
                    Buses & Paratransit
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/at-the-airport/maps-directions"
              className={
                location.pathname === "/at-the-airport/maps-directions"
                  ? "active"
                  : ""
              }
            >
              Maps & Directions
            </Link>
          </li>
          <li>
            <Link
              to="/at-the-airport/dining"
              className={
                location.pathname === "/at-the-airport/dining" ? "active" : ""
              }
            >
              Dining
            </Link>
          </li>
          <li>
            <Link
              to="/at-the-airport/services-amenities"
              className={
                location.pathname === "/at-the-airport/services-amenities"
                  ? "active"
                  : ""
              }
            >
              Services & Amenities
            </Link>
          </li>
          <li>
            <Link
              to="/at-the-airport/accessibility"
              className={
                location.pathname === "/at-the-airport/accessibility"
                  ? "active"
                  : ""
              }
            >
              Accessibility - ADA & Title VI
            </Link>
          </li>
          <li>
            <Link
              to="/at-the-airport/general-aviation"
              className={
                location.pathname === "/at-the-airport/general-aviation"
                  ? "active"
                  : ""
              }
            >
              General Aviation
            </Link>
          </li>
          <li>
            <Link
              to="/at-the-airport/stop-human-trafficking"
              className={
                location.pathname === "/at-the-airport/stop-human-trafficking"
                  ? "active"
                  : ""
              }
            >
              Stop Human Trafficking
            </Link>
          </li>
          <li>
            <Link
              to="/at-the-airport/title-vi-airport-nondiscrimination-program"
              className={
                location.pathname ===
                "/at-the-airport/title-vi-airport-nondiscrimination-program"
                  ? "active"
                  : ""
              }
            >
              Title VI Airport Nondiscrimination Program
            </Link>
          </li>
        </ul>
      </div>

      <div className="about-content">
        {isMainPage ? (
          <div className="about-header">
            <h1>At The Airport</h1>
            <p>Main page content goes here...</p>
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
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default AtTheAirport;
