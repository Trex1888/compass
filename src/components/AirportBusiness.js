import { useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "../styles/AirportBusiness.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const AirportBusiness = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const [openSections, setOpenSections] = useState([]);
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business";
  const showSidebar = !location.pathname.includes(
    "/airport-business/bid-procurement-rfps"
  );

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

  const sections = [
    "Advertising",
    "Air Cargo Operations",
    "Air Service Incentive Program",
    "Charter Operations",
    "Development Opportunities",
    "Space for Lease",
  ];

  return (
    <div className="about-container">
      {showSidebar && (
        <div className="about-sidebar">
          <ul>
            <li>
              <Link
                to="/airport-business/contractor-resources"
                className={
                  location.pathname === "/airport-business/contractor-resources"
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Contractor Resources
              </Link>
            </li>
            <li>
              <Link
                to="/airport-business/bid-procurement-rfps"
                className={
                  location.pathname === "/airport-business/bid-procurement-rfps"
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Bid Procurement & RFPs
              </Link>
            </li>
            <li>
              <Link
                to="/airport-business/badging"
                className={
                  location.pathname === "/airport-business/badging" ||
                  location.pathname.startsWith("/airport-business/badging")
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Badging
              </Link>
              {location.pathname.startsWith("/airport-business/badging") && (
                <ul>
                  <li>
                    <Link
                      to="/airport-business/badging/badge-applications-renewal"
                      className={
                        location.pathname ===
                        "/airport-business/badging/badge-applications-renewal"
                          ? "flights-link active-sub"
                          : "flights-link"
                      }
                    >
                      Badge Applications & Renewal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/airport-business/badging/badge-faqs"
                      className={
                        location.pathname ===
                        "/airport-business/badging/badge-faqs"
                          ? "flights-link active-sub"
                          : "flights-link"
                      }
                    >
                      Badging FAQs
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/about-us/news"
                className={
                  location.pathname === "/about-us/news"
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                News & Statistics
              </Link>
            </li>
            <li>
              <Link
                to="/airport-business/operations"
                className={
                  location.pathname === "/airport-business/operations" ||
                  location.pathname.startsWith("/airport-business/operations")
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Operations
              </Link>
              {location.pathname.startsWith("/airport-business/operations") && (
                <ul>
                  <li>
                    <Link
                      to="/airport-business/operations/unmanned-aerial-systems"
                      className={
                        location.pathname ===
                        "/airport-business/operations/unmanned-aerial-systems"
                          ? "flights-link active-sub"
                          : "flights-link"
                      }
                    >
                      Unmanned Aerial Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/airport-business/operations/airport-driver-training"
                      className={
                        location.pathname ===
                        "/airport-business/operations/airport-driver-training"
                          ? "flights-link active-sub"
                          : "flights-link"
                      }
                    >
                      Airport Driver Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/airport-business/operations/rules-regulations"
                      className={
                        location.pathname ===
                        "/airport-business/operations/rules-regulations"
                          ? "flights-link active-sub"
                          : "flights-link"
                      }
                    >
                      Rules, Regulations, Policies and Procedures
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/airport-business/operations/aircraft-noise-program"
                      className={
                        location.pathname ===
                        "/airport-business/operations/aircraft-noise-program"
                          ? "flights-link active-sub"
                          : "flights-link"
                      }
                    >
                      Aircraft Noise Program
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/airport-business/permits-forms"
                className={
                  location.pathname === "/airport-business/permits-forms"
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Permits & Forms
              </Link>
            </li>
            <li>
              <Link
                to="/airport-business/tenant-resources"
                className={
                  location.pathname === "/airport-business/tenant-resources" ||
                  location.pathname.startsWith(
                    "/airport-business/tenant-resources"
                  )
                    ? "flights-link active"
                    : "flights-link"
                }
              >
                Tenant Resources
              </Link>
              {location.pathname.startsWith(
                "/airport-business/tenant-resources"
              ) && (
                <ul>
                  <li>
                    <Link
                      to="/airport-business/tenant-resources/air-service-development"
                      className={
                        location.pathname ===
                        "/airport-business/tenant-resources/air-service-development"
                          ? "flights-link active-sub"
                          : "flights-link"
                      }
                    >
                      Air Service Development
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
      <div className="about-content">
        {isMainPage ? (
          <div className="about-header">
            <h1>Airport Business</h1>
            <div className="airport-business-top">
              <p>
                DSM serves as an economic engine for the region and for the
                State of Iowa. The Airport is also a thriving business on its
                own with several tenants, business units, and projects being
                implemented across the 2,600 acre airport campus.
              </p>
              <p>
                Read below for information on business opportunities at the
                airport including advertising, air cargo operations, charter
                operations, T-Hangar leases, and more.
              </p>
              <div className="button-links">
                {sections.map((section, index) => (
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                ))}{" "}
                For Des Moines Airport Authority Board approved rates and
                charges, click here. To review the Independent Registered
                Municipal Advisor letter click here. For additional inquiries,
                call Airport Administration at (515) 256-5100.
              </div>
            </div>
            <div className="section-links-container1">
              <div className="section-links1">
                <div
                  className="link-item1"
                  onClick={() => handleButtonClick("Flight-Status")}
                >
                  <AiOutlineFolderOpen className="icon" />
                  <p>Status</p>
                </div>
                <div
                  className="link-item1"
                  onClick={() => handleButtonClick("Departures")}
                >
                  <GiAirplaneDeparture className="icon" />
                  <p>Departures</p>
                </div>
                <div
                  className="link-item1"
                  onClick={() => handleButtonClick("Arrivals")}
                >
                  <GiAirplaneArrival className="icon" />
                  <p>Arrivals</p>
                </div>
                <div
                  className="link-item1"
                  onClick={() => handleButtonClick("Parking")}
                >
                  <CiParking1 className="icon" />
                  <p>Parking</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default AirportBusiness;
