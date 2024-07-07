import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import LiftDSM from "./components/LiftDSM";
import About from "./components/About";
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
import Popup from "./components/Popup";
import Leadership from "./components/Leadership";
import News from "./components/News";
import Staff from "./components/Staff";
import Agenda from "./components/Agenda";
import AirlineInfo from "./components/AirlineInfo";
import FlightStatus from "./components/FlightStatus";
import NonStop from "./components/NonStop";

import TsaSecurity from "./components/TsaSecurity";
import CheckIn from "./components/CheckIn";
import Lost from "./components/Lost";
import Faqs from "./components/Faqs";
import RealId from "./components/RealId";

import aboutImage from "./images/about.jpg";
import flightsAndTravelImage from "./images/flightsandtravel.jpg";
import travlerImage from "./images/luggage.jpg";
import airportBusinessImage from "./images/airport1.jpg";
import liftDsmImage from "./images/dsm3.jpg";
import people from "./images/peep.jpg";

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

  const getLocationBackground = (location) => {
    switch (location.pathname) {
      case "/about-us":
        return { backgroundImage: `url(${aboutImage})` };

      case "/flights-and-travel":
        return { backgroundImage: `url(${flightsAndTravelImage})` };

      case "/traveler-info":
        return { backgroundImage: `url(${travlerImage})` };

      case "/at-the-airport":
        return { backgroundImage: `url(${airportBusinessImage})` };

      case "/at-the-airport/shuttle-tracking":
        return { backgroundImage: `url(${people})` };

      case "/airport-business":
        return { backgroundImage: `url(${airportBusinessImage})` };

      case "/lift-dsm":
        return { backgroundImage: `url(${liftDsmImage})` };

      case "/contact":
        return { backgroundColor: "#e9e9e9;" };

      case "/careers":
        return { backgroundColor: "#e9e9e9;" };

      case "/":
        return { background: "none" };

      default:
        return { background: "none" };
    }
  };

  const backgroundStyle = getLocationBackground(location);

  return (
    <div className={isPopupVisible ? "popup-visible" : ""}>
      <Header backgroundStyle={backgroundStyle} />
      <div>
        <Popup
          isPopupVisible={isPopupVisible}
          togglePopup={togglePopup}
          scrollToSection={scrollToSection}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="/at-the-airport/*"
            element={
              <AtTheAirport
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/about-us"
            element={
              <About scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="/about-us/careers"
            element={
              <Careers
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/about-us/news"
            element={<News scrollToSection={scrollToSection} />}
          />
          <Route
            path="/about-us/authority-leadership"
            element={
              <Leadership
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/about-us/authority-leadership/board-agendas-minutes"
            element={<Agenda />}
          />
          <Route
            path="/about-us/authority-leadership/staff"
            element={<Staff />}
          />
          <Route
            path="/contact"
            element={
              <Contact
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/flights-and-travel/*"
            element={
              <FlightsAndTravel
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/traveler-info/*"
            element={
              <TravelerInfo
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/traveler-info/tsa-security"
            element={
              <TsaSecurity
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/traveler-info/check-in"
            element={
              <CheckIn
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/traveler-info/lost-and-found"
            element={
              <Lost scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="/traveler-info/faq"
            element={
              <Faqs scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="/traveler-info/real-id"
            element={
              <RealId scrollToSection={scrollToSection} openPopup={openPopup} />
            }
          />
          <Route
            path="/flights-and-travel/airline-information"
            element={
              <AirlineInfo
                scrollToSection={scrollToSection}
                openPopup={openPopup}
              />
            }
          />
          <Route
            path="/flights-and-travel/flight-status"
            element={<FlightStatus />}
          />
          <Route
            path="/flights-and-travel/nonstop-destinations"
            element={<NonStop />}
          />

          <Route path="/airport-business" element={<AirportBusiness />} />
          <Route path="/lift-dsm" element={<LiftDSM />} />
        </Routes>
        <SectionLinks />
        <Footer />
      </div>
    </div>
  );
};

export default App;
