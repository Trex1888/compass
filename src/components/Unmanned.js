import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Unmanned.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Unmanned = ({ scrollToSection, openPopup }) => {
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
        <h1>Unmanned Aerial Systems</h1>
        <p>
          The Federal Aviation Regulations prohibit flying UAS or Drones within
          5 miles of an airport without first contacting air traffic control or
          airport authorities. For more information, please contact the Des
          Moines International Airport Air Traffic Control Tower at (515)
          974-8010 during normal business hours.
        </p>
        <p>
          To help you on your UAS flying journey, check out the{" "}
          <a
            href="https://www.faa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            pre-flight checklist
          </a>{" "}
          to learn how to fly smart, fly safe, while having fun. You can also
          read the{" "}
          <a
            href="https://www.faa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know Before You Fly
          </a>{" "}
          educational website for recreational users, business users, and public
          entities to learn how to fly responsibly.
        </p>
        <div className="regulation-section">
          <h2>FAA Drone Regulations</h2>
          <p>
            When you fly a UAS or Drone in the United States, it is your
            responsibility to understand and abide by the rules and regulations.
            Review the{" "}
            <a
              href="https://www.faa.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAA's DroneZone website
            </a>{" "}
            to stay up-to-date.
          </p>
        </div>
        <div className="regulation-section">
          <h2>LAANC Online Airport Notification and Authorization</h2>
          <p>
            LAANC (Low Altitude Authorization and Notification Capability)
            automates the application and approval process for UAS or{" "}
            <a
              href="https://www.faa.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drone flight authorization
            </a>{" "}
            at the Des Moines International Airport. LAANC provides access to
            controlled airspace near airports through real-time processing of
            flight authorizations in controlled airspace.
          </p>
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

export default Unmanned;
