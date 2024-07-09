import React from "react";
import { useParams, NavLink } from "react-router-dom";
import "../styles/Agenda1.css";

const Agenda1 = () => {
  const { title } = useParams();

  const newsData = {
    "june-11-2024-des-moines-airport-authority-board-meeting-agenda": {
      title: "June 11, 2024, Des Moines Airport Authority Board Meeting Agenda",
      date: "June 7, 2024",
    },
    "april-9-2024-des-moines-airport-authority-board-meeting-agenda": {
      title: "April 9, 2024, Des Moines Airport Authority Board Meeting Agenda",
      date: "April 5, 2024",
    },
    "march-1-2024-des-moines-airport-authority-board-meeting-agenda": {
      title: "March 1, 2024, Des Moines Airport Authority Board Meeting Agenda",
      date: "March 1, 2024",
    },
    "january-15-2024-des-moines-airport-authority-board-meeting-agenda": {
      title:
        "January 15, 2024, Des Moines Airport Authority Board Meeting Agenda",
      date: "January 10, 2024",
    },
  };

  const newsItem = newsData[title];

  if (!newsItem) {
    return <div>Agenda item not found</div>;
  }

  return (
    <div className="traffic1-stats-container">
      <div className="traffic1-stats-content">
        <h1>{newsItem.title}</h1>
        <p>{newsItem.date}</p>
        <button className="stats1-button">
          {newsItem.title.split(" ")[0]} {newsItem.title.split(" ")[1]}{" "}
          {newsItem.title.includes("Agenda") ? "Agenda" : ""}
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

export default Agenda1;
