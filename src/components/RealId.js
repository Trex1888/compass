import { useEffect, useState } from "react";
import "../styles/RealId.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const RealId = ({ scrollToSection, openPopup }) => {
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
      <h1>REAL ID - Department of Homeland Security</h1>
      <p>
        As of <strong>May 7, 2025</strong>, commercial flyers will need a REAL
        ID license or identification card or another acceptable identity
        document like a passport, or you're going to be subject to additional
        screening and potential delays. This means that all travelers will need
        to have the REAL ID designation (gold star) on their driver's license or
        identification card or travel with a passport as of May 7, 2025.
      </p>
      <p>To help you obtain your REAL ID, there are helpful links below.</p>
      <ul>
        <li>
          Iowa Department of Transportation -{" "}
          <a
            href="https://iowadot.gov/mvd/realid"
            target="_blank"
            rel="noopener noreferrer"
          >
            REAL ID website
          </a>
        </li>
        <li>
          What documents do I need?{" "}
          <a
            href="https://iowadot.gov/mvd/realid/success.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Checklist here.
          </a>
        </li>
        <li>
          Learn about the REAL ID Act{" "}
          <a
            href="https://www.dhs.gov/real-id/about-real-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </li>
      </ul>

      <h2>Iowa Mobile ID</h2>
      <p>
        Iowans with TSA PreCheck can now present their Iowa Mobile ID as
        identification at select airports across the country including DSM. To
        download the app, search "Iowa Mobile ID" on the App Store or Google
        Play.
      </p>
      <p>
        *Travelers should ensure they bring their physical ID in the event it is
        needed at the DSM security checkpoint or at other airports on the travel
        itinerary.
      </p>

      <h2>Acceptable Forms of Identification</h2>
      <p>
        All forms of identification accepted by the TSA can be found{" "}
        <a
          href="https://www.tsa.gov/travel/security-screening/identification"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      </p>
      <p>Common forms of identification are:</p>
      <ul>
        <li>State issued identification card like a Driver's license</li>
        <li>U.S. passport or Foreign government-issued passport</li>
        <li>DHS trusted traveler card (i.e. Global Entry)</li>
      </ul>
      <div>
        {" "}
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

export default RealId;
