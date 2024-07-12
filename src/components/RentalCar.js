import React from "react";
import "../styles/Rentals.css";

const RentalCars = () => {
  return (
    <div className="rental-cars-container">
      <h1>Rental Cars</h1>
      <p>
        The Des Moines International Airport has several rental car agencies
        serving the traveling public. All agencies are located inside the
        terminal baggage claim area. Each agency operates independently and
        hours of operation vary and are subject to change.
      </p>
      <table className="rental-cars-table">
        <thead>
          <tr>
            <th>Rental Agency</th>
            <th>Reservations</th>
            <th>Local Office</th>
            <th>Hours of Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alamo Car Rental</td>
            <td>877-222-9075</td>
            <td>515-256-5353</td>
            <td>Sun-Fri: 8 a.m. to 11:30 p.m./Sat: 8 a.m. to 10 p.m.</td>
          </tr>
          <tr>
            <td>American Rent-A-Car</td>
            <td>515-644-5255</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Avis Rental Car</td>
            <td>800-230-4898</td>
            <td>515-256-5623</td>
            <td>Sun-Fri: 8 a.m. to 11:30 p.m./Sat: 8 a.m. to 10 p.m.</td>
          </tr>
          <tr>
            <td>Budget Rent-A-Car</td>
            <td>800-527-0700</td>
            <td>515-287-2612</td>
            <td>Sun-Fri: 8 a.m. to 11:30 p.m./Sat: 8 a.m. to 10 p.m.</td>
          </tr>
          <tr>
            <td>Enterprise Rent-A-Car</td>
            <td>800-261-7331</td>
            <td>515-256-5665</td>
            <td>Sun-Fri: 8:30 a.m. to 6 p.m./Sat: 8:30 a.m. to 4 p.m.</td>
          </tr>
          <tr>
            <td>Hertz Car Rental</td>
            <td>800-654-3131</td>
            <td>515-285-9650</td>
            <td>Sun-Fri: 8:30 a.m. to 6 p.m./Sat: 8:30 a.m. to 4 p.m.</td>
          </tr>
          <tr>
            <td>National Car Rental</td>
            <td>877-222-9058</td>
            <td>515-256-5353</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button className="tutorial-button">Rental Car Return Tutorial</button>
    </div>
  );
};

export default RentalCars;
