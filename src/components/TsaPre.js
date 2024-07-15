import { useEffect, useState } from "react";
import "../styles/TsaPre.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const TsaPre = ({ scrollToSection, openPopup }) => {
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
      <div className="pre-tsa-top">
        <h1> TSA PreCheck™ & Global Entry</h1>
        <div className="tsa-content-with-image">
          <div className="tsa-content">
            <p>
              The TSA offers trusted traveler programs. TSA PreCheck™ is a
              fee-based membership for expedited screening that allows
              pre-approved travelers to leave on their shoes, light outerwear
              and belt, keep their laptop in its case and their 3-1-1 compliant
              liquids/gels bag in a carry-on in select screening lanes. TSA does
              have PreCheck™ screening at DSM.
            </p>
            <p>
              Global Entry is a program managed by U.S. Customs and Border
              Protection to allow expedited clearance for pre-approved low-risk
              travelers entering the United States. Global Entry membership
              includes TSA PreCheck™.
            </p>
            <p>
              <a
                href="https://www.tsa.gov/precheck"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>{" "}
              to enroll in TSA PreCheck™. Learn more about{" "}
              <a
                href="https://www.tsa.gov/precheck"
                target="_blank"
                rel="noopener noreferrer"
              >
                TSA Precheck
              </a>{" "}
              and{" "}
              <a
                href="https://ttp.cbp.dhs.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Global Entry
              </a>
              .
            </p>
          </div>
          <div className="tsa-precheck-image-container">
            <img
              src="https://www.flydsm.com/filesimages/TRAVELER%20INFO/TSA%20Screening%20Line.jpg"
              alt="TSA PreCheck"
              className="precheck-image"
            />
          </div>
        </div>
      </div>
      <div className="global-entry-section1">
        <h2>Global Entry Enrollment Center</h2>
        <p>
          DSM is an official Global Entry enrollment center. Conditionally
          approved applicants are now able to schedule interviews with U.S.
          Customs and Border Protection through the Trusted Traveler Program{" "}
          <a
            href="https://ttp.cbp.dhs.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            enrollment site
          </a>
          . To schedule an appointment, scroll down to the bottom of the
          enrollment site before Frequently Asked Questions. In the middle of
          the page, click the link "Find an Enrollment Center" and select Global
          Entry. Scroll to Iowa and select Des Moines to schedule your interview
          at DSM.
        </p>
        <p>
          Regular Customs and Border Protection interview hours for Global Entry
          will be 12 pm to 4 pm, Tuesday through Thursday.
        </p>
        <p>
          Please note: Customs and Border Protection is independent of the Des
          Moines International Airport. The Des Moines Airport Authority cannot
          access the enrollment or scheduling portal. All questions should be
          directed to Customs and Border Protection.
        </p>
      </div>
      <div className="pre-tsa-container">
        <div className="pre-tsa-links">
          <div
            className="pre-tsa-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="pre-tsa-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="pre-tsa-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="pre-tsa-item"
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

export default TsaPre;
