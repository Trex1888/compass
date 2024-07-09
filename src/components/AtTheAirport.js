import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Shuttle from "./Shuttle";
import Ground from "./Ground";
import Maps from "./Maps";
import Dining from "./Dining";
import Services from "./Services";
import Accessibility from "./Accessibility";
import General from "./General";
import Human from "./Human";
import Title9 from "./Title9";
import Parking from "./Parking";
import "../styles/AtTheAirport.css";

const AtTheAirport = ({ scrollToSection, openPopup }) => {
  const location = useLocation();

  return (
    <div className="at-the-airport-container">
      <div className="sidebar">
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
                location.pathname === "/at-the-airport/ground-transportation"
                  ? "active"
                  : ""
              }
            >
              Ground Transportation
            </Link>
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
      <div className="content">
        <Routes>
          <Route
            path="shuttle-tracking"
            element={
              <Shuttle
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="parking"
            element={
              <Parking
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="ground-transportation"
            element={
              <Ground scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="maps-directions"
            element={
              <Maps scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="dining"
            element={
              <Dining scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="services-amenities"
            element={
              <Services
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="accessibility"
            element={
              <Accessibility
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="general-aviation"
            element={
              <General
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="stop-human-trafficking"
            element={
              <Human scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="title-vi-airport-nondiscrimination-program"
            element={
              <Title9 scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
        </Routes>
      </div>
      <p>at the airport home</p>
    </div>
  );
};

export default AtTheAirport;
