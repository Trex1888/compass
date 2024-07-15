import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/BadgeFaqs.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const BadgeFaqs = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const [openSections, setOpenSections] = useState([]);
  const location = useLocation();
  const isMainPage = location.pathname === "/your-main-badge-faqs-path"; // Replace with the actual path

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
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const faqs = [
    "My badge is damaged and has stopped working, what should I do?",
    "What should I do if my badge is lost or stolen?",
    "My badge expires soon. How do I renew my badge?",
    "I have an active badge but forgot it at home. Can I be escorted inside the restricted area so that I do not miss work?",
    "How will I know when I have passed my security clearance?",
    "How do I get access added to my badge for an area it does not currently allow me to go?",
    "How do I get Escort or Non-Movement privileges added to my badge?",
    "Where should I park when I come to the airport for badging appointments?",
  ];

  return (
    <div>
      <div className="about-header">
        <h1>Badging Frequently Asked Questions</h1>
        <div className="faq-links">
          {faqs.map((faq, index) => (
            <div key={index} className="section">
              <button
                className={openSections.includes(faq) ? "active" : ""}
                onClick={() => toggleSection(faq)}
              >
                {faq}
                <span className="plus-sign">
                  {openSections.includes(faq) ? "-" : "+"}
                </span>
              </button>
              <div
                className={`section-content ${
                  openSections.includes(faq) ? "open" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMainPage && (
        <div className="badge-faq-links-container">
          <div className="badge-faq-links">
            <div
              className="badge-item"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Status</p>
            </div>
            <div
              className="badge-item"
              onClick={() => handleButtonClick("Departures")}
            >
              <GiAirplaneDeparture className="icon" />
              <p>Departures</p>
            </div>
            <div
              className="badge-item"
              onClick={() => handleButtonClick("Arrivals")}
            >
              <GiAirplaneArrival className="icon" />
              <p>Arrivals</p>
            </div>
            <div
              className="badge-item"
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

export default BadgeFaqs;
