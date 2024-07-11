import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/AirportBusiness.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const AirportBusiness = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const [openSections, setOpenSections] = useState([]);
  const location = useLocation();

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

  const getLinkClass = (path) => {
    return location.pathname === path ? "flights-link active" : "flights-link";
  };

  const getSubLinkClass = (path) => {
    return location.pathname === path ? "sub-link active" : "sub-link";
  };

  return (
    <div className="about-container">
      <div className="about-sidebar">
        <ul>
          <li>
            <Link
              to="/airport-business/contractor-resources"
              className={getLinkClass("/airport-business/contractor-resources")}
            >
              Contractor Resources
            </Link>
          </li>
          <li>
            <Link
              to="/airport-business/bid-procurement-rfps"
              className={getLinkClass("/airport-business/contractor-resources")}
            >
              Bid Procurement & RFPs
            </Link>
          </li>
          <li>
            <Link
              to="/airport-business/badging"
              className={getLinkClass("/airport-business/badging")}
            >
              Badging
            </Link>
            {location.pathname.startsWith("/airport-business/badging") && (
              <ul>
                <li>
                  <Link
                    to="/airport-business/badging/badge-applications-renewal"
                    className={getSubLinkClass(
                      "/airport-business/badging/badge-applications-renewal"
                    )}
                  >
                    Badge Applications & Renewal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/airport-business/badging/badge-faqs"
                    className={getSubLinkClass(
                      "/airport-business/badging/badge-faqs"
                    )}
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
              className={getLinkClass("/airport-business/contractor-resources")}
            >
              News & Statistics
            </Link>
          </li>
          <li>
            <Link
              to="/airport-business/operations"
              className={getLinkClass("/airport-business/operations")}
            >
              Operations
            </Link>
            {location.pathname.startsWith("/airport-business/operations") && (
              <ul>
                <li>
                  <Link
                    to="/airport-business/operations/unmanned-aerial-systems"
                    className={getSubLinkClass(
                      "/airport-business/operations/unmanned-aerial-systems"
                    )}
                  >
                    Unmanned Aerial Systems
                  </Link>
                </li>
                <li>
                  <Link
                    to="/airport-business/operations/airport-driver-training"
                    className={getSubLinkClass(
                      "/airport-business/operations/airport-driver-training"
                    )}
                  >
                    Airport Driver Training
                  </Link>
                </li>
                <li>
                  <Link
                    to="/airport-business/operations/rules-regulations"
                    className={getSubLinkClass(
                      "/airport-business/operations/rules-regulations"
                    )}
                  >
                    Rules, Regulations, Policies and Procedures
                  </Link>
                </li>
                <li>
                  <Link
                    to="/airport-business/operations/aircraft-noise-program"
                    className={getSubLinkClass(
                      "/airport-business/operations/aircraft-noise-program"
                    )}
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
              className={getLinkClass("/airport-business/permits-forms")}
            >
              Permits & Forms
            </Link>
          </li>
          <li>
            <Link
              to="/airport-business/tenant-resources"
              className={getLinkClass("/airport-business/tenant-resources")}
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
                    className={getSubLinkClass(
                      "/airport-business/tenant-resources/air-service-development"
                    )}
                  >
                    Air Service Development
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="about-content">
        <div className="about-header">
          <h1>Airport Business</h1>
          <p>
            DSM serves as an economic engine for the region and for the State of
            Iowa. The Airport is also a thriving business on its own with
            several tenants, business units, and projects being implemented
            across the 2,600 acre airport campus.
          </p>
          <p>
            Read below for information on business opportunities at the airport
            including advertising, air cargo operations, charter operations,
            T-Hangar leases, and more.
          </p>
        </div>
        <div className="button-links">
          <div className="section">
            <button
              className={openSections.includes("Advertising") ? "active" : ""}
              onClick={() => toggleSection("Advertising")}
            >
              Advertising
              <span className="plus-sign">
                {openSections.includes("Advertising") ? "-" : "+"}
              </span>
            </button>
            {openSections.includes("Advertising") && (
              <div className="section-content">
                <p>
                  All advertising at the Des Moines International Airport is
                  managed by Departure Media. For commercial airport advertising
                  inquiries, please contact:
                  <br />
                  <br />
                  <strong>Nina Himes, Sales Manager, Departure Media</strong>
                  <br />
                  Office: 843-425-4024
                  <br />
                  Email: nhimes@departure-media.com
                </p>
              </div>
            )}
          </div>
          <div className="section">
            <button
              className={
                openSections.includes("Air Cargo Operations") ? "active" : ""
              }
              onClick={() => toggleSection("Air Cargo Operations")}
            >
              Air Cargo Operations
              <span className="plus-sign">
                {openSections.includes("Air Cargo Operations") ? "-" : "+"}
              </span>
            </button>
            {openSections.includes("Air Cargo Operations") && (
              <div className="section-content">
                <p>
                  Ranked in the top 50 airports for air cargo tonnage in the
                  United States, Des Moines International Airport has over 1
                  million square feet of cargo aircraft parking with expansion
                  opportunities. The airport cargo area also includes more than
                  100,000 square feet of warehouse space.
                  <br />
                  <br />
                  Current air cargo vendors include FedEx and United Parcel
                  Service (UPS). Ground handling services are provided by the
                  individual airlines and air cargo carriers. Each has the
                  experience and equipment to handle a variety of aircraft
                  equipment and freight.
                  <br />
                  <br />
                  <strong>FedEx</strong>
                  <br />
                  6233 SW 28th St.
                  <br />
                  Des Moines, IA 50321
                  <br />
                  (800) 463-3339 or (800) 238-5355
                  <br />
                  <br />
                  <strong>United Parcel Service (UPS)</strong>
                  <br />
                  2601 Willow Creek Ave.
                  <br />
                  Des Moines, IA 50321
                  <br />
                  (800) 742-5877
                  <br />
                  <br />
                  For more information or to inquire about adding air cargo at
                  DSM, contact the Airport Authority at (515) 256-5100.
                </p>
              </div>
            )}
          </div>
          <div className="section">
            <button
              className={
                openSections.includes("Air Service Incentive Program")
                  ? "active"
                  : ""
              }
              onClick={() => toggleSection("Air Service Incentive Program")}
            >
              Air Service Incentive Program
              <span className="plus-sign">
                {openSections.includes("Air Service Incentive Program")
                  ? "-"
                  : "+"}
              </span>
            </button>
            {openSections.includes("Air Service Incentive Program") && (
              <div className="section-content">
                <p>
                  Des Moines International Airport is proud to offer an
                  incentive program to existing and prospective airlines to
                  improve air service to and from Iowa.
                  <br />
                  <br />
                  DSM offers marketing funds as well as landing and apron fee
                  waivers following FAA guidelines. Learn more here.
                  <br />
                  <br />
                  Contact Brian Mulcahy, Assistant Executive Director, for
                  specifics on qualifying for airline incentives.
                </p>
              </div>
            )}
          </div>
          <div className="section">
            <button
              className={
                openSections.includes("Charter Operations") ? "active" : ""
              }
              onClick={() => toggleSection("Charter Operations")}
            >
              Charter Operations
              <span className="plus-sign">
                {openSections.includes("Charter Operations") ? "-" : "+"}
              </span>
            </button>
            {openSections.includes("Charter Operations") && (
              <div className="section-content">
                <p>
                  Public charter flights are processed through the Des Moines
                  International Airport terminal to offer the conveniences of
                  concessions, restrooms, and parking.
                  <br />
                  <br />
                  <strong>Ground Handlers:</strong> Charter airlines are welcome
                  to turn their own flights using DSM's Common Use network, or
                  contract with one of the on-site ground handling companies. A
                  $600 per turn fee is charged by the Airport Authority, in
                  addition to the turn fees of the ground handler.
                  <ul>
                    <li>
                      G2 Aviation Staffing and Security · David Ruzicka · (515)
                      256-5783
                    </li>
                    <li>Unifiservice · Dustin Power · (515) 256-5227</li>
                  </ul>
                  <br />
                  <strong>Fixed Base Operators:</strong> Private charter flights
                  can be turned at the terminal like a public charter, or
                  handled through an FBO. There is no turn fee for a flight
                  handled through the FBO, but Landing Fees will apply. See Des
                  Moines International Airport's Rates and Charges for more
                  information.
                  <ul>
                    <li>Elliott Aviation · Jason Marshall · (515) 258-6551</li>
                    <li>
                      Signature Flight Support · Sean Kuhl · (515) 256-5330
                    </li>
                  </ul>
                  <br />
                  For more information about flight charters contact the Airport
                  Operations & Security Manager at (515) 256-5010.
                </p>
              </div>
            )}
          </div>
          <div className="section">
            <button
              className={
                openSections.includes("Development Opportunities")
                  ? "active"
                  : ""
              }
              onClick={() => toggleSection("Development Opportunities")}
            >
              Development Opportunities
              <span className="plus-sign">
                {openSections.includes("Development Opportunities") ? "-" : "+"}
              </span>
            </button>
            {openSections.includes("Development Opportunities") && (
              <div className="section-content">
                <p>
                  The Des Moines Airport Authority has nine areas which have
                  been identified for future airside and landside business
                  development to foster economic growth for the airport and
                  region. The airport serves as an economic engine by enhancing
                  economic indicators that contribute to the regions growth by
                  increasing area jobs, annual payrolls, and annual economic
                  output. Review the development plan to understand the
                  available development sites and options at the Airport.
                  <br />
                  <br />
                  <a
                    href="link-to-development-plan"
                    className="development-plan-link"
                  >
                    Des Moines International Airport Development Plan
                  </a>
                </p>
              </div>
            )}
          </div>
          <div className="section">
            <button
              className={
                openSections.includes("Space for Lease") ? "active" : ""
              }
              onClick={() => toggleSection("Space for Lease")}
            >
              Space for Lease
              <span className="plus-sign">
                {openSections.includes("Space for Lease") ? "-" : "+"}
              </span>
            </button>
            {openSections.includes("Space for Lease") && (
              <div className="section-content">
                <p>
                  DSM leases space throughout the terminal and buildings on the
                  airport campus.
                  <br />
                  <br />
                  To inquire about leasing hangar, concession, or office space
                  at the airport contact Amy Fredricks at (515) 256-5006.
                  <br />
                  <br />
                  View the DSM{" "}
                  <a href="link-to-t-hangar-map" className="t-hangar-map-link">
                    T-Hangar Map
                  </a>{" "}
                  here.
                  <br />
                  <br />
                  Learn about Des Moines Airport Authority{" "}
                  <a
                    href="link-to-minimum-standards"
                    className="minimum-standards-link"
                  >
                    Minimum Standards
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="section-links-container1">
          <div className="section-links1">
            <div
              className="link-item1"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Flight Status</p>
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
    </div>
  );
};

export default AirportBusiness;
