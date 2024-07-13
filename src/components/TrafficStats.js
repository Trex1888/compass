import { useParams, NavLink, useLocation } from "react-router-dom";
import "../styles/TrafficStats.css";
import statsImage from "../images/minutes.jpg";
import pressImage from "../images/news.jpg";

const TrafficStats = () => {
  const { title } = useParams();
  const location = useLocation();

  const newsData = {
    "june-2024-airport-traffic-statistics": {
      title: "June 2024 Airport Traffic Statistics",
      date: "June 1, 2024",
      image: statsImage,
    },
    "may-2024-airport-traffic-statistics": {
      title: "May 2024 Airport Traffic Statistics",
      date: "May 1, 2024",
      image: statsImage,
    },
    "april-2024-airport-traffic-statistics": {
      title: "April 2024 Airport Traffic Statistics",
      date: "April 1, 2024",
      image: statsImage,
    },
    "march-2024-airport-traffic-statistics": {
      title: "March 2024 Airport Traffic Statistics",
      date: "March 1, 2024",
      image: statsImage,
    },
    "february-2024-airport-traffic-statistics": {
      title: "February 2024 Airport Traffic Statistics",
      date: "February 1, 2024",
      image: statsImage,
    },
    "january-2024-airport-traffic-statistics": {
      title: "January 2024 Airport Traffic Statistics",
      date: "January 1, 2024",
      image: statsImage,
    },
    "new-terminal-expansion-announced": {
      title: "New Terminal Expansion Announced",
      date: "June 1, 2024",
      image: pressImage,
    },
    "record-breaking-passenger-numbers": {
      title: "Record-Breaking Passenger Numbers",
      date: "April 15, 2024",
      image: pressImage,
    },
    "airport-receives-environmental-excellence-award": {
      title: "Airport Receives Environmental Excellence Award",
      date: "February 28, 2024",
      image: pressImage,
    },
    "new-nonstop-flights-to-europe": {
      title: "New Nonstop Flights to Europe",
      date: "December 5, 2023",
      image: pressImage,
    },
    "autumn-travel-tips-from-dsm-airport": {
      title: "Autumn Travel Tips from DSM Airport",
      date: "October 20, 2023",
      image: pressImage,
    },
    "summer-travel-advisory": {
      title: "Summer Travel Advisory",
      date: "June 30, 2023",
      image: pressImage,
    },
  };

  const newsItem = newsData[title];

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  const isTrafficStatistics = location.pathname.includes(
    "about-us/news/june-2024-airport-traffic-statistics"
  );

  return (
    <div className="traffic-stats-container">
      <div
        className="traffic-stats-header"
        style={{ zIndex: isTrafficStatistics ? 0 : "initial" }}
      >
        <img
          src={newsItem.image}
          alt="Traffic Statistics"
          className="traffic-stats-image"
        />
      </div>
      <div className="traffic-stats-content">
        <h1>{newsItem.title}</h1>
        <p>{newsItem.date}</p>
        <button className="stats-button">
          {newsItem.title.split(" ")[0]} {newsItem.title.split(" ")[1]}
        </button>
        <div>
          <NavLink to="/about-us/news" className="back-link">
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TrafficStats;
