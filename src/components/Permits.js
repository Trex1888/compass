import { useEffect, useState } from "react";
import "../styles/Permits.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Permits = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const [openSections, setOpenSections] = useState([]);

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
    if (openSections.includes(section)) {
      setOpenSections(
        openSections.filter((openSection) => openSection !== section)
      );
    } else {
      setOpenSections([...openSections, section]);
    }
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
            style={{
              color: "#be5a0e",
              fontWeight: 700,
              marginBottom: "25px",
              marginTop: "60px",
            }}
          >
            Online Permit Applications
          </h3>
          <div className="button-links">
            <div className="section">
              <button
                className={
                  openSections.includes("Vehicle Security Hangtag")
                    ? "active"
                    : ""
                }
                onClick={() => toggleSection("Vehicle Security Hangtag")}
              >
                Vehicle Security Hangtag
                <span className="plus-sign">
                  {openSections.includes("Vehicle Security Hangtag")
                    ? "-"
                    : "+"}
                </span>
              </button>
              <div
                style={{ border: "none" }}
                className={`section-content ${
                  openSections.includes("Vehicle Security Hangtag")
                    ? "open"
                    : ""
                }`}
              >
                <div className="plus-content">
                  <p style={{ marginBottom: "30px" }}>
                    <strong>
                      Only vehicles authorized by Des Moines Airport Authority
                      may operate inside the airport perimeter fence. Street
                      licensed vehicles must display a valid airside vehicle
                      permit.
                    </strong>{" "}
                  </p>{" "}
                  <a href="https://flydsm.formstack.com/workflows/vehicle_security_hangtag">
                    Vehicle Permit Request Form
                  </a>
                  <ul>
                    <li style={{ marginTop: "30px" }}>
                      To apply for an airside vehicle permit, please complete
                      the Vehicle Permit Request form. The Airport Badging
                      Office will contact you when your permits are available
                      for pick up.
                    </li>
                    <li>
                      Airside vehicle permits will only be issued to active
                      badge holders that have been assigned Non-Movement Area or
                      Movement Area driving privileges.
                    </li>
                    <li style={{ marginBottom: "30px" }}>
                      A current certificate of liability insurance showing 1
                      million dollars of coverage must be on file. You may
                      submit your current insurance with the vehicle permit
                      request form or by using the link below.
                    </li>
                  </ul>
                  <a
                    style={{ marginTop: "15px", marginBottom: "25px" }}
                    href="https://flydsm.formstack.com/forms/insurance_upload"
                  >
                    Insurance Document Upload
                  </a>
                  <ul>
                    <li style={{ marginTop: "30px" }}>
                      Use the Insurance Document Upload link to upload your
                      current certificate of liability insurance.
                    </li>
                  </ul>
                  <p style={{ textDecoration: "underline" }}>
                    <strong>Vehicle Requirements:</strong>
                  </p>
                  <ul>
                    <li>Must be in sound mechanical condition.</li>
                    <li>
                      Must be identified on both sides with the company name or
                      logo.
                    </li>
                    <li>
                      All vehicles and equipment must be equipped with two
                      headlights and one or more red tail lights.
                    </li>
                    <li>
                      Any vehicle operating on an open runway or taxiway must
                      also be equipped with an amber rotating beacon visible
                      from 360 degrees.
                    </li>
                    <li>
                      See{" "}
                      <strong style={{ cursor: "pointer" }}>
                        {" "}
                        DMAA Rules and Regulations
                      </strong>{" "}
                      Chapter 5 for a full list of vehicle requirements.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="section">
              <button
                className={
                  openSections.includes("Commercial Vehicle Permit")
                    ? "active"
                    : ""
                }
                onClick={() => toggleSection("Commercial Vehicle Permit")}
              >
                Commercial Vehicle Permit
                <span className="plus-sign">
                  {openSections.includes("Commercial Vehicle Permit")
                    ? "-"
                    : "+"}
                </span>
              </button>
              <div
                style={{ border: "none" }}
                className={`section-content ${
                  openSections.includes("Commercial Vehicle Permit")
                    ? "open"
                    : ""
                }`}
              >
                {" "}
                <div className="plus-content">
                  <p>
                    The Des Moines Airport Authority Board has authorized the
                    collection of fees from commercial vehicle operators who
                    pick up passengers at the Des Moines International Airport.
                    The Board subsequently adopted rules and regulations that
                    apply to commercial operations at the airport. The following
                    documents are provided to apply for and obtain a commercial
                    vehicle operator tag.
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      marginBottom: "25px",
                      marginLeft: "-20px",
                    }}
                  >
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ cursor: "pointer" }}>
                        Permit Application Form (PER-PUB-00-900)
                      </strong>
                    </li>
                    <li>
                      <strong style={{ cursor: "pointer" }}>
                        Commercial Vehicle Operator Permit (PER-PUB-00-905)
                      </strong>
                    </li>
                  </ul>
                  <p>
                    Instructions on how to mount the AVI tag can be found{" "}
                    <strong style={{ cursor: "pointer" }}>here</strong>.
                  </p>
                  <p>
                    Follow the{" "}
                    <strong style={{ cursor: "pointer" }}>
                      commercial vehicle diagram
                    </strong>{" "}
                    to know how to navigate the terminal entrance.
                  </p>
                </div>
              </div>
            </div>

            <div className="section">
              <button
                className={
                  openSections.includes("Dig Permit Application Process")
                    ? "active"
                    : ""
                }
                onClick={() => toggleSection("Dig Permit Application Process")}
              >
                Dig Permit Application Process
                <span className="plus-sign">
                  {openSections.includes("Dig Permit Application Process")
                    ? "-"
                    : "+"}
                </span>
              </button>
              <div
                style={{ border: "none" }}
                className={`section-content ${
                  openSections.includes("Dig Permit Application Process")
                    ? "open"
                    : ""
                }`}
              >
                {" "}
                <div className="plus-content">
                  <p>
                    Dig permit applications submitted without completing steps 1
                    and 2 below will be denied.
                  </p>
                  <ul style={{ listStyle: "none", marginLeft: "-20px" }}>
                    <li>
                      <strong> Step 1 </strong> – Schedule a joint meeting by
                      clicking ‘Joint Meeting Scheduler’ (remember the data/time
                      selected)
                    </li>
                    <li>
                      <strong> Step 2 </strong> – Initiate an Iowa One Call by
                      calling 1-800-292-8989 (remember your ticket number and
                      ticket date)
                    </li>
                    <li>
                      <strong> Step 3 </strong>– Complete a dig permit
                      application by clicking ‘Online Dig Permit Application’
                      and complete the application fields including the
                      information from steps 1 and 2 above
                    </li>
                  </ul>
                  <p style={{ marginBottom: "75px" }}>
                    Upon completion of the joint meet and review by airport
                    staff you will receive an automated approval or denial
                    e-mail within approximately 48 hours of the joint meet date.
                    Approved permits are valid for 7-days from time of issuance.
                    No work may be started prior to receiving an approved
                    permit.
                  </p>
                  <div className="document-buttons-container">
                    <a
                      style={{ color: "white" }}
                      href="https://outlook.office365.com/book/DigPermitScheduling@dsmairport.com/"
                      className="document-button1"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Joint Meeting Scheduler
                    </a>
                    <a
                      href="https://flydsm.formstack.com/forms/digpermit"
                      className="document-button1"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Online Dig Permit Application
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ marginTop: "35px", marginBottom: "20px" }}>
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
            style={{
              fontSize: "21px",
              color: "#be5a0e",
              fontWeight: 700,
              marginBottom: "5px",
            }}
          >
            Hard Copy Permit Applications
          </h3>
          <table className="hard-table">
            <tbody>
              <tr>
                <td>
                  <strong>Hot Work Permit</strong> - PER-PUB-00-909 - To
                  complete any hot work at the Airport, download and fill out
                  the Hot Work Permit application form. Upon completion, send to
                  <strong> DSM Electrician</strong> or drop off the form to
                  Airport Administration.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Commercial Operating (SASO) Permit</strong> -
                  PER-PUB-00-902 - For conducting commercial operations in
                  compliance with the Airport Minimum Standards.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Commercial Facility Use Permit</strong> -
                  PER-PUB-00-903 - For using airport facilities for commercial
                  use such as movie production, photography, etc.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Flying Club Permit</strong> - PER-PUB-00-904 - For
                  operating a flying club.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Commercial Vehicle Operator Permit</strong> -
                  PER-PUB-00-905 - Commercial vehicles (limo, shuttle, etc.)
                  must have a Commercial Vehicle Operator Permit to conduct
                  business at the Airport. Use the online form above if
                  possible.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Aircraft De-Icing Permit</strong> - PER-PUB-00-906 -
                  Tenants conducting de-icing operations outside of designated
                  de-icing areas, must have an Aircraft De-Icing Permit.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Fuel Truck-Cart Equipment Permit</strong> -
                  PER-PUB-00-912 - To place fueling trucks or equipment into
                  service at the airport, a Fuel Truck-Cart Equipment Permit is
                  required.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    Aircraft Fuel Storage Dispensing and Handling Permit
                  </strong>{" "}
                  - PER-PUB-00-907 - Tenants needing to store, dispense, or
                  handle non-commercial fueling operations must have an Aircraft
                  Fuel Storage Dispensing and Handling Permit.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Airport Equipment Use Permit</strong> - PER-PUB-00-911
                  - For tenants to use any airport owned equipment, they must
                  obtain an Airport Equipment Use Permit.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Expressive Activity Permit</strong> - PER-PUB-00-910 -
                  Any person or organization desiring to engage in expressive
                  activity at the Des Moines International Airport must apply in
                  writing to the Executive Director at least two business days
                  prior to the proposed expressive activity. All activity must
                  comply with Airport Rules and Regulations.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tenant Electrical Permit</strong> - PER-PUB-00-913 -
                  To complete any tenant electrical work at the Airport,
                  download and fill out the Tenant Electrical Permit application
                  form. Upon completion, send to{" "}
                  <strong>DSM Electrician</strong> or drop off the form to
                  Airport Administration.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Additional Vehicle Form</strong> - PER-PUB-00-901 -
                  Additional vehicle listing to form PER-PUB-00-900.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Taxicab Services Operating Permit</strong> -
                  PER-PUB-00-908 - Commercial vehicles operating as a taxi must
                  have a Taxicab Services Operating Permit to pick up passengers
                  at the Airport.
                </td>
              </tr>
            </tbody>
          </table>
          <h2
            style={{
              fontWeight: 500,
              marginBottom: "-10px",
              marginTop: "-50px",
            }}
          >
            Forms
          </h2>
          <h3
            style={{
              fontSize: "21px",
              color: "#be5a0e",
              fontWeight: 700,
              marginBottom: "5px",
            }}
          >
            Construction Forms
          </h3>
          <table className="hard-table">
            <tbody>
              <tr>
                <td>
                  <strong>Contractor Fact & Information Sheet</strong> must be
                  completed before any construction projects can begin.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Initial Access Request Form</strong> must be completed
                  before the start of new projects.
                </td>{" "}
              </tr>
            </tbody>
          </table>
          <h3
            style={{
              fontSize: "21px",
              color: "#be5a0e",
              fontWeight: 700,
              marginBottom: "5px",
              marginTop: "-60px",
            }}
          >
            Security Access Request Forms
          </h3>{" "}
          <table className="hard-table">
            <tbody>
              <tr>
                <td>
                  <strong>Access Change Request Form</strong> to request a
                  change to an employee's access level.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Hangar Access Request Form</strong> to request Airport
                  ID badges for individuals of South T Hangars that are not on
                  the lease.
                </td>
              </tr>
            </tbody>
          </table>
          <h3
            style={{
              fontSize: "21px",
              color: "#be5a0e",
              fontWeight: 700,
              marginBottom: "5px",
              marginTop: "-60px",
            }}
          >
            Authorized Signatory Forms
          </h3>
          <table className="hard-table">
            <tbody>
              <tr>
                <td>
                  <strong>New Service Provider Request Form</strong> to set-up a
                  new service provider for badging. Allow 24 hours for
                  processing.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Authorized Signatory Designation Form</strong> to
                  designate a new Authorized Signatory.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Badging Application Form</strong> to be downloaded and
                  completed by the Authorized Signatory to enroll new
                  applicants.
                </td>
              </tr>
            </tbody>
          </table>
          <h3
            style={{
              fontSize: "21px",
              color: "#be5a0e",
              fontWeight: 700,
              marginBottom: "5px",
              marginTop: "-60px",
            }}
          >
            Charter, Deicing & Overweight Waiver Forms
          </h3>
          <table className="hard-table">
            <tbody>
              <tr>
                <td>
                  <strong>Charter Notification Form</strong> to submit charter
                  operations to the Airport Authority and DSM Transportation
                  Security Administration. A confirmation email will be sent to
                  the submitter's email. If you have any questions regarding the
                  status of your submission, please contact Airport Operations
                  at (515) 256-5000.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Deicing Form Log</strong> to submit the deicing
                  activity to the Airport Authority. Questions should be
                  directed to Airport Authority Engineering at (515) 256-5858.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Overweight Aircraft Operation Waiver</strong> to
                  request an overweight aircraft operation permit at DSM. All
                  questions should be directed to the Airport Operations &
                  Security Manager at (515) 256-5000.
                </td>
              </tr>
            </tbody>
          </table>
          <h3
            style={{
              fontSize: "21px",
              color: "#be5a0e",
              fontWeight: 700,
              marginBottom: "5px",
              marginTop: "-60px",
            }}
          >
            Video Request Form
          </h3>
          <table className="hard-table">
            <tbody>
              <tr>
                <td>
                  <strong>Video Request Form</strong> to request video footage
                  from the Des Moines Airport Authority.
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "-15px" }}>
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
