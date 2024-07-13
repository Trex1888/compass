import { useEffect, useState } from "react";
import "../styles/Contractor.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Contractor = ({ scrollToSection, openPopup }) => {
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
        <h1>Contractor Resources</h1>
        <h2>Construction Projects</h2>
        <p>
          The Des Moines Airport Authority aims to make partnering on
          construction projects as efficient and convenient as possible.
        </p>
        <p>
          Each project requires specific security access applications and
          permits. Work with your airport representative on acquiring the full
          list of requirements for the job your team has been awarded.
        </p>
        <p>
          Before badging for construction projects can begin, the{" "}
          <a href="mailto:badging@dsmairport.com" className="highlight-link">
            contractor fact sheet
          </a>{" "}
          must be completed and submitted to{" "}
          <a href="mailto:badging@dsmairport.com" className="highlight-link">
            badging@dsmairport.com
          </a>
          . Additionally, the{" "}
          <a
            href="https://example.com/initial-access-request-form"
            className="highlight-link"
          >
            Initial Access Request Form
          </a>{" "}
          must be completed prior to the start of any new project. These and all
          other forms and permits related to work at DSM can be found on the{" "}
          <a
            href="https://example.com/permits-forms"
            className="highlight-link"
          >
            Permits & Forms page
          </a>
          .
        </p>
        <div className="buttons-container">
          <button className="resource-button">Permits & Forms</button>
          <button className="resource-button">Bid Procurement & RFPs</button>
        </div>
        <div className="section-links-container3">
          <div className="section-links3">
            <div
              className="link-item3"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Flight Status</p>
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
      </div>
    </div>
  );
};

export default Contractor;
