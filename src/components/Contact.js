import React, { useState, useEffect } from "react";
import "./Contact.css";
import { IoCarOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { AiOutlineInbox, AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Contact = ({ scrollToSection, openPopup }) => {
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
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Des Moines International Airport values your feedback. For questions,
          comments or to request a tour, please fill out the below comment box.
          For specific inquiries regarding media, lost and found, or airline
          information, please see the contact information below. Please review
          the
          <a href="airport-business">
            <strong> Aircraft Noise Program </strong>
          </a>
          for comments related to noise.
        </p>
        <p>Thank you for flying DSM.</p>
      </div>
      <div className="contact-content">
        <form className="contact-form">
          <input
            type="text"
            placeholder="Full Name"
            className="contact-input"
          />
          <select className="contact-input">
            <option value="">Select Subject</option>
            <option value="general">General Inquiry</option>
            <option value="media">Media</option>
            <option value="lost-and-found">Lost and Found</option>
            <option value="airline-info">Airline Information</option>
          </select>
          <input
            type="email"
            placeholder="Email Address"
            className="contact-input"
          />
          <textarea
            placeholder="Comments"
            className="contact-input contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Submit Message
          </button>
        </form>

        <div className="contact-info">
          <div className="top">
            <h2>General Contact Information</h2>
            <p>Des Moines International Airport</p>
            <p>5800 Fleur Drive, Suite 207</p>
            <p>Des Moines, Iowa 50321</p>
          </div>

          <div className="middle">
            <p>
              <strong>General:</strong> 515-256-5050
            </p>
            <p>
              <strong>Administration:</strong> 515-256-5100
            </p>
          </div>

          <div className="bottom">
            <a href="traveler-info">Directions</a>
          </div>
        </div>
      </div>

      <div className="additional-info">
        <div className="info-box">
          <HiOutlineNewspaper className="info-icon" />
          <h3>Media Contact</h3>
          <p>Brian Mulcahy, Assistant Executive Director</p>
          <p>
            <a href="mailto:bcmulcahy@dsmairport.com">
              <strong>bcmulcahy@dsmairport.com</strong>
            </a>
          </p>
          <p>
            <strong>O: 515-256-5100</strong>
          </p>
        </div>

        <div className="info-box">
          <AiOutlineInbox className="info-icon" />
          <h3>Lost & Found</h3>
          <p>
            If you lost an item or items in the public areas of the terminal, or
            at the TSA checkpoint, please enter details here:
            <a href="traveler-info">
              <strong> Lost Item Report Form</strong>
            </a>
          </p>
          <p>
            For any items left on the aircraft, please
            <a href="flights-and-travel">
              <strong> contact the airline </strong>
            </a>
            directly.
          </p>
        </div>

        <div className="info-box">
          <IoChatboxEllipsesOutline className="info-icon" />
          <h3>Contact an Airline</h3>
          <p>
            <a href="flights-and-travel">
              <strong>Contact an Airline </strong>
            </a>
            for the following information:
          </p>
          <ul>
            <li>Flight Status</li>
            <li>Passenger Reservations</li>
            <li>Baggage Claim/Lost Bags</li>
          </ul>
        </div>
      </div>
      <div className="vehicle-info">
        <IoCarOutline className="vehicle-icon" />
        <h3>Vehicle Problems?</h3>
        <p>
          Need a jump start or a tire aired? SP+ Parking is open 24-hours and
          someone is there to lend a helping hand when problems arise due to car
          mishaps or weather-related problems.
        </p>
        <br />
        <p>Call 515-256-5038 for vehicle assistance.</p>
      </div>
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
  );
};

export default Contact;
