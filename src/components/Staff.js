import React from "react";
import "./Staff.css";

const Staff = () => {
  return (
    <div className="staff-container">
      <div className="staff-content">
        <h1>Airport Leadership</h1>
        <h2>Des Moines Airport Authority Directors</h2>
        <div className="staff-members">
          <div className="staff-member">
            <img src="/images/kevin-foley.jpg" alt="Kevin Foley" />
            <h3>Kevin Foley</h3>
            <p>Executive Director</p>
          </div>
          <div className="staff-member">
            <img src="/images/brian-mulcahy.jpg" alt="Brian Mulcahy" />
            <h3>Brian Mulcahy</h3>
            <p>Assistant Executive Director</p>
          </div>
          <div className="staff-member">
            <img src="/images/bryan-belt.jpg" alt="Bryan Belt" />
            <h3>Bryan Belt</h3>
            <p>Director of Engineering & Planning</p>
          </div>
          <div className="staff-member">
            <img src="/images/clinton-torp.jpg" alt="Clinton Torp" />
            <h3>Clinton Torp</h3>
            <p>Director of Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
