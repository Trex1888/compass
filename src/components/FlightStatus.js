import React, { useState } from "react";
import flightsAndTravelImage from "../images/mainPlane.png";
import "./FlightStatus.css";

const FlightStatus = () => {
  const [activeFilter, setActiveFilter] = useState("departures");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
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
      status: "Arrived",
      gate: "A2",
    },
    {
      airline: "United",
      flight: "UA581",
      to: "Denver (DEN)",
      scheduled: "9:15 AM",
      updated: "9:07 AM",
      status: "In Air",
      gate: "A4A",
    },
    {
      airline: "Frontier",
      flight: "F91868",
      to: "Orlando (MCO)",
      scheduled: "9:32 AM",
      updated: "9:32 AM",
      status: "Arrived",
      gate: "A2",
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
              activeFilter === "arrivals" ? "rotate(-7deg)" : "rotate(0)",
          }}
        />
      </div>
      <div className="flight-status-text">
        <h1>Flight Status</h1>
        <div className="filters">
          <button
            className={`filter-button ${
              activeFilter === "departures" ? "active" : "inactive"
            }`}
            onClick={() => handleFilterChange("departures")}
          >
            Departures
          </button>
          <button
            className={`filter-button ${
              activeFilter === "arrivals" ? "active" : "inactive"
            }`}
            onClick={() => handleFilterChange("arrivals")}
          >
            Arrivals
          </button>
        </div>
        <div className="filter-inputs">
          <select>
            <option>Filter by Airline</option>
          </select>
          <select>
            <option>Filter by City</option>
          </select>
          <input type="text" placeholder="Search Flight #" />
          <button className="filter-button">Filter</button>
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
                        flight.status === "In Air" ? "green" : "orange"
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
                  <td>{flight.status}</td>
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
