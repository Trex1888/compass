import { useEffect, useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import "../styles/Ground.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Ground = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainGroundRoute =
    location.pathname === "/at-the-airport/ground-transportation";

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
    <div className="about-containerd">
      {isMainGroundRoute && (
        <>
          <div className="about-header">
            <h1>Ground Transportation</h1>
            <p>
              Get to your final destination using the quick and easy local
              transportation. Find the option that best meets your travel needs.
            </p>
          </div>
          <div className="flights-content">
            <div className="flights-section purple">
              <img
                src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/ride-share.jpg"
                alt="Ride Share, Taxis, and Limos"
                className="flights-image"
              />
              <div className="flights-section-content">
                <h2>Ride Share, Taxis, and Limos</h2>
                <Link
                  to="/at-the-airport/ground-transportation/ride-share-taxis"
                  className="flights-button"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="flights-section orange">
              <div className="flights-section-content">
                <h2>Car Rentals</h2>
                <Link
                  to="/at-the-airport/ground-transportation/rental-cars"
                  className="flights-button"
                >
                  View Details
                </Link>
              </div>
              <img
                src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/car-rental.jpg"
                alt="Car Rentals"
                className="flights-image"
              />
            </div>

            <div className="flights-section blue">
              <img
                src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/DART%20bus.jpg"
                alt="Shuttles"
                className="flights-image"
              />
              <div className="flights-section-content">
                <h2>Shuttles</h2>
                <Link
                  to="/at-the-airport/ground-transportation/hotel-shuttles"
                  className="flights-button"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="flights-section green">
              <div className="flights-section-content">
                <h2>Buses & Paratransit</h2>
                <Link
                  to="/at-the-airport/ground-transportation/buses-paratransit"
                  className="flights-button"
                >
                  View Details
                </Link>
              </div>
              <img
                src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/DART%20bus.jpg"
                alt="Buses & Paratransit"
                className="flights-image"
              />
            </div>
          </div>
        </>
      )}
      <Outlet />
      <div className="ground-links-container">
        <div className="ground-links">
          <div
            className="ground-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="ground-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="ground-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="ground-item"
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

export default Ground;
