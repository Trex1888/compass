import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import "../styles/Ground.css";

const Ground = ({ scrollToSection, openPopup }) => {
  const location = useLocation();
  const isMainGroundRoute =
    location.pathname === "/at-the-airport/ground-transportation";

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
    </div>
  );
};

export default Ground;
