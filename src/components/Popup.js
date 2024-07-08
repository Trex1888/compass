import "../styles//Popup.css";
import { Link } from "react-router-dom";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { CiParking1 } from "react-icons/ci";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";

const Popup = ({ isPopupVisible, togglePopup, scrollToSection }) => {
  return (
    <div className={isPopupVisible ? "popup-visible" : ""}>
      <div className="popup">
        <div className="popup-content">
          <div id="Flight-Status">
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
            </select>
            <div className="filter-container">
              <input type="text" placeholder="Search Flight #" />
              <button>Filter</button>
            </div>
          </div>
          <div className="popup-section" id="Departures">
            <Link
              to="flights-and-travel/flight-status?flights=departures"
              className="view-all"
            >
              <h3>Departures</h3>
              <div className="table-row table-header">
                <span className="dot-header"></span>
                <span>Flight #</span>
                <span>To</span>
                <span>Updated Time</span>
                <span>Gate</span>
              </div>
              <div className="table-row">
                <span className="dot green-dot"></span>
                <span>AA2326</span>
                <span>(DFW)</span>
                <span className="time green-time">5:00 AM</span>
                <span>C6</span>
              </div>
              <div className="table-row">
                <span className="dot orange-dot"></span>
                <span>AA1795</span>
                <span>(PHX)</span>
                <span className="time orange-time">5:40 AM</span>
                <span>C4</span>
              </div>
              <div className="table-row">
                <span className="dot orange-dot"></span>
                <span>AA3418</span>
                <span>(ORD)</span>
                <span className="time orange-time">5:54 AM</span>
                <span>C4</span>
              </div>
              <div className="table-row">
                <span className="dot green-dot"></span>
                <span>WN2762</span>
                <span>(STL)</span>
                <span className="time green-time">5:55 AM</span>
                <span>C6</span>
              </div>
              <div className="table-row">
                <span className="dot green-dot"></span>
                <span>DL488</span>
                <span>(ATL)</span>
                <span className="time green-time">5:56 AM</span>
                <span>C3</span>
              </div>
              <span className="view-all">View All Departures</span>
            </Link>
          </div>

          <div className="popup-section" id="Arrivals">
            <Link
              to="flights-and-travel/flight-status?flights=arrivals"
              className="view-all"
            >
              <h3>Arrivals</h3>
              <div className="table-row table-header">
                <span className="dot-header"></span>
                <span>Flight #</span>
                <span>From</span>
                <span>Updated Time</span>
                <span>Gate</span>
              </div>
              <div className="table-row">
                <span className="dot green-dot"></span>
                <span>AA1536</span>
                <span>(DFW)</span>
                <span className="time green-time">8:54 AM</span>
                <span>C7</span>
              </div>
              <div className="table-row">
                <span className="dot green-dot"></span>
                <span>AA6172</span>
                <span>(ORD)</span>
                <span className="time green-time">9:29 AM</span>
                <span>C5</span>
              </div>
              <div className="table-row">
                <span className="dot orange-dot"></span>
                <span>DL1704</span>
                <span>(ATL)</span>
                <span className="time orange-time">10:10 AM</span>
                <span>C3</span>
              </div>
              <span className="view-all">View All Arrivals</span>
            </Link>
          </div>

          <div className="popup-section" id="Parking">
            <Link to="at-the-airport/parking" className="view-all">
              <h3>Parking</h3>
              <div className="table-row table-header">
                <span>Parking Lot</span> <span>%Full</span> <span>Open</span>
              </div>
              <div className="table-row green-row">
                <span className="dot green-dot"></span>
                <span>Garage Hourly</span> <span>19%</span> <span>278</span>
                <div className="progress-bar" style={{ width: "19%" }}></div>
              </div>
              <div className="table-row orange-row">
                <span className="dot orange-dot"></span>
                <span>Garage Daily (Long Term)</span> <span>59%</span>
                <span>567</span>
                <div className="progress-bar" style={{ width: "59%" }}></div>
              </div>
              <div className="table-row orange-row">
                <span className="dot orange-dot"></span>
                <span>Blue Economy Lot</span> <span>86%</span> <span>85</span>
                <div className="progress-bar" style={{ width: "86%" }}></div>
              </div>
              <div className="table-row orange-row">
                <span className="dot orange-dot"></span>
                <span>Red Economy Lot</span> <span>40%</span> <span>449</span>
                <div className="progress-bar" style={{ width: "40%" }}></div>
              </div>
              <div className="table-row green-row">
                <span className="dot green-dot"></span>
                <span>Grey Economy Lot</span> <span>50%</span> <span>869</span>
                <div className="progress-bar" style={{ width: "50%" }}></div>
              </div>
              <span className="view-all">View Parking & Shuttle Tracker</span>
            </Link>
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
  );
};

export default Popup;
