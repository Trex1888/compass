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
      "/airport-business/tenant-resources": airportBusinessImage,
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
      "/airport-business": airportBusinessImage,
      "/airport-business/badging": parkingImage,
      "/airport-business/operations": parkingImage,
      "/airport-business/bid-procurement-rfps": parkingImage,
      "/airport-business/contractor-resources": parkingImage,
      "/airport-business/contractor": parkingImage,
      "/airport-business/permits-forms": airportBusinessImage,
      "/lift-dsm": flyDsmImage,
      "/contact": "red",
      "/about-us/careers": "red",
      "/about-us/authority-leadership": "red",
      "/about-us/authority-leadership/board-agendas-minutes": "red",
      "/about-us/authority-leadership/staff": "red",
      "/at-the-airport/stop-human-trafficking": "red",
      "/traveler-info/lost-and-found/lost-item-report": "red",
      "/airport-business/badging/badge-applications-renewal": "red",
      "/airport-business/badging/badge-faqs": "red",
      "/airport-business/operations/unmanned-aerial-systems": "red",
      "/airport-business/operations/airport-driver-training": "red",
      "/airport-business/operations/rules-regulations": "red",
      "/airport-business/operations/aircraft-noise-program": "red",
      "/about-us/authority-leadership/board-agendas-minutes/agenda/june-11-2024-des-moines-airport-authority-board-meeting-agenda":
        "red",
      "/about-us/authority-leadership/board-agendas-minutes/agenda/april-9-2024-des-moines-airport-authority-board-meeting-agenda":
        "red",
      "about-us/authority-leadership/board-agendas-minutes/agenda/april-9-2024-des-moines-airport-authority-board-meeting-agenda":
        "red",
      "/about-us/authority-leadership/board-agendas-minutes/agenda/march-1-2024-des-moines-airport-authority-board-meeting-agenda":
        "red",
      "/about-us/authority-leadership/board-agendas-minutes/agenda/january-15-2024-des-moines-airport-authority-board-meeting-agenda":
        "red",
      "/about-us/authority-leadership/board-agendas-minutes/minutes/may-14-2024-meeting-minutes":
        "red",
      "/about-us/authority-leadership/board-agendas-minutes/minutes/february-13-2024-meeting-minutes":
        "red",
      "about-us/authority-leadership/board-agendas-minutes/minutes/december-12-2023-meeting-minutes":
        "red",
      "/about-us/authority-leadership/minutes-agenda/may-14-2024-meeting-minutes":
        "red",
      "/about-us/authority-leadership/board-agendas-minutes/minutes/december-12-2023-meeting-minutes":
        "red",
      "/about-us/authority-leadership/board-agendas-minutes/minutes/october-10-2023-meeting-minutes":
        "red",
      "/": homeImage,
    };

    return { backgroundImage: `url(${backgroundImages[path] || homeImage})` };
  };

  const backgroundStyle = getLocationBackground(location);

  const isTrafficStatistics = location.pathname.includes(
    "about-us/news/june-2024-airport-traffic-statistics"
  );

  return (
    <div className={isPopupVisible ? "popup-visible" : ""}>
      <Header isTrafficStatistics={isTrafficStatistics} />
      <Top
        backgroundStyle={backgroundStyle}
        scrollToSection={scrollToSection}
        openPopup={openPopup}
      />
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
                  <Shuttle
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="ground-transportation/*"
                element={
                  <Ground
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              >
                <Route
                  path="buses-paratransit"
                  element={
                    <Buses
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
                <Route
                  path="ride-share-taxis"
                  element={
                    <RideShare
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
                <Route
                  path="rental-cars"
                  element={
                    <Rentals
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
                <Route
                  path="hotel-shuttles"
                  element={
                    <ShuttleCar
                      scrollToSection={scrollToSection}
                      openPopup={openPopup}
                    />
                  }
                />
              </Route>
              <Route
                path="maps-directions"
                element={
                  <Maps
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="dining"
                element={
                  <Dining
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="services-amenities"
                element={
                  <Services
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="accessibility"
                element={
                  <Accessibility
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="general-aviation"
                element={
                  <General
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="stop-human-trafficking"
                element={
                  <Human
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
                }
              />
              <Route
                path="title-vi-airport-nondiscrimination-program"
                element={
                  <Title9
                    scrollToSection={scrollToSection}
                    openPopup={openPopup}
                  />
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
                path="badging/*"
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
                path="operations/*"
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
                path="tenant-resources/*"
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
// import "../styles/Popup.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineFolderOpen } from "react-icons/ai";
// import { CiParking1 } from "react-icons/ci";
// import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
// import { MdOutlineClose } from "react-icons/md"; // Import the close icon

// const Popup = ({ isPopupVisible, togglePopup, scrollToSection }) => {
//   const [navPosition, setNavPosition] = useState(false); // false for bottom, true for top

//   const handleVerticalIconClick = (section) => {
//     scrollToSection(section);
//     setNavPosition(true);
//     if (!isPopupVisible && window.innerWidth >= 980) {
//       togglePopup();
//     }
//   };

//   const handleBottomNavClick = (section) => {
//     scrollToSection(section);
//     setNavPosition(false);
//     if (!isPopupVisible && window.innerWidth < 980) {
//       togglePopup();
//     }
//   };

//   const handleClose = () => {
//     setNavPosition(false);
//     togglePopup();
//   };

//   return (
//     <div className={isPopupVisible ? "popup-visible" : ""}>
//       <div className="popup">
//         <div className="popup-content">
//           <div id="Flight-Status">
//             <select>
//               <option value="">Filter by Airline</option>
//               <option value="airline1">Allegiant Air</option>
//               <option value="airline2">American Airlines</option>
//               <option value="airline1">Delta Air Lines</option>
//               <option value="airline2">United Airlines</option>
//               <option value="airline2">Southwest Airlines</option>
//             </select>
//             <select>
//               <option value="">Filter by City</option>
//               <option value="new-york">New York</option>
//               <option value="los-angeles">Los Angeles</option>
//               <option value="chicago">Chicago</option>
//               <option value="houston">Houston</option>
//               <option value="phoenix">Phoenix</option>
//               <option value="philadelphia">Philadelphia</option>
//             </select>
//             <div className="filter-container">
//               <input type="text" placeholder="Search Flight #" />
//               <button>Filter</button>
//             </div>
//           </div>
//           <div className="popup-section" id="Departures">
//             <Link
//               to="flights-and-travel/flight-status?flights=departures"
//               className="view-all"
//               onClick={togglePopup}
//             >
//               <h2>Departures</h2>
//               <div className="table-row table-header">
//                 <span className="dot-header"></span>
//                 <span>Flight #</span>
//                 <span>To</span>
//                 <span>Updated Time</span>
//                 <span>Gate</span>
//               </div>
//               <div className="table-row">
//                 <span className="dot green-dot"></span>
//                 <span>AA2326</span>
//                 <span>(DFW)</span>
//                 <span className="time green-time">5:00 AM</span>
//                 <span>C6</span>
//               </div>
//               <div className="table-row">
//                 <span className="dot orange-dot"></span>
//                 <span>AA1795</span>
//                 <span>(PHX)</span>
//                 <span className="time orange-time">5:40 AM</span>
//                 <span>C4</span>
//               </div>
//               <div className="table-row">
//                 <span className="dot orange-dot"></span>
//                 <span>AA3418</span>
//                 <span>(ORD)</span>
//                 <span className="time orange-time">5:54 AM</span>
//                 <span>C4</span>
//               </div>
//               <div className="table-row">
//                 <span className="dot green-dot"></span>
//                 <span>WN2762</span>
//                 <span>(STL)</span>
//                 <span className="time green-time">5:55 AM</span>
//                 <span>C6</span>
//               </div>
//               <div className="table-row">
//                 <span className="dot green-dot"></span>
//                 <span>DL488</span>
//                 <span>(ATL)</span>
//                 <span className="time green-time">5:56 AM</span>
//                 <span>C3</span>
//               </div>
//               <span className="view-all">View All Departures</span>
//             </Link>
//           </div>

//           <div className="popup-section" id="Arrivals">
//             <Link
//               to="flights-and-travel/flight-status?flights=arrivals"
//               className="view-all"
//               onClick={togglePopup}
//             >
//               <h2>Arrivals</h2>
//               <div className="table-row table-header">
//                 <span className="dot-header"></span>
//                 <span>Flight #</span>
//                 <span>From</span>
//                 <span>Updated Time</span>
//                 <span>Gate</span>
//               </div>
//               <div className="table-row">
//                 <span className="dot green-dot"></span>
//                 <span>AA1536</span>
//                 <span>(DFW)</span>
//                 <span className="time green-time">8:54 AM</span>
//                 <span>C7</span>
//               </div>
//               <div className="table-row">
//                 <span className="dot green-dot"></span>
//                 <span>AA6172</span>
//                 <span>(ORD)</span>
//                 <span className="time green-time">9:29 AM</span>
//                 <span>C5</span>
//               </div>
//               <div className="table-row">
//                 <span className="dot orange-dot"></span>
//                 <span>DL1704</span>
//                 <span>(ATL)</span>
//                 <span className="time orange-time">10:10 AM</span>
//                 <span>C3</span>
//               </div>
//               <span className="view-all">View All Arrivals</span>
//             </Link>
//           </div>

//           <div className="popup-section" id="Parking">
//             <Link
//               to="at-the-airport/parking"
//               className="view-all"
//               onClick={togglePopup}
//             >
//               <h2>Parking</h2>
//               <div className="table-row table-header">
//                 <span>Parking Lot</span> <span>%Full</span> <span>Open</span>
//               </div>
//               <div className="table-row green-row">
//                 <span className="dot green-dot"></span>
//                 <span>Garage Hourly</span> <span>19%</span> <span>278</span>
//                 <div className="progress-bar" style={{ width: "19%" }}></div>
//               </div>
//               <div className="table-row orange-row">
//                 <span className="dot orange-dot"></span>
//                 <span>Garage Daily (Long Term)</span> <span>59%</span>
//                 <span>567</span>
//                 <div className="progress-bar" style={{ width: "59%" }}></div>
//               </div>
//               <div className="table-row orange-row">
//                 <span className="dot orange-dot"></span>
//                 <span>Blue Economy Lot</span> <span>86%</span> <span>85</span>
//                 <div className="progress-bar" style={{ width: "86%" }}></div>
//               </div>
//               <div className="table-row orange-row">
//                 <span className="dot orange-dot"></span>
//                 <span>Red Economy Lot</span> <span>40%</span> <span>449</span>
//                 <div className="progress-bar" style={{ width: "40%" }}></div>
//               </div>
//               <div className="table-row green-row">
//                 <span className="dot green-dot"></span>
//                 <span>Grey Economy Lot</span> <span>50%</span> <span>869</span>
//                 <div className="progress-bar" style={{ width: "50%" }}></div>
//               </div>
//               <span className="view-all">View Parking & Shuttle Tracker</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className={`vertical-icons-container ${navPosition ? "top" : ""}`}>
//         <div className="vertical-icons">
//           <Link onClick={() => handleVerticalIconClick("Flight-Status")}>
//             <AiOutlineFolderOpen />
//           </Link>
//           <Link onClick={() => handleVerticalIconClick("Departures")}>
//             <GiAirplaneDeparture />
//           </Link>{" "}
//           <button onClick={handleClose} className="popup-toggle-button">
//             {isPopupVisible ? ">" : "<"}
//           </button>
//           <Link onClick={() => handleVerticalIconClick("Arrivals")}>
//             <GiAirplaneArrival />
//           </Link>
//           <Link onClick={() => handleVerticalIconClick("Parking")}>
//             <CiParking1 />
//           </Link>
//           <div className="close-button">
//             <MdOutlineClose onClick={handleClose} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;

/* .popup {
  position: fixed;
  top: 0;
  right: -450px;
  width: 450px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  transition: right 0.3s;
}

.popup-visible .popup {
  right: 0;
  scrollbar-color: #be5a0e #f5f5f5;
  scrollbar-width: thin;
}

.popup-content {
  background: #f5f5f5;
  padding: 20px;
}

.popup-content h3 {
  margin-top: 10px;
  color: #3a3b5a;
  font-weight: 600;
}

.popup-content h2 {
  font-weight: 500;
  color: #36294a;
  margin-left: 15px !important;
}

.popup-content select,
.popup-content input,
.popup-content button {
  display: block;
  margin-bottom: 15px;
  margin-top: -5px;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #36294a;
  border-radius: 5px;
  box-shadow: inset 0 0 0 2px #36294a;
  color: #36294a;
  font-weight: bold;
}

.popup-content select:hover,
.popup-content select:focus {
  cursor: pointer;
}

.popup-section a {
  color: #be5a0e;
  font-weight: 600;
}

.filter-container {
  display: flex;
  align-items: center;
}

.filter-container input[type="text"] {
  flex-grow: 1;
  flex: 0.6;
  margin-right: 5px;
  padding: 8px;
  font-style: italic;
  font-size: 16px;
  color: #333;
  border: 1px solid #36294a;
  border-radius: 5px;
}

.filter-container button {
  padding: 8px 12px;
  flex: 0.4;
  cursor: pointer;
  color: white;
  background-color: #36294a;
  font-weight: 400;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.filter-container button:hover {
  background-color: #be5a0e;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.popup-section {
  margin-top: 20px;
}

.popup-section .table-header,
.popup-section .table-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 5px;
  position: relative;
}

.popup-section .table-row span {
  color: #3a3b5a;
  font-weight: bold;
}

.popup-section .table-row span.time.green-time {
  color: #4caf50;
}

.popup-section .table-row span.time.orange-time {
  color: #be5a0e;
}

.popup-section .table-row span.dot {
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}

.popup-section .table-row span.green-dot {
  background-color: #4caf50;
}

.popup-section .table-row span.orange-dot {
  background-color: #be5a0e;
}

.view-all {
  color: #be5a0e;
  text-decoration: none;
}

.vertical-icons-container {
  position: fixed;
  top: 0;
  right: -10px;
  height: 100%;
  width: 60px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  transition: right 0.3s;
  border-left: 2px solid lightgrey;
}

.close-button {
  display: none;
}

.popup-visible .vertical-icons-container {
  right: 450px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.4);
}

.popup-toggle-button {
  background-color: white !important;
  color: #be5a0e !important;
  cursor: pointer !important;
  padding: 8px !important;
  transition: color 0.5s ease-in-out !important;
  background-color: 0.5s ease-in-out !important;
  border-radius: 100% !important;
  margin-bottom: 10px !important;
  margin-right: 70px !important;
  font-size: 34px !important;
  border: none !important;
  margin-top: -30px !important;
  margin-bottom: -30px !important;
  box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.1) 0px -4px 8px rgba(0, 0, 0, 0.1) 0px
    4px 8px rgba(0, 0, 0, 0.1) !important;
}

.vertical-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
}

.vertical-icons a {
  text-decoration: none;
  color: #3a3b5a;
  transition: color 0.3s;
}

.vertical-icons a:hover {
  color: #be5a0e;
  cursor: pointer;
}

.table-row {
  text-align: left;
  padding-right: -20px;
}

.table-row .progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: transparent;
}

.table-row.green-row .progress-bar {
  background-color: #4caf50;
}

.table-row.orange-row .progress-bar {
  background-color: #be5a0e;
}

@media (max-width: 980px) {
  .vertical-icons-container {
    position: fixed;
    top: auto;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    border-left: none;
    border-top: 2px solid lightgrey;
  }

  .vertical-icons-container.top {
    top: 0;
    bottom: auto;
    border-top: none;
    border-bottom: 2px solid lightgrey;
  }

  .popup-visible .vertical-icons-container {
    right: 0;
  }

  .vertical-icons {
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 34px;
    width: 100%;
    padding: 0;
    margin-top: 5px;
  }

  .vertical-icons-container.top .vertical-icons {
    justify-content: space-evenly;
  }

  .popup-toggle-button {
    display: none;
  }

  .vertical-icons a {
    margin: 0;
  }

  .close-button {
    display: none;
  }

  .close-button:hover {
    cursor: pointer;
  }

  .vertical-icons-container.top .close-button {
    display: block;
  }

  .popup {
    width: 100%;
    left: 0;
  }
}

@media (min-width: 981px) {
  .vertical-icons-container {
    display: flex;
  }

  .vertical-icons-container.bottom {
    display: none;
  }
} */
