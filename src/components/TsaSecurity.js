import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/TsaSecurity.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const TsaSecurity = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const [idOpen, setIdOpen] = useState(false);
  const [checkpointOpen, setCheckpointOpen] = useState(false);

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
        <h1>TSA & Security</h1>
        <p>
          Des Moines International Airport’s top priority is safety. We are
          committed to ensuring all travelers and visitors are not only safe but
          have a pleasant experience traveling through the terminal.
        </p>
        <p>
          With safety as the top priority, the FAA Administrator has ordered the
          agency to take strong action against any passenger who disrupts or
          threatens the safety of a flight. Please act respectfully while at the
          airport and on the aircraft.
        </p>
        <p>
          The Transportation Security Administration offers guidance on its{" "}
          <a
            href="https://www.tsa.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            website
          </a>{" "}
          to help you move through the screening process. Please visit their
          <a
            href="https://www.tsa.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            website
          </a>{" "}
          for complete security procedures and information on items you are
          allowed to take through the security checkpoint. Passengers with
          disabilities and medical questions may call TSA Cares at 855-787-2227.{" "}
          <Link to="/traveler-info/tsa-security/precheck-global-entry">
            Click here
          </Link>{" "}
          for information on TSA PreCheck™ and Global Entry.
        </p>
        <div className="img-container">
          <img
            src="https://www.flydsm.com/filesimages/TRAVELER%20INFO/TSA%20Screening.jpg"
            alt="TSA Security Check"
            className="tsa-image"
          />
        </div>
        <div className="tips-section">
          <div className="tips-header" onClick={() => setIdOpen(!idOpen)}>
            <h2>ID Requirements</h2>
            <h3>{idOpen ? "-" : "+"}</h3>
          </div>
          {idOpen && (
            <div className="tips-content">
              <p>
                A photo ID is required for confirmation of all boarding passes
                for travelers 18 years and over. To prove your identity, either
                a valid driver’s license or a government identification card
                that includes a photo or a physical description is adequate. A
                U.S. passport is the best proof of U.S. citizenship. Other
                documents to prove U.S. citizenship include an expired U.S.
                passport, a certified copy of your U.S. birth certificate, a
                Certificate of Naturalization, a Certificate of Citizenship, or
                a Report of Birth Abroad of a Citizen of the United States.
                Children traveling with their parents or legal guardian do NOT
                have to show identification. People under 18 do not need
                identification.
              </p>
            </div>
          )}
          <div
            className="tips-header"
            onClick={() => setCheckpointOpen(!checkpointOpen)}
          >
            <h2>Security Checkpoint</h2>
            <h3>{checkpointOpen ? "-" : "+"}</h3>
          </div>
          {checkpointOpen && (
            <div className="tips-content">
              <p>
                Only ticketed passengers can pass through Security Screening.
                All carry-on bags or packages are passed through x-ray machines.
                There will be a visual inspection of all carry-on bags and
                packages.
              </p>
              <p>
                The Security Screening Checkpoint opens at 3:45 am until the
                last regularly scheduled flight departs. TSA works with the
                applicable airline to determine the length of time security
                screening services will be needed. In all situations, it is
                recommended that passengers arrive 90 minutes to 2 hours before
                departure for all flights, on time, and delayed.
              </p>
            </div>
          )}
          <div className="quick-tips">
            <h2>Quick Security Tips:</h2>
            <ul>
              <li>While at the airport, never leave your bags unattended.</li>
              <li>
                Do not leave your vehicle parked unattended in front of the
                terminal building or you may be ticketed. The curb is designed
                for the quick drop off and pick up of passengers only.
              </li>
              <li>
                The cell phone lot is reserved for individuals waiting to pick
                up guests. We also offer 20 minutes of free parking in the
                hourly lot to accommodate travelers.
              </li>
            </ul>
          </div>
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
      </div>
    </div>
  );
};

export default TsaSecurity;
