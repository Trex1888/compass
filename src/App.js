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
import Popup from "./components/Popup";
import Leadership from "./components/Leadership";
import News from "./components/News";
import Staff from "./components/Staff";
import Agenda from "./components/Agenda";

import parkImage from "./images/park.jpg";
import airportImage from "./images/airport.jpg";
import travlerImage from "./images/luggage.jpg";
import airportBusinessImage from "./images/airport1.jpg";
import liftDsmImage from "./images/dsm3.jpg";
import people from "./images/2people.jpg";

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
        return { backgroundImage: `url(${parkImage})` };

      case "/flights-and-travel":
        return { backgroundImage: `url(${airportImage})` };

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

      case "/":
        return { backgroundColor: "transparent" };

      default:
        return { backgroundColor: "gray" };
    }
  };

  const backgroundStyle = getLocationBackground(location);

  return (
    <div className={isPopupVisible ? "popup-visible" : ""}>
      <Header />
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
            path="/at-the-airport/shuttle-tracking"
            element={
              <Shuttle
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
            path="/contact"
            element={
              <Contact
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
          <Route path="/flights-and-travel" element={<FlightsAndTravel />} />
          <Route path="/traveler-info" element={<TravelerInfo />} />
          <Route path="/at-the-airport" element={<AtTheAirport />} />
          <Route path="/airport-business" element={<AirportBusiness />} />
          <Route path="/lift-dsm" element={<LiftDSM />} />
        </Routes>
        <SectionLinks />
        <Footer />
      </div>
      <div></div>
    </div>
  );
};

export default App;
