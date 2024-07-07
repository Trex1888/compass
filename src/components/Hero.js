import React from "react";
import "./Hero.css";

import houstonImage from "../images/dsm4.png";
import dsmImage from "../images/dsm3.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <h1 className="hero-title">Nonstop Flights</h1>
        <h2 className="hero-subtitle">View All</h2>
      </div>
      <div className="flight-info-container">
        <div className="flight-info">
          <img src={houstonImage} alt="Houston, TX" />
          <h3>Charlotte, NC</h3>
        </div>

        <div className="flight-info">
          <img src={dsmImage} alt="Des Moines, IA" />
          <h3>Chicago, IL - ORD</h3>
        </div>

        <div className="flight-info">
          <img src={dsmImage} alt="Des Moines, IA" />
          <h3>Denver, CO</h3>
        </div>

        <div className="flight-info">
          <img src={dsmImage} alt="Des Moines, IA" />
          <h3>Dallas, TX</h3>
        </div>

        <div className="flight-info">
          <img src={dsmImage} alt="Des Moines, IA" />
          <h3>Destin, FL</h3>
        </div>

        <div className="flight-info">
          <img src={dsmImage} alt="Des Moines, IA" />
          <h3>Las Vegas, NV</h3>
        </div>
        <div className="flight-info">
          <img src={dsmImage} alt="Des Moines, IA" />
          <h3>Dallas, TX</h3>
        </div>

        <div className="flight-info">
          <img src={dsmImage} alt="Des Moines, IA" />
          <h3>Destin, FL</h3>
        </div>

        <div className="flight-info">
          <img src={dsmImage} alt="Des Moines, IA" />
          <h3>Las Vegas, NV</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
