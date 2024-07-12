import React, { useState } from "react";
import "../styles/Accessibility.css";

const Accessibility = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (section) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const buttonItems = [
    "Wheelchair Services",
    "Family Restrooms",
    "Mother's Room",
    "Ground Transportation Services",
    "Service Animals, Pets, and Pet Relief Area",
  ];

  return (
    <div className="ada-title-vi-container">
      <h1>Accessibility - ADA & Title VI</h1>
      <p>
        Des Moines International Airport is committed to providing a safe and
        positive experience for all travelers. Services are available to support
        those who need it.
      </p>
      <p>
        Handicap access and family restrooms are available including an adult
        changing table at gate C7, a telephone device for the deaf (TDD), and
        heart defibrillator device locations. Guidance on where to find these
        services along with information on service animals, traveling with pets,
        and more can be found below.
      </p>

      <div className="button-links">
        {buttonItems.map((item, index) => (
          <div key={index} className="section">
            <button
              className={openSections.includes(item) ? "active" : ""}
              onClick={() => toggleSection(item)}
            >
              {item}
              <span className="plus-sign">
                {openSections.includes(item) ? "-" : "+"}
              </span>
            </button>
            <div
              className={`section-content ${
                openSections.includes(item) ? "open" : ""
              }`}
            >
              <p>Information about {item.toLowerCase()}...</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Title VI Airport Nondiscrimination Program</h2>
      <p>
        Title VI of the Civil Rights Act of 1964, 42 U.S.C. § 2000d, and the
        Civil Rights Restoration Act of 1987, Pub. L. No. 100-259, 102 Stat. 28,
        prohibits discrimination on the grounds of race, color, national origin,
        gender, age or disability. The Des Moines International Airport is
        committed to ensuring no person shall be excluded from participation in,
        be denied the benefits of, or be otherwise subjected to discrimination
        under any program or activity receiving federal financial assistance.
        The Des Moines Airport Authority further assures every effort will be
        made to ensure nondiscrimination in all of its programs and activities,
        regardless of whether those programs and activities are federally
        funded.
      </p>
      <h3>Resources:</h3>
      <ul>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-49/subtitle-A/part-21"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOT Title VI Regulations at 49 CFR Part 21
          </a>
        </li>
        <li>
          <a href="#">Title II Procedures</a>
        </li>
        <li>
          <a href="#">Title VI Plan</a>
        </li>
        <li>
          <a href="#">Discrimination Complaint Form</a>
        </li>
        <li>
          <a href="#">DBE Program</a>
        </li>
        <li>
          <a href="#">ACDBE Program</a>
        </li>
      </ul>
    </div>
  );
};

export default Accessibility;
