import React, { useState } from "react";
import "../styles/Header1.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="top-nav">
        <ul>
          <li>Shuttle Tracking</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="header-container">
        <div className="logo">
          <img src="/path_to_logo.png" alt="Des Moines International Airport" />
        </div>
        <div className="desktop-nav">
          <nav className="nav-menu">
            <ul>
              <li>Flights and Travel</li>
              <li>Traveler Info</li>
              <li>At The Airport</li>
              <li>Airport Business</li>
              <li>Lift DSM</li>
            </ul>
          </nav>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
        {isOpen && (
          <div className="mobile-nav">
            <nav className="nav-menu open">
              <ul>
                <li>Flights and Travel +</li>
                <li>Traveler Info +</li>
                <li>At The Airport +</li>
                <li>Airport Business +</li>
                <li>Lift DSM</li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
