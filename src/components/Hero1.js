import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero1.css";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

const images = [
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0025_austin-texas.jpg",
    alt: "Austin, TX",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0022_charlotte-north-carolina.jpg",
    alt: "Charlotte, NC",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0009_ord-chicago-illinois.jpg",
    alt: "Chicago, IL",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0020_denver-colorado.jpg",
    alt: "Denver, CO",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0025_austin-texas.jpg",
    alt: "Dallas, TX",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0000_eglin_afb.jpg",
    alt: "Destin, FL",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0020_denver-colorado.jpg",
    alt: "Boston, MA",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0017_las-vegas-nevada.jpg",
    alt: "Las Vegas, NV",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/detriot-michigan.jpg",
    alt: "Detroit, MI",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0011_miami-florida.jpg",
    alt: "Miami, FL",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0029_Fort_Lauderdale.jpg",
    alt: "Fort Lauderdale, FL",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0018_houston-texas.jpg",
    alt: "Houston, TX",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0019_dallas-texas.jpg",
    alt: "Los Angeles, CA",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0025_austin-texas.jpg",
    alt: "St. Louis, MO",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0022_charlotte-north-carolina.jpg",
    alt: "St. Petersburg, FL",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0009_ord-chicago-illinois.jpg",
    alt: "Washington D.C.",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0020_denver-colorado.jpg",
    alt: "Orange County, CA",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
  {
    src: "https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/non-stop_0019_dallas-texas.jpg",
    alt: "Newark, NJ",
    airlines: ["https://www.aa.com/homePage.do", "https://www.delta.com/"],
  },
];

const Hero1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 5 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="hero1-container">
      <h1 style={{ textDecoration: "none", marginTop: "50px" }}>
        NonStop Flights
      </h1>
      <Link
        style={{ textDecoration: "none", marginBottom: "50px" }}
        to="/flights-and-travel/nonstop-destinations"
      >
        <h3 style={{ textDecoration: "none", marginBottom: "50px" }}>
          View All
        </h3>
      </Link>
      <div className="carousel-container">
        <button
          className="arrow left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <CgArrowLongLeft />
        </button>
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * (250 + 30)}px)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image.src} alt={image.alt} />
              <p>{image.alt}</p>
              <div className="overlay">
                <h3>Book a Flight</h3>
                <a
                  href={image.airlines[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  American Airlines
                </a>
                <a
                  href={image.airlines[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delta
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="arrow right"
          onClick={handleNext}
          disabled={currentIndex >= images.length - 5}
        >
          <CgArrowLongRight />
        </button>
      </div>
    </div>
  );
};

export default Hero1;
