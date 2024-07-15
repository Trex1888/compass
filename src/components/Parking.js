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
        <h1>Airport Parking</h1>
        <p>
          DSM offers convenient onsite parking starting at $7 per day along with
          free shuttles to the terminal from economy lots. The economy lots are
          surface lots and are uncovered. The parking garage provides covered
          parking starting at $20/day. Reserved parking is not an option;
          however, shuttles run continuously to the Grey, Red, and Blue Lots
          ensure no matter which lot you park in you have swift access to the
          terminal. Track the{" "}
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
        <h2>Real-time Parking Availability</h2>
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
              <td>Garage Hourly</td>
              <td>
                First 20 minutes Free <br />
                $2 per hour
              </td>
              <td>$48/day</td>
              <td>43%</td>
              <td>197</td>
            </tr>
            <tr>
              <td>Garage Daily (Long Term)</td>
              <td>$1 every 20 minutes</td>
              <td>$20/day</td>
              <td>83%</td>
              <td>240</td>
            </tr>
            <tr>
              <td>Blue Economy Lot</td>
              <td>$2 per hour</td>
              <td>$12/day</td>
              <td>96%</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Red Economy Lot</td>
              <td>$2 per hour</td>
              <td>$8/day</td>
              <td>40%</td>
              <td>446</td>
            </tr>
            <tr>
              <td>Grey Economy Lot</td>
              <td>$2 per hour</td>
              <td>$7/day</td>
              <td>64%</td>
              <td>622</td>
            </tr>
          </tbody>
        </table>
        <h2 id="parking-estimator">Estimate Your Parking Costs</h2>
        <p>
          Enter your entry and exit date below to calculate your estimated
          parking costs.
        </p>
        <form className="parking-form">
          <label>
            Entry Date
            <input type="date" required />
          </label>
          <label>
            Entry Time
            <input type="time" required />
          </label>
          <label>
            Exit Date
            <input type="date" required />
          </label>
          <label>
            Exit Time
            <input type="time" required />
          </label>
        </form>
        <h2>Estimated Parking Costs</h2>
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
        <h2>Parking Map</h2>
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

        <p>
          <strong>Construction Alert:</strong> During construction of the new
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
        <p style={{ marginBottom: "20px" }}>
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
