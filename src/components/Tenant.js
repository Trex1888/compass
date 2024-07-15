import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/Tenant.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Tenant = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/tenant-resources";
  const [openSections, setOpenSections] = useState([]);

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

  const tenantSections = [
    "Storm Water Pollution Prevention Plan",
    "Des Moines Airport Authority ACDBE Program",
    "FY19-21 ACDBE Goal",
    "DSM Airport DBE Program",
    "DSM Public Notice DBE Renewal 2021-2023",
    "Charter Deicing and Overweight Waivers",
  ];

  return (
    <div className="about-header">
      {isMainPage && (
        <div className="tenant-container">
          <h1>Tenant Resources</h1>
          <p>
            DSM values the relationships with our tenants and partners. It is
            our goal to provide tenants with the information needed to be
            successful while working with the Airport. Below you will find
            tenant resources. Permits and forms can be found{" "}
            <Link to="/airport-business/permits-forms" className="link">
              here
            </Link>
            .
          </p>
          <h2>Work Order Requests</h2>
          <p>
            Airport tenants in need of assistance can submit a work request
            through the Work Order Request Portal.{" "}
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
      {isMainPage && (
        <div className="tenant-links-container">
          <div className="tenant-links">
            <div
              className="tenant-item"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Status</p>
            </div>
            <div
              className="tenant-item"
              onClick={() => handleButtonClick("Departures")}
            >
              <GiAirplaneDeparture className="icon" />
              <p>Departures</p>
            </div>
            <div
              className="tenant-item"
              onClick={() => handleButtonClick("Arrivals")}
            >
              <GiAirplaneArrival className="icon" />
              <p>Arrivals</p>
            </div>
            <div
              className="tenant-item"
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

export default Tenant;
