import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import "./App.css";
import LiftDSM from "./components/LiftDSM";
import About from "./components/About";
import Shuttle from "./components/Shuttle";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Home from "./components/Home";
import FlightsAndTravel from "./components/FlightsAndTravel";
import TravelerInfo from "./components/TravelerInfo";
import AtTheAirport from "./components/AtTheAirport";
import AirportBusiness from "./components/AirportBusiness";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionLinks from "./components/SectionLinks";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { CiParking1 } from "react-icons/ci";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const openPopup = () => {
    if (!isPopupVisible) {
      setPopupVisible(true);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      openPopup();
    }
  };

  return (
    <Router>
      <AppContent
        isPopupVisible={isPopupVisible}
        togglePopup={togglePopup}
        scrollToSection={scrollToSection}
        openPopup={openPopup}
      />
    </Router>
  );
};

const AppContent = ({
  isPopupVisible,
  togglePopup,
  scrollToSection,
  openPopup,
}) => {
  const location = useLocation();

  const getLocationBackgroundImage = (location) => {
    switch (location.pathname) {
      case "/about-us":
        return "../images/about-us.jpg";
      case "/about-us/careers":
        return "../images/careers.jpg";
      case "/contact":
        return "../images/contact.jpg";
      case "/flights-and-travel":
        return "../images/flights-and-travel.jpg";
      case "/traveler-info":
        return "../images/traveler-info.jpg";
      case "/at-the-airport":
        return "../images/at-the-airport.jpg";
      case "/airport-business":
        return "../images/airport-business.jpg";
      case "/lift-dsm":
        return "../images/lift-dsm.jpg";
      default:
        return "../images/default.jpg";
    }
  };

  return (
    <div className={isPopupVisible ? "popup-visible" : ""}>
      <Header backgroundImage={getLocationBackgroundImage(location)} />
      <div className="app-container">
        <div className="popup">
          <div className="popup-content">
            <div id="Flight-Status">
              <h3>Flight Status</h3>
              <select>
                <option value="">Filter by Airline</option>
                <option value="airline1">Allegiant Air</option>
                <option value="airline2">American Airlines</option>
                <option value="airline1">Delta Air Lines</option>
                <option value="airline2">United Airlines</option>
                <option value="airline2">Southwest Airlines</option>
              </select>
              <select>
                <option value="">Filter by City</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
                <option value="phoenix">Phoenix</option>
                <option value="philadelphia">Philadelphia</option>
                <option value="san-antonio">San Antonio</option>
                <option value="san-diego">San Diego</option>
                <option value="dallas">Dallas</option>
                <option value="san-jose">San Jose</option>
                <option value="austin">Austin</option>
                <option value="jacksonville">Jacksonville</option>
                <option value="san-francisco">San Francisco</option>
                <option value="columbus">Columbus</option>
                <option value="charlotte">Charlotte</option>
              </select>

              <div className="filter-container">
                <input type="text" placeholder="Search Flight #" />
                <button>Filter</button>
              </div>
            </div>
            <div className="popup-section" id="Departures">
              <h3>Departures</h3>
              <p>
                <span className="dot green-dot"></span>
                <span>Flight #</span>
                <span>To</span>
                <span>Updated Time</span>
                <span>Gate</span>
              </p>
              <p>
                <span className="dot green-dot"></span>
                <span>AA2326</span>
                <span>(DFW)</span>
                <span className="time">5:00 AM</span>
                <span>C6</span>
              </p>
              <p>
                <span className="dot red-dot"></span>
                <span>AA1795</span>
                <span>(PHX)</span>
                <span className="time">5:40 AM</span>
                <span>C4</span>
              </p>
              <p>
                <span className="dot red-dot"></span>
                <span>AA3418</span>
                <span>(ORD)</span>
                <span className="time">5:54 AM</span>
                <span>C4</span>
              </p>
              <p>
                <span className="dot green-dot"></span>
                <span>WN2762</span>
                <span>(STL)</span>
                <span className="time">5:55 AM</span>
                <span>C6</span>
              </p>
              <p>
                <span className="dot green-dot"></span>
                <span>DL488</span>
                <span>(ATL)</span>
                <span className="time">5:56 AM</span>
                <span>C3</span>
              </p>
              <a href="traveler-info" className="view-all">
                View All Departures
              </a>
            </div>
            <div className="popup-section" id="Arrivals">
              <h3>Arrivals</h3>
              <p>
                <span className="dot green-dot"></span>
                <span>Flight #</span>
                <span>From</span>
                <span>Updated Time</span>
                <span>Gate</span>
              </p>
              <p>
                <span className="dot red-dot"></span>
                <span>AA1536</span>
                <span>(DFW)</span>
                <span className="time">8:54 AM</span>
                <span>C7</span>
              </p>
              <p>
                <span className="dot green-dot"></span>
                <span>AA6172</span>
                <span>(ORD)</span>
                <span className="time">9:29 AM</span>
                <span>C5</span>
              </p>
              <p>
                <span className="dot green-dot"></span>
                <span>DL1704</span>
                <span>(ATL)</span>
                <span className="time">10:10 AM</span>
                <span>C3</span>
              </p>
              <a href="traveler-info" className="view-all">
                View All Arrivals
              </a>
            </div>
            <div className="popup-section" id="Parking">
              <h3>Parking</h3>
              <p>
                <span>Parking Lot</span> <span>%Full</span> <span>Open</span>
              </p>
              <p>
                <span className="dot green-dot"></span>{" "}
                <span>Garage Hourly</span> <span>19%</span> <span>278</span>
              </p>
              <p>
                <span className="dot orange-dot"></span>{" "}
                <span>Garage Daily (Long Term)</span> <span>59%</span>{" "}
                <span>567</span>
              </p>
              <p>
                <span className="dot blue-dot"></span>{" "}
                <span>Blue Economy Lot</span> <span>86%</span> <span>85</span>
              </p>
              <p>
                <span className="dot red-dot"></span>{" "}
                <span>Red Economy Lot</span> <span>40%</span> <span>449</span>
              </p>
              <p>
                <span className="dot grey-dot"></span>{" "}
                <span>Grey Economy Lot</span> <span>50%</span> <span>869</span>
              </p>
              <a href="traveler-info" className="view-all">
                View Parking & Shuttle Tracker
              </a>
            </div>
          </div>
        </div>
        <div className="vertical-icons-container">
          <div className="vertical-icons">
            <Link onClick={() => scrollToSection("Flight-Status")}>
              <AiOutlineFolderOpen />
            </Link>
            <Link onClick={() => scrollToSection("Departures")}>
              <GiAirplaneDeparture />
            </Link>
            <button onClick={togglePopup} className="popup-toggle-button">
              {isPopupVisible ? ">" : "<"}
            </button>
            <Link onClick={() => scrollToSection("Arrivals")}>
              <GiAirplaneArrival />
            </Link>
            <Link onClick={() => scrollToSection("Parking")}>
              <CiParking1 />
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home scrollToSection={scrollToSection} openPopup={openPopup} />
          }
        />
        <Route path="/at-the-airport/shuttle-tracking" element={<Shuttle />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about-us/careers" element={<Careers />} />
        <Route
          path="/contact"
          element={
            <Contact scrollToSection={scrollToSection} openPopup={openPopup} />
          }
        />
        <Route path="/flights-and-travel" element={<FlightsAndTravel />} />
        <Route path="/traveler-info" element={<TravelerInfo />} />
        <Route path="/at-the-airport" element={<AtTheAirport />} />
        <Route path="/airport-business" element={<AirportBusiness />} />
        <Route path="/lift-dsm" element={<LiftDSM />} />
      </Routes>
      <SectionLinks />
      <Footer />
    </div>
  );
};

export default App;
