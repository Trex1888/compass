import { useEffect, useState } from "react";
import "../styles/Services.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Services = ({ scrollToSection, openPopup }) => {
  const [openSections, setOpenSections] = useState([]);
  const [showAirplane, setShowAirplane] = useState(false);

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

  const toggleSection = (section) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const services = [
    "Shopping",
    "Dining",
    "Free Wi-Fi Access",
    "Terminal Maps",
    "Restrooms",
    "Pets & Pet Relief Area",
    "Meeting & Conference Rooms",
    "Nursing Room",
    "ATMs",
  ];

  return (
    <div className="about-header">
      {" "}
      <div className="services-container">
        <h1>Services & Amenities</h1>

        <p>
          DSM offers our travelers services and amenities to make their travel
          more comfortable. When passing through the terminal, you will have the
          opportunity to shop, eat, and get work done using our free Wi-Fi.
        </p>
        <div className="button-links">
          {services.map((service, index) => (
            <div key={index} className="section">
              <button
                className={openSections.includes(service) ? "active" : ""}
                onClick={() => toggleSection(service)}
              >
                {service}
                <span className="plus-sign">
                  {openSections.includes(service) ? "-" : "+"}
                </span>
              </button>
              <div
                className={`section-content ${
                  openSections.includes(service) ? "open" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
      <div className="amenity-links-container">
        <div className="amenity-links">
          <div
            className="amenity-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="amenity-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="amenity-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="amenity-item"
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

export default Services;
