import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/BadgeApp.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const BadgeApp = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/your-main-badge-app-path"; // Replace with the actual path

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
        {" "}
        <div className="badge-app-header">
          <h1>Badge Application Process</h1>
          <h2>Badge Application</h2>

          <p style={{ fontWeight: "bold" }}>Step 1: Application</p>
          <p>
            All badge applications must be submitted via the company Authorized
            Signatory. The Airport Badging Office will not coordinate badging
            with sub-contractors or vendors directly.
          </p>
          <ul>
            <li>
              Sub-Contractors or Vendors working at the Airport need to contact
              the project main contractor or Airport tenant/sponsor that is
              requesting services.
            </li>
            <li>
              If you are a member of the Des Moines Flying Club, please contact
              the club directly at 515-710-0120.
            </li>
            <li>
              If you are a South T Hangar tenant, please contact Amy Fredricks
              at 515-256-5006.
            </li>
          </ul>

          <p style={{ fontWeight: "bold" }}>Step 2: Pre-Enrollment</p>
          <p>
            Authorized Signatory must enroll new applicants and book a
            fingerprint appointment through the{" "}
            <p>
              Please use the{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://badging.dsmairport.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Authorized Signatory Badging Portal</strong>
              </a>
              .
            </p>
          </p>

          <p style={{ fontWeight: "bold" }}>Step 3: Fingerprinting</p>
          <p>
            1. All applicants must submit to a Security Threat Assessment (STA)
            and a Criminal History Record Check (CHRC). *General Aviation badge
            applicants require only an STA*
          </p>
          <p>
            2. You must provide 2 valid forms of identification as required by
            the{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://badging.dsmairport.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Authorized Signatory Badging Portal</strong>
            </a>
            .
          </p>
          <p>
            3. Please do not be late for your fingerprint appointment or you
            will have to reschedule. Allow 10-20 minutes for fingerprinting.
          </p>
          <p>
            4. Authorized Signatory will notify the applicant and schedule a
            badge training appointment when the CHRC and STA security checks
            have been completed. Please allow 5-15 days for clearance.
          </p>
          <p style={{ fontWeight: "bold" }}>Step 4: Badge Training</p>
          <p>
            Badge Training must be completed within 30 days of completed
            security clearance. A new security clearance must be initiated after
            30 days have passed.
          </p>
          <ul>
            <li>
              {" "}
              Please do not be late for your badge training appointment or you
              will have to reschedule. Allow an extra 30-45 minutes for badge
              training.
            </li>
          </ul>

          <h2>Badge Renewal</h2>
          <p>
            Please pay close attention to the expiration date printed at the
            bottom of your Airport ID Badge. Failure to renew your badge before
            the expiration date will require a new application and security
            clearance. Badges may be renewed up to 60 days prior to expiration.
          </p>
          <ul>
            <li>
              Badge renewals are done on an appointment basis only. Please
              contact your Authorized Signatory to book a badge training
              appointment.
            </li>
            <li>
              Expired forms of identification will be required to be updated at
              the time of renewal or a new badge will not be issued.
            </li>
          </ul>
        </div>{" "}
      </div>
      {isMainPage && (
        <div className="section-links-container3">
          <div className="section-links3">
            <div
              className="link-item3"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Status</p>
            </div>
            <div
              className="link-item3"
              onClick={() => handleButtonClick("Departures")}
            >
              <GiAirplaneDeparture className="icon" />
              <p>Departures</p>
            </div>
            <div
              className="link-item3"
              onClick={() => handleButtonClick("Arrivals")}
            >
              <GiAirplaneArrival className="icon" />
              <p>Arrivals</p>
            </div>
            <div
              className="link-item3"
              onClick={() => handleButtonClick("Parking")}
            >
              <CiParking1 className="icon" />
              <p>Parking</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgeApp;
