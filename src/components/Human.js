import React from "react";
import "../styles/Human.css";

const Human = () => {
  return (
    <div className="about-header">
      <h1>Human Trafficking</h1>
      <p>
        The Des Moines Airport Authority is committed to supporting the fight
        against human trafficking. As an organization, we have signed the
        Transportation Leaders Against Human Trafficking pledge with the U.S.
        Department of Transportation while also joining the U.S. Department of
        Homeland Security's Blue Lightning Initiative. These programs are aimed
        at educating transportation employees and the traveling public to
        recognize and report possible instances of human trafficking.
      </p>
      <h2>Blue Lightning Initiative</h2>
      <p>
        A program of DOT and DHS' Blue Campaign and Customs and Border
        Protection, the Blue Lightning Initiative trains aviation personnel to
        recognize and respond to potential human trafficking victims through
        in-flight and on-the-ground reporting mechanisms. The Des Moines Airport
        Authority staff is a proud member of the Blue Lightning Initiative.
      </p>
      <h3 style={{ color: "#be5a0e", fontWeight: "bold" }}>
        Recognizing & Reporting Human Trafficking
      </h3>
      <p>
        If you observe the following{" "}
        <strong>indicators of suspected human trafficking</strong> activity, you
        should report them immediately.
      </p>
      <h3>Indicators of Human Trafficking</h3>
      <ul>
        <li>
          Individual without control of their travel identification and/or
          documents
        </li>
        <li>
          Individual with no freedom of movement and isolated social interaction
        </li>
        <li>
          Individual with difficulty articulating reasonable/logical travel
          plans
        </li>
        <li>A non-genuine relationship; particularly parent/guardian-child</li>
      </ul>
      <p>
        To report possible human trafficking 24 hours a day, 7 days a week call
        1-866-347-2423 (U.S./Canada). For international reporting, call
        1-802-872-6199.
      </p>
      <p>In the event of an emergency, call 911.</p>
      <div className="human-trafficking-logos">
        <img
          src="https://www.flydsm.com/filesimages/TRAVELER%20INFO/TLAHT%20Logo.jpg"
          alt="Put the Brakes on Human Trafficking"
        />
        <img
          src="https://www.flydsm.com/filesimages/TRAVELER%20INFO/BLI%20logo%20-%20website%20use%20only.png"
          alt="U.S. Department of Homeland Security"
        />
      </div>
      <p className="note">
        The United States Department of Homeland Security and the United States
        Department of Transportation are Federal agencies of the United States
        Government and are separate and distinct entities from this Airport.
      </p>
    </div>
  );
};

export default Human;
