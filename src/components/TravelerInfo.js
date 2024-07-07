import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./TravelerInfo.css";

const TravelerInfo = () => {
  const location = useLocation();

  return (
    <div className="traveler-info-container">
      <div className="traveler-info-sidebar">
        <ul>
          <li>
            <Link
              to="/traveler-info/tsa-security"
              className={
                location.pathname === "/traveler-info/tsa-security"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              TSA & Security
            </Link>
          </li>
          <li>
            <Link
              to="/traveler-info/check-in"
              className={
                location.pathname === "/traveler-info/check-in"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Check-in Information
            </Link>
          </li>
          <li>
            <Link
              to="/traveler-info/lost-and-found"
              className={
                location.pathname === "/traveler-info/lost-and-found"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Lost & Found
            </Link>
          </li>
          <li>
            <Link
              to="/traveler-info/faq"
              className={
                location.pathname === "/traveler-info/faq"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Frequently Asked Questions
            </Link>
          </li>
          <li>
            <Link
              to="/traveler-info/real-id"
              className={
                location.pathname === "/traveler-info/real-id"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              REAL ID
            </Link>
          </li>
        </ul>
      </div>

      <div className="traveler-info-content">
        <h1>Travel Information</h1>
        <p>
          Having a pleasant flight begins before you arrive at the airport. Be
          better prepared for your flight by knowing what to expect. Before you
          pack, check out the{" "}
          <a href="https://www.tsa.gov/">
            Transportation Security Administration
          </a>{" "}
          (TSA) policies, procedures, and guidelines for air travel.
        </p>
        <p>
          Your airline is the best source of information about luggage sizes and
          restrictions, check-in procedures, scheduled arrival and departure
          times, destinations, fees, and ticket prices. For airline contact
          information, visit our <a href="/airlines">Airlines page</a>.
        </p>
        <p>
          DSM offers ample parking for travelers. Visit the{" "}
          <a href="/parking">parking page</a> for real-time parking
          availability, the shuttle tracker, and a parking cost estimator giving
          you all the information you need to have a fun and safe travel
          journey.
        </p>
        <h2>Travel Tips</h2>
        <ol>
          <li>
            <strong>Download the airline app.</strong> Download the airline
            mobile app to use for easy check-in; plus, airlines use their app to
            send flight notifications to update their passengers. Many airlines
            allow you to rebook directly through the app if your flight is
            canceled.
          </li>
          <li>
            <strong>Pack Smart.</strong> If you have your boarding pass on your
            phone and you are traveling with a carry-on suitcase you can save
            time and bypass the need to stop at the ticket counter or kiosk. Be
            sure to follow all TSA carry-on luggage rules, including the liquids
            and gels rule of 3-1-1. If you opt to check a suitcase, arrive at
            least 90 minutes before your departure and verify airline ticket
            counter hours to ensure you can check your bag.
          </li>
          <li>
            <strong>Arrive Early.</strong> All passengers should plan to be at
            the airport at least 90 minutes before their scheduled departure.
            This will give you time to park, check-in, and process through
            security.
          </li>
          <li>
            <strong>
              Enroll in TSA PreCheck™ or Customs & Border Protection's Global
              Entry Program.
            </strong>{" "}
            These trusted traveler programs accelerate the TSA screening lanes
            getting you to your gate faster. Learn more <strong>here</strong>.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TravelerInfo;
