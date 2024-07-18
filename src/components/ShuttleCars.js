import "../styles/ShuttleCars.css";

const ShuttleCars = () => {
  return (
    <div className="about-header">
      <h1>Shuttles</h1>
      <div className="shuttles-information">
        <p>
          Airport shuttles are free and take travelers to and from airport
          parking lots 24/7. Des Moines International Airport shuttles run on
          two routes: the{" "}
          <a
            href="https://buswhere.com/dsm/routes/grey-blue_route"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grey-Blue Route
          </a>{" "}
          and the{" "}
          <a
            href="https://buswhere.com/dsm/routes/red_route"
            target="_blank"
            rel="noopener noreferrer"
          >
            Red Route
          </a>
          . The route you board at the lot pick up will be the route you should
          look to take upon your arrival back at DSM. All routes take
          approximately 10 minutes from pick up to drop off. The convenient
          route map is below and you can track the shuttles in real-time For
          more details, click{" "}
          <a
            href="https://dsm.tripshot.com/g/tmsSystemMap/TMSSystemMap.html"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <img
          src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/ShuttlePoster_Phase1Map.png"
          alt="Shuttle Route Map"
          className="shuttle-map"
        />
        <h2>Hotel Shuttles</h2>
        <p>
          A number of hotels provide their customers with transportation to and
          from the Des Moines International Airport. Listed below are nearby
          lodging providers who provide shuttle service. When booking, please
          confirm this service in the event they have made changes.
        </p>
        <table className="shuttle-table">
          <thead></thead>
          <tbody>
            <tr>
              <td>AC Hotel by Marriott</td>
              <td>Des Moines East Village</td>
              <td>515-518-6060</td>
            </tr>
            <tr>
              <td>Americinn Hotel & Suites</td>
              <td>Des Moines Airport</td>
              <td>515-285-5180</td>
            </tr>
            <tr>
              <td>Baymont Inn & Suites by Wyndham</td>
              <td>Des Moines Airport</td>
              <td>515-285-0654</td>
            </tr>
            <tr>
              <td>Days Inn & Suites</td>
              <td>Des Moines Airport</td>
              <td>515-256-0603</td>
            </tr>
            <tr>
              <td>Des Lux Hotel</td>
              <td>Des Moines Downtown</td>
              <td>515-288-5800</td>
            </tr>
            <tr>
              <td>DoubleTree by Hilton</td>
              <td>Des Moines Airport</td>
              <td>515-285-7777</td>
            </tr>
            <tr>
              <td>Embassy Suites</td>
              <td>Des Moines Downtown</td>
              <td>515-244-1700</td>
            </tr>
            <tr>
              <td>Fairfield Inn & Suites</td>
              <td>Des Moines Airport</td>
              <td>515-309-4444</td>
            </tr>
            <tr>
              <td>Hampton Inn</td>
              <td>Des Moines Airport</td>
              <td>515-287-7300</td>
            </tr>
            <tr>
              <td>Hilton Des Moines Downtown</td>
              <td>Des Moines Downtown</td>
              <td>515-241-1456</td>
            </tr>
            <tr>
              <td>Hyatt Place</td>
              <td>Des Moines Downtown</td>
              <td>515-282-5555</td>
            </tr>
            <tr>
              <td>Marriott</td>
              <td>Des Moines Downtown</td>
              <td>515-245-5500</td>
            </tr>
            <tr>
              <td>Marriott</td>
              <td>West Des Moines</td>
              <td>515-267-1500</td>
            </tr>
            <tr>
              <td>Quality Inn & Suites</td>
              <td>Des Moines Airport</td>
              <td>515-287-3434</td>
            </tr>
            <tr>
              <td>Ramada Des Moines Airport Hotel & Convention Center</td>
              <td>Des Moines Airport</td>
              <td>515-287-6464</td>
            </tr>
            <tr>
              <td>Renaissance Des Moines Savery Hotel</td>
              <td>Des Moines Downtown</td>
              <td>515-244-2151</td>
            </tr>
            <tr>
              <td>Sheraton</td>
              <td>West Des Moines</td>
              <td>515-223-1800</td>
            </tr>
          </tbody>
        </table>
        <h2>Regional Shuttles</h2>
        <p>
          Connecting to your final destination in Central Iowa is a breeze with
          one of these regional shuttle services.
        </p>
        <p>
          <strong>Ames</strong> is a popular destination from the DSM
          International Airport because of Iowa State University and many
          prominent national companies. If you specifically want transportation
          to Iowa State University (ISU) for an event or a campus visit for
          potential students, contact:{" "}
          <a
            href="https://www.iastate.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Iowa State University ISU website
          </a>
          .
        </p>
        <p>
          <strong>
            Intra-City Shuttle (between Iowa towns/cities):{" "}
            <a
              href="https://www.executiveexpress.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Executive Express
            </a>
          </strong>{" "}
          will provide shuttle service to and from Ames, IA, on a regular basis.
          They are also a great resource for commuting to other Central Iowa
          destinations and northern towns along the I-35 corridor between Des
          Moines and Minneapolis, MN. Call to arrange transportation to your
          desired destination. Executive Express is located at the north-end of
          baggage claim near the rental car counters.
        </p>
        <p style={{ marginBottom: "90px" }}>
          <strong>Windstar Lines:</strong> Call 1-888-494-6378 or visit{" "}
          <a
            href="http://www.gowindstar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            http://www.gowindstar.com.
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ShuttleCars;
