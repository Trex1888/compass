import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";
import mainPlane from "../images/mainPlane.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const plane = document.querySelector(".hero-image-container img");
      plane.style.transform = `translateX(${scrollTop * 2}px) translateY(-${
        scrollTop * 0.5
      }px) rotate(-8deg)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <img src={mainPlane} alt="Main Plane" />
        </div>
        <h1>Discover the Des Moines International Airport</h1>
        <p>
          The Des Moines International Airport has been serving Iowa residents
          and visitors since the early 1930s. Now, over 3 million passengers
          come through the Des Moines Airport annually. With nonstop flights
          from Des Moines to over 30 popular destinations (and counting!), we're
          more connected than ever. Learn more about our legacy, explore travel
          tips and prepare for the experience that awaits when you FLY DSM.
        </p>
        <button
          className="hero-button"
          onClick={() => handleNavigation("/about-us")}
        >
          Learn More
        </button>
      </div>

      <div className="image-gallery">
        <div className="gallery-item">
          <img
            src="https://www.flydsm.com/filesimages/HOME/home3.jpg"
            alt="Preparing to Travel"
          />
          <div className="initial-text">Preparing to Travel</div>
          <div className="overlay">
            <div className="text">
              <h2>Preparing to Travel</h2>
              <p>
                We want you to have an easy, convenient and stress-free travel
                experience at the Des Moines International Airport. Whether
                you're a frequent flier or a first-time traveler, be sure to
                review our travel preparation and security information for a
                smooth and swift arrival at your destination.
              </p>
              <button
                onClick={() => handleNavigation("/traveler-info")}
                className="overlay-button view-details"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <img
            src="https://www.flydsm.com/filesimages/HOME/home5.jpg"
            alt="Airport Amenities"
          />
          <div className="initial-text">Airport Amenities</div>
          <div className="overlay">
            <div className="text">
              <h2>Airport Amenities</h2>
              <p>
                The Des Moines Airport provides a number of amenities and
                services to ensure an accessible and comfortable airport
                experience for all visitors and travelers. Find out more
                information about parking shuttles, wheelchair assistance,
                nursing pods, ATMs and other amenities.
              </p>
              <button
                onClick={() =>
                  handleNavigation("/at-the-airport/services-amenities")
                }
                className="overlay-button view-details"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <img
            src="https://www.flydsm.com/filesimages/HOME/home2.jpg"
            alt="Airport News"
          />
          <div className="initial-text">Airport News</div>
          <div className="overlay">
            <div className="text">
              <h2>Airport News</h2>
              <p>
                View press releases and news articles relating to recent updates
                and events at the Des Moines Airport. Here, you'll be able to
                stay up-to-date with terminal maintenance and construction
                items, dining and shopping additions, health travel advisories
                and more.
              </p>
              <button
                onClick={() => handleNavigation("/traveler-info")}
                className="overlay-button view-details"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
