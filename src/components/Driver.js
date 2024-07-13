import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Driver.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const AirportDriverTraining = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/operations";

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
        <h1>Airport Driver Training</h1>
        <p>
          To obtain an AOA Driver’s Credential on a SIDA badge, all applicants
          must complete the Airport’s Ground Vehicle Driver Training Course and
          demonstrate a clear understanding of the presented curriculum. The
          program material includes DSM Driver Training Manual, as well as other
          various printed and electronic training aids. After completing the
          required training program, all applicants must complete and pass a
          written exam. Finally, those individuals attempting to obtain movement
          area access must pass an AOA Driver’s Check Ride, requiring the
          applicant to exhibit to the driving instructor the ability to operate
          a vehicle safely on the airport’s movement area.
        </p>
        <p>
          Annual recurrent training is required for all movement area drivers in
          order to maintain driving privileges on the AOA. In the event a driver
          fails to complete annual recurrent driver training, the AOA Driver’s
          SIDA badge will be deactivated and all driving privileges revoked by
          the Authority until all required training has been completed.
        </p>
        <h2>Driver Resources</h2>
        <div className="resources-section">
          <div className="resource-item">
            <a href="/dsm-driver-training-video">DSM Driver Training Video</a>
          </div>
          <div className="resource-item">
            <a href="/current-airfield-diagram">Current Airfield Diagram</a>
          </div>
          <div className="resource-item">
            <a href="/current-construction-closures">
              Current Construction Closures
            </a>
          </div>
        </div>
      </div>
      {isMainPage && (
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
      )}
    </div>
  );
};

export default AirportDriverTraining;
