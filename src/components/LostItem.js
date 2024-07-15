import { useEffect, useState } from "react";
import "../styles/LostItem.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const LostItem = ({ scrollToSection, openPopup }) => {
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
    <div className="about-header">
      <h1>Lost Item Report</h1>

      <div className="lost-item-form-container">
        <div className="lost-item-form-section">
          <h2 className="lost-item-header">Report Your Lost Item</h2>
          <h3 className="lost-item-header">Item Details</h3>
          <form>
            <div className="lost-item-form-group">
              <label className="lost-item-form-label" htmlFor="type">
                Type *
              </label>
              <select className="lost-item-select" id="type" required>
                <option value="">Select type...</option>
              </select>
            </div>
            <div className="lost-item-form-group">
              <label className="lost-item-form-label" htmlFor="details">
                Other Details
              </label>
              <textarea
                className="lost-item-textarea"
                id="details"
                placeholder="Any other details, marks, or descriptive information."
              />
            </div>
            <div className="lost-item-form-group">
              <label className="lost-item-form-label" htmlFor="location">
                Location *
              </label>
              <select className="lost-item-select" id="location" required>
                <option value="airline-ticketing-area">
                  Airline Ticketing Area
                </option>
              </select>
            </div>
            <div className="lost-item-form-group">
              <label className="lost-item-form-label" htmlFor="lost-time">
                Lost Time *
              </label>
              <input
                className="lost-item-input"
                type="datetime-local"
                id="lost-time"
                required
              />
            </div>
          </form>
        </div>
        <div className="lost-item-form-section">
          <h3 className="lost-item-header">Your Details</h3>
          <form>
            <div className="lost-item-form-group">
              <label className="lost-item-form-label" htmlFor="first-name">
                First Name *
              </label>
              <input
                className="lost-item-input"
                type="text"
                id="first-name"
                required
              />
            </div>
            <div className="lost-item-form-group">
              <label className="lost-item-form-label" htmlFor="last-name">
                Last Name *
              </label>
              <input
                className="lost-item-input"
                type="text"
                id="last-name"
                required
              />
            </div>
            <div className="lost-item-form-group">
              <label className="lost-item-form-label" htmlFor="email">
                Email Address *
              </label>
              <input
                className="lost-item-input"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="lost-item-form-group">
              <label className="lost-item-form-label" htmlFor="phone">
                Contact Phone No.
              </label>
              <input className="lost-item-input" type="tel" id="phone" />
            </div>
          </form>
        </div>
      </div>
      <div className="lost-item-captcha-container">
        <div className="g-recaptcha" data-sitekey="your-site-key"></div>
      </div>
      <button className="lost-item-report-button">Report Item as Lost</button>
      <div className="lost-links-container">
        <div className="lost-links">
          <div
            className="lost-link-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="lost-link-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="lost-link-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="lost-link-item"
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

export default LostItem;
