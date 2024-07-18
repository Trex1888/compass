import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/AirService.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const AirService = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage =
    location.pathname ===
    "/airport-business/tenant-resources/air-service-development";

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
    <div className="about-header">
      {isMainPage && (
        <div className="service-header">
          <h1>Air Service Development</h1>
          <p style={{ marginBottom: "250px" }}>
            The Des Moines Airport Authority works to grow and improve
            connectivity to and from Iowa through its air service development
            program. Airport Authority staff meet with new airlines to discuss
            opportunities to enter the market to increase competition and offer
            new service; additionally, staff works with airlines currently
            serving the market to increase frequency in flights, up-gauge
            aircraft to offer more seats, and add new, nonstop destinations. To
            support growth in the market, the Airport Authority offers an{" "}
            <a
              href="https://www.flydsm.com/filesimages/AIRPORT%20BUSINESS/Air%20Service%20Incentive%20Policy%20-%20AMENDMENT%203.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airline Incentive Policy
            </a>{" "}
            to support the initial investment necessary for airlines to add
            service to a market.
          </p>
        </div>
      )}
      <Outlet />{" "}
      <div className="air-service-links-container">
        <div className="air-service-links">
          <div
            className="air-service-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="air-service-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="air-service-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="air-service-item"
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

export default AirService;
