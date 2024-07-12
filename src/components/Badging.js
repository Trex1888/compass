import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/Badging.css";

const Badging = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/badging";
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (section) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const badgingSections = [
    "Badge Application Process",
    "Badge Renewal",
    "Authorized Signatory Badging Portals",
  ];

  return (
    <div>
      <div className="about-header">
        {isMainPage && (
          <div className="badging-container">
            <h1>Airport Badging Office</h1>
            <p>
              The Des Moines Airport Authority is responsible for the safety of
              all operations at the Des Moines International Airport. Badging
              approval is an essential process to fulfilling our mission to
              provide safe and convenient travel and working conditions for all
              individuals at the Airport.
            </p>
            <div className="button-links">
              {badgingSections.map((section, index) => (
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

export default Badging;
