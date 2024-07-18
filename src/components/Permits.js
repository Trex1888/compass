import { useEffect, useState } from "react";
import "../styles/Permits.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Permits = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const [openSection, setOpenSection] = useState(null);

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

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <div className="about-header">
        <h1>Permits & Forms</h1>
        <div className="permits-header">
          <p>
            DSM is committed to building strong relationships with our business
            partners. This page is intended to provide a convenient place to
            access all permits and forms needed to work at and with the Des
            Moines International Airport.
          </p>
          <h2>Airport Permits</h2>
          <h3
            style={{ color: "#be5a0e", fontWeight: 700, marginBottom: "60px" }}
          >
            Online Permit Applications
          </h3>
          <div className="button-links">
            <div className="section">
              <button
                className={
                  openSection === "Vehicle Security Hangtag" ? "active" : ""
                }
                onClick={() => toggleSection("Vehicle Security Hangtag")}
              >
                Vehicle Security Hangtag
                <span className="plus-sign">
                  {openSection === "Vehicle Security Hangtag" ? "-" : "+"}
                </span>
              </button>
              <div
                className={`section-content ${
                  openSection === "Vehicle Security Hangtag" ? "open" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="section">
              <button
                className={
                  openSection === "Commercial Vehicle Permit" ? "active" : ""
                }
                onClick={() => toggleSection("Commercial Vehicle Permit")}
              >
                Commercial Vehicle Permit
                <span className="plus-sign">
                  {openSection === "Commercial Vehicle Permit" ? "-" : "+"}
                </span>
              </button>
              <div
                className={`section-content ${
                  openSection === "Commercial Vehicle Permit" ? "open" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="section">
              <button
                className={
                  openSection === "Dig Permit Application Process"
                    ? "active"
                    : ""
                }
                onClick={() => toggleSection("Dig Permit Application Process")}
              >
                Dig Permit Application Process
                <span className="plus-sign">
                  {openSection === "Dig Permit Application Process" ? "-" : "+"}
                </span>
              </button>
              <div
                className={`section-content ${
                  openSection === "Dig Permit Application Process" ? "open" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <p>
            To submit a permit application, you must provide two separate
            applications forms to include (1) the{" "}
            <a
              href="https://www.flydsm.com/filesimages/AIRPORT%20BUSINESS/Permits%20and%20Forms/PER-PUB-00-900%20-%20Permit%20Application%20Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airport Permit Application Form (PER-PUB-00-900)
            </a>{" "}
            and (2) the appropriate form attachment from the options below.
          </p>
          <h3
            style={{ color: "#be5a0e", fontWeight: 700, marginBottom: "-10px" }}
          >
            Hard Copy Permit Applications
          </h3>
          <table className="hard-table">
            <tbody>
              <tr>
                <td>
                  <strong>Hot Work Permit</strong> - PER-PUB-00-909
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Commercial Operating (SASO) Permit</strong> -
                  PER-PUB-00-902
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Commercial Facility Use Permit</strong> -
                  PER-PUB-00-903
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Flying Club Permit</strong> - PER-PUB-00-904
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Commercial Vehicle Operator Permit</strong> -
                  PER-PUB-00-905
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Aircraft De-Icing Permit</strong> - PER-PUB-00-906
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Fuel Truck-Cart Equipment Permit</strong> -
                  PER-PUB-00-912
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    Aircraft Fuel Storage Dispensing and Handling Permit
                  </strong>{" "}
                  - PER-PUB-00-907
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Airport Equipment Use Permit</strong> - PER-PUB-00-911
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Expressive Activity Permit</strong> - PER-PUB-00-910
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tenant Electrical Permit</strong> - PER-PUB-00-913
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Additional Vehicle Form</strong> - PER-PUB-00-901
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Taxicab Services Operating Permit</strong> -
                  PER-PUB-00-908
                </td>
              </tr>
            </tbody>
          </table>
          <h3
            style={{ color: "#be5a0e", fontWeight: 700, marginBottom: "60px" }}
          >
            Forms
          </h3>
          <h3
            style={{ color: "#be5a0e", fontWeight: 700, marginBottom: "60px" }}
          >
            Construction Forms
          </h3>
          <table className="construction-table">
            <tbody>
              <tr>
                <td>Contractor Fact & Information Sheet</td>
              </tr>
              <tr>
                <td>Initial Access Request Form</td>{" "}
              </tr>
            </tbody>
          </table>
          <h3
            style={{ color: "#be5a0e", fontWeight: 700, marginBottom: "60px" }}
          >
            Security Access Request Forms
          </h3>{" "}
          <table className="construction-table">
            <tbody>
              <tr>
                <td> Access Change Request Form</td>
              </tr>
              <tr>
                <td>Hangar Access Request Form</td>
              </tr>
            </tbody>
          </table>
          <h3
            style={{ color: "#be5a0e", fontWeight: 700, marginBottom: "60px" }}
          >
            Authorized Signatory Forms
          </h3>
          <table className="construction-table">
            <tbody>
              <tr>
                <td>New Service Provider Request Form</td>
              </tr>
              <tr>
                <td>Authorized Signatory Designation Form</td>
              </tr>
              <tr>
                <td>Badging Application Form</td>
              </tr>
            </tbody>
          </table>
          <h3
            style={{ color: "#be5a0e", fontWeight: 700, marginBottom: "60px" }}
          >
            Charter, Deicing & Overweight Waiver Forms
          </h3>
          <table className="construction-table">
            <tbody>
              <tr>
                <td>Charter Notification Form</td>
              </tr>
              <tr>
                <td>eicing Form Log</td>
              </tr>
              <tr>
                <td>Overweight Aircraft Operation Waiver</td>
              </tr>
            </tbody>
          </table>
          <h3
            style={{ color: "#be5a0e", fontWeight: 700, marginBottom: "60px" }}
          >
            Video Request Form
          </h3>
          <table className="construction-table">
            <tbody>
              <tr>
                <td>Video Request Form</td>
              </tr>
            </tbody>
          </table>
          <p>
            Can't find what you're looking for? Please contact us at (515)
            256-5000.
          </p>{" "}
        </div>
      </div>{" "}
      <div className="permits-links-container">
        <div className="permits-links">
          <div
            className="permits-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="permits-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="permits-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="permits-item"
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
