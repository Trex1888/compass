import { useLocation } from "react-router-dom";
import "../styles/Top.css";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useEffect, useState } from "react";

const Top = ({ scrollToSection, openPopup, backgroundStyle }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  const isNonstopRoute =
    location.pathname === "/flights-and-travel/nonstop-destinations";
  const isFlyRoute = location.pathname === "/lift-dsm";
  const statusRoute = location.pathname === "/flights-and-travel/flight-status";
  // const agendaRoute =
  //   location.pathname === "about-us/authority-leadership/minutes-agenda";

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
  }, []);

  const handleButtonClick = (sectionId) => {
    scrollToSection(sectionId);
    openPopup();
  };

  const style = {
    ...backgroundStyle,
    height: isFlyRoute
      ? "675px"
      : isHomeRoute
      ? "740px"
      : isNonstopRoute
      ? "450px"
      : statusRoute
      ? "450px"
      : "350px",
  };

  return (
    <div
      className={`top-container ${isHomeRoute ? "home-route" : ""} ${
        isFlyRoute ? "fly-route" : ""
      }`}
      style={style}
    >
      {isHomeRoute && (
        <div className="top-header">
          <h1>
            DES MOINES INTERNATIONAL
            <span className="top-subtitle">AIRPORT</span>
          </h1>
          <div className="top-links-container">
            <div className="top-links">
              <div
                className="top-link-item"
                onClick={() => handleButtonClick("Flight-Status")}
              >
                <AiOutlineFolderOpen className="icon" />
                <p>Status</p>
              </div>
              <div
                className="top-link-item"
                onClick={() => handleButtonClick("Departures")}
              >
                <GiAirplaneDeparture className="icon" />
                <p>Departures</p>
              </div>
              <div
                className="top-link-item"
                onClick={() => handleButtonClick("Arrivals")}
              >
                <GiAirplaneArrival className="icon" />
                <p>Arrivals</p>
              </div>
              <div
                className="top-link-item"
                onClick={() => handleButtonClick("Parking")}
              >
                <CiParking1 className="icon" />
                <p>Parking</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Top;
