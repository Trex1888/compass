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
import airportBusinessImage from "./images/at-the-airport.jpg";
import newsImage from "./images/news.jpg";
import peopleImage from "./images/peep.jpg";
import dsmImage from "./images/dsm1.jpg";
import homeImage from "./images/home.jpg";
import flyDsmImage from "./images/liftmain.jpg";
import parkingImage from "./images/parking.jpg";
import groundImage from "./images/ground.jpg";
import amenitiesImage from "./images/amenities.jpg";
import tenantImage from "./images/tenant.jpg";

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
    const path = location.pathname;

    const backgroundImages = {
      "/about-us": aboutImage,
      "/flights-and-travel": flightsAndTravelImage,
      "/flights-and-travel/airline-information": flightsAndTravelImage,
      "/flights-and-travel/nonstop-destinations": flightsAndTravelImage,
      "/flights-and-travel/flight-status": dsmImage,
      "/traveler-info": travlerImage,
      "/traveler-info/tsa-security": travlerImage,
      "/traveler-info/tsa-security/precheck-global-entry": travlerImage,
      "/traveler-info/check-in": travlerImage,
      "/traveler-info/lost-and-found": travlerImage,
      "/traveler-info/faq": travlerImage,
      "/traveler-info/real-id": travlerImage,
      "/at-the-airport": airportBusinessImage,
      "/at-the-airport/parking": parkingImage,
      "/at-the-airport/shuttle-tracking": peopleImage,
      "/at-the-airport/ground-transportation": groundImage,
      "/at-the-airport/ground-transportation/ride-share-taxis": groundImage,
      "/at-the-airport/ground-transportation/rental-cars": groundImage,
      "/at-the-airport/ground-transportation/hotel-shuttles": groundImage,
      "/at-the-airport/ground-transportation/buses-paratransit": groundImage,
      "/at-the-airport/maps-directions": groundImage,
      "/at-the-airport/dining": travlerImage,
      "/at-the-airport/services-amenities": amenitiesImage,
      "/at-the-airport/accessibility": amenitiesImage,
      "/at-the-airport/general-aviation": flightsAndTravelImage,
      "/at-the-airport/title-vi-airport-nondiscrimination-program":
        amenitiesImage,
      "/airport-business/tenant-resources/air-service-development": tenantImage,
      "/about-us/news": newsImage,
      "/airport-business": parkingImage,
      "/airport-business/badging": parkingImage,
      "/airport-business/operations": parkingImage,
      "/airport-business/bid-procurement-rfps": parkingImage,
      "/airport-business/contractor-resources": parkingImage,
      "/lift-dsm": flyDsmImage,
      "/": homeImage,
    };

    if (path === "/contact" || path === "/about-us/careers") {
      return { backgroundColor: "#e9e9e9" };
    }

    return { backgroundImage: `url(${backgroundImages[path] || homeImage})` };
  };

  const backgroundStyle = getLocationBackground(location);

  const isTrafficStatistics = location.pathname.includes(
    "about-us/news/june-2024-airport-traffic-statistics"
  );

  const RouteWrapper = ({ children, scrollToSection, openPopup }) => {
    return React.cloneElement(children, { scrollToSection, openPopup });
  };

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
              <Route
                path="shuttle-tracking"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <Shuttle />
                  </RouteWrapper>
                }
              />
              <Route
                path="ground-transportation"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <Ground />
                  </RouteWrapper>
                }
              >
                <Route
                  path="buses-paratransit"
                  element={
                    <RouteWrapper
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    >
                      <Buses />
                    </RouteWrapper>
                  }
                />
                <Route
                  path="ride-share-taxis"
                  element={
                    <RouteWrapper
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    >
                      <RideShare />
                    </RouteWrapper>
                  }
                />
                <Route
                  path="rental-cars"
                  element={
                    <RouteWrapper
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    >
                      <Rentals />
                    </RouteWrapper>
                  }
                />
                <Route
                  path="hotel-shuttles"
                  element={
                    <RouteWrapper
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    >
                      <ShuttleCar />
                    </RouteWrapper>
                  }
                />
              </Route>
              <Route
                path="maps-directions"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <Maps />
                  </RouteWrapper>
                }
              />
              <Route
                path="dining"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <Dining />
                  </RouteWrapper>
                }
              />
              <Route
                path="services-amenities"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <Services />
                  </RouteWrapper>
                }
              />
              <Route
                path="accessibility"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <Accessibility />
                  </RouteWrapper>
                }
              />
              <Route
                path="general-aviation"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <General />
                  </RouteWrapper>
                }
              />
              <Route
                path="stop-human-trafficking"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <Human />
                  </RouteWrapper>
                }
              />
              <Route
                path="title-vi-airport-nondiscrimination-program"
                element={
                  <RouteWrapper
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  >
                    <Title9 />
                  </RouteWrapper>
                }
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
            <Route
              path="/lift-dsm"
              element={<LiftDSM backgroundStyle={backgroundStyle} />}
            />
          </Routes>
        </div>
      </div>
      <SectionLinks />
      <Footer />
    </div>
  );
};

export default App;
