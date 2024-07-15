import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/Agenda.css";

const Agenda = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleItems, setVisibleItems] = useState(4);
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setVisibleItems(4);
  };

  const handleNavigation = (title, category) => {
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    const route = category === "Agenda" ? "agenda" : "minutes";
    navigate(
      `/about-us/authority-leadership/board-agendas-minutes/${route}/${slug}`
    );
    window.scrollTo(0, 0);
  };

  const agendaItems = [
    {
      title: "June 11, 2024, Des Moines Airport Authority Board Meeting Agenda",
      date: "June 7, 2024",
      category: "Agenda",
    },
    {
      title: "May 14, 2024, Meeting Minutes",
      date: "June 11, 2024",
      category: "Minutes",
    },
    {
      title: "April 9, 2024, Des Moines Airport Authority Board Meeting Agenda",
      date: "April 5, 2024",
      category: "Agenda",
    },
    {
      title: "March 1, 2024, Des Moines Airport Authority Board Meeting Agenda",
      date: "March 1, 2024",
      category: "Agenda",
    },
    {
      title: "February 13, 2024, Meeting Minutes",
      date: "March 12, 2024",
      category: "Minutes",
    },
    {
      title:
        "January 15, 2024, Des Moines Airport Authority Board Meeting Agenda",
      date: "January 10, 2024",
      category: "Agenda",
    },
    {
      title: "December 12, 2023, Meeting Minutes",
      date: "January 5, 2024",
      category: "Minutes",
    },
    {
      title: "October 10, 2023, Meeting Minutes",
      date: "October 15, 2023",
      category: "Minutes",
    },
  ];

  const filteredItems = selectedCategory
    ? agendaItems.filter((item) => item.category === selectedCategory)
    : agendaItems;

  const visibleFilteredItems = filteredItems.slice(0, visibleItems);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  return (
    <div className="board-agendas-minutes-container">
      <div className="board-agendas-minutes-content">
        <div className="something">
          <h1>Board Agendas and Meeting Minutes</h1>
          <p>
            The Des Moines Airport Authority Board meets monthly. Board meetings
            are open to the public.
          </p>
        </div>
        <br />
        <h3>
          Sign up for board meeting agenda and meeting minute notifications.
        </h3>
        <div className="agenda-signup">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="board-container">
          <div className="agenda-category-container">
            <h1 className="agenda-title">Minutes & Agenda</h1>
            <select
              className="agenda-category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Category</option>
              <option value="Agenda">Agendas</option>
              <option value="Minutes">Minutes</option>
            </select>
          </div>
          {visibleFilteredItems.map((item, index) => (
            <div
              className="minutes-agenda-item"
              key={index}
              onClick={() => handleNavigation(item.title, item.category)}
              style={{ cursor: "pointer" }}
            >
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <NavLink
                className="learn-more-link"
                to={`/about-us/authority-leadership/board-agendas-minutes/${item.category.toLowerCase()}/${item.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "")}`}
              >
                Learn More <span>→</span>
              </NavLink>
            </div>
          ))}
        </div>{" "}
        {visibleItems < filteredItems.length && (
          <button className="load-more-button" onClick={loadMoreItems}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Agenda;
