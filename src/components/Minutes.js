import { useParams, NavLink } from "react-router-dom";
import "../styles/Agenda1.css";

const Minutes = () => {
  const { title } = useParams();

  const newsData = {
    "may-14-2024-meeting-minutes": {
      title: "May 14, 2024, Meeting Minutes",
      date: "June 11, 2024",
    },
    "march-12-2024-meeting-minutes": {
      title: "March 12, 2024, Meeting Minutes",
      date: "April 15, 2024",
    },
    "february-13-2024-meeting-minutes": {
      title: "February 13, 2024, Meeting Minutes",
      date: "March 12, 2024",
    },
    "december-12-2023-meeting-minutes": {
      title: "December 12, 2023, Meeting Minutes",
      date: "January 5, 2024",
    },
    "october-10-2023-meeting-minutes": {
      title: "October 10, 2023, Meeting Minutes",
      date: "October 15, 2023",
    },
    "august-8-2023-meeting-minutes": {
      title: "August 8, 2023, Meeting Minutes",
      date: "August 15, 2023",
    },
    "june-13-2023-meeting-minutes": {
      title: "June 13, 2023, Meeting Minutes",
      date: "June 15, 2023",
    },
    "april-11-2023-meeting-minutes": {
      title: "April 11, 2023, Meeting Minutes",
      date: "April 15, 2023",
    },
  };

  const newsItem = newsData[title];

  if (!newsItem) {
    return <div>Minutes item not found</div>;
  }

  return (
    <div className="traffic1-stats-container">
      <div className="traffic1-stats-content">
        <h1>{newsItem.title}</h1>
        <p>{newsItem.date}</p>
        <button className="stats1-button">
          {newsItem.title.split(" ")[0]} {newsItem.title.split(" ")[1]}{" "}
          {newsItem.title.includes("Minutes") ? "Minutes" : ""}
        </button>
        <div>
          <NavLink
            to="/about-us/authority-leadership/board-agendas-minutes"
            className="back-link1"
          >
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Minutes;
