import React, { useState } from "react";
import "../styles/Services.css";

const Services = () => {
  const [openSections, setOpenSections] = useState([]);

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
                {/* Replace with the actual content for each service */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
