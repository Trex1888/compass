import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import planeImage from "../images/plane.jpg";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [showTopNav, setShowTopNav] = useState(true);

  // useEffect(() => {
  //   const checkScrollTop = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > 35) {
  //       setShowTopNav(false);
  //     } else {
  //       setShowTopNav(true);
  //     }
  //   };

  //   window.addEventListener("scroll", checkScrollTop);
  //   return () => window.removeEventListener("scroll", checkScrollTop);
  // }, []);

  return (
    <div className="header-container">
      {showTopNav && (
        <nav className="top-nav">
          <ul>
            <li>
              <Link to="/at-the-airport/shuttle-tracking">
                Shuttle Tracking
              </Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/about-us/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <IoIosSearch className="search-icon" />
            </li>
          </ul>
        </nav>
      )}
      <nav className={`main-nav ${showTopNav ? "" : "sticky"}`}>
        <ul>
          <li className="logo-title">
            <Link to="/" className="header-link">
              <div className="header-title">
                <h1>DES MOINES</h1>
                <h2>International Airport</h2>
              </div>
              <img src={planeImage} alt="Plane Logo" className="header-logo" />
            </Link>
          </li>
          <li>
            <Link to="/flights-and-travel">Flights and Travel</Link>
          </li>
          <li>
            <Link to="/traveler-info">Traveler Info</Link>
          </li>
          <li>
            <Link to="/at-the-airport">At The Airport</Link>
          </li>
          <li>
            <Link to="/airport-business">Airport Business</Link>
          </li>
          <li>
            <Link to="/lift-dsm">Lift DSM</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
