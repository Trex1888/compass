import { useEffect, useState } from "react";
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
            <p>
              Des Moines International Airport is committed to offering a
              convenient and pleasurable travel experience for all passengers.
              From restaurants to pit-stop grab and go options, to cost-friendly
              parking options, to shopping and more DSM has you covered.{" "}
            </p>
            <div className="flights-content">
              <div className="flights-section purple">
                <img
                  src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Holdroom%20-%20Teen%20with%20phone.jpg"
                  alt="Airline engine spiral"
                  className="flights-image"
                />
                <div className="flights-section-content">
                  <h3>Services & Amenities</h3>
                  <p>
                    DSM strives to meet the needs of the traveling public by
                    offering convenient services and amenities for travelers and
                    guests.
                  </p>
                  <Link
                    to="/flights-and-travel/airline-information"
                    className="flights-button"
                  >
                    View Services & Amenities
                  </Link>
                </div>
              </div>

              <div className="flights-section orange">
                <div className="flights-section-content">
                  <h3>Ground Transportation</h3>
                  <p>
                    Quick and easy transporation to and from DSM. View all the
                    options from the buses to car rentals, taxis, shuttles and
                    more.
                  </p>
                  <Link
                    to="/flights-and-travel/flight-status"
                    className="flights-button"
                  >
                    View Transporation Options
                  </Link>
                </div>
                <img
                  src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/taxi.jpg"
                  alt="Departure screen"
                  className="flights-image"
                />
              </div>

              <div className="flights-section blue">
                <img
                  src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Portermill%20-%20family%20eating.jpg"
                  alt="Family at airport"
                  className="flights-image"
                />
                <div className="flights-section-content">
                  <h3>Restaurants & Dining</h3>
                  <p>
                    Join us for a meal or grab something to go: we have options
                    to keep you fueled until you reach your final destinations.
                  </p>
                  <Link
                    to="/flights-and-travel/nonstop-destinations"
                    className="flights-button"
                  >
                    View Dining Options
                  </Link>
                </div>
              </div>
            </div>
            <div className="section-links-container1">
              <div className="section-links1">
                <div
                  className="link-item1"
                  onClick={() => handleButtonClick("Flight-Status")}
                >
                  <AiOutlineFolderOpen className="icon" />
                  <p>Status</p>
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
