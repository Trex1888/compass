import React from "react";
import "./Agenda.css";

const Agenda = () => {
  return (
    <div className="board-agendas-minutes-container">
      <div className="board-agendas-minutes-content">
        <h1>Board Agendas and Meeting Minutes</h1>
        <p>
          The Des Moines Airport Authority Board meets monthly. Board meetings
          are open to the public.
        </p>
        <div className="subscribe-section">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="minutes-agenda">
          <h2>Minutes & Agenda</h2>
          <div className="minutes-agenda-item">
            <h3>May 14, 2024, Meeting Minutes</h3>
            <p>June 11, 2024</p>
            <button href="#">Learn More →</button>
          </div>
          <div className="minutes-agenda-item">
            <h3>
              June 11, 2024, Des Moines Airport Authority Board Meeting Agenda
            </h3>
            <p>June 7, 2024</p>
            <button href="#">Learn More →</button>
          </div>
          <div className="minutes-agenda-item">
            <h3>March 12, 2024, Meeting Minutes</h3>
            <p>April 15, 2024</p>
            <button href="#">Learn More →</button>
          </div>
          <div className="minutes-agenda-item">
            <h3>
              April 9, 2024, Des Moines Airport Authority Board Meeting Agenda
            </h3>
            <p>April 5, 2024</p>
            <button href="#">Learn More →</button>
          </div>
          <div className="minutes-agenda-item">
            <h3>February 13, 2024, Meeting Minutes</h3>
            <p>March 12, 2024</p>
            <button href="#">Learn More →</button>
          </div>
          <button className="load-more-button">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
