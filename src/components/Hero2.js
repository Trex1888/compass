import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero2.css";

const Hero2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleNavigation = (url) => {
    navigate(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const element = document.getElementById(url.split("/").pop());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const destinations = [
    {
      city: "Atlanta, GA",
      airport: "Hartsfield-Jackson International Airport (ATL)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.atlanta-airport.com/",
      airlines: ["Delta"],
      description:
        "Experience Southern hospitality in Atlanta, Georgia. You can fly direct from Des Moines to Atlanta with Delta Airlines. Book your trip today!",
    },
    {
      city: "Austin, TX",
      airport: "Austin-Bergstrom International Airport (AUS)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.austintexas.gov/airport",
      airlines: ["Southwest"],
      description:
        "Explore the vibrant city of Austin, Texas. Fly direct from Des Moines to Austin with Southwest Airlines. Book your trip today!",
    },
    {
      city: "Charlotte, NC",
      airport: "Charlotte Douglas International Airport (CLT)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.cltairport.com/",
      airlines: ["American"],
      description:
        "Discover the charm of Charlotte, North Carolina. Fly direct from Des Moines to Charlotte with American Airlines. Book your trip today!",
    },
    {
      city: "Chicago, IL - ORD",
      airport: "Chicago O'Hare International Airport (ORD)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.flychicago.com/",
      airlines: ["United"],
      description:
        "Experience the bustling city of Chicago, Illinois. Fly direct from Des Moines to Chicago O'Hare with United Airlines. Book your trip today!",
    },
    {
      city: "Dallas, TX",
      airport: "Dallas Ft. Worth International Airport (DFW)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.dfwairport.com/",
      airlines: ["American"],
      description:
        "Visit the dynamic city of Dallas, Texas. Fly direct from Des Moines to Dallas Ft. Worth with American Airlines. Book your trip today!",
    },
    {
      city: "Denver, CO",
      airport: "Denver International Airport (DEN)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.flydenver.com/",
      airlines: ["United"],
      description:
        "Explore the stunning landscapes of Denver, Colorado. Fly direct from Des Moines to Denver with United Airlines. Book your trip today!",
    },
    {
      city: "Destin, FL",
      airport: "Destin-Fort Walton Beach Airport (VPS)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.flyvps.com/",
      airlines: ["Allegiant"],
      description:
        "Relax on the beautiful beaches of Destin, Florida. Fly direct from Des Moines to Destin with Allegiant Airlines. Book your trip today!",
    },
    {
      city: "Detroit, MI",
      airport: "Detroit Metro Airport (DTW)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.metroairport.com/",
      airlines: ["Delta"],
      description:
        "Discover the history and culture of Detroit, Michigan. Fly direct from Des Moines to Detroit with Delta Airlines. Book your trip today!",
    },
    {
      city: "Fort Lauderdale, FL",
      airport: "Fort Lauderdale-Hollywood International Airport (FLL)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.broward.org/airport/",
      airlines: ["Southwest"],
      description:
        "Enjoy the sunny beaches of Fort Lauderdale, Florida. Fly direct from Des Moines to Fort Lauderdale with Southwest Airlines. Book your trip today!",
    },
    {
      city: "Houston, TX - HOU",
      airport: "William P. Hobby Airport (HOU)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.fly2houston.com/hou/",
      airlines: ["Southwest"],
      description:
        "Experience the energy of Houston, Texas. Fly direct from Des Moines to Houston Hobby with Southwest Airlines. Book your trip today!",
    },
    {
      city: "Houston, TX - IAH",
      airport: "George Bush Intercontinental Airport (IAH)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.fly2houston.com/iah/",
      airlines: ["United"],
      description:
        "Explore the diverse city of Houston, Texas. Fly direct from Des Moines to Houston Intercontinental with United Airlines. Book your trip today!",
    },
    {
      city: "Las Vegas, NV",
      airport: "Las Vegas-McCarran International Airport (LAS)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.mccarran.com/",
      airlines: ["Allegiant"],
      description:
        "Experience the excitement of Las Vegas, Nevada. Fly direct from Des Moines to Las Vegas with Allegiant Airlines. Book your trip today!",
    },
    {
      city: "Los Angeles, CA",
      airport: "Los Angeles International Airport (LAX)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.flylax.com/",
      airlines: ["Delta"],
      description:
        "Visit the iconic city of Los Angeles, California. Fly direct from Des Moines to Los Angeles with Delta Airlines. Book your trip today!",
    },
    {
      city: "Miami, FL",
      airport: "Miami International Airport (MIA)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.miami-airport.com/",
      airlines: ["American"],
      description:
        "Enjoy the vibrant culture of Miami, Florida. Fly direct from Des Moines to Miami with American Airlines. Book your trip today!",
    },
    {
      city: "Minneapolis, MN",
      airport: "Minneapolis-St. Paul International Airport (MSP)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.mspairport.com/",
      airlines: ["Delta"],
      description:
        "Explore the Twin Cities of Minneapolis-St. Paul, Minnesota. Fly direct from Des Moines to Minneapolis with Delta Airlines. Book your trip today!",
    },
    {
      city: "Nashville, TN",
      airport: "Nashville International Airport (BNA)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.flynashville.com/",
      airlines: ["Southwest"],
      description:
        "Discover the music scene of Nashville, Tennessee. Fly direct from Des Moines to Nashville with Southwest Airlines. Book your trip today!",
    },
    {
      city: "New York City, NY",
      airport: "LaGuardia Airport (LGA)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.laguardiaairport.com/",
      airlines: ["Delta"],
      description:
        "Experience the Big Apple in New York City. Fly direct from Des Moines to LaGuardia with Delta Airlines. Book your trip today!",
    },
    {
      city: "Newark, NJ",
      airport: "Newark Liberty International Airport (EWR)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.newarkairport.com/",
      airlines: ["United"],
      description:
        "Visit the bustling city of Newark, New Jersey. Fly direct from Des Moines to Newark with United Airlines. Book your trip today!",
    },
    {
      city: "Orange County, CA",
      airport: "John Wayne Airport (SNA)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.ocair.com/",
      airlines: ["American"],
      description:
        "Explore the beauty of Orange County, California. Fly direct from Des Moines to Orange County with American Airlines. Book your trip today!",
    },
    {
      city: "Orlando, FL",
      airport: "Orlando International Airport (MCO)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.orlandoairports.net/",
      airlines: ["Frontier"],
      description:
        "Enjoy the theme parks and attractions of Orlando, Florida. Fly direct from Des Moines to Orlando with Frontier Airlines. Book your trip today!",
    },
    {
      city: "Phoenix, AZ",
      airport: "Phoenix Sky Harbor International Airport (PHX)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.skyharbor.com/",
      airlines: ["American"],
      description:
        "Experience the desert beauty of Phoenix, Arizona. Fly direct from Des Moines to Phoenix with American Airlines. Book your trip today!",
    },
    {
      city: "San Diego, CA",
      airport: "San Diego International Airport (SAN)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.san.org/",
      airlines: ["Alaska"],
      description:
        "Visit the beautiful city of San Diego, California. Fly direct from Des Moines to San Diego with Alaska Airlines. Book your trip today!",
    },
    {
      city: "San Francisco, CA",
      airport: "San Francisco International Airport (SFO)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.flysfo.com/",
      airlines: ["United"],
      description:
        "Explore the iconic city of San Francisco, California. Fly direct from Des Moines to San Francisco with United Airlines. Book your trip today!",
    },
    {
      city: "Seattle, WA",
      airport: "Seattle-Tacoma International Airport (SEA)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.portseattle.org/sea-tac/",
      airlines: ["Alaska"],
      description:
        "Discover the vibrant city of Seattle, Washington. Fly direct from Des Moines to Seattle with Alaska Airlines. Book your trip today!",
    },
    {
      city: "Sarasota, FL",
      airport: "Sarasota-Bradenton International Airport (SRQ)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.srq-airport.com/",
      airlines: ["Allegiant"],
      description:
        "Relax on the beautiful beaches of Sarasota, Florida. Fly direct from Des Moines to Sarasota with Allegiant Airlines. Book your trip today!",
    },
    {
      city: "St. Louis, MO",
      airport: "Lambert-St. Louis International Airport (STL)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.flystl.com/",
      airlines: ["Southwest"],
      description:
        "Experience the historic city of St. Louis, Missouri. Fly direct from Des Moines to St. Louis with Southwest Airlines. Book your trip today!",
    },
    {
      city: "St. Petersburg, FL",
      airport: "St. Petersburg-Clearwater International Airport (PIE)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.fly2pie.com/",
      airlines: ["Allegiant"],
      description:
        "Enjoy the sunny beaches of St. Petersburg, Florida. Fly direct from Des Moines to St. Petersburg with Allegiant Airlines. Book your trip today!",
    },
    {
      city: "Washington D.C.",
      airport: "Ronald Reagan Washington National Airport (DCA)",
      img: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0026_atlanta-georgia.jpg",
      url: "http://www.flyreagan.com/",
      airlines: ["American"],
      description:
        "Explore the nation's capital in Washington D.C. Fly direct from Des Moines to Washington D.C. with American Airlines. Book your trip today!",
    },
  ];

  return (
    <div className="hero2-section">
      <div className="hero2-container">
        <h1>Nonstop Flights From Des Moines</h1>
        <p>
          Numerous airlines offer nonstop flights from Des Moines International
          Airport (DSM) to some of the nation’s most popular destinations. With
          dozens of direct flight destinations to choose from, it’s simple and
          convenient to plan business and leisure travel from Des Moines.
        </p>
        <p>
          Some nonstop routes may be offered seasonally, so be sure to check
          with individual airlines when booking your travel.
        </p>
        <p>
          <button
            onClick={() =>
              handleNavigation("/flights-and-travel/airline-information")
            }
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Learn more
          </button>{" "}
          about the airlines offering air service from the Des Moines
          International Airport.
        </p>
        <h2>
          Explore Direct Flights from Des Moines to the Nation's Top
          Destinations
        </h2>
        <p>
          We’re proud to connect Iowans with popular travel destinations across
          the country. Avoid dealing with layovers, and enjoy the convenience
          and simplicity of a nonstop flight from Des Moines to one of these
          exciting destinations. Search all destinations below or by airline
          using the filter box on the right side of the page.
        </p>
        <div className="select-airline">
          <h2>Nonstop Flight Options</h2>
          <select>
            <option value="">Select Airline</option>
            <option value="american">American Airlines</option>
            <option value="delta">Delta</option>
            <option value="southwest">Southwest</option>
            <option value="united">United</option>
            <option value="allegiant">Allegiant</option>
            <option value="frontier">Frontier</option>
          </select>
        </div>
        <div className="table-header">
          <span>Destination</span>
          <span>Airport</span>
        </div>
        <div className="accordion">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <div className="header-content">
                  <span>{activeIndex === index ? "x" : "+"}</span>
                  <h4>{destination.city}</h4>
                  <p>{destination.airport}</p>
                </div>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <img src={destination.img} alt={destination.city} />
                  <div>
                    <p>{destination.description}</p>
                    <a
                      href={destination.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {destination.airport}
                    </a>
                    <h5>Book Flight:</h5>
                    {destination.airlines.map((airline, i) => (
                      <p key={i}>{airline}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="new-data-section">
          <h2>Plan Your Des Moines Flight</h2>
          <p>
            As you prepare for your trip, find everything you need to know about
            traveling out of the Des Moines International Airport. View{" "}
            <button
              onClick={() =>
                handleNavigation("/at-the-airport/maps-directions")
              }
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              maps and directions
            </button>
            , and read about short term and long term{" "}
            <button
              onClick={() => handleNavigation("/at-the-airport/parking")}
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              parking at the airport
            </button>
            . Explore additional travel resources and{" "}
            <button
              onClick={() => handleNavigation("/traveler-info")}
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              trip preparation information
            </button>
            , and{" "}
            <button
              onClick={() => handleNavigation("/contact")}
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              reach out to us
            </button>{" "}
            if you have any questions about traveling from DSM.
          </p>
          <h2>What airlines fly out of DSM?</h2>
          <p>
            A number of airlines offer nonstop and connective service from Des
            Moines to cities across the United States, including:
          </p>
          <ul>
            <li>Allegiant Air</li>
            <li>American Airlines</li>
            <li>Delta Airlines</li>
            <li>Frontier Airlines</li>
            <li>Southwest Airlines</li>
            <li>United Airlines</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
