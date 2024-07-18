import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Maps.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Maps = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const navigate = useNavigate();

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

  const handleRoute = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about-header">
      <div className="maps-header">
        <h1>Airport Maps</h1>

        <h2>Directions to DSM</h2>
        <p>
          For directions to or from the Des Moines International Airport,{" "}
          <a
            href="https://www.google.com/maps/place/Terminal,+5800+Fleur+Dr,+Des+Moines,+IA+50321/@41.531953,-93.645133,17z/data=!4m5!3m4!1s0x87eea211d0f900d5:0xf6b087e672e137c5!8m2!3d41.5329208!4d-93.6490807?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>{" "}
          is a great tool to configure directions.
        </p>
        <p>
          Watch this quick video on{" "}
          <a
            href="https://www.youtube.com/watch?v=27DjreeXWu8&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            directions to the Grey Lot
          </a>{" "}
          when heading south on Fleur Drive. The Grey Lot is a $7 per day
          economy parking lot. Free shuttles run in a 10-minute loop to all of
          the open parking lots daily. Download the parking map{" "}
          <a
            href="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Terminal%20Parking%20Map.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>

        <h2>Shuttle Maps</h2>
        <p>
          Shuttle maps and live route links can be found{" "}
          <a
            href="/at-the-airport/shuttle-tracking"
            onClick={(e) => {
              e.preventDefault();
              handleRoute("/at-the-airport/shuttle-tracking");
            }}
          >
            here
          </a>
          .
        </p>

        <h2>Parking Map</h2>
        <p>
          Travelers opting to park in the Blue or Grey Lot can access these lots
          via Leland Avenue just south of the Airport main entrance avoiding
          traffic in front of the terminal. Airport signage is posted at the T
          Intersection directing travelers to turn right for access to the Blue
          Lot and to turn left to access the Grey Lot.
        </p>

        <div className="image-container">
          <img
            src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Terminal%20Parking%20Map.png"
            alt="Parking Map"
            className="parking-map-image"
          />
        </div>
      </div>
      <div className="maps-links-container">
        <div className="maps-links">
          <div
            className="maps-item"
            onClick={() => handleButtonClick("Flight-Status")}
          >
            <AiOutlineFolderOpen className="icon" />
            <p>Status</p>
          </div>
          <div
            className="maps-item"
            onClick={() => handleButtonClick("Departures")}
          >
            <GiAirplaneDeparture className="icon" />
            <p>Departures</p>
          </div>
          <div
            className="maps-item"
            onClick={() => handleButtonClick("Arrivals")}
          >
            <GiAirplaneArrival className="icon" />
            <p>Arrivals</p>
          </div>
          <div
            className="maps-item"
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

export default Maps;
