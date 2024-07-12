import React from "react";
import "../styles/RideShare.css";

const RideShare = () => {
  return (
    <div className="about-header">
      <h1>Ride Share</h1>
      <p>
        Uber and Lyft operate throughout the Greater Des Moines region and can
        get you to your final destination. Each ride share service drops off
        passengers at the airport entrance and picks up passengers on the south
        side of the terminal outside of the baggage claim exit.
      </p>
      <div className="ride-share-buttons">
        <button className="ride-share-button uber">Uber</button>
        <button className="ride-share-button lyft">Lyft</button>
      </div>

      <h2>Taxi Service</h2>
      <p>Taxis are located out of the baggage claim exit when leaving DSM.</p>
      <table className="taxi-service-table">
        <thead>
          <tr>
            <th>Taxi Cab Company</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yellow Cab Company</td>
            <td>(515) 243-1111</td>
          </tr>
        </tbody>
      </table>

      <h2>Limousines</h2>
      <p>
        Several limo companies serve the airport and region. For more
        information or to arrange service, contact the company directly.
      </p>
      <table className="limo-service-table">
        <thead>
          <tr>
            <th>Limousine Company</th>
            <th>Phone Number</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chauffeurs of Distinction</td>
            <td>(515) 993-1996</td>
            <td>
              <a href="https://www.chauffeursofdistinction.com">
                https://www.chauffeursofdistinction.com
              </a>
            </td>
          </tr>
          <tr>
            <td>CT Sedan Service</td>
            <td>(515) 423-5855</td>
            <td>
              <a href="http://www.ctsedanservice.com">
                http://www.ctsedanservice.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Gene's Transportation</td>
            <td>(515) 249-1127</td>
            <td></td>
          </tr>
          <tr>
            <td>Luxxor Limousine</td>
            <td>(515) 868-1819</td>
            <td>
              <a href="http://www.luxxorlimousines.com">
                http://www.luxxorlimousines.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Majestic Limo Service LLC</td>
            <td>(515) 650-5555</td>
            <td>
              <a href="http://www.majesticlimo.com">
                http://www.majesticlimo.com
              </a>
            </td>
          </tr>
          <tr>
            <td>NPI Limo Service LLC</td>
            <td>(515) 864-1515</td>
            <td>
              <a href="http://www.npilimoservice.com">
                http://www.npilimoservice.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Smithson Limousine Service</td>
            <td>(515) 285-6346</td>
            <td>
              <a href="http://smithsonlimousine.com">
                http://smithsonlimousine.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RideShare;
