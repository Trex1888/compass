import { Link } from "react-router-dom";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";

const Header = ({ backgroundImage }) => {
  return (
    <div
      className="header-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className="top-nav">
        <ul>
          <li>
            <Link to="/at-the-airport/shuttle-tracking">Shuttle Tracking</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/about-us/careers">Careers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <IoIosSearch className="search-icon" />
          </li>
        </ul>
      </nav>

      <nav className="main-nav">
        <ul>
          <li className="logo-title">
            <Link to="/" className="header-link">
              <div className="header-title">
                <h1>DES MOINES</h1>
                <h2>International Airport</h2>
              </div>
              <img
                src="../images/plane.jpg"
                alt="Plane Logo"
                className="header-logo"
              />
            </Link>
          </li>
          <li>
            <Link to="/flights-and-travel">Flights and Travel</Link>
          </li>
          <li>
            <Link to="/traveler-info">Traveler Info</Link>
          </li>
          <li>
            <Link to="/at-the-airport">At The Airport</Link>
          </li>
          <li>
            <Link to="/airport-business">Airport Business</Link>
          </li>
          <li>
            <Link to="/lift-dsm">Lift DSM</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

// background-color: rgba(0, 0, 31, 0.5);

// .header-container {
//   font: 400 16px / 1.5 "Montserrat", sans-serif;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: rgba(0, 0, 31, 0.5);
//   padding: 20px;
//   height: 360px;
//   clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
//   margin-top: -50px;
// }
