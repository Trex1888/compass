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
            <img
              src="https://www.flydsm.com/filesimages/ABOUT%20US/Kevin%20Foley%20-%20headshot%2010.2019.jpg"
              alt="Kevin Foley"
            />
            <h3>Kevin Foley</h3>
            <p>Executive Director</p>
          </div>

          <div className="staff-member">
            <img
              src="https://www.flydsm.com/filesimages/ABOUT%20US/Brian%20Mulcahy%20-%20headshot%2010.2019.jpg"
              alt="Brian Mulcahy"
            />
            <h3>Brian Mulcahy</h3>
            <p>Assistant Executive Director</p>
          </div>

          <div className="staff-member">
            <img
              src="https://www.flydsm.com/filesimages/ABOUT%20US/Bryan%20Belt%20-%20headshot%2010.2019.jpg"
              alt="Bryan Belt"
            />
            <h3>Bryan Belt</h3>
            <p>Director of Engineering & Planning</p>
          </div>

          <div className="staff-member">
            <img
              src="https://www.flydsm.com/filesimages/ABOUT%20US/Clint%20Torp%20-%20headshot%2010.2019.jpg"
              alt="Clinton Torp"
            />
            <h3>Clinton Torp</h3>
            <p>Director of Operations</p>
          </div>

          <div className="staff-member">
            <img
              src="https://www.flydsm.com/filesimages/ABOUT%20US/Ni%20Wagner%20-%20resized.jpg"
              alt="Ni Wagner"
            />
            <h3>Ni Wagner</h3>
            <p>Director of Finance & Administration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
