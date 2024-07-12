import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/Tenant.css"; // Make sure to create and update this CSS file

const Tenant = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/tenant-resources";
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (section) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const tenantSections = [
    "Storm Water Pollution Prevention Plan",
    "Des Moines Airport Authority ACDBE Program",
    "FY19-21 ACDBE Goal",
    "DSM Airport DBE Program",
    "DSM Public Notice DBE Renewal 2021-2023",
    "Charter Deicing and Overweight Waivers",
  ];

  return (
    <div>
      {isMainPage && (
        <div className="tenant-container">
          <h1>Tenant Resources</h1>
          <p>
            DSM values the relationships with our tenants and partners. It is
            our goal to provide tenants with the information needed to be
            successful while working with the Airport. Below you will find
            tenant resources. Permits and forms can be found{" "}
            <a href="#">here</a>.
          </p>
          <div className="button-links">
            <button className="work-order-request">
              Work Order Request Portal
            </button>
            <button className="video-request-form">Video Request Form</button>
          </div>
          <div className="resources">
            {tenantSections.map((section, index) => (
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
  );
};

export default Tenant;
