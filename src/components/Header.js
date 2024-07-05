import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header-container">
      <nav className={`top-nav ${isScrolled ? "hidden" : ""}`}>
        <ul>
          <li>
            <Link to="/at-the-airport/shuttle-tracking">Shuttle Tracking</Link>
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

      <nav className={`main-nav ${isScrolled ? "sticky" : ""}`}>
        <ul>
          <li className="logo-title">
            <Link to="/" className="header-link">
              <div className="header-title">
                <h1>DES MOINES</h1>
                <h2>International Airport</h2>
              </div>
              <img
                src={require("../images/plane.jpg")}
                alt="Plane Logo"
                className="header-logo"
              />
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

// .top-container {
//   font: 400 16px / 1.5 "Montserrat", sans-serif;
//   position: relative; /* Changed from fixed to relative */
//   top: 0;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 350px;
//   margin-top: -150px;
//   aspect-ratio: 15 / 3;
//   clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   z-index: 5; /* Lower z-index to stay below other elements */
// }
