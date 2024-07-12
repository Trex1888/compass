import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header1.css";
import { IoIosSearch } from "react-icons/io";

const Header = ({ backgroundStyle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = {
    "at-the-airport": [
      { path: "/at-the-airport/parking", label: "Parking" },
      { path: "/at-the-airport/shuttle-tracking", label: "Shuttle Tracking" },
      {
        path: "/at-the-airport/ground-transportation",
        label: "Ground Transportation",
        submenu: [
          {
            path: "/ground-transportation/ride-share",
            label: "Ride Share, Taxis, Limos",
          },
          { path: "/ground-transportation/rental-cars", label: "Rental Cars" },
          { path: "/ground-transportation/shuttles", label: "Shuttles" },
          {
            path: "/ground-transportation/buses",
            label: "Buses & Paratransit",
          },
        ],
      },
      { path: "/at-the-airport/maps-directions", label: "Maps & Directions" },
      { path: "/at-the-airport/dining", label: "Dining" },
      {
        path: "/at-the-airport/services-amenities",
        label: "Services & Amenities",
      },
      {
        path: "/at-the-airport/accessibility",
        label: "Accessibility - ADA & Title VI",
      },
      { path: "/at-the-airport/general-aviation", label: "General Aviation" },
      {
        path: "/at-the-airport/stop-human-trafficking",
        label: "Stop Human Trafficking",
      },
      {
        path: "/at-the-airport/title-vi-airport-nondiscrimination-program",
        label: "Title VI Airport Nondiscrimination Program",
      },
    ],
    "traveler-info": [
      {
        path: "/traveler-info/tsa-security",
        label: "TSA & Security",
        submenu: [
          {
            path: "/traveler-info/tsa-security/precheck-global-entry",
            label: "TSA Precheck & Global Entry",
          },
        ],
      },
      { path: "/traveler-info/check-in", label: "Check-in Information" },
      {
        path: "/traveler-info/lost-and-found",
        label: "Lost & Found",
        submenu: [
          {
            path: "/traveler-info/lost-and-found/lost-item-report",
            label: "Lost Item Report",
          },
        ],
      },
      { path: "/traveler-info/faq", label: "Frequently Asked Questions" },
      { path: "/traveler-info/real-id", label: "REAL ID" },
    ],
    "flights-and-travel": [
      {
        path: "/flights-and-travel/airline-information",
        label: "Airline Information",
      },
      { path: "/flights-and-travel/flight-status", label: "Flight Status" },
      {
        path: "/flights-and-travel/nonstop-destinations",
        label: "Nonstop Destinations",
      },
    ],
    "airport-business": [
      {
        path: "/airport-business/contractor-resources",
        label: "Contractor Resources",
      },
      {
        path: "/airport-business/bid-procurement-rfps",
        label: "Bid Procurement & RFPs",
      },
      {
        path: "/airport-business/badging",
        label: "Badging",
        submenu: [
          {
            path: "/airport-business/badging/badge-applications-renewal",
            label: "Badge Application & Renewals",
          },
          {
            path: "/airport-business/badging/badge-faqs",
            label: "Badging FAQ's",
          },
        ],
      },
      {
        path: "/about-us/news",
        label: "News & Statistics",
      },
      {
        path: "/airport-business/operations",
        label: "Operations",
        submenu: [
          {
            path: "/airport-business/operations/unmanned-aerial-systems",
            label: "Unmanned Aerial Systems",
          },
          {
            path: "/airport-business/operations/airport-driver-training",
            label: "Airport Driver Training",
          },
          {
            path: "/airport-business/operations/rules-regulations",
            label: "Rules, Regulations, Policies and Procedures",
          },
          {
            path: "/airport-business/operations/aircraft-noise-program",
            label: "Aircraft Noise Program",
          },
        ],
      },
      { path: "/airport-business/permits-forms", label: "Permits & Forms" },
      {
        path: "/airport-business/tenant-resources",
        label: "Tenant Resources",
        submenu: [
          {
            path: "/airport-business/tenant-resources/air-service-development",
            label: "Air Service Development",
          },
        ],
      },
    ],
  };

  const handleSubmenuToggle = (e, submenu) => {
    e.preventDefault();
    setShowSubmenu(submenu);
  };

  const handleBackToMainMenu = (e) => {
    e.preventDefault();
    setShowSubmenu(null);
  };

  return (
    <div className="header-container" style={backgroundStyle}>
      <nav className={`top-nav ${isScrolled ? "hidden" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/at-the-airport/shuttle-tracking"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Shuttle Tracking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us/careers"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <IoIosSearch className="search-icon" />
          </li>
        </ul>
      </nav>

      <nav className={`main-nav ${isScrolled ? "sticky" : ""}`}>
        <ul>
          <li className="logo-title">
            <NavLink to="/" className="header-link">
              <div className="header-title">
                <h1>DES MOINES</h1>
                <h2>International Airport</h2>
              </div>
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setHoveredLink("flights-and-travel")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <NavLink
              to="/flights-and-travel"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Flights and Travel
            </NavLink>
            {hoveredLink === "flights-and-travel" && (
              <div className="dropdown-menu">
                {menuItems["flights-and-travel"].map((item) => (
                  <NavLink key={item.path} to={item.path}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setHoveredLink("traveler-info")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <NavLink
              to="/traveler-info"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Traveler Info
            </NavLink>
            {hoveredLink === "traveler-info" && (
              <div className="dropdown-menu">
                {showSubmenu ? (
                  <>
                    <div
                      className="submenu-header"
                      onClick={handleBackToMainMenu}
                    >
                      <span className="back-icon">{"<"}</span>
                      <span className="submenu-title">
                        {showSubmenu === "tsa-security"
                          ? "TSA & Security"
                          : "Lost & Found"}
                      </span>
                    </div>
                    {menuItems["traveler-info"]
                      .find((item) => item.label.toLowerCase() === showSubmenu)
                      .submenu.map((subItem) => (
                        <NavLink key={subItem.path} to={subItem.path}>
                          {subItem.label}
                        </NavLink>
                      ))}
                  </>
                ) : (
                  menuItems["traveler-info"].map((item) => (
                    <div key={item.path} className="dropdown-item">
                      {item.submenu ? (
                        <div className="dropdown-item-with-submenu">
                          <NavLink to={item.path}>{item.label}</NavLink>
                          <span
                            onClick={(e) =>
                              handleSubmenuToggle(e, item.label.toLowerCase())
                            }
                            className="submenu-toggle show-submenu-toggle"
                          >
                            | &gt;
                          </span>
                        </div>
                      ) : (
                        <NavLink to={item.path}>{item.label}</NavLink>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setHoveredLink("at-the-airport")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <NavLink
              to="/at-the-airport"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              At The Airport
            </NavLink>
            {hoveredLink === "at-the-airport" && (
              <div className="dropdown-menu">
                {showSubmenu ? (
                  <>
                    <div
                      className="submenu-header"
                      onClick={handleBackToMainMenu}
                    >
                      <span className="back-icon">{"<"}</span>
                      <span className="submenu-title">
                        Ground Transportation
                      </span>
                    </div>
                    {menuItems["at-the-airport"]
                      .find((item) => item.label === "Ground Transportation")
                      .submenu.map((subItem) => (
                        <NavLink key={subItem.path} to={subItem.path}>
                          {subItem.label}
                        </NavLink>
                      ))}
                  </>
                ) : (
                  menuItems["at-the-airport"].map((item) => (
                    <div key={item.path} className="dropdown-item">
                      {item.submenu ? (
                        <div className="dropdown-item-with-submenu">
                          <NavLink to={item.path}>{item.label}</NavLink>
                          <span
                            onClick={(e) =>
                              handleSubmenuToggle(e, item.submenu)
                            }
                            className="submenu-toggle show-submenu-toggle"
                          >
                            | &gt;
                          </span>
                        </div>
                      ) : (
                        <NavLink to={item.path}>{item.label}</NavLink>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setHoveredLink("airport-business")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <NavLink
              to="/airport-business"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Airport Business
            </NavLink>
            {hoveredLink === "airport-business" && (
              <div className="dropdown-menu">
                {showSubmenu ? (
                  <>
                    <div
                      className="submenu-header"
                      onClick={handleBackToMainMenu}
                    >
                      <span className="back-icon">{"<"}</span>
                      <span className="submenu-title">{showSubmenu}</span>
                    </div>
                    {menuItems["airport-business"]
                      .find((item) => item.label === showSubmenu)
                      .submenu.map((subItem) => (
                        <NavLink key={subItem.path} to={subItem.path}>
                          {subItem.label}
                        </NavLink>
                      ))}
                  </>
                ) : (
                  menuItems["airport-business"].map((item) => (
                    <div key={item.path} className="dropdown-item">
                      {item.submenu ? (
                        <div className="dropdown-item-with-submenu">
                          <NavLink to={item.path}>{item.label}</NavLink>
                          <span
                            onClick={(e) => handleSubmenuToggle(e, item.label)}
                            className="submenu-toggle show-submenu-toggle"
                          >
                            | &gt;
                          </span>
                        </div>
                      ) : (
                        <NavLink to={item.path}>{item.label}</NavLink>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setHoveredLink("lift-dsm")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <NavLink
              to="/lift-dsm"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Lift DSM
            </NavLink>
            {hoveredLink === "lift-dsm" && (
              <div className="dropdown-menu"></div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
