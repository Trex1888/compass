import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/News.css";
import eventsImage from "../images/news1.jpg";
import pressImage from "../images/news.jpg";
import statsImage from "../images/minutes.jpg";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const newsData = {
    Events: [
      {
        title: "Latest Event",
        date: "January 12, 2024",
        image: eventsImage,
      },
    ],
    "Passenger Statistics": [
      {
        title: "June 2024 Airport Traffic Statistics",
        date: "June 1, 2024",
        image: statsImage,
      },
      {
        title: "May 2024 Airport Traffic Statistics",
        date: "May 1, 2024",
        image: statsImage,
      },
      {
        title: "April 2024 Airport Traffic Statistics",
        date: "April 1, 2024",
        image: statsImage,
      },
      {
        title: "March 2024 Airport Traffic Statistics",
        date: "March 1, 2024",
        image: statsImage,
      },
      {
        title: "February 2024 Airport Traffic Statistics",
        date: "February 1, 2024",
        image: statsImage,
      },
      {
        title: "January 2024 Airport Traffic Statistics",
        date: "January 1, 2024",
        image: statsImage,
      },
    ],
    "Press Releases": [
      {
        title: "New Terminal Expansion Announced",
        date: "June 1, 2024",
        image: pressImage,
      },
      {
        title: "Record-Breaking Passenger Numbers",
        date: "April 15, 2024",
        image: pressImage,
      },
      {
        title: "Airport Receives Environmental Excellence Award",
        date: "February 28, 2024",
        image: pressImage,
      },
      {
        title: "New Nonstop Flights to Europe",
        date: "December 5, 2023",
        image: pressImage,
      },
      {
        title: "Autumn Travel Tips from DSM Airport",
        date: "October 20, 2023",
        image: pressImage,
      },
      {
        title: "Summer Travel Advisory",
        date: "June 30, 2023",
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

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleNewsItemClick = (title) => {
    const slug = createSlug(title);
    navigate(`/about-us/news/${slug}`);
    window.scrollTo(0, 0);
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
        <div className="p-strong">
          <p>
            <strong>Sign Up for Content Notifications</strong>
          </p>
        </div>
        <div className="newsletter-signup">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="news-category-container">
        <h1 className="news-title">News</h1>
        <select
          className="news-category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="" className="placeholder-option">
            Category
          </option>
          <option value="Events">Events</option>
          <option value="Passenger Statistics">Passenger Statistics</option>
          <option value="Press Releases">Press Releases</option>
        </select>
      </div>
      <div className="news-items">
        {filteredNews.map((newsItem, index) => (
          <div
            className="news-item"
            key={index}
            onClick={() => handleNewsItemClick(newsItem.title)}
            style={{ cursor: "pointer" }}
          >
            <img src={newsItem.image} alt={newsItem.title} />
            <h2>{newsItem.title}</h2>
            <p>{newsItem.date}</p>
            <NavLink
              to={`/about-us/news/${createSlug(newsItem.title)}`}
              className="learn-more-link"
            >
              Learn More <span>→</span>
            </NavLink>
          </div>
        ))}
      </div>
      <button className="load-more">Load More</button>
    </div>
  );
};

export default News;
