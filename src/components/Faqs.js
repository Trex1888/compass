import { useEffect, useState } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Faqs = ({ scrollToSection, openPopup }) => {
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
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const faqItems = [
    "Is there complimentary Wi-Fi?",
    "How do I find out about employment opportunities at the Airport?",
    "What regulations do I need to know before flying a drone or model aircraft in the Des Moines area?",
    "What are you doing about noise coming from the airport?",
    "Where are the ATMs located?",
    "Is there a currency exchange at the airport?",
    "How do I request wheelchair assistance to get into/around the terminal?",
    "How do I get to the airport and find my way around once I get there?",
    "Is there an outgoing mailbox at the airport?",
    "How early should I arrive at the airport?",
    "What do I do if I lost something while traveling?",
    "What time do the airline ticket counters and TSA security checkpoint open?",
    "Is there a policy for carry-on luggage?",
    "How do I report a safety concern?",
    "Is there a USO at the airport?",
    "Do I need the REAL ID gold star on my driver license to fly?",
    "Do you have lockers for storing items?",
    "Am I able to travel with an expired passport?",
    "Do you provide educational tours of the airport?",
    "Is there a pet relief area?",
    "Are Pets allowed in the Airport?",
  ];

  return (
    <div className="about-header">
      <h1 style={{ marginBottom: "90px" }}>Frequently Asked Questions</h1>
      <div className="button-links">
        {faqItems.map((item, index) => (
          <div key={index} className="section">
            <button
              className={openSections.includes(item) ? "active" : ""}
              onClick={() => toggleSection(item)}
            >
              {item}
              <span className="plus-sign">
                {openSections.includes(item) ? "-" : "+"}
              </span>
            </button>
            <div
              className={`section-content ${
                openSections.includes(item) ? "open" : ""
              }`}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="section-links-container1"
        style={{ marginBottom: "50px" }}
      >
        <div className="section-links1">
          <div
            className="link-item1"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
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
  );
};

export default Faqs;
