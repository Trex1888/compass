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

      <div className="form-container">
        <div className="item-details">
          {" "}
          <h2>Report Your Lost Item</h2>
          <h3>Item Details</h3>
          <form>
            <div className="form-group">
              <label htmlFor="type">Type *</label>
              <select id="type" required>
                <option value="">Select type...</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="details">Other Details</label>
              <textarea
                id="details"
                placeholder="Any other details, marks, or descriptive information."
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <select id="location" required>
                <option value="airline-ticketing-area">
                  Airline Ticketing Area
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="lost-time">Lost Time *</label>
              <input type="datetime-local" id="lost-time" required />
            </div>
          </form>
        </div>
        <div className="your-details">
          <h3>Your Details</h3>
          <form>
            <div className="form-group">
              <label htmlFor="first-name">First Name *</label>
              <input type="text" id="first-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name *</label>
              <input type="text" id="last-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Phone No.</label>
              <input type="tel" id="phone" />
            </div>
          </form>
        </div>
      </div>
      <div className="captcha-container">
        <div className="g-recaptcha" data-sitekey="your-site-key"></div>
      </div>
      <button className="report-button">Report Item as Lost</button>
      <div>
        {" "}
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

export default LostItem;
