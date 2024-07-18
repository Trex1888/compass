import React from "react";
import { BsPersonWalking } from "react-icons/bs";
import { IoBusOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import "../styles/Parking.css";

const Parking = () => {
  const scrollToEstimator = () => {
    const element = document.getElementById("parking-estimator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about-header">
      <div className="parking-container">
        <h1
          style={{
            fontWeight: 300,
            marginTop: "75px",
            marginBottom: "2px",
            fontSize: "34px",
          }}
        >
          Airport Parking
        </h1>
        <div className="parking-header">
          <p>
            DSM offers convenient onsite parking starting at $7 per day along
            with free shuttles to the terminal from economy lots. The economy
            lots are surface lots and are uncovered. The parking garage provides
            covered parking starting at $20/day. Reserved parking is not an
            option; however, shuttles run continuously to the Grey, Red, and
            Blue Lots ensure no matter which lot you park in you have swift
            access to the terminal. Track the{" "}
            <a
              href="https://buswhere.com/dsm/routes/grey-blue_route"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Grey-Blue Route</strong>
            </a>{" "}
            and the{" "}
            <a
              href="https://buswhere.com/dsm/routes/red_route"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Red Route</strong>
            </a>
            .
          </p>
          <img
            src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/DSMAirport_ParkDSM-Color.png"
            alt="Park DSM"
          />
        </div>
        <h3>Cell Phone Waiting Lot </h3>
        <p>
          Use the convenient{" "}
          <a
            href="https://www.google.com/maps/place/Des+Moines+Airport+Cell+Phone+Waiting+Lot/@41.5304011,-93.6464933,15z/data=!4m6!3m5!1s0x87eea3a9ccf9d85f:0xa431d69ae4e3530c!8m2!3d41.5304011!4d-93.6464933!16s%2Fg%2F11sjhp80qf?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <strong>Cell Phone Waiting Lot</strong>
          </a>{" "}
          for free parking while you wait in your vehicle to pick up a
          passenger. Only active loading or unloading is permitted on the front
          curb of the airport terminal. Unattended vehicles will be ticketed and
          towed. If you'd like to meet your arriving guest in the terminal, park
          in one of the available parking lots. The hourly lot includes 20
          minutes of free parking and then is $2 every hour thereafter.
        </p>
        <p>
          The Cell Phone Waiting Lot is across from the Blue Lot. View the{" "}
          <a
            href="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Terminal%20Parking%20Map.png"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            parking map
          </a>{" "}
          for the location.
        </p>
        <div className="button-container">
          <button
            style={{ width: "300px" }}
            className="btn"
            onClick={() =>
              window.open(
                "https://buswhere.com/dsm/routes/grey-blue_route",
                "_blank"
              )
            }
          >
            Grey-Blue Shuttle Route
          </button>{" "}
          <button
            className="btn"
            onClick={() =>
              window.open("https://buswhere.com/dsm/routes/red_route", "_blank")
            }
          >
            Red Shuttle Route
          </button>
          <button className="btn" onClick={scrollToEstimator}>
            Parking Estimator
          </button>
        </div>
        <h3>Real-time Parking Availability</h3>
        <table className="parking-table">
          <thead>
            <tr>
              <th>Parking Lot</th>
              <th>Cost (Per Hour)</th>
              <th>Max Per 24 Hours</th>
              <th>%Full</th>
              <th>Open</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="dot dot-green"></span>Garage Hourly
                <span className="park-icons">
                  <MdLocationOn className="park-icon" />
                  <BsPersonWalking className="park-icon" />
                </span>
              </td>
              <td>
                <div className="main-text">
                  First 20 minutes Free
                  <span className="small-text">$2 per hour</span>
                </div>
              </td>
              <td>$48/day</td>
              <td>43%</td>
              <td>197</td>
            </tr>
            <tr>
              <td>
                <span className="dot dot-red"></span>Garage Daily (Long Term)
                <span className="park-icons">
                  <MdLocationOn className="park-icon" />
                  <BsPersonWalking className="park-icon" />
                </span>
              </td>
              <td>
                <div className="main-text">
                  $1 every 20 minutes
                  <span className="small-text">$20/day</span>
                </div>
              </td>
              <td>$20/day</td>
              <td>83%</td>
              <td>240</td>
            </tr>
            <tr>
              <td>
                <span className="dot dot-red"></span>Blue Economy Lot
                <span className="park-icons">
                  <MdLocationOn className="park-icon" />
                  <BsPersonWalking className="park-icon" />
                  <IoBusOutline className="park-icon" />
                </span>
              </td>
              <td>
                <div className="main-text">
                  $2 per hour
                  <span className="small-text">$12/day</span>
                </div>
              </td>
              <td>$12/day</td>
              <td>96%</td>
              <td>22</td>
            </tr>
            <tr>
              <td>
                <span className="dot dot-green"></span>Red Economy Lot
                <span className="park-icons">
                  <MdLocationOn className="park-icon" />
                  <IoBusOutline className="park-icon" />
                </span>
              </td>
              <td>
                <div className="main-text">
                  $2 per hour
                  <span className="small-text">$8/day</span>
                </div>
              </td>
              <td>$8/day</td>
              <td>40%</td>
              <td>446</td>
            </tr>
            <tr>
              <td>
                <span className="dot dot-green"></span>Grey Economy Lot
                <span className="park-icons">
                  <MdLocationOn className="park-icon" />
                  <IoBusOutline className="park-icon" />
                </span>
              </td>
              <td>
                <div className="main-text">
                  $2 per hour
                  <span className="small-text">$7/day</span>
                </div>
              </td>
              <td>$7/day</td>
              <td>64%</td>
              <td>622</td>
            </tr>
          </tbody>
        </table>
        <h2
          style={{
            marginTop: "60px",
            marginBottom: "-5px",
          }}
          id="parking-estimator"
        >
          Estimate Your Parking Costs
        </h2>
        <p>
          Enter your entry and exit date below to calculate your estimated
          parking costs.
        </p>
        <form className="parking-form">
          <label>
            <span className="label-text">
              Entry Date<span className="required-asterisk">*</span>
            </span>
            <input type="date" required />
          </label>
          <label>
            <span className="label-text">
              Entry Time<span className="required-asterisk">*</span>
            </span>
            <input type="time" required />
          </label>
        </form>

        <form className="parking-form">
          <label>
            <span className="label-text">
              Exit Date<span className="required-asterisk">*</span>
            </span>
            <input type="date" required />
          </label>
          <label>
            <span className="label-text">
              Exit Time<span className="required-asterisk">*</span>
            </span>
            <input type="time" required />
          </label>
        </form>

        <h2
          style={{
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          Estimated Parking Costs
        </h2>
        <table className="estimated-cost-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Estimated Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Garage Hourly</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Garage Daily (Long Term)</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Blue Economy Lot</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Red Economy Lot</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Grey Economy Lot</td>
              <td>$0.00</td>
            </tr>
          </tbody>
        </table>
        <p
          style={{
            fontSize: "12px",
            fontStyle: "italic",
            marginTop: "70px",
            marginBottom: "70px",
            lineHeight: "2",
          }}
        >
          Parking estimates based on entry and exit times provided above, actual
          parking charges will be based upon your actual entry and exit from the
          parking lot based on currently posted parking rates.
        </p>

        <h2 style={{ fontWeight: "bold", marginBottom: "-20px" }}>
          Parking Map
        </h2>

        <p>
          Quickly locate the lot of your choice with this color-coded{" "}
          <a
            href="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Terminal%20Parking%20Map.png"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            parking map
          </a>
          .
        </p>
        <p>
          Travelers are able to park for up to 60 consecutive days in any
          airport lot. Unattended vehicles parked for longer than 60 days are
          subject to removal. Contact the SP+ Parking office at 515-256-5038 for
          questions about longer stays. Please note, official Airport Parking
          does not offer or accept coupons.
        </p>

        <p style={{ marginBottom: "75px" }}>
          <strong>*CONSTRUCTION ALERT:</strong> During construction of the new
          parking garage there will be impacts to several airport lots. The Cell
          Phone Waiting Lot is across from the Blue Lot. While surface lot
          parking will be impacted temporarily during construction, over 1,100
          stalls will be made available upon its completion. Learn more at our{" "}
          <a
            href="/lift-dsm"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lift DSM
          </a>{" "}
          website.
        </p>
        <h2>Car Trouble?</h2>
        <p style={{ marginBottom: "75px", marginTop: "-10px" }}>
          If you are parked in an airport parking lot and experience car issues,
          please contact{" "}
          <a href="tel:5152565000" className="link">
            (515) 256-5000
          </a>{" "}
          for assistance.
        </p>
      </div>{" "}
    </div>
  );
};

export default Parking;
