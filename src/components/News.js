import React, { useState } from "react";
import "./News.css";
import eventsImage from "../images/news1.jpg";
import pressImage from "../images/news.jpg";
import statsImage from "../images/minutes.jpg";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const newsData = {
    Events: [
      {
        title: "Event 1",
        date: "January 1, 2022",
        description: "Description for Event 1",
        image: eventsImage,
      },
      {
        title: "Event 2",
        date: "February 1, 2022",
        description: "Description for Event 2",
        image: eventsImage,
      },
      {
        title: "Event 3",
        date: "March 1, 2022",
        description: "Description for Event 3",
        image: eventsImage,
      },
      {
        title: "Event 4",
        date: "April 1, 2022",
        description: "Description for Event 4",
        image: eventsImage,
      },
      {
        title: "Event 5",
        date: "May 1, 2022",
        description: "Description for Event 5",
        image: eventsImage,
      },
      {
        title: "Event 6",
        date: "June 1, 2022",
        description: "Description for Event 6",
        image: eventsImage,
      },
    ],
    "Passenger Statistics": [
      {
        title: "Passenger Statistics 1",
        date: "January 1, 2022",
        description: "Description for Passenger Statistics 1",
        image: statsImage,
      },
      {
        title: "Passenger Statistics 2",
        date: "February 1, 2022",
        description: "Description for Passenger Statistics 2",
        image: statsImage,
      },
      {
        title: "Passenger Statistics 3",
        date: "March 1, 2022",
        description: "Description for Passenger Statistics 3",
        image: statsImage,
      },
      {
        title: "Passenger Statistics 4",
        date: "April 1, 2022",
        description: "Description for Passenger Statistics 4",
        image: statsImage,
      },
      {
        title: "Passenger Statistics 5",
        date: "May 1, 2022",
        description: "Description for Passenger Statistics 5",
        image: statsImage,
      },
      {
        title: "Passenger Statistics 6",
        date: "June 1, 2022",
        description: "Description for Passenger Statistics 6",
        image: statsImage,
      },
    ],
    "Press Releases": [
      {
        title: "Press Release 1",
        date: "January 1, 2022",
        description: "Description for Press Release 1",
        image: pressImage,
      },
      {
        title: "Press Release 2",
        date: "February 1, 2022",
        description: "Description for Press Release 2",
        image: pressImage,
      },
      {
        title: "Press Release 3",
        date: "March 1, 2022",
        description: "Description for Press Release 3",
        image: pressImage,
      },
      {
        title: "Press Release 4",
        date: "April 1, 2022",
        description: "Description for Press Release 4",
        image: pressImage,
      },
      {
        title: "Press Release 5",
        date: "May 1, 2022",
        description: "Description for Press Release 5",
        image: pressImage,
      },
      {
        title: "Press Release 6",
        date: "June 1, 2022",
        description: "Description for Press Release 6",
        image: pressImage,
      },
    ],
  };

  const allNews = [
    ...newsData.Events,
    ...newsData["Passenger Statistics"],
    ...newsData["Press Releases"],
  ];

  const filteredNews =
    selectedCategory === "" ? allNews : newsData[selectedCategory];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="news-container">
      <div className="news-header">
        <h1>News & Statistics</h1>
        <p>
          Des Moines International Airport is growing, adapting, and changing to
          meet the evolving needs of the traveling public. Learn about recent
          announcements and statistical reports by searching our News catalog
          below.
        </p>
        <p>
          Sign-up for email notification to catch the latest news and
          announcements, enplanement statistics, and events.
        </p>
        <div className="newsletter-signup">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="news-category">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Category</option>
          <option value="Events">Events</option>
          <option value="Passenger Statistics">Passenger Statistics</option>
          <option value="Press Releases">Press Releases</option>
        </select>
      </div>
      <div className="news-items">
        {filteredNews.map((newsItem, index) => (
          <div className="news-item" key={index}>
            <img src={newsItem.image} alt={newsItem.title} />
            <h2>{newsItem.title}</h2>
            <p>{newsItem.date}</p>
            <p>{newsItem.description}</p>
            <button href="#">Learn More →</button>
          </div>
        ))}
      </div>
      <button className="load-more">Load More</button>
    </div>
  );
};

export default News;
