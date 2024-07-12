import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/Operations.css"; // Make sure to create and update this CSS file

const Operations = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/operations";
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (section) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const operationsSections = [
    "Operations Team",
    "Safety Management System (SMS)",
    "Work Order Requests",
  ];

  return (
    <div>
      <div className="about-header">
        {isMainPage && (
          <div className="operations-container">
            <h1>Airport Operations</h1>
            <p>
              DSM is committed to ensuring safe and convenient travel to and
              from Iowa. The Des Moines International Airport Operations team is
              responsible for safety throughout the terminal and on the airport
              campus. The operations team offers public tours when time allows.
              If you are interested in requesting a tour, please fill out a{" "}
              <a href="tour-request-form-url">tour request form</a>.
            </p>
            <div className="button-links">
              {operationsSections.map((section, index) => (
                <div key={index} className="section">
                  <button
                    className={openSections.includes(section) ? "active" : ""}
                    onClick={() => toggleSection(section)}
                  >
                    {section}
                    <span className="plus-sign">
                      {openSections.includes(section) ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`section-content ${
                      openSections.includes(section) ? "open" : ""
                    }`}
                  >
                    <p>
                      {/* Replace with the actual content for each section */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Operations;
