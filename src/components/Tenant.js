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
          <h2 style={{ marginBottom: "-5px" }}>Work Order Requests</h2>
          <p>
            Airport tenants in need of assistance can submit a work request
            through the Work Order Request Portal.{" "}
          </p>
          <a
            href="https://portal.aerosimple.com/forms/us/9739df36-1d4a-11ec-accf-0a58a9feac02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="work-order-request">
              Work Order Request Portal
            </button>
          </a>
          <a
            href="https://flydsm.formstack.com/workflows/security_cctv_request"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="video-request-form">Video Request Form</button>
          </a>
          <h2>Resources</h2>
          <table style={{ marginBottom: "50px" }} className="tenant-table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Storm Water Pollution Prevention Plan</td>
              </tr>
              <tr>
                <td>Des Moines Airport Authority ACDBE Program</td>
              </tr>
              <tr>
                <td>FY19-21 ACDBE Goal</td>
              </tr>
              <tr>
                <td>DSM Airport DBE Program</td>
              </tr>
              <tr>
                <td>DSM Public Notice DBE Renewal 2021-2023</td>
              </tr>
              <tr>
                <td>Charter Deicing and Overweight Waivers</td>
              </tr>
            </tbody>
          </table>
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
