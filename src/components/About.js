import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./About.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const About = ({ scrollToSection, openPopup }) => {
  const [showAirplane, setShowAirplane] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 2;
      if (window.scrollY > scrollThreshold) {
        setShowAirplane(true);
      } else {
        setShowAirplane(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAirplane]);

  const handleButtonClick = (sectionId) => {
    scrollToSection(sectionId);
    openPopup();
  };

  return (
    <div className="about-container">
      <div className="about-sidebar">
        <ul>
          <li>
            <Link to="/about-us/news">News & Statistics</Link>
          </li>
          <li>
            <Link to="/about-us/careers">Careers</Link>
          </li>
          <li>
            <Link
              to="/about-us/authority-leadership"
              className={
                location.pathname === "/about-us/authority-leadership"
                  ? "active"
                  : ""
              }
            >
              Authority Leadership
            </Link>
          </li>
        </ul>
      </div>

      <div className="about-content">
        <div className="about-header">
          <h1>About Us</h1>
          <p>
            DSM serves as the gateway to Des Moines and to the beautiful State
            of Iowa. As the largest airport in Iowa, located in the capital
            city, DSM welcomes people from across the country and beyond.
          </p>
          <p>
            DSM is an economic engine with an impact of $644 million to the
            local economy. We proudly generate more than 7,100 jobs for our
            region and state. And we facilitate incredible opportunities for
            businesses in the region.
          </p>
          <button className="about-button">Board Leadership</button>
          <button className="second-button">
            Board Meeting Agendas and Minutes
          </button>
        </div>

        <div className="about-section">
          <h2>DSM History</h2>
          <p>
            The Des Moines International Airport was established in 1933. The
            terminal was replaced in 1948 which is the facility we use to this
            day. The airport and the number of passengers have grown throughout
            the years. This is our story.
          </p>
          <p>
            In the 1920s, the Des Moines area had several small airports for
            general aviation and airmail. In 1929, the Iowa General Assembly
            passed a law allowing cities to sell bonds and levy assessments to
            build municipal airports. Over 80 sites were considered for the Des
            Moines airport until a decision was made to build on 160 acres of
            farmland south of the city. Construction of the airport began in
            1932 and was completed in 1933. The airport's first passenger
            terminal was built shortly after the airport was completed. It was
            replaced by a new terminal in 1948 that has been expanded and
            renovated several times. The present concourses were built in 1970,
            along with the remodeling of the terminal. The facility currently
            houses two coffee shops, three restaurants, a bodega style to-go
            shop, and two Hudson stores. The airport campus has expanded several
            times from its original 160-acres as well. The current campus
            expands 2600 acres and includes: two runways, 46 buildings, 7
            parking facilities, and the terminal.
          </p>
          <p>
            The airport was originally governed by the City of Des Moines' Parks
            Department. The City established a separate Aviation Department
            during the 1960s, and in 1982, a separate Aviation Policy Advisory
            Board was established. The airport was renamed the Des Moines
            International Airport in 1986 to acknowledge the presence of a
            United States Customs Service office at the airport. In 2011, the
            City of Des Moines transferred control from the City to the Des
            Moines Airport Authority. The city retains ownership of the land but
            transferred the title to all property and equipment to the public
            authority. In turn, the Authority agreed to a 99-year lease on the
            land. The organizational structure consists of a Board of five Des
            Moines citizens appointed by the Mayor of Des Moines and approved by
            the Des Moines City Council. The Airport Authority Executive team is
            led by an Executive Director, Assistant Executive Director, Director
            of Engineering & Planning, Director of Finance, and a Director of
            Operations. The terminal has two concourses: concourse A and C that
            American Airlines, Allegiant Air, Delta Air Lines, Frontier
            Airlines, Southwest Airlines, and United Airlines use to serve the
            traveling public.
          </p>
          <p>
            The Coronavirus pandemic had significant impacts on the Des Moines
            International Airport in 2020. DSM closed the year, serving
            1,295,685 passengers in 2020, a fraction of the passengers served in
            2019. A record number of passengers came through the airport in
            2019, with 2,919,904 people flying through DSM. The growth
            represented an increase of 5.3% from 2018. Although the airport
            experienced flight capacity changes in 2020, the airport celebrated
            a record number of nonstop destinations closing the year, having
            served 24 cities with nonstop service.
          </p>
        </div>

        <div className="section-links-container1">
          <div className="section-links1">
            <div
              className="link-item1"
              onClick={() => handleButtonClick("Flight-Status")}
            >
              <AiOutlineFolderOpen className="icon" />
              <p>Flight Status</p>
            </div>
            <div
              className="link-item1"
              onClick={() => handleButtonClick("Departures")}
            >
              <GiAirplaneDeparture className="icon" />
              <p>Departures</p>
            </div>
            <div
              className="link-item1"
              onClick={() => handleButtonClick("Arrivals")}
            >
              <GiAirplaneArrival className="icon" />
              <p>Arrivals</p>
            </div>
            <div
              className="link-item1"
              onClick={() => handleButtonClick("Parking")}
            >
              <CiParking1 className="icon" />
              <p>Parking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
