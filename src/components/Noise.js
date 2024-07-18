import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Noise.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Noise = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/operations";

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
        <h1>Aircraft Noise Program</h1>
        <div className="noise-header">
          <p>
            The Des Moines International Airport strives to be a good neighbor.
            If you have a comment or concern about aircraft noise, please follow
            the steps below.
          </p>
          <h2>Submit Your Feedback</h2>
          <h3>Step 1:</h3>
          <p>
            Determine how far you are from DSM using the{" "}
            <a
              href="https://aviationsafety.maps.arcgis.com/apps/webappviewer/index.html?id=7a73b093aec04738b1242df960f17b7d"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAA ArcGIS Mapping Tool
            </a>
            .
          </p>
          <h3>Step 2:</h3>
          <p>
            If your location is farther than 5 miles from the DSM Airport, use
            the{" "}
            <a
              href="https://ancir.faa.gov/ancir?id=ancir_sc_cat_item&sys_id=6149ade187a1f550b0d987b9cebb357e"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAA Noise Portal
            </a>{" "}
            to file your comment. If you are within 5 miles of the DSM Airport,
            proceed to Step 3.
          </p>
          <h3>Step 3:</h3>
          <p>
            If your location is within 5 miles of the DSM Airport, use the{" "}
            <a
              href="https://portal.aerosimple.com/noise_log/us/KDSM"
              target="_blank"
              rel="noopener noreferrer"
            >
              DSM Aircraft Noise Form
            </a>{" "}
            to file your comment.
          </p>
          <p>
            For more information on how the FAA Central Region handles noise
            comments and inquiries, please refer to the{" "}
            <a
              href="https://www.faa.gov/about/office_org/headquarters_offices/ara/central_region/noise_complaint"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAA Central Region Aircraft Noise and Community Involvement
              Information website
            </a>
            .
          </p>
          <h3 style={{ color: "black" }}>Notice to Pilots</h3>
          <p>
            Informal noise abatement procedures are in effect. Expect ATC to
            assign the preferred runway.
          </p>
        </div>
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

export default Noise;
