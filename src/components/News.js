import React, { useState } from "react";
import "./News.css";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const newsData = {
    Events: [
      {
        title: "Event 1",
        date: "January 1, 2022",
        description: "Description for Event 1",
      },
      {
        title: "Event 2",
        date: "February 1, 2022",
        description: "Description for Event 2",
      },
      {
        title: "Event 3",
        date: "March 1, 2022",
        description: "Description for Event 3",
      },
      {
        title: "Event 4",
        date: "April 1, 2022",
        description: "Description for Event 4",
      },
      {
        title: "Event 5",
        date: "May 1, 2022",
        description: "Description for Event 5",
      },
      {
        title: "Event 6",
        date: "June 1, 2022",
        description: "Description for Event 6",
      },
    ],
    "Passenger Statistics": [
      {
        title: "Passenger Statistics 1",
        date: "January 1, 2022",
        description: "Description for Passenger Statistics 1",
      },
      {
        title: "Passenger Statistics 2",
        date: "February 1, 2022",
        description: "Description for Passenger Statistics 2",
      },
      {
        title: "Passenger Statistics 3",
        date: "March 1, 2022",
        description: "Description for Passenger Statistics 3",
      },
      {
        title: "Passenger Statistics 4",
        date: "April 1, 2022",
        description: "Description for Passenger Statistics 4",
      },
      {
        title: "Passenger Statistics 5",
        date: "May 1, 2022",
        description: "Description for Passenger Statistics 5",
      },
      {
        title: "Passenger Statistics 6",
        date: "June 1, 2022",
        description: "Description for Passenger Statistics 6",
      },
    ],
    "Press Releases": [
      {
        title: "Press Release 1",
        date: "January 1, 2022",
        description: "Description for Press Release 1",
      },
      {
        title: "Press Release 2",
        date: "February 1, 2022",
        description: "Description for Press Release 2",
      },
      {
        title: "Press Release 3",
        date: "March 1, 2022",
        description: "Description for Press Release 3",
      },
      {
        title: "Press Release 4",
        date: "April 1, 2022",
        description: "Description for Press Release 4",
      },
      {
        title: "Press Release 5",
        date: "May 1, 2022",
        description: "Description for Press Release 5",
      },
      {
        title: "Press Release 6",
        date: "June 1, 2022",
        description: "Description for Press Release 6",
      },
    ],
  };

  const allNews = [
    ...newsData.Events,
    ...newsData["Passenger Statistics"],
    ...newsData["Press Releases"],
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredNews = selectedCategory ? newsData[selectedCategory] : allNews;

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
            <img
              src={`/images/${newsItem.title
                .toLowerCase()
                .replace(/ /g, "-")}.jpg`}
              alt={newsItem.title}
            />
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
