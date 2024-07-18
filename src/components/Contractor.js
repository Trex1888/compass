import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="about-header">
        <h1>Contractor Resources</h1>
        <div className="contractor-main">
          <h2>Construction Projects</h2>{" "}
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
            <a
              href="https://www.flydsm.com/filesimages/AIRPORT%20BUSINESS/Contractor%20Fact%20Sheet.pdf"
              className="highlight-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              contractor fact sheet
            </a>{" "}
            must be completed and submitted to{" "}
            <a href="mailto:badging@dsmairport.com" className="highlight-link">
              badging@dsmairport.com
            </a>
            . Additionally, the{" "}
            <a
              href="https://flydsm.formstack.com/forms/initial_access_request_form"
              className="highlight-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Initial Access Request Form
            </a>{" "}
            must be completed prior to the start of any new project. These and
            all other forms and permits related to work at DSM can be found on
            the{" "}
            <Link
              to="/airport-business/permits-forms"
              className="highlight-link"
              onClick={smoothScrollToTop}
            >
              Permits & Forms page
            </Link>
            .
          </p>
          <div className="buttons-container">
            <Link
              to="/airport-business/permits-forms"
              onClick={smoothScrollToTop}
            >
              <button className="resource-button">Permits & Forms</button>
            </Link>
          </div>{" "}
          <Link
            to="/airport-business/bid-procurement-rfps"
            onClick={smoothScrollToTop}
          >
            <button className="resource-button1">Bid Procurement & RFPs</button>
          </Link>{" "}
        </div>{" "}
      </div>
      <div className="contractor-links-container">
        <div className="contractor-links">
          <div
            className="contractor-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="contractor-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="contractor-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="contractor-item"
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

export default Contractor;
