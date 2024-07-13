import { useEffect, useState } from "react";
import "../styles/Human.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Permits = ({ scrollToSection, openPopup }) => {
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
        <h1>Permits & Forms</h1>
        <p>
          DSM is committed to building strong relationships with our business
          partners. This page is intended to provide a convenient place to
          access all permits and forms needed to work at and with the Des Moines
          International Airport.
        </p>
        <h2>Airport Permits</h2>
        <h3>Online Permit Applications</h3>
        <ul>
          <li>Vehicle Security Hangtag</li>
          <li>Commercial Vehicle Permit</li>
          <li>Dig Permit Application Process</li>
        </ul>
        <p>
          To submit a permit application, you must provide two separate
          applications forms to include (1) the Airport Permit Application Form
          (PER-PUB-00-900) and (2) the appropriate form attachment from the
          options below.
        </p>
        <h3>Hard Copy Permit Applications</h3>
        <ul>
          <li>Hot Work Permit - PER-PUB-00-909</li>
          <li>Commercial Operating (SASO) Permit - PER-PUB-00-902</li>
          <li>Commercial Facility Use Permit - PER-PUB-00-903</li>
          <li>Flying Club Permit - PER-PUB-00-904</li>
          <li>Commercial Vehicle Operator Permit - PER-PUB-00-905</li>
          <li>Aircraft De-Icing Permit - PER-PUB-00-906</li>
          <li>Fuel Truck-Cart Equipment Permit - PER-PUB-00-912</li>
          <li>
            Aircraft Fuel Storage Dispensing and Handling Permit -
            PER-PUB-00-907
          </li>
          <li>Airport Equipment Use Permit - PER-PUB-00-911</li>
          <li>Expressive Activity Permit - PER-PUB-00-910</li>
          <li>Tenant Electrical Permit - PER-PUB-00-913</li>
          <li>Additional Vehicle Form - PER-PUB-00-901</li>
          <li>Taxicab Services Operating Permit - PER-PUB-00-908</li>
        </ul>
        <h3>Forms</h3>
        <h4>Construction Forms</h4>
        <ul>
          <li>Contractor Fact & Information Sheet</li>
          <li>Initial Access Request Form</li>
        </ul>
        <h4>Security Access Request Forms</h4>
        <ul>
          <li>Access Change Request Form</li>
          <li>Hangar Access Request Form</li>
        </ul>
        <h4>Authorized Signatory Forms</h4>
        <ul>
          <li>New Service Provider Request Form</li>
          <li>Authorized Signatory Designation Form</li>
          <li>Badging Application Form</li>
        </ul>
        <h4>Charter, Deicing & Overweight Waiver Forms</h4>
        <ul>
          <li>Charter Notification Form</li>
          <li>Deicing Form Log</li>
          <li>Overweight Aircraft Operation Waiver</li>
        </ul>
        <h4>Video Request Form</h4>
        <ul>
          <li>Video Request Form</li>
        </ul>
        <p>
          Can't find what you're looking for? Please contact us at (515)
          256-5000.
        </p>
      </div>{" "}
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
  );
};

export default Permits;
