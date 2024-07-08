import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import flightsAndTravelImage from "../images/mainPlane.png";
import "../styles/FlightStatus.css";

const FlightStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("departures");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const flightsParam = params.get("flights");
    if (flightsParam === "arrivals" || flightsParam === "departures") {
      setActiveFilter(flightsParam);
    }
  }, [location.search]);

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

  const departures = [
    {
      airline: "Allegiant",
      flight: "G4458",
      to: "Orange County (SNA)",
      scheduled: "7:30 AM",
      updated: "7:35 AM",
      status: "In Air",
      gate: "C1",
    },
    {
      airline: "United",
      flight: "UA1363",
      to: "Chicago (ORD)",
      scheduled: "8:00 AM",
      updated: "7:58 AM",
      status: "Departed",
      gate: "A2",
    },
    {
      airline: "United",
      flight: "UA581",
      to: "Denver (DEN)",
      scheduled: "9:15 AM",
      updated: "9:07 AM",
      status: "Departed",
      gate: "A4A",
    },
    {
      airline: "Frontier",
      flight: "F91868",
      to: "Orlando (MCO)",
      scheduled: "9:32 AM",
      updated: "9:32 AM",
      status: "Departed",
      gate: "A2",
    },
    {
      airline: "Delta",
      flight: "DL5253",
      to: "Minneapolis (MSP)",
      scheduled: "10:00 AM",
      updated: "9:59 AM",
      status: "Departed",
      gate: "C4",
    },
    {
      airline: "American Airlines",
      flight: "AA4408",
      to: "Washington (DCA)",
      scheduled: "10:30 AM",
      updated: "10:28 AM",
      status: "Departed",
      gate: "C6",
    },
    {
      airline: "Allegiant",
      flight: "G41501",
      to: "Austin (AUS)",
      scheduled: "11:00 AM",
      updated: "10:55 AM",
      status: "Departed",
      gate: "A1",
    },
    {
      airline: "American Airlines",
      flight: "AA6170",
      to: "Chicago (ORD)",
      scheduled: "11:30 AM",
      updated: "11:25 AM",
      status: "Departed",
      gate: "A3",
    },
    {
      airline: "Southwest",
      flight: "WN2010",
      to: "Phoenix (PHX)",
      scheduled: "12:00 PM",
      updated: "11:55 AM",
      status: "In Air",
      gate: "B5",
    },
    {
      airline: "United",
      flight: "UA700",
      to: "Houston (IAH)",
      scheduled: "12:30 PM",
      updated: "12:25 PM",
      status: "Scheduled",
      gate: "C7",
    },
    {
      airline: "Delta",
      flight: "DL900",
      to: "Salt Lake City (SLC)",
      scheduled: "1:00 PM",
      updated: "12:58 PM",
      status: "Scheduled",
      gate: "C8",
    },
    {
      airline: "Allegiant",
      flight: "G41602",
      to: "Las Vegas (LAS)",
      scheduled: "1:30 PM",
      updated: "1:28 PM",
      status: "Scheduled",
      gate: "A2",
    },
    {
      airline: "American Airlines",
      flight: "AA4409",
      to: "Miami (MIA)",
      scheduled: "2:00 PM",
      updated: "1:59 PM",
      status: "In Air",
      gate: "C9",
    },
    {
      airline: "United",
      flight: "UA701",
      to: "Los Angeles (LAX)",
      scheduled: "2:30 PM",
      updated: "2:28 PM",
      status: "In Air",
      gate: "A1",
    },
    {
      airline: "Southwest",
      flight: "WN2011",
      to: "Dallas (DAL)",
      scheduled: "3:00 PM",
      updated: "2:58 PM",
      status: "Delayed",
      gate: "B6",
    },
    {
      airline: "Delta",
      flight: "DL5260",
      to: "Seattle (SEA)",
      scheduled: "3:30 PM",
      updated: "Cancelled",
      status: "Cancelled",
      gate: "C10",
    },
  ];

  const arrivals = [
    {
      airline: "Frontier",
      flight: "F91867",
      from: "Orlando (MCO)",
      updated: "8:11 AM",
      status: "Arrived",
      gate: "A2",
    },
    {
      airline: "American Airlines",
      flight: "AA1536",
      from: "Dallas-Fort Worth (DFW)",
      updated: "8:53 AM",
      status: "Arrived",
      gate: "C7",
    },
    {
      airline: "American Airlines",
      flight: "AA6172",
      from: "Chicago (ORD)",
      updated: "9:29 AM",
      status: "Arrived",
      gate: "C5",
    },
    {
      airline: "Delta",
      flight: "DL5058",
      from: "Detroit (DTW)",
      updated: "9:39 AM",
      status: "Arrived",
      gate: "C2",
    },
    {
      airline: "United",
      flight: "UA1362",
      from: "Denver (DEN)",
      updated: "10:00 AM",
      status: "Arrived",
      gate: "A4A",
    },
    {
      airline: "Frontier",
      flight: "F91869",
      from: "Las Vegas (LAS)",
      updated: "10:30 AM",
      status: "Arrived",
      gate: "A1",
    },
    {
      airline: "Delta",
      flight: "DL5254",
      from: "Minneapolis (MSP)",
      updated: "11:00 AM",
      status: "Arrived",
      gate: "C4",
    },
    {
      airline: "American Airlines",
      flight: "AA4410",
      from: "Washington (DCA)",
      updated: "11:30 AM",
      status: "Arrived",
      gate: "C6",
    },
    {
      airline: "Allegiant",
      flight: "G41502",
      from: "Austin (AUS)",
      updated: "12:00 PM",
      status: "Arrived",
      gate: "A2",
    },
    {
      airline: "Southwest",
      flight: "WN2012",
      from: "Phoenix (PHX)",
      updated: "12:30 PM",
      status: "Arrived",
      gate: "B5",
    },
    {
      airline: "United",
      flight: "UA702",
      from: "Houston (IAH)",
      updated: "1:00 PM",
      status: "In Air",
      gate: "C7",
    },
    {
      airline: "Delta",
      flight: "DL901",
      from: "Salt Lake City (SLC)",
      updated: "1:30 PM",
      status: "In Air",
      gate: "C8",
    },
    {
      airline: "Allegiant",
      flight: "G41603",
      from: "Las Vegas (LAS)",
      updated: "2:00 PM",
      status: "Delayed",
      gate: "A2",
    },
    {
      airline: "American Airlines",
      flight: "AA4411",
      from: "Miami (MIA)",
      updated: "2:30 PM",
      status: "Cancelled",
      gate: "C9",
    },
    {
      airline: "United",
      flight: "UA703",
      from: "Los Angeles (LAX)",
      updated: "3:00 PM",
      status: "Scheduled",
      gate: "A1",
    },
  ];

  const flights = activeFilter === "departures" ? departures : arrivals;
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
            <select className="flight-filter-select">
              <option>Filter by Airline</option>
            </select>
            <select className="flight-filter-select">
              <option>Filter by City</option>
            </select>
            <input
              type="text"
              className="flight-filter-search-input"
              placeholder="Search Flight #"
            />
            <button className="flight-filter-button">Filter</button>
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
              {flights.map((flight, index) => (
                <tr key={index}>
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
                  </td>
                  <td>{flight.gate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FlightStatus;
