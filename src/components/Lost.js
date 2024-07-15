import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Lost.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Lost = ({ scrollToSection, openPopup }) => {
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
      <div className="lost-bold">
        <h1>Lost & Found</h1>
        <ul>
          <li>
            For items lost on an aircraft, please contact your{" "}
            <strong>
              {" "}
              <Link to="/flights-and-travel/airline-information">airline</Link>.
            </strong>
          </li>
          <li>
            For items lost in a rental car, please contact the{" "}
            <strong>
              {" "}
              <Link to="/at-the-airport/ground-transportation/car-rentals">
                rental car company
              </Link>
              .
            </strong>
          </li>
          <li>
            If your item was lost at the Airport or TSA Checkpoint, please
            complete a{" "}
            <Link to="/traveler-info/lost-and-found/lost-item-report">
              Lost Item Report
            </Link>{" "}
            and you will be notified by the Des Moines Airport Authority if the
            item is found.
          </li>
        </ul>
      </div>
      <div className="lost-div">
        <h2>Des Moines Airport Authority Rules for Found Items:</h2>
        <ul style={{ marginLeft: "-20px" }}>
          <li>
            The following items will be disposed of immediately: food and
            beverage items; all items related to vaping and smoking; and items
            deemed to be unsanitary.
          </li>
          <li>
            Items which are deemed to have been clearly abandoned will be
            considered as such and disposed of by Des Moines Airport Authority
            personnel immediately.
          </li>
          <li>
            Any items which could be designated as weapons or drugs will be
            turned over to the Des Moines Police Department.
          </li>
          <li>
            Items that have been turned in to the Des Moines Airport Authority
            (other than those stated above) will be kept for 60 days from when
            they are found.
          </li>
          <li>
            The Des Moines Airport Authority is not responsible for any damages
            to the item or shipping charges incurred in sending the item to the
            rightful owner.
          </li>
        </ul>
      </div>
      <div></div>{" "}
      <div className="section-links-container1">
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

export default Lost;
