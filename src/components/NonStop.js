import React, { useState } from "react";
import "../styles/NonStop.css";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import Hero2 from "./Hero2";

const NonStop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 5 ? prevIndex + 1 : prevIndex
    );
  };

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

  return (
    <div>
      <div className="img-container2">
        <img
          src="https://www.flydsm.com/filesimages/FLIGHTS%20AND%20TRAVEL/non-stop-destinations/NonStopMap.png"
          alt=""
        />
      </div>
      <div className="hero1-container">
        <div className="nonHero">
          {" "}
          <h1>NonStop Flights</h1>
        </div>{" "}
        <div className="carousel-container">
          <button
            className="arrow left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <CgArrowLongLeft />
          </button>
          <div className="carousel" style={{ marginTop: "-50px" }}>
            {images.map((image, index) => (
              <div className="carousel-item" key={index}>
                <img src={image.src} alt={image.alt} />
                <br />
                <p>{image.alt}</p>
                <div className="overlay">
                  <h3>Book a Flight</h3>
                  <a
                    href={image.airlines[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    American
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
        {/* <div className="carousel-container">
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
        </div> */}
      </div>
      <Hero2 />
    </div>
  );
};

export default NonStop;
