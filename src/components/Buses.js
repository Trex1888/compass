import React from "react";
import "../styles/Buses.css";

const Buses = () => {
  return (
    <div className="about-header">
      <h1>Buses & Paratransit</h1>
      <div className="bus-transporation">
        <p>
          Access to public transit has never been easier. Several organizations
          can be booked to get you where you need to go.
        </p>

        <h2>Bus Transportation</h2>
        <p>
          Several services are offered via bus including metro transit,
          interstate bus lines, and the Heart of Iowa Regional Transit Agency
          which provides transportation throughout Polk County as well as
          counties surrounding the Des Moines International Airport.
        </p>

        <h3>Des Moines Area Regional Transit (DART)</h3>
        <p>
          Bus service is available to and from the airport Monday through Friday
          from the Des Moines Area Regional Transit Authority (DART).
        </p>

        <table className="bus-table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Phone Number</td>
              <td>515-283-8100</td>
            </tr>
            <tr>
              <td>Route Schedule</td>
              <td>
                <a
                  href="https://www.ridedart.com/routes/local/8-fleur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Route #8 serves the Des Moines International Airport
                </a>
              </td>
            </tr>
            <tr>
              <td>Route Map</td>
              <td>
                <a
                  href="https://www.ridedart.com/routes/local"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
              </td>
            </tr>
            <tr>
              <td>Paratransit Bus Service</td>
              <td>
                <a
                  href="https://www.ridedart.com/services/paratransit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Heart of Iowa Regional Transit Agency (HIRTA)</h3>
        <p>
          HIRTA is your connection to arrange transportation to counties
          surrounding Polk County and the Des Moines International Airport.
          Counties serviced: Dallas, Jasper, Madison, Marion, and Warren.
        </p>

        <table className="bus-table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Website</td>
              <td>
                <a href="https://www.hirtapublictransit.com">
                  https://www.hirtapublictransit.com
                </a>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href="mailto:info@hirtapublictransit.com">
                  info@hirtapublictransit.com
                </a>
              </td>
            </tr>
            <tr>
              <td>Toll Free Phone</td>
              <td>877-686-0029</td>
            </tr>
          </tbody>
        </table>

        <h3>Interstate Bus Lines</h3>
        <p>
          For destinations outside of the Greater Des Moines Metro Area and the
          Central Iowa region, contact the bus system providers below. Please
          note, these services are off the airport campus. Cabs are available
          for transportation to the bus line dispatch centers.
        </p>

        <table className="bus-table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Greyhound Bus Lines</td>
              <td>515-243-1773</td>
            </tr>
            <tr>
              <td>Jefferson Bus Lines</td>
              <td>888-864-2838</td>
            </tr>
            <tr>
              <td>Trailways Bus System</td>
              <td>515-288-9459</td>
            </tr>
            <tr>
              <td>Windstar Lines</td>
              <td>888-494-6378</td>
            </tr>
          </tbody>
        </table>

        <h2>Paratransit</h2>
        <p style={{ marginTop: "-10px", marginBottom: "30px" }}>
          For paratransit services, please contact one of these local providers.
        </p>

        <table style={{ marginBottom: "150px" }} className="bus-table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Fraser Medical Services</td>
              <td>515-284-1111</td>
            </tr>
            <tr>
              <td>Midwest Ambulance, Inc.</td>
              <td>515-252-0022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Buses;
