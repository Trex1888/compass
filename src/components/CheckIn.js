import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CheckIn.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const CheckIn = ({ scrollToSection, openPopup }) => {
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
    <div>
      <div className="about-header">
        <h1>Check-in Information</h1>
        <p>
          Check-in for most airlines begins at least 24-hours before the
          departing flight. Passengers can check-in online, at the airport
          ticketing kiosks (except for Allegiant), or at the airline ticket
          counter.
        </p>
        <p>
          Airlines recommend arriving at the airport at least a hour and an half
          to two hours before your flight’s scheduled departure. If you are
          checking luggage, you can use the self-bag tagging kiosk for all
          airlines except Allegiant and Southwest, or stop at your airline’s
          ticket counter to check your bag. DSM does not have curbside check-in
          for luggage. If you plan to use carry-on luggage only, be sure to
          check with your airline on the size and weight allowance and any
          associated fees with carry-on luggage. When traveling around holidays,
          it is suggested that additional time for ticketing and screening is
          allowed.
        </p>
        <p>
          Ticket counters are in the north end of the main terminal except for
          Southwest Airlines which is in the south end of the terminal near the
          baggage claim. Each airline opens its ticket counters based on their
          flight schedules. Please work directly with your airline to determine
          when their ticket counter will be open.
        </p>
        <div className="image-container">
          <img
            src="https://www.flydsm.com/filesimages/TRAVELER%20INFO/Ticketing%20-%20busy.jpg"
            alt="Check-in Kiosk"
            className="checkin-image"
          />
        </div>
        <div className="cancellations-section">
          <h2>Cancellations & Delays</h2>
          <p>
            Contact your airline as soon as possible when an originating flight
            or connection is canceled or delayed. Your airline will work with
            you to reschedule your flight. Any related ticketing charges are
            based on circumstances and airline policy.
          </p>
          <Link
            to="/flights-and-travel/airline-information"
            className="contact-button"
          >
            Contact Your Airline
          </Link>
        </div>{" "}
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
      </div>{" "}
    </div>
  );
};

export default CheckIn;
