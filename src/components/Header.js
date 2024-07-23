import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ backgroundStyle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState({
    "at-the-airport": null,
    "traveler-info": null,
    "airport-business": null,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = (e) => {
    e.stopPropagation();
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", closeSearch);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeSearch);
    };
  }, []);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleSubmenuToggle = (e, menu, submenu) => {
    e.preventDefault();
    setShowSubmenu((prev) => ({
      ...prev,
      [menu]: submenu,
    }));
  };

  const handleBackToMainMenu = (e, menu) => {
    e.preventDefault();
    setShowSubmenu((prev) => ({
      ...prev,
      [menu]: null,
    }));
  };

  const closeDropdowns = () => {
    setHoveredLink(null);
    setShowSubmenu({
      "at-the-airport": null,
      "traveler-info": null,
      "airport-business": null,
    });
  };

  const handleMainMenuClick = (menu) => {
    setHoveredLink(menu);
  };

  const handleLinkClick = () => {
    closeDropdowns();
  };

  const menuItems = {
    "at-the-airport": [
      { path: "/at-the-airport/parking", label: "Parking" },
      { path: "/at-the-airport/shuttle-tracking", label: "Shuttle Tracking" },
      {
        path: "/at-the-airport/ground-transportation",
        label: "Ground Transportation",
        submenu: [
          {
            path: "/at-the-airport/ground-transportation/ride-share-taxis",
            label: "Ride Share, Taxis, Limos",
          },
          {
            path: "/at-the-airport/ground-transportation/rental-cars",
            label: "Rental Cars",
          },
          {
            path: "/at-the-airport/ground-transportation/hotel-shuttles",
            label: "Shuttles",
          },
          {
            path: "/at-the-airport/ground-transportation/buses-paratransit",
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

  return (
    <div
      className={`header-container ${isSearchOpen ? "search-open" : ""}`}
      style={backgroundStyle}
      onClick={stopPropagation}
    >
      <div className="hamburger-menu" onClick={toggleMenu}>
        <RxHamburgerMenu className="hamburger-icon" />
      </div>
      <nav
        className={`top-nav ${isScrolled ? "hidden" : ""} ${
          isSearchOpen ? "search-open" : ""
        }`}
      >
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
          <li onClick={toggleSearch}>
            <IoIosSearch className="search-icon" />
          </li>
        </ul>
        {isSearchOpen && (
          <div className="search-bar" onClick={stopPropagation}>
            <span>find something...</span>
            <IoIosSearch className="search-icon" />
          </div>
        )}
      </nav>

      <nav
        className={`main-nav ${isScrolled ? "sticky" : ""} ${
          isMenuOpen ? "open" : ""
        }`}
      >
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
              onClick={() => handleMainMenuClick("flights-and-travel")}
            >
              Flights and Travel
            </NavLink>
            {hoveredLink === "flights-and-travel" && (
              <div className="dropdown-menu">
                {menuItems["flights-and-travel"].map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleLinkClick}
                  >
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
              onClick={() => handleMainMenuClick("traveler-info")}
            >
              Traveler Info
            </NavLink>
            {hoveredLink === "traveler-info" && (
              <div className="dropdown-menu">
                {showSubmenu["traveler-info"] ? (
                  <>
                    <div
                      className="submenu-header"
                      onClick={(e) => handleBackToMainMenu(e, "traveler-info")}
                    >
                      <span className="back-icon">{"<"}</span>
                      <span className="submenu-title">
                        {showSubmenu["traveler-info"]}
                      </span>
                    </div>
                    {menuItems["traveler-info"]
                      .find(
                        (item) => item.label === showSubmenu["traveler-info"]
                      )
                      ?.submenu?.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                  </>
                ) : (
                  menuItems["traveler-info"].map((item) => (
                    <div key={item.path} className="dropdown-item">
                      {item.submenu ? (
                        <div className="dropdown-item-with-submenu">
                          <NavLink to={item.path}>
                            {item.label}{" "}
                            <div className="right-side">
                              {" "}
                              |
                              <span
                                style={{
                                  marginLeft: "20px",
                                  marginRight: "10px",
                                }}
                                onClick={(e) =>
                                  handleSubmenuToggle(
                                    e,
                                    "traveler-info",
                                    item.label
                                  )
                                }
                              >
                                &gt;
                              </span>
                            </div>
                          </NavLink>
                        </div>
                      ) : (
                        <NavLink to={item.path} onClick={handleLinkClick}>
                          {item.label}
                        </NavLink>
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
              onClick={() => handleMainMenuClick("at-the-airport")}
            >
              At The Airport
            </NavLink>
            {hoveredLink === "at-the-airport" && (
              <div className="dropdown-menu">
                {showSubmenu["at-the-airport"] ? (
                  <>
                    <div
                      className="submenu-header"
                      onClick={(e) => handleBackToMainMenu(e, "at-the-airport")}
                    >
                      <span className="back-icon">{"<"}</span>
                      <span className="submenu-title">
                        {showSubmenu["at-the-airport"]}
                      </span>
                    </div>
                    {menuItems["at-the-airport"]
                      .find(
                        (item) => item.label === showSubmenu["at-the-airport"]
                      )
                      ?.submenu?.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                  </>
                ) : (
                  menuItems["at-the-airport"].map((item) => (
                    <div key={item.path} className="dropdown-item">
                      {item.submenu ? (
                        <div className="dropdown-item-with-submenu">
                          <NavLink to={item.path}>
                            {item.label}{" "}
                            <div className="right-side">
                              {" "}
                              |
                              <span
                                style={{
                                  marginLeft: "20px",
                                  marginRight: "10px",
                                }}
                                onClick={(e) =>
                                  handleSubmenuToggle(
                                    e,
                                    "at-the-airport",
                                    item.label
                                  )
                                }
                              >
                                &gt;
                              </span>
                            </div>
                          </NavLink>
                        </div>
                      ) : (
                        <NavLink to={item.path} onClick={handleLinkClick}>
                          {item.label}
                        </NavLink>
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
              onClick={() => handleMainMenuClick("airport-business")}
            >
              Airport Business
            </NavLink>
            {hoveredLink === "airport-business" && (
              <div className="dropdown-menu">
                {showSubmenu["airport-business"] ? (
                  <>
                    <div
                      className="submenu-header"
                      onClick={(e) =>
                        handleBackToMainMenu(e, "airport-business")
                      }
                    >
                      <span className="back-icon">{"<"}</span>
                      <span className="submenu-title">
                        {showSubmenu["airport-business"]}
                      </span>
                    </div>
                    {menuItems["airport-business"]
                      .find(
                        (item) => item.label === showSubmenu["airport-business"]
                      )
                      ?.submenu?.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                  </>
                ) : (
                  menuItems["airport-business"].map((item) => (
                    <div key={item.path} className="dropdown-item">
                      {item.submenu ? (
                        <div className="dropdown-item-with-submenu">
                          <NavLink to={item.path}>
                            {item.label}{" "}
                            <div className="right-side">
                              {" "}
                              |
                              <span
                                style={{
                                  marginLeft: "20px",
                                  marginRight: "10px",
                                }}
                                onClick={(e) =>
                                  handleSubmenuToggle(
                                    e,
                                    "airport-business",
                                    item.label
                                  )
                                }
                              >
                                &gt;
                              </span>
                            </div>
                          </NavLink>
                        </div>
                      ) : (
                        <NavLink to={item.path} onClick={handleLinkClick}>
                          {item.label}
                        </NavLink>
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
              onClick={() => handleMainMenuClick("lift-dsm")}
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
