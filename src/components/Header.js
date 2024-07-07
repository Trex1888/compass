import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";

const Header = ({ backgroundStyle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
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
                {/* Add appropriate options for Flights and Travel if needed */}
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
                {/* Add appropriate options for Traveler Info if needed */}
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
                {/* Add appropriate options for Airport Business if needed */}
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
              <div className="dropdown-menu">
                {/* Add appropriate options for Lift DSM if needed */}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
