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
                <p>Ride Share, Taxis, and Limos</p>
                <Link
                  to="/at-the-airport/ground-transportation/ride-share-taxis-limos"
                  className="flights-button"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="flights-section orange">
              <div className="flights-section-content">
                <p>Car Rentals</p>
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
                <p>Shuttles</p>
                <Link
                  to="/at-the-airport/ground-transportation/shuttles"
                  className="flights-button"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="flights-section green">
              <div className="flights-section-content">
                <p>Buses & Paratransit</p>
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

export default Ground;
