import React, { useState } from "react";
import "../styles/BadgeFaqs.css";

const BadgeFaqs = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (section) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const faqs = [
    "My badge is damaged and has stopped working, what should I do?",
    "What should I do if my badge is lost or stolen?",
    "My badge expires soon. How do I renew my badge?",
    "I have an active badge but forgot it at home. Can I be escorted inside the restricted area so that I do not miss work?",
    "How will I know when I have passed my security clearance?",
    "How do I get access added to my badge for an area it does not currently allow me to go?",
    "How do I get Escort or Non-Movement privileges added to my badge?",
    "Where should I park when I come to the airport for badging appointments?",
  ];

  return (
    <div>
      <div className="about-header">
        <h1>Badging Frequently Asked Questions</h1>
        <div className="faq-links">
          {faqs.map((faq, index) => (
            <div key={index} className="section">
              <button
                className={openSections.includes(faq) ? "active" : ""}
                onClick={() => toggleSection(faq)}
              >
                {faq}
                <span className="plus-sign">
                  {openSections.includes(faq) ? "-" : "+"}
                </span>
              </button>
              <div
                className={`section-content ${
                  openSections.includes(faq) ? "open" : ""
                }`}
              >
                <p>
                  {/* Replace with the actual content for each FAQ */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgeFaqs;
