import { useEffect, useState } from "react";
import "../styles/Title9.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Title9 = ({ scrollToSection, openPopup }) => {
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
      <h1>Title VI Airport Nondiscrimination Program</h1>
      <p>
        Title VI of the Civil Rights Act of 1964, 42 U.S.C. § 2000d, and the
        Civil Rights Restoration Act of 1987, Pub. L. No. 100-259, 102 Stat. 28,
        prohibits discrimination on the grounds of race, color, national origin,
        gender, age or disability. The Des Moines International Airport is
        committed to ensuring no person shall be excluded from participation in,
        be denied the benefits of, or be otherwise subjected to discrimination
        under any program or activity receiving federal financial assistance.
        The Des Moines Airport Authority further assures every effort will be
        made to ensure nondiscrimination in all of its programs and activities,
        regardless of whether those programs and activities are federally
        funded.
      </p>
      <div className="title9-top">
        <h2>Resources:</h2>
        <ul>
          <li>
            <a
              href="https://www.ecfr.gov/current/title-49/subtitle-A/part-21"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOT Title VI Regulations at 49 CFR Part 21
            </a>
          </li>

          <li>
            <a href="/">Title VI Plan</a>
          </li>
          <li>
            <a href="/">Title VI Complaint Form</a>
          </li>
          <li>
            <a href="/">DBE Program</a>
          </li>
          <li>
            <a href="/">ACDBE Program</a>
          </li>
        </ul>{" "}
      </div>
      <div className="title9-links-container">
        <div className="title9-links">
          <div
            className="title9-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="title9-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="title9-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="title9-item"
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

export default Title9;
