import React, { useState } from "react";
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
import TsaPre from "./components/TsaPre";
import LostItem from "./components/LostItem";
import Contractor from "./components/Contractor";
import Procurement from "./components/Procurement";
import Badging from "./components/Badging";
import BadgeApp from "./components/BadgeApp";
import BadgeFaqs from "./components/BadgeFaqs";
import Unmanned from "./components/Unmanned";
import Driver from "./components/Driver";
import Rules from "./components/Rules";
import Noise from "./components/Noise";
import Services from "./components/Services";
import Operations from "./components/Operations";
import Permits from "./components/Permits";
import Tenants from "./components/Tenant";
import Agenda1 from "./components/Agenda1";
import Minutes from "./components/Minutes";
import RideShare from "./components/RideShare";
import Shuttle from "./components/Shuttle";
import Accessibility from "./components/Accessibility";
import ShuttleCar from "./components/ShuttleCars";
import Buses from "./components/Buses";
import Parking from "./components/Parking";
import Ground from "./components/Ground";
import Maps from "./components/Maps";
import Dining from "./components/Dining";
import General from "./components/General";
import Human from "./components/Human";
import Title9 from "./components/Title9";
import TrafficStats from "./components/TrafficStats";
import Rentals from "./components/Rentals";
import AirService from "./components/AirService";
import Top from "./components/Top";

import aboutImage from "./images/about.jpg";
import flightsAndTravelImage from "./images/flightsandtravel.jpg";
import travlerImage from "./images/travelerInfo.jpg";
import airportBusinessImage from "./images/airport1.jpg";
// import liftDsmImage from "./images/dsm3.jpg";
import people from "./images/peep.jpg";
import dsm from "./images/dsm1.jpg";
import homeImage from "./images/home.jpg";
import flyDsm from "./images/liftmain.jpg";

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
      case "/flights-and-travel/airline-information":
      case "/flights-and-travel/nonstop-destinations":
        return { backgroundImage: `url(${flightsAndTravelImage})` };

      case "/flights-and-travel/flight-status":
        return { backgroundImage: `url(${dsm})` };

      case "/traveler-info":
      case "/traveler-info/tsa-security":
      case "/traveler-info/tsa-security/precheck-global-entry":
      case "/traveler-info/check-in":
      case "/traveler-info/lost-and-found":
      case "/traveler-info/faq":
      case "/traveler-info/real-id":
        return { backgroundImage: `url(${travlerImage})` };

      case "/at-the-airport":
        return { backgroundImage: `url(${airportBusinessImage})` };

      case "/at-the-airport/shuttle-tracking":
        return { backgroundImage: `url(${people})` };

      case "/airport-business":
      case "/airport-business/contractor-resources":
      case "/airport-business/badging":
      case "/airport-business/operations":
      case "/airport-business/permits-forms":
      case "/airport-business/tenant-resources":
        return { backgroundImage: `url(${airportBusinessImage})` };

      case "/lift-dsm":
        return { backgroundImage: `url(${flyDsm})` };

      case "/contact":
      case "/about-us/careers":
        return { backgroundColor: "#e9e9e9" };

      case "/":
        return { backgroundImage: `url(${homeImage})` };

      default:
        return { backgroundColor: "#e9e9e9" };
    }
  };

  const backgroundStyle = getLocationBackground(location);

  const isTrafficStatistics = location.pathname.includes(
    "about-us/news/june-2024-airport-traffic-statistics"
  );

  return (
    <div className={isPopupVisible ? "popup-visible" : ""}>
      <Header isTrafficStatistics={isTrafficStatistics} />
      <Top backgroundStyle={backgroundStyle} />
      <div className="main-container">
        <div className="content">
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
            >
              <Route path="parking" element={<Parking />} />
              <Route path="shuttle-tracking" element={<Shuttle />} />
              <Route path="ground-transportation" element={<Ground />}>
                <Route path="buses-paratransit" element={<Buses />} />
                <Route path="ride-share-taxis" element={<RideShare />} />
                <Route path="rental-cars" element={<Rentals />} />
                <Route path="hotel-shuttles" element={<ShuttleCar />} />
              </Route>
              <Route path="maps-directions" element={<Maps />} />
              <Route path="dining" element={<Dining />} />
              <Route path="services-amenities" element={<Services />} />
              <Route path="accessibility" element={<Accessibility />} />
              <Route path="general-aviation" element={<General />} />
              <Route path="stop-human-trafficking" element={<Human />} />
              <Route
                path="title-vi-airport-nondiscrimination-program"
                element={<Title9 />}
              />
            </Route>
            <Route
              path="/about-us"
              element={
                <About
                  scrollToSection={scrollToSection}
                  openPopup={openPopup}
                />
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
              path="/about-us/authority-leadership/board-agendas-minutes/agenda/:title"
              element={<Agenda1 />}
            />
            <Route
              path="/about-us/authority-leadership/board-agendas-minutes/minutes/:title"
              element={<Minutes />}
            />
            <Route
              path="/about-us/authority-leadership/staff"
              element={<Staff />}
            />
            <Route path="/about-us/news/:title" element={<TrafficStats />} />

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
            >
              <Route
                path="tsa-security"
                element={
                  <TsaSecurity
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="tsa-security/precheck-global-entry"
                element={
                  <TsaPre
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="check-in"
                element={
                  <CheckIn
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="lost-and-found"
                element={
                  <Lost
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="lost-and-found/lost-item-report"
                element={
                  <LostItem
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="faq"
                element={
                  <Faqs
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="real-id"
                element={
                  <RealId
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
            </Route>
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

            <Route
              path="/airport-business/*"
              element={
                <AirportBusiness
                  scrollToSection={scrollToSection}
                  openPopup={openPopup}
                />
              }
            >
              <Route
                path="contractor-resources"
                element={
                  <Contractor
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="bid-procurement-rfps"
                element={
                  <Procurement
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="badging"
                element={
                  <Badging
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              >
                <Route
                  path="badge-applications-renewal"
                  element={
                    <BadgeApp
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
                <Route
                  path="badge-faqs"
                  element={
                    <BadgeFaqs
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
              </Route>
              <Route
                path="operations"
                element={
                  <Operations
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              >
                <Route
                  path="unmanned-aerial-systems"
                  element={
                    <Unmanned
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
                <Route
                  path="airport-driver-training"
                  element={
                    <Driver
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
                <Route
                  path="rules-regulations"
                  element={
                    <Rules
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
                <Route
                  path="aircraft-noise-program"
                  element={
                    <Noise
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
              </Route>
              <Route
                path="permits-forms"
                element={
                  <Permits
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="tenant-resources"
                element={
                  <Tenants
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              >
                <Route
                  path="air-service-development"
                  element={
                    <AirService
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
              </Route>
            </Route>
            <Route path="/lift-dsm" element={<LiftDSM />} />
          </Routes>
        </div>
      </div>
      <SectionLinks />
      <Footer />
    </div>
  );
};

export default App;
