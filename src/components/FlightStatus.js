import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import flightsAndTravelImage from "../images/mainPlane.png";
import "../styles/FlightStatus.css";
import { FaPlane } from "react-icons/fa";
import Modal1 from "./Modal1";

const FlightStatus = () => {
  const [activeFilter, setActiveFilter] = useState("departures");
  const [airlineFilter, setAirlineFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const departures = useMemo(
    () => [
      {
        airline: "Allegiant",
        flight: "G4458",
        to: "ORANGE COUNTY (SNA)",
        scheduled: "7:30 AM",
        updated: "7:35 AM",
        status: "In Air",
        gate: "C1",
      },
      {
        airline: "United",
        flight: "UA1363",
        to: "CHICAGO (ORD)",
        scheduled: "8:00 AM",
        updated: "7:58 AM",
        status: "Departed",
        gate: "A2",
      },
      {
        airline: "United",
        flight: "UA581",
        to: "DENVER (DEN)",
        scheduled: "9:15 AM",
        updated: "9:07 AM",
        status: "Departed",
        gate: "A4A",
      },
      {
        airline: "Frontier",
        flight: "F91868",
        to: "ORLANDO (MCO)",
        scheduled: "9:32 AM",
        updated: "9:32 AM",
        status: "Departed",
        gate: "A2",
      },
      {
        airline: "Delta",
        flight: "DL5253",
        to: "MINNEAPOLIS (MSP)",
        scheduled: "10:00 AM",
        updated: "9:59 AM",
        status: "Departed",
        gate: "C4",
      },
      {
        airline: "American Airlines",
        flight: "AA4408",
        to: "WASHINGTON (DCA)",
        scheduled: "10:30 AM",
        updated: "10:28 AM",
        status: "Departed",
        gate: "C6",
      },
      {
        airline: "Allegiant",
        flight: "G41501",
        to: "AUSTIN (AUS)",
        scheduled: "11:00 AM",
        updated: "10:55 AM",
        status: "Departed",
        gate: "A1",
      },
      {
        airline: "American Airlines",
        flight: "AA6170",
        to: "CHICAGO (ORD)",
        scheduled: "11:30 AM",
        updated: "11:25 AM",
        status: "Departed",
        gate: "A3",
      },
      {
        airline: "Southwest",
        flight: "WN2010",
        to: "PHOENIX (PHX)",
        scheduled: "12:00 PM",
        updated: "11:55 AM",
        status: "In Air",
        gate: "B5",
      },
      {
        airline: "United",
        flight: "UA700",
        to: "HOUSTON (IAH)",
        scheduled: "12:30 PM",
        updated: "12:25 PM",
        status: "Scheduled",
        gate: "C7",
      },
      {
        airline: "Delta",
        flight: "DL900",
        to: "SALT LAKE CITY (SLC)",
        scheduled: "1:00 PM",
        updated: "12:58 PM",
        status: "Scheduled",
        gate: "C8",
      },
      {
        airline: "Allegiant",
        flight: "G41602",
        to: "LAS VEGAS (LAS)",
        scheduled: "1:30 PM",
        updated: "1:28 PM",
        status: "Scheduled",
        gate: "A2",
      },
      {
        airline: "American Airlines",
        flight: "AA4409",
        to: "MIAMI (MIA)",
        scheduled: "2:00 PM",
        updated: "1:59 PM",
        status: "In Air",
        gate: "C9",
      },
      {
        airline: "United",
        flight: "UA701",
        to: "LOS ANGELES (LAX)",
        scheduled: "2:30 PM",
        updated: "2:28 PM",
        status: "In Air",
        gate: "A1",
      },
      {
        airline: "Southwest",
        flight: "WN2011",
        to: "DALLAS (DAL)",
        scheduled: "3:00 PM",
        updated: "2:58 PM",
        status: "Delayed",
        gate: "B6",
      },
      {
        airline: "Delta",
        flight: "DL5260",
        to: "SEATTLE (SEA)",
        scheduled: "3:30 PM",
        updated: "Cancelled",
        status: "Cancelled",
        gate: "C10",
      },
    ],
    []
  );

  const arrivals = useMemo(
    () => [
      {
        airline: "Frontier",
        flight: "F91867",
        from: "ORLANDO (MCO)",
        updated: "8:11 AM",
        status: "Arrived",
        gate: "A2",
      },
      {
        airline: "American Airlines",
        flight: "AA1536",
        from: "DALLAS-FORT WORTH (DFW)",
        updated: "8:53 AM",
        status: "Arrived",
        gate: "C7",
      },
      {
        airline: "American Airlines",
        flight: "AA6172",
        from: "CHICAGO (ORD)",
        updated: "9:29 AM",
        status: "Arrived",
        gate: "C5",
      },
      {
        airline: "Delta",
        flight: "DL5058",
        from: "DETROIT (DTW)",
        updated: "9:39 AM",
        status: "Arrived",
        gate: "C2",
      },
      {
        airline: "United",
        flight: "UA1362",
        from: "DENVER (DEN)",
        updated: "10:00 AM",
        status: "Arrived",
        gate: "A4A",
      },
      {
        airline: "Frontier",
        flight: "F91869",
        from: "LAS VEGAS (LAS)",
        updated: "10:30 AM",
        status: "Arrived",
        gate: "A1",
      },
      {
        airline: "Delta",
        flight: "DL5254",
        from: "MINNEAPOLIS (MSP)",
        updated: "11:00 AM",
        status: "Arrived",
        gate: "C4",
      },
      {
        airline: "American Airlines",
        flight: "AA4410",
        from: "WASHINGTON (DCA)",
        updated: "11:30 AM",
        status: "Arrived",
        gate: "C6",
      },
      {
        airline: "Allegiant",
        flight: "G41502",
        from: "AUSTIN (AUS)",
        updated: "12:00 PM",
        status: "Arrived",
        gate: "A2",
      },
      {
        airline: "Southwest",
        flight: "WN2012",
        from: "PHOENIX (PHX)",
        updated: "12:30 PM",
        status: "Arrived",
        gate: "B5",
      },
      {
        airline: "United",
        flight: "UA702",
        from: "HOUSTON (IAH)",
        updated: "1:00 PM",
        status: "In Air",
        gate: "C7",
      },
      {
        airline: "Delta",
        flight: "DL901",
        from: "SALT LAKE CITY (SLC)",
        updated: "1:30 PM",
        status: "In Air",
        gate: "C8",
      },
      {
        airline: "Allegiant",
        flight: "G41603",
        from: "LAS VEGAS (LAS)",
        updated: "2:00 PM",
        status: "Delayed",
        gate: "A2",
      },
      {
        airline: "American Airlines",
        flight: "AA4411",
        from: "MIAMI (MIA)",
        updated: "2:30 PM",
        status: "Cancelled",
        gate: "C9",
      },
      {
        airline: "United",
        flight: "UA703",
        from: "LOS ANGELES (LAX)",
        updated: "3:00 PM",
        status: "Scheduled",
        gate: "A1",
      },
    ],
    []
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const flightsParam = params.get("flights");
    if (flightsParam === "arrivals" || flightsParam === "departures") {
      setActiveFilter(flightsParam);
    }
  }, [location.search]);

  const applyFilters = useCallback(() => {
    const allFlights = activeFilter === "departures" ? departures : arrivals;
    const filtered = allFlights.filter((flight) => {
      return (
        (airlineFilter === "" || flight.airline === airlineFilter) &&
        (cityFilter === "" ||
          (activeFilter === "departures" ? flight.to : flight.from) ===
            cityFilter) &&
        (searchFilter === "" ||
          flight.flight.toLowerCase().includes(searchFilter.toLowerCase()))
      );
    });
    setFilteredFlights(filtered);
  }, [
    activeFilter,
    airlineFilter,
    cityFilter,
    searchFilter,
    arrivals,
    departures,
  ]);

  useEffect(() => {
    applyFilters();
  }, [activeFilter, airlineFilter, cityFilter, searchFilter, applyFilters]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    navigate(`/flights-and-travel/flight-status?flights=${filter}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Arrived":
      case "In Air":
      case "Departed":
      case "Scheduled":
        return "green";
      case "Delayed":
      case "Cancelled":
        return "red";
      default:
        return "";
    }
  };

  const handleRowClick = (flight) => {
    setSelectedFlight(flight);
  };

  const handleCloseModal = () => {
    setSelectedFlight(null);
  };

  return (
    <div className="flight-status-container">
      <div className="mainContainer">
        <img
          src={flightsAndTravelImage}
          alt="Main Plane"
          style={{
            transform:
              activeFilter === "arrivals" ? "rotate(7deg)" : "rotate(-7deg)",
          }}
        />
      </div>
      <div className="flight-status-text">
        <h1>Flight Status</h1>
        <div className="flight-filter-container">
          <div className="flight-filters">
            <label>
              <input
                type="radio"
                name="filter"
                value="departures"
                checked={activeFilter === "departures"}
                onChange={() => handleFilterChange("departures")}
              />
              <span className="radio-label">Departures</span>
            </label>
            <label>
              <input
                type="radio"
                name="filter"
                value="arrivals"
                checked={activeFilter === "arrivals"}
                onChange={() => handleFilterChange("arrivals")}
              />
              <span className="radio-label">Arrivals</span>
            </label>
          </div>
          <div className="flight-filter-inputs">
            <select
              className="flight-filter-select"
              value={airlineFilter}
              onChange={(e) => setAirlineFilter(e.target.value)}
            >
              <option value="">Filter by Airline</option>
              <option value="Allegiant">Allegiant</option>
              <option value="American Airlines">American Airlines</option>
              <option value="Delta">Delta</option>
              <option value="Frontier">Frontier</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>
            <select
              className="flight-filter-select"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              <option value="">Filter by City</option>
              <option value="ORANGE COUNTY (SNA)">Orange County (SNA)</option>
              <option value="CHICAGO (ORD)">Chicago (ORD)</option>
              <option value="DENVER (DEN)">Denver (DEN)</option>
              <option value="ORLANDO (MCO)">Orlando (MCO)</option>
              <option value="MINNEAPOLIS (MSP)">Minneapolis (MSP)</option>
              <option value="WASHINGTON (DCA)">Washington (DCA)</option>
              <option value="AUSTIN (AUS)">Austin (AUS)</option>
              <option value="PHOENIX (PHX)">Phoenix (PHX)</option>
              <option value="HOUSTON (IAH)">Houston (IAH)</option>
              <option value="SALT LAKE CITY (SLC)">Salt Lake City (SLC)</option>
              <option value="LAS VEGAS (LAS)">Las Vegas (LAS)</option>
              <option value="MIAMI (MIA)">Miami (MIA)</option>
              <option value="LOS ANGELES (LAX)">Los Angeles (LAX)</option>
              <option value="DALLAS (DAL)">Dallas (DAL)</option>
              <option value="SEATTLE (SEA)">Seattle (SEA)</option>
              <option value="DETROIT (DTW)">Detroit (DTW)</option>
            </select>
            <input
              type="text"
              className="flight-filter-search-input"
              placeholder="Search Flight #"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <button className="flight-filter-button" onClick={applyFilters}>
              Filter
            </button>
          </div>
        </div>
        <div className="flight-table">
          <table>
            <thead>
              <tr>
                <th>Airline</th>
                <th>Flight #</th>
                <th>{activeFilter === "departures" ? "To" : "From"}</th>
                {activeFilter === "departures" && <th>Scheduled Time</th>}
                <th>Updated Time</th>
                <th>Status</th>
                <th>Gate</th>
              </tr>
            </thead>
            <tbody>
              {filteredFlights.map((flight, index) => (
                <tr key={index} onClick={() => handleRowClick(flight)}>
                  <td>
                    <span
                      className={`status-dot ${
                        getStatusColor(flight.status) === "green"
                          ? "green"
                          : "red"
                      }`}
                    ></span>
                    {flight.airline}
                  </td>
                  <td>{flight.flight}</td>
                  <td>
                    {activeFilter === "departures" ? flight.to : flight.from}
                  </td>
                  {activeFilter === "departures" && <td>{flight.scheduled}</td>}
                  <td>{flight.updated}</td>
                  <td className={getStatusColor(flight.status)}>
                    {flight.status}
                    {flight.status === "In Air" && (
                      <FaPlane className="in-air-icon" />
                    )}
                  </td>
                  <td>{flight.gate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flight-table-footer">
          <div className="left-footer">
            <FaPlane className="in-air-icon" />
            <p>Click to track flight</p>
          </div>
          <Link
            to="/flights-and-travel/airline-information"
            onClick={() => window.scrollTo(0, 0)}
          >
            <p>Contact an Airline</p>
          </Link>
        </div>
      </div>
      {selectedFlight && (
        <Modal1 flight={selectedFlight} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FlightStatus;

//background: linear-gradient(to bottom, #d1e8ff, #ffffff);
