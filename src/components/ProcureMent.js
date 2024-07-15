import { useEffect, useState } from "react";
import "../styles/Procurement.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Procurement = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);

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
    <div className="procedure-container">
      <div className="top-section">
        <h1>Bid Procurement & Request for Proposals</h1>
        <p>
          Thank you for your interest in working with the Des Moines
          International Airport. Please select from the drop down box to view
          bid requests, request for proposal information, and project closeout
          notifications. The project disqualification listing can be found{" "}
          <a href="/">here</a>.
        </p>
      </div>
      <div className="subscribe-section">
        <h2>Sign up for RFP and Bid Request E-Mail Alerts</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="category-section">
        <h2>Bid Procurement & RFPs</h2>
        <select className="category-dropdown">
          <option value="category">Category</option>
        </select>
      </div>
      <div className="bid-list">
        <div className="bid-item">
          <h3>
            Request for Proposal for Financial Statement Audit for the Des
            Moines Airport Authority
          </h3>
          <p className="date">July 1, 2024</p>
          <a href="/">Learn More ⟶</a>
        </div>
        <div className="bid-item">
          <h3>
            Statement of Qualifications for Construction of Des Moines Airport
            Phase 1A Terminal Project (Tile, Demo, Signage)
          </h3>
          <p className="date">May 31, 2024</p>
          <p className="details">
            WEITZ/TURNER, A Joint Venture, will receive Statement of
            Qualifications (also referred to as Preapproval Forms herein) for
            construction of Des Moines Airport Phase 1A Terminal Project in Des
            Moines, Iowa. The project consists of site improvements,
            construction of a new 250,000 square foot two story building, and
            both partial demolition of and renovation of existing building(s).
          </p>
          <a href="/">Learn More ⟶</a>
        </div>
        <div className="bid-item">
          <h3>
            Statement of Qualifications for Construction of Des Moines Airport
            Phase 1A Terminal Project (Tiling Walls & Floors – Supply Only)
          </h3>
          <p className="date">May 31, 2024</p>
          <p className="details">
            WEITZ/TURNER, A Joint Venture, will receive Statement of
            Qualifications (also referred to as Preapproval Forms herein) for
            construction of Des Moines Airport Phase 1A Terminal Project in Des
            Moines, Iowa. The project consists of site improvements,
            construction of a new 250,000 square foot two story building, and
            both partial demolition of and renovation of existing building(s).
          </p>
          <a href="/">Learn More ⟶</a>
        </div>
        <div className="bid-item">
          <h3>Notice to Bidders: 2024-25 Landside Snow Removal</h3>
          <p className="date">May 23, 2024</p>
          <a href="/">Learn More ⟶</a>
        </div>
        <div className="bid-item">
          <h3>
            Advertisement for Statement of Qualifications (Preapproval Forms)
            for Construction of Des Moines Airport Phase 1A Terminal Project
          </h3>
          <p className="date">April 26, 2024</p>
          <a href="/">Learn More ⟶</a>
        </div>
        <div className="bid-item">
          <h3>
            Advertisement for Statement of Qualifications (Preapproval Forms)
            for Construction of Des Moines Airport Phase 1A Terminal Project
          </h3>
          <p className="date">March 13, 2024</p>
          <a href="/">Learn More ⟶</a>
        </div>
        <div className="bid-item">
          <h3>
            Advertisement for Statement of Qualifications for Construction of
            Des Moines Airport Phase 1A Terminal Project
          </h3>
          <p className="date">March 5, 2024</p>
          <a href="/">Learn More ⟶</a>
        </div>
      </div>
      <div className="proc-links-container">
        <div className="proc-links">
          <div
            className="proc-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="proc-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="proc-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="proc-item"
            onClick={() => handleButtonClick("Parking")}
          >
            <CiParking1 className="icon" />
            <p>Parking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procurement;
