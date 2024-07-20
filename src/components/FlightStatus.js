import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
        from: "Des Moines Intl (DSM)",
        to: "ORANGE COUNTY (SNA)",
        scheduled: "7:30 AM",
        updated: "7:35 AM",
        status: "In Air",
        gate: "C1",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C1",
        },
        arrival: {
          status: "In Air",
          airport: "ORANGE COUNTY (SNA)",
          updatedTime: "7:35 AM",
          terminalGate: "C1",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "United",
        flight: "UA136",
        from: "Des Moines Intl (DSM)",
        to: "CHICAGO (ORD)",
        scheduled: "8:00 AM",
        updated: "7:58 AM",
        status: "Departed",
        gate: "A2",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A2",
        },
        arrival: {
          status: "Departed",
          airport: "CHICAGO (ORD)",
          updatedTime: "7:58 AM",
          terminalGate: "A2",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "United",
        flight: "UA581",
        from: "Des Moines Intl (DSM)",
        to: "DENVER (DEN)",
        scheduled: "9:15 AM",
        updated: "9:07 AM",
        status: "Departed",
        gate: "A4A",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A4A",
        },
        arrival: {
          status: "Departed",
          airport: "DENVER (DEN)",
          updatedTime: "9:07 AM",
          terminalGate: "A4A",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Frontier",
        flight: "F9186",
        from: "Des Moines Intl (DSM)",
        to: "ORLANDO (MCO)",
        scheduled: "9:32 AM",
        updated: "9:32 AM",
        status: "Departed",
        gate: "A2",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A2",
        },
        arrival: {
          status: "Departed",
          airport: "ORLANDO (MCO)",
          updatedTime: "9:32 AM",
          terminalGate: "A2",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Delta",
        flight: "DL525",
        from: "Des Moines Intl (DSM)",
        to: "MINNEAPOLIS (MSP)",
        scheduled: "10:00 AM",
        updated: "9:59 AM",
        status: "Departed",
        gate: "C4",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C4",
        },
        arrival: {
          status: "Departed",
          airport: "MINNEAPOLIS (MSP)",
          updatedTime: "9:59 AM",
          terminalGate: "C4",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "American",
        flight: "AA440",
        from: "Des Moines Intl (DSM)",
        to: "WASHINGTON (DCA)",
        scheduled: "10:30 AM",
        updated: "10:28 AM",
        status: "Departed",
        gate: "C6",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C6",
        },
        arrival: {
          status: "Departed",
          airport: "WASHINGTON (DCA)",
          updatedTime: "10:28 AM",
          terminalGate: "C6",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Allegiant",
        flight: "G4150",
        from: "Des Moines Intl (DSM)",
        to: "AUSTIN (AUS)",
        scheduled: "11:00 AM",
        updated: "10:55 AM",
        status: "Departed",
        gate: "A1",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A1",
        },
        arrival: {
          status: "Departed",
          airport: "AUSTIN (AUS)",
          updatedTime: "10:55 AM",
          terminalGate: "A1",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "American",
        flight: "AA617",
        from: "Des Moines Intl (DSM)",
        to: "CHICAGO (ORD)",
        scheduled: "11:30 AM",
        updated: "11:25 AM",
        status: "Departed",
        gate: "A3",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A3",
        },
        arrival: {
          status: "Departed",
          airport: "CHICAGO (ORD)",
          updatedTime: "11:25 AM",
          terminalGate: "A3",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Southwest",
        flight: "WN201",
        from: "Des Moines Intl (DSM)",
        to: "PHOENIX (PHX)",
        scheduled: "12:00 PM",
        updated: "11:55 AM",
        status: "In Air",
        gate: "B5",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "B5",
        },
        arrival: {
          status: "In Air",
          airport: "PHOENIX (PHX)",
          updatedTime: "11:55 AM",
          terminalGate: "B5",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "United",
        flight: "UA700",
        from: "Des Moines Intl (DSM)",
        to: "HOUSTON (IAH)",
        scheduled: "12:30 PM",
        updated: "12:25 PM",
        status: "Scheduled",
        gate: "C7",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C7",
        },
        arrival: {
          status: "Scheduled",
          airport: "HOUSTON (IAH)",
          updatedTime: "12:25 PM",
          terminalGate: "C7",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Delta",
        flight: "DL900",
        from: "Des Moines Intl (DSM)",
        to: "SALT LAKE CITY (SLC)",
        scheduled: "1:00 PM",
        updated: "12:58 PM",
        status: "Scheduled",
        gate: "C8",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C8",
        },
        arrival: {
          status: "Scheduled",
          airport: "SALT LAKE CITY (SLC)",
          updatedTime: "12:58 PM",
          terminalGate: "C8",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Allegiant",
        flight: "G4160",
        from: "Des Moines Intl (DSM)",
        to: "LAS VEGAS (LAS)",
        scheduled: "1:30 PM",
        updated: "1:28 PM",
        status: "Scheduled",
        gate: "A2",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A2",
        },
        arrival: {
          status: "Scheduled",
          airport: "LAS VEGAS (LAS)",
          updatedTime: "1:28 PM",
          terminalGate: "A2",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "American",
        flight: "AA440",
        from: "Des Moines Intl (DSM)",
        to: "MIAMI (MIA)",
        scheduled: "2:00 PM",
        updated: "1:59 PM",
        status: "In Air",
        gate: "C9",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C9",
        },
        arrival: {
          status: "In Air",
          airport: "MIAMI (MIA)",
          updatedTime: "1:59 PM",
          terminalGate: "C9",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "United",
        flight: "UA701",
        from: "Des Moines Intl (DSM)",
        to: "LOS ANGELES (LAX)",
        scheduled: "2:30 PM",
        updated: "2:28 PM",
        status: "In Air",
        gate: "A1",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A1",
        },
        arrival: {
          status: "In Air",
          airport: "LOS ANGELES (LAX)",
          updatedTime: "2:28 PM",
          terminalGate: "A1",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Southwest",
        flight: "WN201",
        from: "Des Moines Intl (DSM)",
        to: "DALLAS (DAL)",
        scheduled: "3:00 PM",
        updated: "2:58 PM",
        status: "Delayed",
        gate: "B6",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "B6",
        },
        arrival: {
          status: "Delayed",
          airport: "DALLAS (DAL)",
          updatedTime: "2:58 PM",
          terminalGate: "B6",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Delta",
        flight: "DL526",
        from: "Des Moines Intl (DSM)",
        to: "SEATTLE (SEA)",
        scheduled: "3:30 PM",
        updated: "Cancelled",
        status: "Cancelled",
        gate: "C10",
        departure: {
          airport: "Des Moines Intl (DSM)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C10",
        },
        arrival: {
          status: "Cancelled",
          airport: "SEATTLE (SEA)",
          updatedTime: "Cancelled",
          terminalGate: "C10",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
    ],
    []
  );

  const arrivals = useMemo(
    () => [
      {
        airline: "Frontier",
        flight: "F9186",
        from: "ORLANDO (MCO)",
        to: "Des Moines Intl (DSM)",
        updated: "8:11 AM",
        status: "Arrived",
        gate: "A2",
        departure: {
          airport: "ORLANDO (MCO)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A2",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "8:11 AM",
          terminalGate: "A2",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "American",
        flight: "AA153",
        from: "DALLAS-FORT WORTH (DFW)",
        to: "Des Moines Intl (DSM)",
        updated: "8:53 AM",
        status: "Arrived",
        gate: "C7",
        departure: {
          airport: "DALLAS-FORT WORTH (DFW)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C7",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "8:53 AM",
          terminalGate: "C7",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "American",
        flight: "AA617",
        from: "CHICAGO (ORD)",
        to: "Des Moines Intl (DSM)",
        updated: "9:29 AM",
        status: "Arrived",
        gate: "C5",
        departure: {
          airport: "CHICAGO (ORD)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C5",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "9:29 AM",
          terminalGate: "C5",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Delta",
        flight: "DL505",
        from: "DETROIT (DTW)",
        to: "Des Moines Intl (DSM)",
        updated: "9:39 AM",
        status: "Arrived",
        gate: "C2",
        departure: {
          airport: "DETROIT (DTW)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C2",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "9:39 AM",
          terminalGate: "C2",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "United",
        flight: "UA136",
        from: "DENVER (DEN)",
        to: "Des Moines Intl (DSM)",
        updated: "10:00 AM",
        status: "Arrived",
        gate: "A4A",
        departure: {
          airport: "DENVER (DEN)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A4A",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "10:00 AM",
          terminalGate: "A4A",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Frontier",
        flight: "F9186",
        from: "LAS VEGAS (LAS)",
        to: "Des Moines Intl (DSM)",
        updated: "10:30 AM",
        status: "Arrived",
        gate: "A1",
        departure: {
          airport: "LAS VEGAS (LAS)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A1",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "10:30 AM",
          terminalGate: "A1",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Delta",
        flight: "DL525",
        from: "MINNEAPOLIS (MSP)",
        to: "Des Moines Intl (DSM)",
        updated: "11:00 AM",
        status: "Arrived",
        gate: "C4",
        departure: {
          airport: "MINNEAPOLIS (MSP)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C4",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "11:00 AM",
          terminalGate: "C4",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "American",
        flight: "AA441",
        from: "WASHINGTON (DCA)",
        to: "Des Moines Intl (DSM)",
        updated: "11:30 AM",
        status: "Arrived",
        gate: "C6",
        departure: {
          airport: "WASHINGTON (DCA)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C6",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "11:30 AM",
          terminalGate: "C6",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Allegiant",
        flight: "G4150",
        from: "AUSTIN (AUS)",
        to: "Des Moines Intl (DSM)",
        updated: "12:00 PM",
        status: "Arrived",
        gate: "A2",
        departure: {
          airport: "AUSTIN (AUS)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A2",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "12:00 PM",
          terminalGate: "A2",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Southwest",
        flight: "WN201",
        from: "PHOENIX (PHX)",
        to: "Des Moines Intl (DSM)",
        updated: "12:30 PM",
        status: "Arrived",
        gate: "B5",
        departure: {
          airport: "PHOENIX (PHX)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "B5",
        },
        arrival: {
          status: "Arrived",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "12:30 PM",
          terminalGate: "B5",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "United",
        flight: "UA702",
        from: "HOUSTON (IAH)",
        to: "Des Moines Intl (DSM)",
        updated: "1:00 PM",
        status: "In Air",
        gate: "C7",
        departure: {
          airport: "HOUSTON (IAH)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C7",
        },
        arrival: {
          status: "In Air",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "1:00 PM",
          terminalGate: "C7",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Delta",
        flight: "DL901",
        from: "SALT LAKE CITY (SLC)",
        to: "Des Moines Intl (DSM)",
        updated: "1:30 PM",
        status: "In Air",
        gate: "C8",
        departure: {
          airport: "SALT LAKE CITY (SLC)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C8",
        },
        arrival: {
          status: "In Air",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "1:30 PM",
          terminalGate: "C8",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "Allegiant",
        flight: "G4160",
        from: "LAS VEGAS (LAS)",
        to: "Des Moines Intl (DSM)",
        updated: "2:00 PM",
        status: "Delayed",
        gate: "A2",
        departure: {
          airport: "LAS VEGAS (LAS)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A2",
        },
        arrival: {
          status: "Delayed",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "2:00 PM",
          terminalGate: "A2",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "American",
        flight: "AA441",
        from: "MIAMI (MIA)",
        to: "Des Moines Intl (DSM)",
        updated: "2:30 PM",
        status: "Cancelled",
        gate: "C9",
        departure: {
          airport: "MIAMI (MIA)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "C9",
        },
        arrival: {
          status: "Cancelled",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "2:30 PM",
          terminalGate: "C9",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
      },
      {
        airline: "United",
        flight: "UA703",
        from: "LOS ANGELES (LAX)",
        to: "Des Moines Intl (DSM)",
        updated: "3:00 PM",
        status: "Scheduled",
        gate: "A1",
        departure: {
          airport: "LOS ANGELES (LAX)",
          updatedTime: "7/19/2024 6:19:00 AM",
          terminalGate: "A1",
        },
        arrival: {
          status: "Scheduled",
          airport: "Des Moines Intl (DSM)",
          updatedTime: "3:00 PM",
          terminalGate: "A1",
          baggageClaim: "CLM1",
        },
        flightDetails: {
          aircraft: "319",
        },
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

  const openModal = (flight) => {
    setSelectedFlight(flight);
  };

  const closeModal = () => {
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
                <tr key={index} onClick={() => openModal(flight)}>
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
          <a
            href="/flights-and-travel/airline-information"
            onClick={() => window.scrollTo(0, 0)}
            style={{
              color: "#be5a0e",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Contact an Airline
          </a>
        </div>
      </div>
      {selectedFlight && (
        <Modal1
          show={!!selectedFlight}
          handleClose={closeModal}
          flight={selectedFlight}
        />
      )}
    </div>
  );
};

export default FlightStatus;
